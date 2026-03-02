import Advertise from '../components/Advertise/Advertise';
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import Companies from '../components/Companies/Companies';
import FeaturedJobs from '../components/FeaturedJobs/FeaturedJobs';
import LatestJobs from '../components/LatestJobs/LatestJobs';
import useAuth from '../hooks/useAuth';

export default function HomePage() {
  const { user } = useAuth();
  console.log('HomePage User:', user);
  return (
    <>
      <Banner />
      <Companies />
      <Categories />
      <Advertise />
      <FeaturedJobs />
      <LatestJobs />
    </>
  );
}
