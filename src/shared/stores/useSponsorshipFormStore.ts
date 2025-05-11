import { create } from 'zustand';

interface FormState {
  fullName: string;
  email: string;
  company: string;
  jobTitle: string;
  contactNumber: string;
  interest: string;
  setFormData: (newData: Partial<FormState>) => void;
  resetForm: () => void;
}

const useSponsorshipFormStore = create<FormState>(set => ({
  fullName: '',
  email: '',
  company: '',
  jobTitle: '',
  contactNumber: '',
  interest: '',
  setFormData: newData => set(state => ({ ...state, ...newData })),
  resetForm: () =>
    set({
      fullName: '',
      email: '',
      company: '',
      jobTitle: '',
      contactNumber: '',
      interest: '',
    }),
}));

export default useSponsorshipFormStore;
