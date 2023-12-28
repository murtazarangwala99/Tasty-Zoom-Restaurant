import React from "react";
import { DEV_GITHUB } from "../utils/constant";

const Privacy = () => {
  return (
    <>
      <div className="flex mx-20 flex-col px-8 gap-4 justify-center my-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy - Tasty Zoom</h1>
          <p className="text-justify text-lg font-semibold underline">
            Last Updated: 29-12-2023
          </p>
          <p className="text-justify text-lg">
            Welcome to Tasty Zoom! We are committed to protecting your privacy and ensuring the
            security of your personal information. This Privacy Policy outlines how we collect,
            use, disclose, and protect your information when you use the Tasty Zoom website or
            mobile application (collectively referred to as the "Platform").
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Information We Collect: </h2>
          <h2 className="text-2xl font-bold">Personal Information</h2>
          <p className="text-justify text-lg">
            When you use our Platform, we may collect personal information that you provide to
            us, such as:
          </p>
          <ul>
            <li>
              - Contact Information: Your name, email address, phone number, and delivery
              address.
            </li>
            <li>
              - Account Information: Username, password, and other credentials used to access
              your Tasty Zoom account.
            </li>
            <li>
              - Payment Information: Credit card details and other payment-related information.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Cookies and Similar Technologies</h2>
          <p className="text-justify text-lg">
            We use cookies and similar technologies to enhance your experience on our Platform,
            improve our services, and analyze usage patterns. These technologies may collect
            information about your browsing behavior and preferences.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">How We Use Your Information</h2>
          <p className="text-justify text-lg">
            We use the collected information for the following purposes:
          </p>
          <ul>
            <li>- To process and fulfill your food orders and deliveries.</li>

            <li>- To provide customer support and respond to inquiries.</li>
            <li>- To personalize your experience and provide tailored recommendations.</li>
            <li>- To improve and optimize our Platform, services, and user experience.</li>
            <li>
              - To send promotional offers, updates, and marketing communications (with your
              consent).
            </li>
            <li>- To comply with legal obligations and enforce our Terms of Service.</li>
          </ul>

          <div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="text-justify text-lg">
              If you have questions or concerns about this Privacy Policy or our privacy
              practices, please contact us at privacy@tastyzoom.com.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Order Now</h2>
          <p className="text-justify text-lg">
            Explore the Tasty Zoom experience today. Browse our menu, place your order, and let
            us bring the world of flavors to your doorstep. Tasty Zoom – where convenience
            meets culinary excellence.
          </p>
          <p className="text-justify text-lg mt-4">
            Thank you for choosing Tasty Zoom. We look forward to serving you!
          </p>
          <a
            className="text-justify text-lg italic mt-2 hover:underline hover:cursor-pointer"
            href={DEV_GITHUB}
            target="_blank">
            Murtuza Rangwala,
          </a>
          <p className="text-justify text-lg italic">The Tasty Zoom, Developer</p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
