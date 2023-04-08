import React from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";

function Blog() {
  return (
    <>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
        <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Topbar />
            <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
              <div className="sm:flex-row">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <div className="flex items-center justify-between py-4 bg-white">
                    <h1 className="text-base font-semibold">Blog List</h1>
                    <button
                      type="button"
                      className="relative inline-flex items-center px-3 py-3.5 border border-transparent bg-blue-600 text-xs text-white font-small"
                    >
                      Add new Blogs
                    </button>
                  </div>
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="p-4">
                          <div className="flex items-center"></div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Details
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
                              Title 1
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-4">This is just a blog page</td>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Blog;
