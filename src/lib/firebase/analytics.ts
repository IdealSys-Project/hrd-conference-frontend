import { useState, useCallback, useEffect } from 'react';
import { 
  doc, 
  getDoc, 
  setDoc, 
  increment, 
  serverTimestamp, 
  Timestamp 
} from 'firebase/firestore';
import { db } from './config';

export type AnalyticsData = {
  today: number;
  yesterday: number;
  thisMonth: number;
  thisYear: number;
  lastResetDate: Timestamp | string;
  lastUpdated: Timestamp | string;
};

const COLLECTION_NAME = 'hrd_conference_traffic';

export const logPageView = async (): Promise<void> => {
  try {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const docRef = doc(db, COLLECTION_NAME, 'global');
    
    // Get current data
    const docSnap = await getDoc(docRef);
    const data = docSnap.exists() ? docSnap.data() : null;
    const lastReset = data?.lastResetDate || today;
    
    const isNewDay = lastReset !== today;
    const isFirstDayOfMonth = now.getDate() === 1;
    
    // All updates in one place
    const updateData: Record<string, any> = {
      today: isNewDay ? 1 : increment(1),
      thisYear: increment(1),
      lastUpdated: serverTimestamp(),
      
      ...(isNewDay && {
        yesterday: data?.today || 0,
        lastResetDate: serverTimestamp(),
        thisMonth: isFirstDayOfMonth ? 1 : increment(1)
      }),
      
      // Only update thisMonth if not a new day
      ...(!isNewDay && {
        thisMonth: increment(1)
      })
    };
    
    // Update document
    await setDoc(docRef, updateData, { merge: true });
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
    if (!pageViewLogged) {
      logPageView();
      pageViewLogged = true;
    }
    
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
