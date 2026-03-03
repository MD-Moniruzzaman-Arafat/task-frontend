import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';

export default function ApplicationList() {
  const api = useAxios();

  // Fetch applications
  const { data, isLoading, isError } = useQuery({
    queryKey: ['applications'],
    queryFn: async () => {
      const res = await api.get('/applications'); // replace with your backend endpoint
      return res.data;
    },
  });

  // Delete application mutation

  if (isLoading)
    return <p className="text-center mt-10">Loading applications...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load data</p>
    );
  console.log('Fetched Applications:', data);
  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Job Title</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Resume</th>
              <th className="px-4 py-2 text-left">Cover Note</th>
              <th className="px-4 py-2 text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((app) => (
              <tr
                key={app._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-2 text-sm">{app._id}</td>
                <td className="px-4 py-2 text-sm">{app.job_id.title}</td>
                <td className="px-4 py-2 text-sm">{app.name}</td>
                <td className="px-4 py-2 text-sm">{app.email}</td>
                <td className="px-4 py-2 text-sm">
                  <a
                    href={app.resume_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Resume
                  </a>
                </td>
                <td className="px-4 py-2 text-sm">{app.cover_note}</td>
                <td className="px-4 py-2 text-sm">
                  {new Date(app.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
