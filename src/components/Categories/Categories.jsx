import { FaCode } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { GrAnnounce } from 'react-icons/gr';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { LuBriefcaseBusiness } from 'react-icons/lu';
import { MdOutlineDesignServices, MdPeopleOutline } from 'react-icons/md';
import { PiMoneyDuotone } from 'react-icons/pi';
import { TbChartInfographic } from 'react-icons/tb';
import CategoryCard from './CategoryCard';

export default function Categories() {
  return (
    <>
      <section class="container mx-auto py-10 p-2">
        {/* <!-- Header --> */}
        <div class="flex items-center justify-between mb-10">
          <h2 class="text-3xl font-bold">
            Explore by <span class="text-blue-500">category</span>
          </h2>

          <a
            href="#"
            class="hidden lg:flex items-center gap-2 text-sm text-blue-600 hover:underline"
          >
            Show all jobs <IoIosArrowRoundForward className="text-2xl" />
          </a>
        </div>

        {/* <!-- Grid --> */}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* <!-- Card --> */}

          <CategoryCard
            icon={<MdOutlineDesignServices />}
            title="Design"
            jobsAvailable="235"
          />
          <CategoryCard
            icon={<TbChartInfographic />}
            title="Sales"
            jobsAvailable="235"
          />
          <CategoryCard
            icon={<GrAnnounce />}
            title="Marketings"
            jobsAvailable="235"
          />
          <CategoryCard
            icon={<PiMoneyDuotone />}
            title="Finance"
            jobsAvailable="235"
          />
          <CategoryCard
            icon={<FiMonitor />}
            title="Technology"
            jobsAvailable="235"
          />
          <CategoryCard
            icon={<FaCode />}
            title="Development"
            jobsAvailable="235"
          />
          <CategoryCard
            icon={<LuBriefcaseBusiness />}
            title="Business"
            jobsAvailable="235"
          />
          <CategoryCard
            icon={<MdPeopleOutline />}
            title="Human Resource"
            jobsAvailable="235"
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
      </section>
    </>
  );
}
