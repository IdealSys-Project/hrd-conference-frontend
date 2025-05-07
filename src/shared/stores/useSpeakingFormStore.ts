import { create } from 'zustand';

interface SpeakingFormState {
  fullName: string;
  email: string;
  company: string;
  jobTitle: string;
  contactNumber: string;
  resetForm: () => void;
}

export const useSpeakingFormStore = create<SpeakingFormState>(set => ({
  fullName: '',
  email: '',
  company: '',
  jobTitle: '',
  contactNumber: '',
  resetForm: () =>
    set({
      fullName: '',
      email: '',
      company: '',
      jobTitle: '',
      contactNumber: '',
    }),
}));
