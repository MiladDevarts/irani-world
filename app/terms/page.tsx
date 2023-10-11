import React from "react";

import OverlayMenu from "@/components/Overlay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irani World | Terms",
  description: "",
};

const page = () => {
  return (
    <>
      <OverlayMenu />
      <main className="flex flex-col lg:flex-row container">
        <div className="w-full flex flex-col mt-10">
          <h1 className="text-black text-3xl font-semibold font-outfit mb-20 lg:mt-0 mt-28">
            Terms & privacy policy
          </h1>
          <h4 className="text-blue text-xl">
            Irani.World: A Professional Iranian Community Platform
          </h4>
          <p className="text-white-shade-11 mt-8 mb-16">
            The Irani.World platform we have created provides Iranian businesses
            and professionals - one place to find one another for services,
            products, and events. In addition to business and professional
            profiles, Irani.World has a
            <span className="px-2 text-black font-medium">
              financial markets page, blog, an events calendar, music from
              Iranian artists, and a travel page.
            </span>
            Irani.World is a platform which hopes to better unite the Iranian
            community through
            <span className="px-2 text-black font-medium">
              culture and business.
            </span>
          </p>
          <h4 className="text-blue text-xl">Community Portal for Content</h4>
          <p className="text-white-shade-11 mt-8 mb-16">
            The financial markets page gives users quick access to stocks,
            commodities, and crypto values. The music page allows artists to
            advertise their works by allowing artists to embed direct links to
            their works and advertise their portfolios. An events calendar will
            allow businesses, professionals, artists, and venues to post their
            important dates for concerts, art shows, grand openings, sales and
            other special events. Finally, we have included a travel portal to
            help everyone plan travel for business or pleasure.
          </p>
          <h4 className="text-blue text-xl">
            Business Growth Within the Community
          </h4>
          <p className="text-white-shade-11 mt-8 mb-16">
            Every important platform page or section includes embedded banner
            ads. Our platform has banner in four sizes, large, medium, normal,
            and small. The financial markets main page has 2 medium banners. The
            blog page, will have 4 small banners. The blog page will have 4
            small banners. The events page has 3 normal sized banners. The
            travel page has 3 normal sized banners. Banner ads can be reserved
            and edited directly from a user’s dashboard that is included with
            the profile.
          </p>
          <h4 className="text-blue text-xl">
            Professional and Business Profiles and Dashboards
          </h4>
          <p className="text-white-shade-11 mt-8 mb-16">
            To list your professional, business, or artist profile on the .World
            platform, users have the option of four free user plans and four
            paid user plans. The plans are Professional, Artists & Events,
            Business Platinum, and Business Ultra. The paid plans are feature
            filled, highly customizable, and offer discounts for platform ads.
            Paid plan features might consist of menus for restaurants, property
            listings for realtors, and product pages for shops. In addition,
            paid plans receive priority in user search results. The four free
            plans have basic features to get you started with limited profile
            customization ability. Dashboards are provided for all users which
            will allow them to edit their profiles and purchase advertising.
          </p>
          <h4 className="text-blue text-xl">Business Portal</h4>
          <p className="text-white-shade-11 mt-8 mb-16">
            Users can purchase a plan online with payment going directly to a
            United States financial institution. Nonprofits may request a
            temporary free plan with the full features of a paid plan if the
            request is made and reviewed by our team.
          </p>
          <h4 className="text-blue text-xl">Special Services</h4>
          <p className="text-white-shade-11 mt-8 mb-16">
            Users who choose to, may request a Blue Checkmark to verify their
            identity. Requests for Blue Checkmarks must be reviewed and approved
            by our team. Additional services and features may shall be added to
            our platform over time.
          </p>
          <h4 className="text-blue text-xl">Contact Us</h4>
          <p className="text-white-shade-11 mt-8 mb-16">
            For more information about the Irani.World platform, people can
            contact us globally. We have a remote office in New York, developers
            in Los Angeles, management and development in Stockholm, Sweden, and
            development and 24 hour customer support in Dubai, UAE.
          </p>
        </div>
      </main>
    </>
  );
};

export default page;
