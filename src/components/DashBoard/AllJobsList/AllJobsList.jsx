import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';

export default function AllJobsList() {
  const api = useAxios();

  const {
    data: jobs = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const res = await api.get('/jobs');
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 mt-10">
        Error: {error.message}
      </div>
    );
  }
  console.log('Fetched Jobs:', jobs);
  return (
    <>
      <div className="w-full p-4">
        <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
          <table className="min-w-full bg-white text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Salary</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {jobs.data.map((job) => (
                <tr key={job._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">
                    <img
                      src={job.image.url}
                      alt={job.title}
                      className="w-10 h-10 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {job.title}
                  </td>

                  <td className="px-4 py-3">{job.company}</td>

                  <td className="px-4 py-3">{job.location}</td>

                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                      {job.category}
                    </span>
                  </td>

                  <td className="px-4 py-3">{job.salary_range}</td>

                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                      {job.job_type}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    {job.is_active ? (
                      <span className="text-green-600 font-medium">Active</span>
                    ) : (
                      <span className="text-red-500 font-medium">Inactive</span>
                    )}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <button className="px-3 py-1 text-xs rounded-md bg-indigo-500 text-white hover:bg-indigo-600">
                        View
                      </button>

                      <button className="px-3 py-1 text-xs rounded-md bg-yellow-500 text-white hover:bg-yellow-600">
                        Edit
                      </button>

                      <button className="px-3 py-1 text-xs rounded-md bg-red-500 text-white hover:bg-red-600">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4 mt-4">
          {jobs.data.map((job) => (
            <div
              key={job._id}
              className="bg-white p-4 rounded-xl shadow border border-gray-200"
            >
              <img
                src={job.image.url}
                alt={job.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-600">{job.location}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                  {job.category}
                </span>

                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  {job.job_type}
                </span>
              </div>

              <p className="mt-2 text-sm">{job.salary_range}</p>

              <div className="flex gap-2 mt-3">
                <button className="flex-1 py-1 text-xs rounded-md bg-indigo-500 text-white">
                  View
                </button>
                <button className="flex-1 py-1 text-xs rounded-md bg-yellow-500 text-white">
                  Edit
                </button>
                <button className="flex-1 py-1 text-xs rounded-md bg-red-500 text-white">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
