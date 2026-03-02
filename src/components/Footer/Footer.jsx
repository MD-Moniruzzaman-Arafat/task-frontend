import logo from '../../assets/image/header/Logo.png';

export default function Footer() {
  return (
    <>
      <footer class="w-full bg-[#111827] text-gray-300">
        {/* <!-- Main footer content --> */}
        <div class="max-w-7xl mx-auto px-8 py-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* <!-- Brand --> */}
            <div class="col-span-1">
              <div class="flex items-center gap-2 mb-4">
                <span class="text-white font-semibold text-lg tracking-tight">
                  <img src={logo} alt="QuickHire Logo" />
                </span>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">
                Great platform for the job seeker that passionate about
                startups. Find your dream job easier.
              </p>
            </div>

            <div className="flex justify-between">
              {/* <!-- About --> */}
              <div>
                <h3 class="text-white font-semibold mb-4 text-sm">About</h3>
                <ul class="space-y-2.5 text-sm text-gray-400">
                  <li>
                    <a href="#" class="hover:text-white transition-colors">
                      Companies
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-white transition-colors">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-white transition-colors">
                      Advice
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Resources --> */}
              <div>
                <h3 class="text-white font-semibold mb-4 text-sm">Resources</h3>
                <ul class="space-y-2.5 text-sm text-gray-400">
                  <li>
                    <a href="#" class="hover:text-white transition-colors">
                      Help Docs
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-white transition-colors">
                      Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-white transition-colors">
                      Updates
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Newsletter --> */}
            <div>
              <h3 class="text-white font-semibold mb-2 text-sm">
                Get job notifications
              </h3>
              <p class="text-gray-400 text-sm mb-4 leading-relaxed">
                The latest job news, articles, sent to your inbox weekly.
              </p>
              <div class="flex flex-wrap lg:flex-nowrap gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  class="flex-1 bg-[#1f2937] text-gray-300 text-sm px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-gray-500 border border-gray-700"
                />
                <button class="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-sm font-medium px-4 py-2 rounded whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Bottom bar --> */}
        <div class="border-t border-gray-800">
          <div class="max-w-6xl mx-auto px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-gray-500 text-xs">
              2021 © QuickHire. All rights reserved.
            </p>
            <div class="flex items-center gap-3">
              {/* <!-- Facebook --> */}
              <a
                href="#"
                class="w-7 h-7 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors flex items-center justify-center"
              >
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="text-gray-300"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* <!-- Instagram --> */}
              <a
                href="#"
                class="w-7 h-7 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors flex items-center justify-center"
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="text-gray-300"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              {/* <!-- Dribbble --> */}
              <a
                href="#"
                class="w-7 h-7 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors flex items-center justify-center"
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="text-gray-300"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                </svg>
              </a>
              {/* <!-- LinkedIn --> */}
              <a
                href="#"
                class="w-7 h-7 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors flex items-center justify-center"
              >
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="text-gray-300"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* <!-- Twitter --> */}
              <a
                href="#"
                class="w-7 h-7 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors flex items-center justify-center"
              >
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="text-gray-300"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
