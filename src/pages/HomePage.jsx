import Advertise from '../components/Advertise/Advertise';
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import Companies from '../components/Companies/Companies';
import FeaturedJobs from '../components/FeaturedJobs/FeaturedJobs';

export default function HomePage() {
  return (
    <>
      <Banner />
      <Companies />
      <Categories />
      <Advertise />
      <FeaturedJobs />
    </>
  );
}
