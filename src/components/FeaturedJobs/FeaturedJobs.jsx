import { useQuery } from '@tanstack/react-query';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router';
import useAxios from '../../hooks/useAxios';
import FeaturedJobsCard from './FeaturedJobsCard';

export default function FeaturedJobs() {
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
  return (
    <>
      <section class="max-w-7xl mx-auto py-10 p-2">
        {/* <!-- Header --> */}
        <div class="flex items-center justify-between mb-10">
          <h2 class="text-3xl font-bold">
            Featured <span class="text-blue-500">Jobs</span>
          </h2>

          <Link
            to="/show-jobs"
            class="hidden lg:flex items-center gap-2 text-sm text-blue-600 hover:underline"
          >
            Show all jobs <IoIosArrowRoundForward className="text-2xl" />
          </Link>
        </div>

        {/* <!-- Grid --> */}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* <!-- Card --> */}
          {jobs.data.slice(0, 8).map((job) => (
            <FeaturedJobsCard
              key={job._id}
              id={job._id}
              logo={job.image.url}
              jobType={job.job_type}
              title={job.title}
              company={job.company}
              location={job.location}
              description={job.description}
              tags={job.category}
            />
          ))}
          {/* <FeaturedJobsCard
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
          /> */}
        </div>
        <div class="lg:hidden flex items-center justify-between mt-10">
          <Link
            to="/show-jobs"
            class="flex text-blue-600 items-center gap-2 text-sm  hover:underline"
          >
            Show all jobs <IoIosArrowRoundForward className="text-2xl" />
          </Link>
        </div>
      </section>
    </>
  );
}
