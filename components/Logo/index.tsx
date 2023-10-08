import React from "react";

interface LogoProps {
  classes: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <>
      <svg
        className={`${props.classes} hidden lg:flex`}
        width="90"
        height="27"
        viewBox="0 0 90 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="dark:fill-white"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.26143 2.73555C7.20791 2.73555 6.38013 3.54553 6.38013 4.51365C6.38013 5.48177 7.20791 6.29175 8.26143 6.29175C9.31495 6.29175 10.1427 5.48177 10.1427 4.51365C10.1427 3.54553 9.31495 2.73555 8.26143 2.73555ZM3.54044 4.51365C3.54044 2.00693 5.66861 0 8.26143 0C10.8543 0 12.9824 2.00693 12.9824 4.51365C12.9824 7.02037 10.8543 9.0273 8.26143 9.0273C5.66861 9.0273 3.54044 7.02037 3.54044 4.51365ZM16.7976 7.33651C17.9868 5.87587 18.8166 4.17444 19.2247 2.36024L22 2.93953C21.501 5.15802 20.4862 7.2386 19.032 9.02473C17.5778 10.8109 15.722 12.256 13.6042 13.2515C12.2765 13.8756 10.8675 14.3128 9.42036 14.5533L11.4979 22.0223C11.7463 22.9156 12.6994 23.4456 13.6266 23.2063C14.5539 22.967 15.1041 22.0488 14.8557 21.1556L14.186 18.7479C14.1848 18.7482 14.1836 18.7485 14.1824 18.7488L14.1012 18.443L13.6138 16.691L13.6345 16.6857L13.4786 16.0986C15.3748 15.6313 17.1339 14.7495 18.6192 13.5215L20.4686 15.5974C19.3776 16.4993 18.1659 17.2485 16.8697 17.8269L17.5986 20.4476C18.253 22.8001 16.8037 25.2183 14.3616 25.8486C11.9195 26.479 9.4093 25.0829 8.75493 22.7304L6.54084 14.7703C4.27513 14.7381 2.04281 14.2303 0 13.281L1.23382 10.8171C2.96941 11.6237 4.87227 12.0405 6.79925 12.0364C8.72623 12.0322 10.6271 11.6071 12.3589 10.793C14.0907 9.97896 15.6083 8.79715 16.7976 7.33651Z"
          fill="black"
        />
        <path
          className="dark:fill-white"
          d="M28.8347 12V1.63606H30.9909V12H28.8347ZM32.3875 12V1.63606H36.6444C38.7867 1.63606 40.317 2.77679 40.317 4.94695C40.317 6.36591 39.6214 7.36753 38.5224 7.86833L40.8873 12H38.4668L36.3661 8.24394H34.5438V12H32.3875ZM34.5438 6.36591H36.6583C37.5625 6.36591 38.1607 5.79555 38.1607 4.94695C38.1607 4.08445 37.5625 3.51409 36.6583 3.51409H34.5438V6.36591ZM47.4158 1.63606L50.9492 12H48.6678L47.9722 9.88548H44.0075L43.3119 12H41.0305L44.5639 1.63606H47.4158ZM44.6196 8.00745H47.3601L45.9968 3.80623L44.6196 8.00745ZM57.9001 1.63606H60.0564V12H58.387L53.7267 5.72599V12H51.5705V1.63606H53.2259L57.9001 7.86833V1.63606ZM61.454 12V1.63606H63.6103V12H61.454ZM28.9042 25V22.9133H30.9909V25H28.9042ZM43.668 14.6361H45.8799L43.3202 25H40.5101L38.8546 17.6409L37.1992 25H34.3891L31.8294 14.6361H34.1804L35.9472 22.1621L37.6165 14.6361H40.2319L41.9012 22.1621L43.668 14.6361ZM51.521 25.1669C48.391 25.1669 46.026 22.8577 46.026 19.8111C46.026 16.7645 48.3771 14.4691 51.521 14.4691C54.665 14.4691 57.016 16.7645 57.016 19.8111C57.016 22.8577 54.6511 25.1669 51.521 25.1669ZM51.521 23.2193C53.413 23.2193 54.8597 21.8143 54.8597 19.8111C54.8597 17.8078 53.413 16.4167 51.521 16.4167C49.6291 16.4167 48.1823 17.8078 48.1823 19.8111C48.1823 21.8143 49.6291 23.2193 51.521 23.2193ZM58.0642 25V14.6361H62.3211C64.4634 14.6361 65.9937 15.7768 65.9937 17.947C65.9937 19.3659 65.2981 20.3675 64.1991 20.8683L66.5641 25H64.1435L62.0429 21.2439H60.2205V25H58.0642ZM60.2205 19.3659H62.335C63.2392 19.3659 63.8374 18.7955 63.8374 17.947C63.8374 17.0845 63.2392 16.5141 62.335 16.5141H60.2205V19.3659ZM67.4723 25V14.6361H69.6286V23.122H74.2889V25H67.4723ZM75.1279 25V14.6361H78.5083C81.8749 14.6361 84.0311 16.8062 84.0311 19.8111C84.0311 22.8159 81.861 25 78.5083 25H75.1279ZM77.2841 23.122H78.564C80.5811 23.122 81.8749 21.8282 81.8749 19.8111C81.8749 17.7939 80.5811 16.5141 78.564 16.5141H77.2841V23.122Z"
          fill="black"
        />
      </svg>
      <svg
        className={`${props.classes} flex lg:hidden`}
        width="120"
        height="70"
        viewBox="0 0 90 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="dark:fill-white"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.26143 2.73555C7.20791 2.73555 6.38013 3.54553 6.38013 4.51365C6.38013 5.48177 7.20791 6.29175 8.26143 6.29175C9.31495 6.29175 10.1427 5.48177 10.1427 4.51365C10.1427 3.54553 9.31495 2.73555 8.26143 2.73555ZM3.54044 4.51365C3.54044 2.00693 5.66861 0 8.26143 0C10.8543 0 12.9824 2.00693 12.9824 4.51365C12.9824 7.02037 10.8543 9.0273 8.26143 9.0273C5.66861 9.0273 3.54044 7.02037 3.54044 4.51365ZM16.7976 7.33651C17.9868 5.87587 18.8166 4.17444 19.2247 2.36024L22 2.93953C21.501 5.15802 20.4862 7.2386 19.032 9.02473C17.5778 10.8109 15.722 12.256 13.6042 13.2515C12.2765 13.8756 10.8675 14.3128 9.42036 14.5533L11.4979 22.0223C11.7463 22.9156 12.6994 23.4456 13.6266 23.2063C14.5539 22.967 15.1041 22.0488 14.8557 21.1556L14.186 18.7479C14.1848 18.7482 14.1836 18.7485 14.1824 18.7488L14.1012 18.443L13.6138 16.691L13.6345 16.6857L13.4786 16.0986C15.3748 15.6313 17.1339 14.7495 18.6192 13.5215L20.4686 15.5974C19.3776 16.4993 18.1659 17.2485 16.8697 17.8269L17.5986 20.4476C18.253 22.8001 16.8037 25.2183 14.3616 25.8486C11.9195 26.479 9.4093 25.0829 8.75493 22.7304L6.54084 14.7703C4.27513 14.7381 2.04281 14.2303 0 13.281L1.23382 10.8171C2.96941 11.6237 4.87227 12.0405 6.79925 12.0364C8.72623 12.0322 10.6271 11.6071 12.3589 10.793C14.0907 9.97896 15.6083 8.79715 16.7976 7.33651Z"
          fill="black"
        />
        <path
          className="dark:fill-white"
          d="M28.8347 12V1.63606H30.9909V12H28.8347ZM32.3875 12V1.63606H36.6444C38.7867 1.63606 40.317 2.77679 40.317 4.94695C40.317 6.36591 39.6214 7.36753 38.5224 7.86833L40.8873 12H38.4668L36.3661 8.24394H34.5438V12H32.3875ZM34.5438 6.36591H36.6583C37.5625 6.36591 38.1607 5.79555 38.1607 4.94695C38.1607 4.08445 37.5625 3.51409 36.6583 3.51409H34.5438V6.36591ZM47.4158 1.63606L50.9492 12H48.6678L47.9722 9.88548H44.0075L43.3119 12H41.0305L44.5639 1.63606H47.4158ZM44.6196 8.00745H47.3601L45.9968 3.80623L44.6196 8.00745ZM57.9001 1.63606H60.0564V12H58.387L53.7267 5.72599V12H51.5705V1.63606H53.2259L57.9001 7.86833V1.63606ZM61.454 12V1.63606H63.6103V12H61.454ZM28.9042 25V22.9133H30.9909V25H28.9042ZM43.668 14.6361H45.8799L43.3202 25H40.5101L38.8546 17.6409L37.1992 25H34.3891L31.8294 14.6361H34.1804L35.9472 22.1621L37.6165 14.6361H40.2319L41.9012 22.1621L43.668 14.6361ZM51.521 25.1669C48.391 25.1669 46.026 22.8577 46.026 19.8111C46.026 16.7645 48.3771 14.4691 51.521 14.4691C54.665 14.4691 57.016 16.7645 57.016 19.8111C57.016 22.8577 54.6511 25.1669 51.521 25.1669ZM51.521 23.2193C53.413 23.2193 54.8597 21.8143 54.8597 19.8111C54.8597 17.8078 53.413 16.4167 51.521 16.4167C49.6291 16.4167 48.1823 17.8078 48.1823 19.8111C48.1823 21.8143 49.6291 23.2193 51.521 23.2193ZM58.0642 25V14.6361H62.3211C64.4634 14.6361 65.9937 15.7768 65.9937 17.947C65.9937 19.3659 65.2981 20.3675 64.1991 20.8683L66.5641 25H64.1435L62.0429 21.2439H60.2205V25H58.0642ZM60.2205 19.3659H62.335C63.2392 19.3659 63.8374 18.7955 63.8374 17.947C63.8374 17.0845 63.2392 16.5141 62.335 16.5141H60.2205V19.3659ZM67.4723 25V14.6361H69.6286V23.122H74.2889V25H67.4723ZM75.1279 25V14.6361H78.5083C81.8749 14.6361 84.0311 16.8062 84.0311 19.8111C84.0311 22.8159 81.861 25 78.5083 25H75.1279ZM77.2841 23.122H78.564C80.5811 23.122 81.8749 21.8282 81.8749 19.8111C81.8749 17.7939 80.5811 16.5141 78.564 16.5141H77.2841V23.122Z"
          fill="black"
        />
      </svg>
    </>
  );
};

export default Logo;
