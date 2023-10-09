import React from "react";

import Head from "next/head";
import Link from "next/link";

import OverlayMenu from "@/components/Overlay";
import { Riv, WPS, WSA } from "@/components/Partners";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irani World | About us",
  description: "",
};

const page = () => {
  return (
    <>
      <OverlayMenu />
      <main className="container">
        <div className=" flex flex-col lg:flex-row gap-x-20 h-[500px] mt-28 lg:mt-10">
          <div className="w-full lg:w-2/3 flex flex-col lg:justify-between">
            <div>
              <h1 className="text-black text-2xl font-semibold font-outfit mb-8">
                About us
              </h1>
              <h3 className="text-[#FA092B] text-3xl font-semibold font-outfit">
                By Persians, For Persians
              </h3>
              <p className="lg:max-w-3xl text-lg text-white-shade-8 mt-6">
                Irani.World is a platform built to help Iranian people around
                the world reach one another for professional and business
                services in one convenient place. This platform is 100%
                independently built by Iranians with support from Swedes and is
                free to use.
                <br />
                <br />
                Platform development is led by Riv Designs, a USA company, in
                partnership with Riv Design & WPS and WSA. This platform is
                essentially a partnership between a non-profit, artists,
                developers, and business people who have the common goal of
                bringing Iranian people closer together.
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-black text-2xl font-semibold font-outfit mb-2">
                Partners
              </h2>
              <div className="flex gap-x-8 items-center">
                <Riv />
                <WSA />
                <WPS />
              </div>
            </div>
          </div>
          <div
            className="w-1/3 hidden lg:flex flex-col  h-full bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: `url('/images/about/iranian-girl.png')` }}
          ></div>
        </div>
        <section className="w-full mx-auto h-auto lg:h-[300px] lg:mt-20 mt-36 mb-10 flex flex-col gap-y-2 lg:flex-row gap-x-2 items-center bg-white-shade-2 rounded-2xl p-2">
          <div className="relative w-full h-[300px] lg:h-full rounded-2xl bg-white pt-4">
            <div className="flex justify-between items-center px-8 py-2">
              <Link href={"/"}>
                <svg
                  width="103"
                  height="34"
                  viewBox="0 0 103 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.1442 12.5337C18.3579 11.0031 19.2049 9.2201 19.6214 7.31895L22.4539 7.92601C21.9446 10.2508 20.9089 12.4311 19.4247 14.3028C17.9404 16.1745 16.0464 17.689 13.885 18.7321C12.5298 19.3862 11.0918 19.8443 9.61473 20.0963L11.7351 27.9233C11.9887 28.8593 12.9614 29.4148 13.9078 29.164C14.8542 28.9132 15.4158 27.9511 15.1622 27.015L14.4787 24.492C14.4775 24.4923 14.4762 24.4926 14.475 24.4929L14.3921 24.1724L13.8947 22.3365L13.9158 22.3309L13.7567 21.7157C15.6921 21.226 17.4874 20.3019 19.0034 19.0151L20.8909 21.1904C19.7775 22.1356 18.5408 22.9207 17.2178 23.5268L17.9617 26.2731C18.6296 28.7384 17.1504 31.2724 14.6579 31.9329C12.1654 32.5935 9.60345 31.1305 8.93558 28.6652L6.6758 20.3237C4.36334 20.29 2.08496 19.7578 0 18.763L1.25928 16.1811C3.03068 17.0263 4.97281 17.4631 6.93955 17.4588C8.90628 17.4544 10.8464 17.0089 12.6139 16.1558C14.3815 15.3028 15.9304 14.0643 17.1442 12.5337Z"
                    fill="#011223"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.17272 3.7641L6.80274 6.27466L4.4166 7.17357L6.70171 8.33117L6.82225 10.8824L8.59423 9.06927L11.0354 9.75347L9.86416 7.4838L11.2643 5.33873L8.74841 5.75332L7.17272 3.7641ZM4.57615 4.47993L5.15008 0.585462L7.33506 0L9.77932 3.08574L13.6262 2.45182L14.8585 4.34119L12.7124 7.62905L14.5235 11.1389L13.0959 12.8904L9.33572 11.8365L6.60623 14.6293L4.49413 13.8262L4.30773 9.88106L0.80522 8.10674L0.927668 5.85439L4.57615 4.47993Z"
                    fill="#011223"
                  />
                  <path
                    d="M31.5648 15.2525V4.11641H33.8817V15.2525H31.5648ZM35.8308 15.2525V4.11641H40.4048C42.7068 4.11641 44.351 5.34213 44.351 7.67398C44.351 9.19865 43.6036 10.2749 42.4228 10.813L44.9639 15.2525H42.363L40.1059 11.2166H38.1477V15.2525H35.8308ZM38.1477 9.19865H40.4198C41.3914 9.19865 42.0341 8.58579 42.0341 7.67398C42.0341 6.74722 41.3914 6.13436 40.4198 6.13436H38.1477V9.19865ZM52.4271 4.11641L56.2239 15.2525H53.7724L53.0251 12.9804H48.7649L48.0176 15.2525H45.5661L49.3629 4.11641H52.4271ZM49.4226 10.9625H52.3674L50.9025 6.44826L49.4226 10.9625ZM64.1411 4.11641H66.458V15.2525H64.6642L59.6567 8.51105V15.2525H57.3398V4.11641H59.1186L64.1411 10.813V4.11641ZM68.4082 15.2525V4.11641H70.7251V15.2525H68.4082ZM38.3661 18.1164H40.683V25.0223C40.683 27.5186 38.8594 29.4319 36.1239 29.4319C33.3885 29.4319 31.5648 27.5186 31.5648 25.0223V18.1164H33.8817V25.0223C33.8817 26.4124 34.7786 27.3392 36.1239 27.3392C37.4692 27.3392 38.3661 26.4124 38.3661 25.0223V18.1164ZM46.3701 29.4319C44.1579 29.4319 42.2745 28.1912 41.6616 26.3078L43.6048 25.396C44.1429 26.6964 45.264 27.4139 46.3701 27.4139C47.5062 27.4139 48.1788 26.8908 48.1788 26.2331C48.1788 25.6501 47.7752 25.3362 47.1175 25.1269L44.8455 24.4094C42.9471 23.8115 42.0502 22.7353 42.0502 21.2554C42.0502 19.2674 43.6496 17.937 46.0562 17.937C48.1938 17.937 49.8679 19.1179 50.4658 20.7622L48.5226 21.674C48.1489 20.6127 47.2521 19.955 46.0562 19.955C45.0398 19.955 44.3671 20.4782 44.3671 21.1658C44.3671 21.6889 44.7558 22.0776 45.4733 22.3018L47.6855 22.9894C49.554 23.5723 50.4957 24.5738 50.4957 26.0985C50.4957 28.1015 48.8515 29.4319 46.3701 29.4319ZM57.5882 18.1164L61.385 29.2525H58.9335L58.1861 26.9804H53.926L53.1786 29.2525H50.7272L54.5239 18.1164H57.5882ZM54.5837 24.9625H57.5284L56.0635 20.4483L54.5837 24.9625ZM62.1272 29.2525V27.0103H64.3694V29.2525H62.1272ZM71.1896 29.4319C67.9908 29.4319 65.5693 26.9804 65.5693 23.677C65.5693 20.3586 67.9609 17.937 71.1896 17.937C73.5962 17.937 75.375 19.2674 75.958 20.9116L73.9101 21.8982C73.5215 20.822 72.5349 20.0297 71.1896 20.0297C69.2165 20.0297 67.8862 21.5096 67.8862 23.677C67.8862 25.8594 69.2165 27.3392 71.1896 27.3392C72.5349 27.3392 73.5215 26.547 73.9101 25.4707L75.958 26.4573C75.375 28.1015 73.5962 29.4319 71.1896 29.4319ZM82.5315 29.4319C79.1683 29.4319 76.6271 26.9505 76.6271 23.677C76.6271 20.4034 79.1533 17.937 82.5315 17.937C85.9097 17.937 88.4359 20.4034 88.4359 23.677C88.4359 26.9505 85.8948 29.4319 82.5315 29.4319ZM82.5315 27.3392C84.5644 27.3392 86.119 25.8295 86.119 23.677C86.119 21.5245 84.5644 20.0297 82.5315 20.0297C80.4986 20.0297 78.944 21.5245 78.944 23.677C78.944 25.8295 80.4986 27.3392 82.5315 27.3392ZM98.9793 18.1164H101.221V29.2525H98.9046V22.0776L95.5413 26.4124H95.2424L91.8791 21.9131V29.2525H89.5622V18.1164H91.8044L95.3769 22.825L98.9793 18.1164Z"
                    fill="#011223"
                  />
                </svg>
              </Link>
              <span className="flex justify-center items-center gap-x-3 py-2 px-6 bg-[#43D100]/10 text-[#43D100] rounded-full">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="5.5"
                    cy="6"
                    r="4.76667"
                    fill="#43D100"
                    stroke="white"
                    stroke-width="1.46667"
                  />
                </svg>
                LIVE
              </span>
            </div>
            <div className="flex justify-between items-center gap-x-3 px-2 py-2">
              <div className="w-1/2 h-16 flex justify-center items-center bg-white-shade-2 text-black text-center font-outfit font-semibold rounded-2xl">
                300k users
              </div>
              <div className="w-1/2 h-16 flex justify-center items-center bg-white-shade-2 text-black text-center font-outfit font-semibold rounded-2xl">
                New York <span className="text-sm">(GMT-4)</span>
              </div>
            </div>
            <div className="px-2">
              <div
                className="w-full h-[120px]  bg-center bg-cover rounded-3xl"
                style={{ backgroundImage: `url('/images/maps/usa-map.png')` }}
              ></div>
            </div>
          </div>
          <div className="relative w-full h-[300px] lg:h-full flex flex-col items-center justify-center rounded-2xl bg-white">
            <svg
              width="120"
              height="51"
              viewBox="0 0 120 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.0414 17.8921C25.7171 15.8488 26.8864 13.4687 27.4614 10.9309L31.3721 11.7413C30.6689 14.8447 29.239 17.7551 27.1899 20.2537C25.1407 22.7523 22.5257 24.7739 19.5417 26.1664C17.6708 27.0395 15.6854 27.651 13.6462 27.9875L16.5736 38.4357C16.9237 39.6853 18.2667 40.4268 19.5732 40.092C20.8798 39.7572 21.6552 38.4728 21.3051 37.2233L20.3614 33.8553C20.3597 33.8557 20.358 33.8561 20.3563 33.8565L20.2419 33.4287L19.5552 30.9779L19.5843 30.9704L19.3646 30.1492C22.0366 29.4955 24.5152 28.2619 26.6082 26.5441L29.2141 29.448C27.6769 30.7097 25.9695 31.7578 24.143 32.5669L25.1701 36.2329C26.0922 39.5238 24.05 42.9065 20.6089 43.7883C17.1677 44.6701 13.6306 42.7171 12.7086 39.4262L9.58871 28.2911C6.39612 28.246 3.25057 27.5356 0.37207 26.2076L2.11064 22.761C4.55623 23.8893 7.23755 24.4724 9.95283 24.4666C12.6681 24.4608 15.3467 23.8661 17.7869 22.7273C20.2272 21.5886 22.3656 19.9354 24.0414 17.8921Z"
                fill="#023113"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.47573 10.6126L4.53061 7.3551C4.53061 7.3551 8.96335 5.42003 10.37 5.14938C14.4887 4.35694 18.5366 6.79057 19.6234 10.7126L20.06 12.288C20.8699 15.2103 19.0763 18.2141 16.0539 18.9971L8.4064 20.9784L7.2099 16.6608L4.36651 15.8884L3.30195 13.181L5.47573 10.6126ZM12.1861 8.08617C11.5486 8.20883 7.83853 9.45693 7.83853 9.45693L8.4064 11.5641L6.97934 13.181L9.99505 14.0002L10.8123 16.9492L15.1733 15.8194C16.3806 15.5066 17.097 14.3068 16.7735 13.1395L16.3369 11.5641C15.7141 9.31646 14.2654 7.53787 12.1861 8.08617Z"
                fill="#023113"
              />
              <path
                d="M12.6098 9.59097L9.25912 10.6126L9.25839 10.7123C9.25711 10.8885 9.28373 11.0673 9.34117 11.2434C9.64549 12.1765 10.6943 12.6816 11.678 12.3817C12.6617 12.0817 13.2211 11.0863 12.9168 10.1532C12.8594 9.97708 12.7751 9.81584 12.6696 9.67229L12.6098 9.59097Z"
                fill="#023113"
              />
              <path
                d="M43.4461 16V2.66426H46.2206V16H43.4461ZM48.5547 16V2.66426H54.0322C56.7888 2.66426 58.7579 4.13209 58.7579 6.92454C58.7579 8.75037 57.8628 10.0392 56.4487 10.6836L59.4918 16H56.3771L53.6742 11.1669H51.3292V16H48.5547ZM51.3292 8.75037H54.0501C55.2136 8.75037 55.9833 8.01646 55.9833 6.92454C55.9833 5.81472 55.2136 5.08081 54.0501 5.08081H51.3292V8.75037ZM68.4292 2.66426L72.9759 16H70.0402L69.1452 13.2792H64.0436L63.1486 16H60.2129L64.7596 2.66426H68.4292ZM64.8312 10.8626H68.3576L66.6034 5.45671L64.8312 10.8626ZM82.4569 2.66426H85.2314V16H83.0834L77.0868 7.92696V16H74.3122V2.66426H76.4424L82.4569 10.6836V2.66426ZM87.5669 16V2.66426H90.3414V16H87.5669ZM43.4461 33V19.6643H52.4141V22.0808H46.2206V25.106H52.0561V27.5225H46.2206V30.5835H52.4141L52.3962 33H43.4461ZM65.116 19.6643H67.801V33H65.0265V24.4078L60.9989 29.5989H60.6409L56.6133 24.2109V33H53.8388V19.6643H56.5238L60.802 25.3029L65.116 19.6643ZM69.598 33V19.6643H72.3726V33H69.598ZM74.1696 33V19.6643H79.6471C82.4037 19.6643 84.3728 21.1321 84.3728 23.9245C84.3728 25.7504 83.4778 27.0392 82.0636 27.6836L85.1067 33H81.992L79.2891 28.1669H76.9442V33H74.1696ZM76.9442 25.7504H79.665C80.8285 25.7504 81.5982 25.0165 81.5982 23.9245C81.5982 22.8147 80.8285 22.0808 79.665 22.0808H76.9442V25.7504ZM93.5071 19.6643L98.0538 33H95.1181L94.2231 30.2792H89.1215L88.2265 33H85.2909L89.8376 19.6643H93.5071ZM89.9092 27.8626H93.4355L91.6813 22.4567L89.9092 27.8626ZM100.539 33V22.0808H97.1561V19.6643H106.661V22.0808H103.314V33H100.539ZM107.638 33V19.6643H116.606V22.0808H110.412V25.106H116.248V27.5225H110.412V30.5835H116.606L116.588 33H107.638ZM43.5356 50V47.315H46.2206V50H43.5356ZM54.3881 50.2148C50.5574 50.2148 47.6576 47.2792 47.6576 43.3232C47.6576 39.3493 50.5216 36.4495 54.3881 36.4495C57.27 36.4495 59.4002 38.0426 60.0983 40.0116L57.6459 41.193C57.1805 39.9042 55.9991 38.9555 54.3881 38.9555C52.0252 38.9555 50.4321 40.7276 50.4321 43.3232C50.4321 45.9366 52.0252 47.7088 54.3881 47.7088C55.9991 47.7088 57.1805 46.76 57.6459 45.4712L60.0983 46.6526C59.4002 48.6217 57.27 50.2148 54.3881 50.2148ZM67.9702 50.2148C63.9426 50.2148 60.8996 47.2434 60.8996 43.3232C60.8996 39.403 63.9247 36.4495 67.9702 36.4495C72.0157 36.4495 75.0408 39.403 75.0408 43.3232C75.0408 47.2434 71.9978 50.2148 67.9702 50.2148ZM67.9702 47.7088C70.4047 47.7088 72.2663 45.9008 72.2663 43.3232C72.2663 40.7455 70.4047 38.9555 67.9702 38.9555C65.5358 38.9555 63.6741 40.7455 63.6741 43.3232C63.6741 45.9008 65.5358 47.7088 67.9702 47.7088ZM87.6669 36.6643H90.3519V50H87.5774V41.4078L83.5498 46.5989H83.1918L79.1642 41.2109V50H76.3897V36.6643H79.0747L83.3529 42.3029L87.6669 36.6643Z"
                fill="#023113"
              />
            </svg>
            <span className="absolute bottom-4 left-0 flex items-center justify-center self-end font-semibold w-[90%] h-12 mx-5 px-4 bg-[#E1CB00]/10 text-[#E1CB00] text-center rounded-2xl">
              Soon
            </span>
          </div>
          <div className="relative w-full h-[300px] lg:h-full flex flex-col items-center justify-center rounded-2xl bg-white">
            <svg
              width="89"
              height="51"
              viewBox="0 0 89 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2883 24.3023C17.2132 24.3023 22.0163 19.5336 22.0163 13.6512C22.0163 7.76869 17.2132 3 11.2883 3C5.36337 3 0.560281 7.76869 0.560281 13.6512C0.560281 19.5336 5.36337 24.3023 11.2883 24.3023ZM11.1001 18.3227C13.6987 18.3227 15.8053 16.2312 15.8053 13.6512C15.8053 11.0711 13.6987 8.9796 11.1001 8.9796C8.50143 8.9796 6.39481 11.0711 6.39481 13.6512C6.39481 16.2312 8.50143 18.3227 11.1001 18.3227ZM10.9776 4.3646L10.6351 5.41152H9.52697L10.4235 6.05856L10.0811 7.10548L10.9776 6.45844L11.8741 7.10548L11.5317 6.05856L12.4282 5.41152H11.32L10.9776 4.3646ZM6.65617 6.46552L6.99862 5.4186L7.34106 6.46552H8.44924L7.55271 7.11255L7.89515 8.15947L6.99862 7.51244L6.10209 8.15947L6.44453 7.11255L5.548 6.46552H6.65617ZM4.26879 9.364L4.61124 8.31708L4.95368 9.364H6.06186L5.16532 10.011L5.50777 11.058L4.61124 10.4109L3.7147 11.058L4.05715 10.011L3.16061 9.364H4.26879ZM3.28491 12.2696L2.94247 13.3165H1.83429L2.73082 13.9635L2.38838 15.0104L3.28491 14.3634L4.18144 15.0104L3.839 13.9635L4.73553 13.3165H3.62736L3.28491 12.2696ZM18.8029 12.2696L18.4605 13.3165H17.3523L18.2488 13.9635L17.9064 15.0104L18.8029 14.3634L19.6994 15.0104L19.357 13.9635L20.2535 13.3165H19.1453L18.8029 12.2696ZM18.0071 8.31708L17.6647 9.364H16.5565L17.453 10.011L17.1106 11.058L18.0071 10.4109L18.9036 11.058L18.5612 10.011L19.4577 9.364H18.3496L18.0071 8.31708ZM4.26879 17.269L4.61124 16.222L4.95368 17.269H6.06186L5.16532 17.916L5.50777 18.9629L4.61124 18.3159L3.7147 18.9629L4.05715 17.916L3.16061 17.269H4.26879ZM18.0071 16.222L17.6647 17.269H16.5565L17.453 17.916L17.1106 18.9629L18.0071 18.3159L18.9036 18.9629L18.5612 17.916L19.4577 17.269H18.3496L18.0071 16.222ZM14.9566 5.4186L14.6141 6.46552H13.5059L14.4025 7.11255L14.06 8.15947L14.9566 7.51244L15.8531 8.15947L15.5106 7.11255L16.4072 6.46552H15.299L14.9566 5.4186ZM6.65617 19.904L6.99862 18.857L7.34106 19.904H8.44924L7.55271 20.551L7.89515 21.5979L6.99862 20.9509L6.10209 21.5979L6.44453 20.551L5.548 19.904H6.65617ZM14.9566 18.857L14.6141 19.904H13.5059L14.4025 20.551L14.06 21.5979L14.9566 20.9509L15.8531 21.5979L15.5106 20.551L16.4072 19.904H15.299L14.9566 18.857ZM10.6351 20.958L10.9776 19.911L11.32 20.958H12.4282L11.5317 21.605L11.8741 22.6519L10.9776 22.0049L10.0811 22.6519L10.4235 21.605L9.52697 20.958H10.6351Z"
                fill="#174197"
              />
              <path
                d="M26.5876 15.1392C26.0311 17.661 24.8995 20.0261 23.2778 22.0565C21.6562 24.0869 19.5867 25.7297 17.2252 26.8613C14.8636 27.9929 12.2715 28.5838 9.64377 28.5896C7.01608 28.5954 4.42126 28.016 2.05455 26.8948L0.37207 30.3197C3.15772 31.6393 6.20179 32.3453 9.2914 32.39L12.3106 43.455C13.2029 46.7252 16.6259 48.6658 19.9561 47.7896C23.2862 46.9134 25.2625 43.552 24.3702 40.2818L23.3762 36.6389C25.1438 35.8349 26.7961 34.7934 28.2837 33.5397L25.7619 30.6541C23.7364 32.361 21.3378 33.5868 18.7519 34.2365L18.9645 35.0525L18.9364 35.0599L19.6009 37.4953L19.7117 37.9204L19.7166 37.9192L20.6298 41.266C20.9686 42.5076 20.2183 43.7839 18.9538 44.1166C17.6894 44.4493 16.3898 43.7124 16.051 42.4708L13.218 32.0884C15.1914 31.754 17.1128 31.1463 18.9233 30.2787C21.8111 28.895 24.3417 26.8861 26.3248 24.4033C28.3078 21.9204 29.6916 19.0283 30.3721 15.9444L26.5876 15.1392Z"
                fill="#174197"
              />
              <path
                d="M38.4365 16V2.78285H41.1864V16H38.4365ZM43.4997 16V2.78285H48.9285C51.6606 2.78285 53.6121 4.23762 53.6121 7.00524C53.6121 8.81484 52.7251 10.0922 51.3235 10.7309L54.3395 16H51.2526L48.5737 11.2099H46.2496V16H43.4997ZM46.2496 8.81484H48.9462C50.0994 8.81484 50.8623 8.08745 50.8623 7.00524C50.8623 5.90529 50.0994 5.1779 48.9462 5.1779H46.2496V8.81484ZM63.1975 2.78285L67.7037 16H64.7942L63.9071 13.3033H58.8509L57.9639 16H55.0543L59.5606 2.78285H63.1975ZM59.6315 10.9083H63.1265L61.3879 5.55047L59.6315 10.9083ZM77.1004 2.78285H79.8503V16H77.7214L71.7781 7.99874V16H69.0282V2.78285H71.1394L77.1004 10.7309V2.78285ZM82.165 16V2.78285H84.9149V16H82.165ZM38.4365 33V19.7828H47.3249V22.1779H41.1864V25.1762H46.97V27.5712H41.1864V30.6049H47.3249L47.3071 33H38.4365ZM56.809 19.7828H59.5589V27.9793C59.5589 30.942 57.3945 33.2129 54.1478 33.2129C50.9012 33.2129 48.7368 30.942 48.7368 27.9793V19.7828H51.4867V27.9793C51.4867 29.6292 52.5511 30.7291 54.1478 30.7291C55.7445 30.7291 56.809 29.6292 56.809 27.9793V19.7828ZM61.3413 33V19.7828H66.7701C69.5023 19.7828 71.4538 21.2376 71.4538 24.0052C71.4538 25.8148 70.5667 27.0922 69.1652 27.7309L72.1812 33H69.0942L66.4153 28.2099H64.0912V33H61.3413ZM64.0912 25.8148H66.7879C67.941 25.8148 68.7039 25.0875 68.7039 24.0052C68.7039 22.9053 67.941 22.1779 66.7879 22.1779H64.0912V25.8148ZM79.5572 33.2129C75.5654 33.2129 72.5494 30.2679 72.5494 26.3826C72.5494 22.4972 75.5477 19.57 79.5572 19.57C83.5667 19.57 86.5649 22.4972 86.5649 26.3826C86.5649 30.2679 83.5489 33.2129 79.5572 33.2129ZM79.5572 30.7291C81.97 30.7291 83.8151 28.9373 83.8151 26.3826C83.8151 23.8278 81.97 22.0537 79.5572 22.0537C77.1444 22.0537 75.2993 23.8278 75.2993 26.3826C75.2993 28.9373 77.1444 30.7291 79.5572 30.7291ZM38.5252 50V47.3388H41.1864V50H38.5252ZM49.2812 50.2129C45.4846 50.2129 42.6106 47.3033 42.6106 43.3826C42.6106 39.444 45.4491 36.57 49.2812 36.57C52.1376 36.57 54.2487 38.1489 54.9407 40.1004L52.5101 41.2714C52.0488 39.994 50.8779 39.0537 49.2812 39.0537C46.9394 39.0537 45.3604 40.8101 45.3604 43.3826C45.3604 45.9728 46.9394 47.7291 49.2812 47.7291C50.8779 47.7291 52.0488 46.7889 52.5101 45.5115L54.9407 46.6824C54.2487 48.6339 52.1376 50.2129 49.2812 50.2129ZM62.7426 50.2129C58.7508 50.2129 55.7348 47.2679 55.7348 43.3826C55.7348 39.4972 58.7331 36.57 62.7426 36.57C66.7521 36.57 69.7503 39.4972 69.7503 43.3826C69.7503 47.2679 66.7344 50.2129 62.7426 50.2129ZM62.7426 47.7291C65.1554 47.7291 67.0005 45.9373 67.0005 43.3826C67.0005 40.8278 65.1554 39.0537 62.7426 39.0537C60.3298 39.0537 58.4847 40.8278 58.4847 43.3826C58.4847 45.9373 60.3298 47.7291 62.7426 47.7291ZM82.2641 36.7828H84.9253V50H82.1754V41.4843L78.1836 46.6292H77.8288L73.837 41.2891V50H71.0872V36.7828H73.7483L77.9885 42.3713L82.2641 36.7828Z"
                fill="#174197"
              />
            </svg>
            <span className="absolute bottom-4 left-0 flex items-center justify-center self-end font-semibold w-[90%] h-12 mx-5 px-4 bg-[#E1CB00]/10 text-[#E1CB00] text-center rounded-2xl">
              Soon
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
