import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function ApplyModal({ jobId, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log('Job ID in ApplyModal:', jobId);
  const onSubmit = async (data) => {
    const applicationData = {
      job_id: jobId,
      name: data.name,
      email: data.email,
      resume_link: data.resume_link,
      cover_note: data.cover_note,
      created_at: new Date().toISOString(),
    };
    const res = await axios.post(
      'http://localhost:5000/api/applications',
      applicationData
    );
    console.log('Application Submitted:', res.data);

    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Apply for this Job
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Resume Link */}
          <div>
            <input
              type="url"
              placeholder="Resume Link"
              {...register('resume_link', {
                required: 'Resume link is required',
                validate: (value) =>
                  /^https:\/\/drive\.google\.com\/(file\/d\/|open\?id=)[\w-]+/.test(
                    value
                  ) || 'Please enter a valid Google Drive link',
              })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.resume_link && (
              <p className="text-red-500 text-sm">
                {errors.resume_link.message}
              </p>
            )}
          </div>

          {/* Cover Note */}
          <div>
            <textarea
              rows={4}
              placeholder="Cover Note"
              {...register('cover_note', {
                required: 'Cover note is required',
              })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.cover_note && (
              <p className="text-red-500 text-sm">
                {errors.cover_note.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
