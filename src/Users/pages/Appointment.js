import React from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";

function AppointmentUser() {
  return (
    <div>
      <main className="relative h-screen overflow-hidden bg-gray-100 rounded-2xl">
        <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Topbar />
            <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
              <div className="sm:flex-row">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                    Appointment The Doctor
                  </h2>
                </div>
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                  <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 justify-center">
                    <label className="block text-sm">
                      <span className="text-gray-700 dark:text-gray-400">
                        Fullname
                      </span>
                      {/* focus-within sets the color for the icon when input is focused */}
                      <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                        <input
                          className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                          placeholder="Jane Doe"
                        />
                        <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </label>
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">
                        Icon right
                      </span>
                      {/* focus-within sets the color for the icon when input is focused */}
                      <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                        <input
                          className="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                          placeholder="Jane Doe"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </label>
                    <div className="pt-5">
                      <button class="px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AppointmentUser;
