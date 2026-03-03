import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxios from '../../../hooks/useAxios';

export default function JobPostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const api = useAxios();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    if (!data.image[0]) return;

    setLoading(true);

    try {
      // 1️⃣ Upload image to imgbb
      const formData = new FormData();
      formData.append('image', data.image[0]);

      const imgbbApiKey = import.meta.env.VITE_IMAGE_BB_API_KEY; // store in .env
      console.log(imgbbApiKey);
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const imageUrl = res.data.data.url;
      console.log('Uploaded Image URL:', imageUrl);

      // 2️⃣ Prepare job post data
      const jobPost = {
        title: data.title,
        company: data.company,
        location: data.location,
        category: data.category,
        description: data.description,
        salary_range: data.salary_range,
        job_type: data.job_type,
        image: {
          url: imageUrl,
          public_id: null,
        },
      };

      console.log('Job Post Data:', jobPost);

      // 3️⃣ Send to your backend API
      await api.post('/jobs', jobPost);

      alert('Job posted successfully!');
      reset();
    } catch (error) {
      console.error('Error posting job:', error);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">Create Job Post</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Job Title */}
          <input
            type="text"
            placeholder="Job Title"
            {...register('title', { required: 'Job title is required' })}
            className="w-full px-4 py-2 border rounded-lg"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}

          {/* Company */}
          <input
            type="text"
            placeholder="Company"
            {...register('company', { required: 'Company name is required' })}
            className="w-full px-4 py-2 border rounded-lg"
          />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}

          {/* Location */}
          <input
            type="text"
            placeholder="Location"
            {...register('location', { required: 'Location is required' })}
            className="w-full px-4 py-2 border rounded-lg"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}

          {/* Category */}
          <select
            {...register('category', { required: 'Category is required' })}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Select Category</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}

          {/* Description */}
          <textarea
            placeholder="Job Description"
            rows={4}
            {...register('description', {
              required: 'Description is required',
            })}
            className="w-full px-4 py-2 border rounded-lg"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}

          {/* Salary Range */}
          <input
            type="text"
            placeholder="Salary Range e.g. $500 - $1000"
            {...register('salary_range', {
              required: 'Salary range is required',
            })}
            className="w-full px-4 py-2 border rounded-lg"
          />
          {errors.salary_range && (
            <p className="text-red-500 text-sm">
              {errors.salary_range.message}
            </p>
          )}

          {/* Job Type */}
          <select
            {...register('job_type', { required: 'Job type is required' })}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Select Job Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Freelance">Freelance</option>
            <option value="Contract">Contract</option>
          </select>
          {errors.job_type && (
            <p className="text-red-500 text-sm">{errors.job_type.message}</p>
          )}

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            {...register('image', { required: 'Job image is required' })}
            className="w-full"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white ${
              loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {loading ? 'Posting...' : 'Post Job'}
          </button>
        </form>
      </div>
    </div>
  );
}
