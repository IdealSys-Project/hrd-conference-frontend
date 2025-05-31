import { useState, useCallback, useEffect } from 'react';
import { doc, getDoc, updateDoc, increment, serverTimestamp, setLogLevel } from 'firebase/firestore';
import { db } from './config';

// Optional: Reduce Firebase logs in production
if (process.env.NODE_ENV === 'production') {
  setLogLevel('error');
}

export type AnalyticsData = {
  today: number;
  yesterday: number;
  thisMonth: number;
  thisYear: number;
  lastResetDate?: string;
  lastUpdated?: any;
};

const COLLECTION_NAME = 'hrd_conference_traffic';

/**
 * Logs a page view and updates analytics counters
 */
export const logPageView = async (): Promise<void> => {
  try {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const docRef = doc(db, COLLECTION_NAME, 'global');
    const docSnap = await getDoc(docRef);

    // Check and reset daily counter if needed
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data.lastResetDate !== today) {
        await updateDoc(docRef, {
          yesterday: data.today || 0,
          today: 0,
          lastResetDate: today,
          lastUpdated: serverTimestamp()
        } as Record<string, any>);
      }
    }

    // Log the page view
    const updateData: Record<string, any> = {
      today: increment(1),
      thisMonth: increment(1),
      thisYear: increment(1),
      lastUpdated: serverTimestamp()
    };

    // Set lastResetDate from document or use today's date
    const docData = docSnap.data();
    const finalUpdateData = {
      ...updateData,
      lastResetDate: docData?.lastResetDate || today
    };

    await updateDoc(docRef, finalUpdateData);

  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error logging page view:', error);
    }
  }
};

/**
 * Fetches the current analytics data
 */
export const fetchAnalytics = async (): Promise<AnalyticsData | null> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, 'global');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        today: data.today || 0,
        yesterday: data.yesterday || 0,
        thisMonth: data.thisMonth || 0,
        thisYear: data.thisYear || 0,
        lastResetDate: data.lastResetDate,
        lastUpdated: data.lastUpdated
      };
    }
    return null;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching analytics:', error);
    }
    throw new Error('Failed to load analytics');
  }
};

/**
 * Custom hook for managing analytics state and UI
 */
// Track if page view has been logged in the current session
let pageViewLogged = false;

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const loadAnalytics = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchAnalytics();
      setAnalytics(data);
      setError(null);
    } catch (err) {
      setError('Failed to load analytics');
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error in useAnalytics:', err);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleAnalytics = useCallback(() => {
    setShowAnalytics(prev => !prev);
  }, []);

  useEffect(() => {
    // Only log page view once per session
    if (!pageViewLogged) {
      logPageView();
      pageViewLogged = true;
    }
    
    // Load analytics when showing the panel
    if (showAnalytics) {
      loadAnalytics();
    }
  }, [showAnalytics, loadAnalytics]);

  return {
    analytics,
    loading,
    error,
    showAnalytics,
    toggleAnalytics,
    refresh: loadAnalytics
  };
};
