import { IoIosArrowRoundForward } from 'react-icons/io';
import img1 from '../../assets/image/logos/BvBoaEET_400x400 1.png';
import img3 from '../../assets/image/logos/Company Logo.png';
import img5 from '../../assets/image/logos/dfds.png';
import img2 from '../../assets/image/logos/Dropbox.png';
import img6 from '../../assets/image/logos/godaddy-logo-0 1.png';
import img8 from '../../assets/image/logos/qUvcta52_400x400 1.png';
import img4 from '../../assets/image/logos/trd.png';
import img7 from '../../assets/image/logos/wwwyy.png';
import FeaturedJobsCard from './FeaturedJobsCard';

export default function FeaturedJobs() {
  return (
    <>
      <section class="container mx-auto py-10 p-2">
        {/* <!-- Header --> */}
        <div class="flex items-center justify-between mb-10">
          <h2 class="text-3xl font-bold">
            Featured <span class="text-blue-500">Jobs</span>
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
          <FeaturedJobsCard
            logo={img1}
            jobType="Full Time"
            title="Email Marketing"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing to help team manage email campaigns and improve engagement."
            tags={['Marketing', 'Design', 'Technology', 'Business']}
          />
          <FeaturedJobsCard
            logo={img2}
            jobType="Full Time"
            title="Brand Designer"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing to help team manage email campaigns and improve engagement."
            tags={['Marketing', 'Design']}
          />
          <FeaturedJobsCard
            logo={img3}
            jobType="Full Time"
            title="Email Marketing"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing to help team manage email campaigns and improve engagement."
            tags={['Marketing', 'Design']}
          />
          <FeaturedJobsCard
            logo={img8}
            jobType="Full Time"
            title="Product Designer"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing to help team manage email campaigns and improve engagement."
            tags={['Marketing', 'Design']}
          />

          <FeaturedJobsCard
            logo={img5}
            jobType="Full Time"
            title="Lead Designer"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing to help team manage email campaigns and improve engagement."
            tags={['Marketing', 'Design']}
          />
          <FeaturedJobsCard
            logo={img4}
            jobType="Full Time"
            title="Brand Strategist"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing to help team manage email campaigns and improve engagement."
            tags={['Marketing', 'Design']}
          />
          <FeaturedJobsCard
            logo={img6}
            jobType="Full Time"
            title="Data Analyst"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing to help team manage email campaigns and improve engagement."
            tags={['Marketing', 'Design']}
          />
          <FeaturedJobsCard
            logo={img7}
            jobType="Full Time"
            title="Email Marketing"
            company="Revolut"
            location="Madrid, Spain"
            description="Revolut is looking for Email Marketing to help team manage email campaigns and improve engagement."
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
      </section>
    </>
  );
}
