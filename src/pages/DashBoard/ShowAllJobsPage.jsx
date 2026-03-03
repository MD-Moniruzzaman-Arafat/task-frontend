import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import FeaturedJobsCard from '../../components/FeaturedJobs/FeaturedJobsCard';
import useAxios from '../../hooks/useAxios';

export default function ShowAllJobsPage() {
  const api = useAxios();
  // const {
  //   data: jobs = [],
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery({
  //   queryKey: ['jobs'],
  //   queryFn: async () => {
  //     const res = await api.get('/jobs');
  //     return res.data;
  //   },
  // });

  const [filters, setFilters] = useState({
    search: '',
    category: '',
    location: '',
    job_type: '',
    page: 1,
    limit: 10,
  });

  // Fetch jobs
  const { data, isError, error } = useQuery({
    queryKey: ['jobs', filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (filters.search) params.append('search', filters.search);
      if (filters.category) params.append('category', filters.category);
      if (filters.location) params.append('location', filters.location);
      if (filters.job_type) params.append('job_type', filters.job_type);
      params.append('page', filters.page);
      params.append('limit', filters.limit);

      const res = await api.get(`/jobs?${params.toString()}`);
      return res.data;
    },
    keepPreviousData: true, // keeps old data during pagination
  });

  const handleFilterChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      page: 1, // reset page on filter change
    }));
  };

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <span className="loading loading-spinner text-primary"></span>
  //     </div>
  //   );
  // }

  if (isError) {
    return (
      <div className="text-center text-red-500 mt-10">
        Error: {error.message}
      </div>
    );
  }
  console.log('Fetched Jobs:', data);
  return (
    <>
      <div className="p-4  bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">All Jobs</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            name="search"
            placeholder="Search by title/company/description"
            value={filters.search}
            onChange={handleFilterChange}
            className="px-3 py-2 border rounded w-full md:w-1/3"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={filters.location}
            onChange={handleFilterChange}
            className="px-3 py-2 border rounded w-full md:w-1/4"
          />
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="px-3 py-2 border rounded w-full md:w-1/4"
          >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Business">Business</option>
          </select>
          <select
            name="job_type"
            value={filters.job_type}
            onChange={handleFilterChange}
            className="px-3 py-2 border rounded w-full md:w-1/4"
          >
            <option value="">All Job Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Freelance">Freelance</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
      </div>

      <div class="max-w-7xl mx-auto py-10 p-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* <!-- Card --> */}
          {data?.data.map((job) => (
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
      </div>
    </>
  );
}
