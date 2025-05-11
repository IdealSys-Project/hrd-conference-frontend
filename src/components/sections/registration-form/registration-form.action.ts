import { useRegistrationFormStore } from '@/shared/stores/useRegistrationFormStore';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { get, pick } from 'lodash';
import toast from 'react-hot-toast';

export interface RegistrationFormValues {
  fullName: string;
  email: string;
  company: string;
  jobTitle: string;
  contactNumber: string;
  promoCode: string;
}

export const useRegistrationForm = () => {
  const registerMutation = useMutation({
    mutationFn: async (data: RegistrationFormValues) => {
      const response = await axios.post('/api/registration-submissions', data);
      return response.data;
    },
  });

  const store = useRegistrationFormStore();

  const formik = useFormik<RegistrationFormValues>({
    initialValues: pick(store, [
      'fullName',
      'email',
      'company',
      'jobTitle',
      'contactNumber',
      'promoCode',
    ]),
    enableReinitialize: true,
    validateOnChange: true,
    validationSchema: Yup.object({
      fullName: Yup.string().required('Please provide your full name.'),
      email: Yup.string()
        .email('The email address entered is invalid.')
        .required('An email address is required.'),
      company: Yup.string().required('Please specify your company name.'),
      jobTitle: Yup.string().required('Kindly enter your job title.'),
      contactNumber: Yup.string().required('A contact number is required.'),
      promoCode: Yup.string(),
    }),
    onSubmit: async (values, formikHelpers) => {
      try {
        await registerMutation.mutateAsync(values);
        toast.success('Thank you for your registration! We will contact you soon.', {
          icon: '✅',
          duration: 5000,
          style: {
            borderRadius: '8px',
            background: '#fff',
            color: '#333',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            padding: '12px 20px',
            fontSize: '15px',
          },
        });
        store.resetForm();
        formikHelpers.resetForm();
      } catch (error) {
        console.error('Registration failed:', error);
        const errorMessage = Array.isArray(get(error, 'response.data.error.message'))
          ? get(error, 'response.data.error.message.0', get(error, 'message', ''))
          : get(error, 'response.data.error.message', get(error, 'message', ''));

        toast.error(errorMessage, {
          icon: '❌',
          duration: 5000,
          style: {
            borderRadius: '8px',
            background: '#fff',
            color: '#333',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            padding: '12px 20px',
            fontSize: '15px',
          },
        });
      }
    },
  });

  return {
    formik,
    isSubmitting: registerMutation.isPending,
  };
};
