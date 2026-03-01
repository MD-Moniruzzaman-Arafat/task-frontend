export default function FeaturedJobsCard({
  logo,
  jobType,
  title,
  company,
  location,
  description,
  tags,
}) {
  return (
    <>
      <div class="max-w-sm  border border-[#E0E6F0] p-6 bg-white shadow-sm hover:shadow-md transition cursor-pointer">
        {/* <!-- Top Row --> */}
        <div class="flex items-center justify-between mb-4">
          {/* <!-- Logo --> */}
          <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-xl font-bold text-gray-800">
            <img src={logo} alt="Company Logo" />
          </div>

          {/* <!-- Job Type --> */}
          <span class="text-xs px-3 py-1 border border-blue-500 text-blue-600 ">
            {jobType}
          </span>
        </div>

        {/* <!-- Title --> */}
        <h3 class="text-lg font-semibold text-gray-900 mb-1">{title}</h3>

        {/* <!-- Company + Location --> */}
        <p class="text-sm text-gray-500 mb-3">
          {company} · {location}
        </p>

        {/* <!-- Description --> */}
        <p class="text-sm text-gray-400 leading-relaxed mb-4">
          {description.slice(0, 85)}...
        </p>

        {/* <!-- Tags --> */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => {
            const tagStyles = {
              Marketing: 'bg-orange-100 text-orange-500',
              Design: 'bg-[#EEFAF7] text-[#56CDAD]',
              Business: 'bg-[#ECECFC] text-[#514BE0]',
              Technology: 'bg-[#FFF0ED] text-[#FF6550]',
            };

            return (
              <span
                key={index}
                className={`px-4 py-1 text-sm rounded-full font-medium
          ${tagStyles[tag] || 'bg-gray-100 text-gray-500'}
        `}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
