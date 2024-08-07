"use client";
import React, { useState } from "react";
import Marksentry from "./Marksentry"; // Make sure you import the Createnotice component

export default function Ledgertable() {
  const [showLedger, setShowLedger] = useState(false);
  const [showMarksEntry, setShowMarksEntry] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedExamType, setSelectedExamType] = useState("");

  const handleShowLedger = () => {
    if (selectedYear && selectedClass && selectedExamType) {
      setShowLedger(true);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md">
      <div className="flex items-center justify-center space-x-4 mb-4 mt-10 mr-4">
        <div>
          <label htmlFor="year" className="mr-2 dark:text-white">
            Year:
          </label>
          <select
            id="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="">Select Year</option>
            <option value="2078">2078</option>
            <option value="2079">2079</option>
            <option value="2080">2080</option>
            <option value="2081">2081</option>
          </select>
        </div>
        <div>
          <label htmlFor="class" className="mr-2 dark:text-white">
            Class:
          </label>
          <select
            id="class"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="">Select Class</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label htmlFor="examType" className="mr-2 dark:text-white">
            Exam Type:
          </label>
          <select
            id="examType"
            value={selectedExamType}
            onChange={(e) => setSelectedExamType(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="">Select Exam Type</option>
            <option value="terminal">Terminal</option>
            <option value="unitTest">Unit Test</option>
          </select>
        </div>
        <button
          onClick={handleShowLedger}
          className="bg-[#8AA4D6] hover:bg-[#253553] hover:text-white dark:text-white text-gray-700 py-2 px-2 rounded text-sm"
        >
          Generate Ledger
        </button>
        <button
          onClick={() => setShowMarksEntry(true)}
          className="bg-[#8AA4D6] hover:bg-[#253553] hover:text-white text-gray-700 py-2 px-4 mt-4 rounded text-xs"
        >
          +Marks Entry
        </button>
      </div>

      {showMarksEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[101]">
          <Marksentry onClose={() => setShowMarksEntry(false)} />
        </div>
      )}

      {showLedger && (
        <>
          <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 mt-16"></div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-[#8AA4D6] dark:bg-gray-700 dark:text-gray-400">
              <tr className="[&>th]:px-3 [&>th]:py-3 [&>th]:pr-9 [&>th]:border-r-4 [&>th]:border-r-white last:[&>th]:border-r-0">
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Gender</th>
                <th scope="col">DOB</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4">1</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="vssvsd"
                    alt="image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      Supriya Shrestha
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">supriyabicte@gmail.com</td>
                <td className="px-6 py-4">Female</td>
                <td className="px-6 py-4">2002-12-23</td>
                <td className="px-6 py-4">9846776704</td>
                <td className="px-6 py-4">supriyabicte@gmail.com</td>
                <td className="px-6 py-4">supp</td>
                <td className="px-6 py-4">supp</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
              {/* Repeat similar structure for other rows */}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
