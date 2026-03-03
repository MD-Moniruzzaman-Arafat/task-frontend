import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAxios from '../../hooks/useAxios';
import ApplyModal from '../ApplyModal/ApplyModal';

export default function JobDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const api = useAxios();
  const navigate = useNavigate();
  const {
    data: job,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['job', id],
    queryFn: async () => {
      const res = await api.get(`/jobs/${id}`);
      return res.data;
    },
  });
  console.log('Fetched Job Details:', job?.data._id);
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-lg font-semibold">Loading...</span>
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load job details
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {isOpen && (
        <ApplyModal jobId={job.data._id} onClose={() => setIsOpen(false)} />
      )}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Job Image */}
        {job?.data?.image?.url && (
          <img
            src={job.data.image.url}
            alt={job.data.title}
            className="object-cover p-8"
          />
        )}

        <div className="p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">{job.data.title}</h1>

          {/* Company & Location */}
          <div className="mt-2 text-gray-600">
            <p className="font-medium">{job.data.company}</p>
            <p>{job.data.location}</p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
              {job.data.category}
            </span>

            <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
              {job.data.job_type}
            </span>

            <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700">
              {job.data.salary_range}
            </span>

            {job.data.is_active ? (
              <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-700">
                Active
              </span>
            ) : (
              <span className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-600">
                Inactive
              </span>
            )}
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {job.data.description}
            </p>
          </div>

          {/* Dates */}
          <div className="mt-8 text-sm text-gray-500 border-t pt-4">
            <p>
              Posted on: {new Date(job.data.created_at).toLocaleDateString()}
            </p>
            <p>
              Last Updated: {new Date(job.data.updated_at).toLocaleDateString()}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </button>

            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
