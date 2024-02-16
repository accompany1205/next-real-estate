"use client";
import React, { useState } from "react";
import campaignData from "../../data/campaignData.json";
import Image from "next/image";

type Props = {};

const sortOptions = [
  {
    value: "name",
    content: "Name",
  },
  {
    value: "newest",
    content: "Newest to Oldest",
  },
  {
    value: "oldest",
    content: "Oldest to Newest",
  },
];

const Page = (props: Props) => {
  const [sortOption, setSortOption] = useState<string>("name");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sortedCampaigns = campaignData.campaigns.sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOption === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    return 0;
  });

  const filteredCampaigns = sortedCampaigns.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page">
      {/* <Image
        src="/assets/img/gridLayout.png"
        width={1000}
        height={800}
        className="w-full h-full object-cover fixed z-0 top-0 left-0 right-0 bottom-0"
        alt="bg-grid"
      /> */}

      <div className="relative w-full h-full pt-[6rem] flex flex-col">
        <div className="flex justify-center flex-wrap ml-4">
          <div className="flex w-[25rem] items-center rounded-[1.1rem] border-[#363636] border text-[#707070] py-1 px-2 pl-3 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="19"
              viewBox="0 0 13 19"
              fill="none"
            >
              <path
                d="M6.60907 12.397C9.70687 12.397 12.2181 9.84571 12.2181 6.69851C12.2181 3.55131 9.70687 1 6.60907 1C3.51127 1 1 3.55131 1 6.69851C1 9.84571 3.51127 12.397 6.60907 12.397Z"
                stroke="#5D5D5D"
                stroke-miterlimit="10"
              />
              <path
                d="M9.20081 11.9319L12.222 18.0001"
                stroke="#5D5D5D"
                stroke-miterlimit="10"
              />
            </svg>
            <input
              type="text"
              className="border-0 flex-1 outline-none bg-[transparent] ml-2 py-1 text-sm text-white"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between text-white my-5 px-3 z-10">
          <div className="relative">
            <div className="relative flex w-[6rem] items-center justify-between bg-[#1B1B1B] border rounded-xl border-borderC px-2 py-1 cursor-pointer z-[3]">
              <span>Sort</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
              >
                <path
                  d="M9 1L5 7L1 0.999999"
                  stroke="white"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="absolute top-[50%] w-[10rem] rounded-xl bg-[#232323] border border-borderC pt-4 pb-2 z-2">
              {sortOptions.map((item, index) => (
                <p
                  className={`m-0 pl-2 cursor-pointer hover:text-white ${sortOption === item.value ? 'text-white' : 'text-gray-500'}`}
                  key={index}
                  onClick={(e) => setSortOption(item.value)}
                >
                  {item.content}
                </p>
              ))}
            </div>
          </div>
          {/* <div>
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-element "
            />
          </div> */}
        </div>
        <div className="w-full flex-1 overflow-y-scroll z-8">
          <div className="grid grid-cols-4 gap-2 justify-evenly pt-3 px-8">
            {filteredCampaigns.map((campaign, index) => (
              <div
                key={index}
                className="text-white rounded-3xl  relative overflow-hidden cursor-pointer  transition-all border-2 hover:border-white hover:scale-[1.02]  border-transparent group drop-shadow hover:drop-shadow-lg"
              >
                <div className="absolute bottom-3 left-1/2 right-0 z-50 -translate-x-1/2 w-3/4 text-center font-Myanmar  p-1  uppercase">
                  {campaign.address}
                </div>

                <img
                  src={campaign.image}
                  alt={campaign.name}
                  className="w-full max-h-[240px] overflow-hidden object-cover group-hover:brightness-50 transition-all brightness-75 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
