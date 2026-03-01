import { IoIosArrowRoundForward } from 'react-icons/io';

export default function CategoryCard({ icon, title, jobsAvailable }) {
  return (
    <>
      <div
        className="group flex flex-row lg:flex-col items-center lg:items-start justify-between 
  border border-[#E0E6F0] p-6 transition cursor-pointer 
  bg-white 
  hover:bg-indigo-600 hover:shadow-md"
      >
        {/* Icon */}
        <div
          className="mb-2 text-blue-500 text-5xl 
    group-hover:text-white transition"
        >
          {icon}
        </div>

        <div>
          {/* Title */}
          <h3
            className="font-semibold text-lg text-black
      group-hover:text-white transition"
          >
            {title}
          </h3>

          {/* Jobs + Arrow */}
          <p
            className="text-sm text-gray-500 mt-1 flex items-center justify-between 
      group-hover:text-white transition"
          >
            {jobsAvailable} jobs available
            <IoIosArrowRoundForward
              className="text-2xl ml-2 text-black
        group-hover:text-white transition"
            />
          </p>
        </div>
      </div>
      {/* <!-- Active Card --> */}
      {/* <div class="group rounded-xl p-6 bg-indigo-600 text-white shadow-lg cursor-pointer">
            <div class="mb-4">📣</div>
            <h3 class="font-semibold text-lg">Marketing</h3>
            <p class="text-sm text-indigo-100 mt-1">140 jobs available →</p>
          </div> */}
    </>
  );
}
