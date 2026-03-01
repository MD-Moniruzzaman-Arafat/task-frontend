import img1 from '../../assets/image/companies/amd-logo-1.png';
import img2 from '../../assets/image/companies/intel-3.png';
import img3 from '../../assets/image/companies/talkit 1.png';
import img4 from '../../assets/image/companies/tesla-9 1.png';
import img5 from '../../assets/image/companies/vodafone-2017-logo.png';

export default function Companies() {
  return (
    <>
      <div className="container mx-auto my-10 p-2">
        <p>
          <small className="text-[#BCBDC1]">Companies we helped grow</small>
        </p>
        <div className=" flex flex-wrap justify-between items-center gap-5 py-10">
          <img src={img5} alt="Vodafone Logo" />
          <img src={img2} alt="Intel Logo" />
          <img src={img1} alt="AMD Logo" />
          <img src={img3} alt="Talkit Logo" />
          <img src={img4} alt="Tesla Logo" />
        </div>
      </div>
    </>
  );
}
