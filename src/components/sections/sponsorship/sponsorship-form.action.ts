import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { get, pick } from 'lodash';
import useSponsorshipFormStore from '@/shared/stores/useSponsorshipFormStore';

export const useSponsorshipAction = () => {
  const store = useSponsorshipFormStore();

  const registerMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch('/api/sponsorship-inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const responseData = await res.json();
      return responseData;
    },
  });

  const formik = useFormik({
    initialValues: pick(store, [
      'fullName',
      'email',
      'company',
      'jobTitle',
      'contactNumber',
      'interest',
    ]),
    enableReinitialize: true,
    validateOnChange: true,
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required('Full Name is required')
        .min(3, 'Full Name must be at least 3 characters'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      company: Yup.string().required('Company is required'),
      jobTitle: Yup.string().required('Job Title is required'),
      contactNumber: Yup.string()
        .matches(/^[0-9]+$/, 'Contact Number must contain only numbers.')
        .required('Contact Number is required.'),
      interest: Yup.string().required('Interest is required'),
    }),
    onSubmit: async (values, formikHelpers) => {
      try {
        await registerMutation.mutateAsync(values);
        toast.success('Thank you for your interest! We will contact you soon.', {
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
