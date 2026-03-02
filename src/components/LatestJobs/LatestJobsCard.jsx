export default function LatestJobsCard({
  logo,
  jobType,
  title,
  company,
  location,
  tags,
}) {
  return (
    <>
      <div class="flex items-start gap-4 bg-white p-5 shadow-sm hover:shadow-md transition">
        <div class="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center font-bold text-emerald-600">
          <img src={logo} alt="Company Logo" />
        </div>

        <div class="flex-1">
          <h3 class="font-semibold text-gray-900">{title}</h3>
          <p class="text-sm text-gray-500">
            {company} · {location}
          </p>

          <div class="flex flex-wrap gap-2 mt-2">
            <span class="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-600">
              {jobType}
            </span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
