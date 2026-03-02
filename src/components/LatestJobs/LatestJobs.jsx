import { IoIosArrowRoundForward } from 'react-icons/io';
import bg from '../../assets/image/header/Pattern.png';
import img1 from '../../assets/image/logos/_1M3hz0d_400x400.png';
import LatestJobsCard from './LatestJobsCard';

export default function LatestJobs() {
  return (
    <>
      <section
        class="bg-[#F7F8FD] py-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div class="max-w-7xl mx-auto p-2">
          {/* <!-- Header --> */}
          <div class="flex items-center justify-between mb-10">
            <h2 class="text-3xl font-bold text-gray-900">
              Latest <span class="text-blue-500">jobs open</span>
            </h2>

            <a
              href="#"
              class="hidden lg:flex text-blue-600 items-center gap-2 text-sm  hover:underline"
            >
              Show all jobs <IoIosArrowRoundForward className="text-2xl" />
            </a>
          </div>

          {/* <!-- Jobs Grid --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Job Card --> */}
            <LatestJobsCard
              logo={img1}
              jobType="Full-Time"
              title="Social Media Assistant"
              company="Nomad"
              location="Paris, France"
              tags={['Marketing', 'Design']}
            />

            <LatestJobsCard
              logo="N"
              jobType="Full-Time"
              title="Social Media Assistant"
              company="Nomad"
              location="Paris, France"
              tags={['Marketing', 'Design']}
            />

            <LatestJobsCard
              logo="N"
              jobType="Full-Time"
              title="Social Media Assistant"
              company="Nomad"
              location="Paris, France"
              tags={['Marketing', 'Design']}
            />

            <LatestJobsCard
              logo="N"
              jobType="Full-Time"
              title="Social Media Assistant"
              company="Nomad"
              location="Paris, France"
              tags={['Marketing', 'Design']}
            />

            <LatestJobsCard
              logo="N"
              jobType="Full-Time"
              title="Social Media Assistant"
              company="Nomad"
              location="Paris, France"
              tags={['Marketing', 'Design']}
            />

            <LatestJobsCard
              logo="N"
              jobType="Full-Time"
              title="Social Media Assistant"
              company="Nomad"
              location="Paris, France"
              tags={['Marketing', 'Design']}
            />
          </div>
          <div class="lg:hidden flex items-center justify-between mt-10">
            <a
              href="#"
              class="flex text-blue-600 items-center gap-2 text-sm  hover:underline"
            >
              Show all jobs <IoIosArrowRoundForward className="text-2xl" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
