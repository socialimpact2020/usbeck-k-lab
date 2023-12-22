"use client";
import { useState } from "react";
import IconInput from "../IconInput";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

//  TODO: use react-hook-form

export default function DateSearchForm() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const calendarIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 absolute transform top-1/2 -translate-y-1/2 right-5 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
      />
    </svg>
  );

  return (
    <div className="flex items-center space-x-3">
      <div className="flex justify-center relative">
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          className="input input-bordered w-48 !outline-gray-600 "
          placeholderText="Start Date"
          icon={calendarIcon}
          showIcon
        />
      </div>

      <span className="mx-3">~</span>

      <div className="flex justify-center relative">
        <DatePicker
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
          className="input input-bordered w-48 !outline-gray-600 "
          placeholderText="End Date"
          icon={calendarIcon}
          showIcon
        />
      </div>

      <div className="flex justify-center relative w-full">
        <IconInput text="Please enter your search term">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute transform top-1/2 -translate-y-1/2 right-5 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </IconInput>
      </div>
    </div>
  );
}
