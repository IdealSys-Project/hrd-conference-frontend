import { create } from 'zustand';

interface RegistrationFormState {
  fullName: string;
  email: string;
  company: string;
  jobTitle: string;
  contactNumber: string;
  promoCode: string;
  updateField: (name: string, value: string) => void;
  resetForm: () => void;
}

export const useRegistrationFormStore = create<RegistrationFormState>(set => ({
  fullName: '',
  email: '',
  company: '',
  jobTitle: '',
  contactNumber: '',
  promoCode: '',
  updateField: (name, value) =>
    set(state => ({
      ...state,
      [name]: value,
    })),
  resetForm: () =>
    set({
      fullName: '',
      email: '',
      company: '',
      jobTitle: '',
      contactNumber: '',
      promoCode: '',
    }),
}));
