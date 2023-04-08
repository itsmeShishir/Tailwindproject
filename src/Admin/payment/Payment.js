import React from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";

function Payment() {
  return (
    <div>
      <main className="relative h-screen overflow-hidden bg-gray-100 rounded-2xl">
        <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Topbar />
            <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
              <div className="sm:flex-row">
                {/* Table Start form Here */}
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <div className="flex items-center justify-between py-4 bg-white">
                    <h1 className="text-base font-semibold">Payment List</h1>
                  </div>
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="p-4">
                          <div className="flex items-center"></div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Checkup
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Payment Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Options
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b hover:bg-gray-50 ">
                        <td className="w-4 p-4">
                          <div className="flex items-center"></div>
                        </td>
                        <th
                          scope="row"
                          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                        >
                          <div className="pl-3">
                            <div className="text-base font-semibold">
                              Neil Sims
                            </div>
                            <div className="font-normal text-gray-500">
                              neil.sims@flowbite.com
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-4">React Developer</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                            Successful
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {/* Modal toggle */}
                          <a
                            href="#"
                            type="button"
                            data-modal-target="editUserModal"
                            data-modal-show="editUserModal"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            More Details
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-50 ">
                        <td className="w-4 p-4">
                          <div className="flex items-center"></div>
                        </td>
                        <th
                          scope="row"
                          className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          <div className="pl-3">
                            <div className="text-base font-semibold">
                              Bonnie Green
                            </div>
                            <div className="font-normal text-gray-500">
                              bonnie@flowbite.com
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-4">Designer</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                            Successful
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {/* Modal toggle */}
                          <a
                            href="#"
                            type="button"
                            data-modal-show="editUserModal"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            More Details
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-50 ">
                        <td className="w-4 p-4">
                          <div className="flex items-center"></div>
                        </td>
                        <th
                          scope="row"
                          className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          <div className="pl-3">
                            <div className="text-base font-semibold">
                              Jese Leos
                            </div>
                            <div className="font-normal text-gray-500">
                              jese@flowbite.com
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-4">Vue JS Developer</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                            Successful
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {/* Modal toggle */}
                          <a
                            href="#"
                            type="button"
                            data-modal-show="editUserModal"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            More Details
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-50 ">
                        <td className="w-4 p-4">
                          <div className="flex items-center"></div>
                        </td>
                        <th
                          scope="row"
                          className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          <div className="pl-3">
                            <div className="text-base font-semibold">
                              Thomas Lean
                            </div>
                            <div className="font-normal text-gray-500">
                              thomes@flowbite.com
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-4">UI/UX Engineer</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                            Successful
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {/* Modal toggle */}
                          <a
                            href="#"
                            type="button"
                            data-modal-show="editUserModal"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            More Details
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50 ">
                        <td className="w-4 p-4">
                          <div className="flex items-center"></div>
                        </td>
                        <th
                          scope="row"
                          className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          <div className="pl-3">
                            <div className="text-base font-semibold">
                              Leslie Livingston
                            </div>
                            <div className="font-normal text-gray-500">
                              leslie@flowbite.com
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-4">SEO Specialist</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2" />{" "}
                            UnSuccessful
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {/* Modal toggle */}
                          <a
                            href="#"
                            type="button"
                            data-modal-show="editUserModal"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            More Details
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Payment;
