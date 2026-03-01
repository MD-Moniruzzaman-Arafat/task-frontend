import img1 from '../../assets/image/3.1 Dashboard Company.png';
import img2 from '../../assets/image/Dashboard Company.png';

export default function Advertise() {
  return (
    <>
      <div class="relative container mx-auto bg-blue-600 overflow-hidden  my-10">
        <div class="relative  bg-blue-600 overflow-hidden ">
          {/* <!-- White Triangle --> */}
          <div
            class="absolute top-0 left-0 
    w-0 h-0 
    border-t-80 border-t-white
    border-r-80 border-r-transparent"
          ></div>

          <div
            class="absolute bottom-0 right-0 
    w-0 h-0 
    border-b-80 border-b-white
    border-l-80 border-l-transparent"
          ></div>

          {/* <!-- Content --> */}
          <div class="relative z-10 pl-2 lg:pl-20 pr-0 lg:pr-10 pt-10 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
              <div className="space-y-3 text-center lg:text-start">
                <h1 className="font-bold text-xl text-center lg:text-start lg:text-5xl w-xs">
                  Start Posting Jobs Today
                </h1>
                <p>
                  <small>Start posting jobs for only $10.</small>
                </p>
                <button className="btn btn-sm bg-white text-black text-sm px-5 py-2.25  transition-all duration-200">
                  Sign Up For Free
                </button>
              </div>
              <div>
                <img
                  src={img1}
                  alt="Dashboard Company"
                  className="hidden lg:flex"
                />
                <img src={img2} alt="Dashboard Company" className="lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
