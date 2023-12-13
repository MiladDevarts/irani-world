import Link from "next/link";
import React from "react";

const USAMap = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="block  z-[1000] my-5 w-full h-auto rounded-3xl bg-white dark:bg-[#212936] shadow-badge p-4"
    >
      <div className="lablel-flashing-animation flex justify-center items-center w-full h-14 bg-blue text-white text-center rounded-2xl">
        <svg
          width="84"
          height="28"
          viewBox="0 0 84 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.0406 10.4369C15.0336 9.18454 15.7266 7.72577 16.0674 6.1703L18.3849 6.66698C17.9682 8.56907 17.1208 10.3529 15.9064 11.8843C14.6921 13.4157 13.1424 14.6548 11.374 15.5083C10.2653 16.0434 9.08866 16.4182 7.88019 16.6244L9.61503 23.0282C9.8225 23.7941 10.6184 24.2485 11.3927 24.0433C12.167 23.8381 12.6265 23.0509 12.419 22.2851L11.8598 20.2208C11.8588 20.2211 11.8578 20.2213 11.8568 20.2216L11.7889 19.9593L11.382 18.4572L11.3992 18.4527L11.269 17.9494C12.8525 17.5487 14.3214 16.7926 15.5617 15.7398L17.1061 17.5196C16.1951 18.2929 15.1832 18.9352 14.1008 19.4312L14.7095 21.6781C15.2559 23.6951 14.0457 25.7684 12.0064 26.3088C9.96711 26.8493 7.87096 25.6523 7.32453 23.6353L5.47564 16.8105C3.58364 16.7829 1.71953 16.3475 0.0136719 15.5335L1.04398 13.4211C2.49329 14.1126 4.08229 14.47 5.69142 14.4664C7.30056 14.4629 8.88792 14.0984 10.3341 13.4004C11.7802 12.7025 13.0475 11.6892 14.0406 10.4369Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.8822 3.26182L5.57949 5.31589L3.62722 6.05135L5.49683 6.99847L5.59545 9.0858L7.04525 7.60237L9.04252 8.16216L8.08427 6.30517L9.22984 4.55013L7.17139 4.88934L5.8822 3.26182ZM3.75776 3.84749L4.22733 0.661138L6.01502 0.182129L8.01486 2.7068L11.1623 2.18814L12.1705 3.73397L10.4146 6.42402L11.8964 9.29564L10.7284 10.7287L7.65191 9.86645L5.41872 12.1515L3.69065 11.4944L3.53814 8.26655L0.672482 6.81485L0.772665 4.97204L3.75776 3.84749Z"
            fill="white"
          />
          <path
            d="M25.8412 13.0251V3.91383H27.7368V13.0251H25.8412ZM29.3315 13.0251V3.91383H33.0738C34.9572 3.91383 36.3025 4.91668 36.3025 6.82454C36.3025 8.07199 35.691 8.95254 34.7249 9.39281L36.804 13.0251H34.676L32.8292 9.72302H31.2271V13.0251H29.3315ZM31.2271 8.07199H33.0861C33.881 8.07199 34.4069 7.57056 34.4069 6.82454C34.4069 6.06629 33.881 5.56487 33.0861 5.56487H31.2271V8.07199ZM42.9102 3.91383L46.0166 13.0251H44.0109L43.3994 11.1661H39.9139L39.3024 13.0251H37.2967L40.4031 3.91383H42.9102ZM40.452 9.51511H42.8613L41.6628 5.82169L40.452 9.51511ZM52.4942 3.91383H54.3898V13.0251H52.9223L48.8253 7.50941V13.0251H46.9296V3.91383H48.385L52.4942 9.39281V3.91383ZM55.9855 13.0251V3.91383H57.8811V13.0251H55.9855ZM31.4058 14.9138H33.3014V20.564C33.3014 22.6064 31.8094 24.1718 29.5713 24.1718C27.3333 24.1718 25.8412 22.6064 25.8412 20.564V14.9138H27.7368V20.564C27.7368 21.7014 28.4706 22.4597 29.5713 22.4597C30.672 22.4597 31.4058 21.7014 31.4058 20.564V14.9138ZM37.9545 24.1718C36.1445 24.1718 34.6035 23.1568 34.1021 21.6158L35.692 20.8698C36.1323 21.9338 37.0495 22.5208 37.9545 22.5208C38.884 22.5208 39.4343 22.0928 39.4343 21.5547C39.4343 21.0777 39.1041 20.8209 38.566 20.6496L36.7071 20.0626C35.1539 19.5734 34.4201 18.6929 34.4201 17.4821C34.4201 15.8555 35.7287 14.7671 37.6977 14.7671C39.4466 14.7671 40.8163 15.7332 41.3055 17.0785L39.7156 17.8245C39.4099 16.9562 38.6761 16.4181 37.6977 16.4181C36.8661 16.4181 36.3157 16.8462 36.3157 17.4087C36.3157 17.8368 36.6337 18.1547 37.2207 18.3382L39.0307 18.9008C40.5595 19.3777 41.33 20.1971 41.33 21.4446C41.33 23.0834 39.9847 24.1718 37.9545 24.1718ZM47.1328 14.9138L50.2392 24.0251H48.2335L47.622 22.1661H44.1365L43.525 24.0251H41.5193L44.6257 14.9138H47.1328ZM44.6746 20.5151H47.0839L45.8854 16.8217L44.6746 20.5151ZM50.8465 24.0251V22.1906H52.681V24.0251H50.8465ZM58.2612 24.1718C55.644 24.1718 53.6627 22.1661 53.6627 19.4633C53.6627 16.7483 55.6195 14.7671 58.2612 14.7671C60.2302 14.7671 61.6855 15.8555 62.1625 17.2008L60.487 18.008C60.169 17.1274 59.3619 16.4793 58.2612 16.4793C56.6468 16.4793 55.5584 17.69 55.5584 19.4633C55.5584 21.2489 56.6468 22.4597 58.2612 22.4597C59.3619 22.4597 60.169 21.8115 60.487 20.9309L62.1625 21.7381C61.6855 23.0834 60.2302 24.1718 58.2612 24.1718ZM67.5408 24.1718C64.7891 24.1718 62.71 22.1417 62.71 19.4633C62.71 16.785 64.7768 14.7671 67.5408 14.7671C70.3047 14.7671 72.3716 16.785 72.3716 19.4633C72.3716 22.1417 70.2925 24.1718 67.5408 24.1718ZM67.5408 22.4597C69.204 22.4597 70.4759 21.2244 70.4759 19.4633C70.4759 17.7022 69.204 16.4793 67.5408 16.4793C65.8775 16.4793 64.6056 17.7022 64.6056 19.4633C64.6056 21.2244 65.8775 22.4597 67.5408 22.4597ZM80.9979 14.9138H82.8324V24.0251H80.9368V18.1547L78.1851 21.7014H77.9405L75.1888 18.0202V24.0251H73.2931V14.9138H75.1276L78.0505 18.7662L80.9979 14.9138Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex w-full mt-3">
        <div className="w-5/12 h-48 bg-white-shade-2 dark:bg-[#273140]/0 rounded-2xl p-2">
          <div className="flex flex-col h-1/2 justify-center items-center ">
            <span className="font-opensans text-center text-white-shade-10 dark:text-white text-sm">
              Active Users
            </span>
            <h5 className="font-outfit text-lg font-bold text-center text-black dark:text-white">
              1K users
            </h5>
          </div>
          <div className="flex flex-col h-1/2 justify-center items-center rounded-3xl bg-white p-1 dark:bg-[#23374a] dark:text-white">
            <h5 className="font-outfit text-lg font-bold text-black dark:text-white">
              USA
              <br />
              (GMT-4)
            </h5>
          </div>
        </div>
        <div
          className="dark:hidden w-7/12 h-48 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/maps/usa-map.png')` }}
        ></div>

        <div
          className="hidden dark:block w-7/12 h-48 bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: `url('/images/maps/ca-map-dark.png')`,
          }}
        ></div>
      </div>
      <div className="flex w-full mt-3 h-12 gap-x-2">
        <Link
          href={"https://iraniusa.com"}
          target="_blank"
          className="flex justify-center items-center w-2/3 h-full hover:text-blue hover:bg-white/0 hover:border-2 hover:border-blue bg-blue text-white rounded-2xl"
        >
          Open Iraniusa.com
        </Link>
        <Link
          href={"https://iraniusa.com/plans"}
          className="flex justify-center items-center w-1/3 h-full hover:bg-primaty-tint-4/10 bg-primaty-tint-2/10 text-primary-shade-4 rounded-2xl"
        >
          Join
        </Link>
      </div>
    </div>
  );
};

export default USAMap;
