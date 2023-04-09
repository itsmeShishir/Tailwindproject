import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";

function Dash() {
  const [showPopup, setShowPopup] = useState(false); // state to control pop-up visibility

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden"; // disable scrolling when pop-up is open
    } else {
      document.body.style.overflow = "unset"; // enable scrolling when pop-up is closed
    }
  }, [showPopup]);

  return (
    <div>
      <main className="relative h-screen overflow-hidden bg-gray-100 rounded-2xl">
        <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
              <div className="sm:flex-row">
                <div className="w-1/3 card card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                      <button
                        type="button"
                        onClick={() => setShowPopup(true)}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Book an appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 w-1/2">
            <h2 className="text-2xl font-bold mb-4">Book An Appointment</h2>
            <div className="sm:flex-row">
              <div className=" mb-8 lg:mb-12">
                {/* Form Start from Here */}
                <form>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="john@dope.com"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="50"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="age"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Symptoms
                    </label>
                    <textarea
                      type="text"
                      id="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Explain your symptoms"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-2/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <button
              className="btn btn-primary mt-4"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dash;
