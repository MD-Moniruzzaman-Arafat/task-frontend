import { Select } from 'antd';
import { CiSearch } from 'react-icons/ci';
import { GrLocation } from 'react-icons/gr';
import bannerLogo from '../../assets/image//header/Group.png';
import bg from '../../assets/image//header/Pattern.png';
import man from '../../assets/image/header/Pic.png';

export default function Banner() {
  return (
    <>
      <div className="bg-[#F8F8FD]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center p-2 lg:p-0 ">
          {/* left */}
          <div className="flex-1  space-y-6">
            <div>
              <h1 className="text-5xl lg:text-7xl font-extrabold">Discover</h1>
              <h1 className="text-5xl lg:text-7xl font-extrabold">more than</h1>
              <div>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-[#26A4FF]">
                  5000+ jobs
                </h1>
                <img src={bannerLogo} alt="Pattern" className="" />
              </div>
            </div>
            <p className="text-[#9298A6] max-w-sm font-light">
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </p>
            <div className="bg-[#ffffff] flex flex-col lg:flex-row py-5 px-3 justify-between items-center gap-4">
              <div className="flex items-center w-60">
                <CiSearch />
                <input
                  className="focus:outline-none border-b border-gray-300 px-5 py-2 text-xs w-full"
                  type="text"
                  name=""
                  id=""
                  placeholder="Job title or keyword"
                />
              </div>
              <div className="relative inline-block text-left w-60">
                <div className="flex items-center">
                  <GrLocation />
                  <Select
                    placeholder="Location"
                    variant="underlined"
                    style={{ flex: 1, fontSize: '13px' }}
                    options={[
                      { value: 'jack', label: 'Jack' },
                      { value: 'lucy', label: 'Lucy' },
                      { value: 'Yiminghe', label: 'yiminghe' },
                    ]}
                  />
                </div>
              </div>
              <button className=" flex-1 btn-glow nav-font text-[13px] font-bold text-[#ffffff] bg-[#4640DE] hover:bg-[#4640DE] px-5 py-2.25  transition-all duration-200">
                Search my job
              </button>
            </div>
            <p>
              <small>
                Popular : UI Designer, UX Researcher, Android, Admin
              </small>
            </p>
          </div>
          {/* right */}
          <div
            className="flex-1 flex items-end justify-end  "
            style={{
              backgroundImage: `url(${bg})`,
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              backgroundSize: 'contain',
            }}
          >
            <img src={man} alt="" className="hidden lg:block " />
          </div>
        </div>
      </div>
    </>
  );
}
