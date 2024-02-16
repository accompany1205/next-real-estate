"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdHomeFilled } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const MainNavbar = (props: Props) => {
  const [currentPathname, setCurrentPathname] = useState<string>("/");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

  return (
    <div className="fixed top-[2rem] w-[25rem] left-1/2  z-[2000]">
      <div className="flex items-center gap-[3rem] justify-evenly bg-[#232323] rounded-[1.1rem]  border-[#363636] border-[1px] border text-[#707070]  py-2">
        <Link
          href={"/campaign"}
          className={currentPathname === "/campaign" ? "link2-active" : "link"}
        >
          Campaign
        </Link>
        <Link
          href={"/template"}
          className={
            currentPathname.startsWith("/template") ||
              currentPathname.startsWith("template")
              ? "link2-active"
              : "link"
          }
        >
          Template
        </Link>

        <Link
          href="/home"
          className={`${currentPathname === "/home"
            ? " text-white transition-all"
            : " text-textC hover:text-white  transition-all"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <g filter="url(#filter0_d_1301_14)">
              <rect
                x="4"
                y="4"
                width="30"
                height="30"
                rx="9"
                fill="url(#paint0_linear_1301_14)"
              />
              <rect
                x="4.5"
                y="4.5"
                width="29"
                height="29"
                rx="8.5"
                stroke="#363636"
              />
            </g>
            <path
              d="M13 16.9706V25H17.2581V21.1765H20.3548V25H25V16.9706L18.8065 12L13 16.9706Z"
              stroke="#707070"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <filter
                id="filter0_d_1301_14"
                x="0"
                y="0"
                width="38"
                height="38"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1301_14"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1301_14"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1301_14"
                x1="19"
                y1="4"
                x2="19"
                y2="34"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1E1E1E" />
                <stop offset="1" stopColor="#222222" />
              </linearGradient>
            </defs>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default MainNavbar;
