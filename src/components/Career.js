import React from "react";
import { DEV_GITHUB } from "../utils/constant";

const Career = () => {
  return (
    <>
      <div className="flex mx-20 flex-col px-8 gap-4 justify-center my-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">Careers at Tasty Zoom</h1>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Join Our Culinary Journey</h2>
          <p className="text-justify text-lg">
            At Tasty Zoom, we believe in the power of great food and exceptional service. Our
            team is the heart and soul of our online food delivery platform, and we're always
            on the lookout for passionate individuals who share our commitment to culinary
            excellence and customer satisfaction.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Who We Are</h2>
          <p className="text-justify text-lg">
            Tasty Zoom is not just a food delivery website; it's a community of food
            enthusiasts, tech innovators, and customer service champions. We're on a mission to
            redefine the online food delivery experience, bringing together the best flavors
            from around the world and delivering them straight to our customers' doors.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Current Openings</h2>
          <p className="text-justify text-lg">
            Explore our current job opportunities and discover how you can contribute to the
            Tasty Zoom experience:
          </p>

          <p className="text-justify text-lg font-semibold"> ## [Insert Job Title 1]</p>
          <p className="text-justify text-lg">- [Brief description of responsibilities]</p>
          <p className="text-justify text-lg">- [Qualifications and requirements]</p>
          <p className="text-justify text-lg">- [Link to application]</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">How to Apply</h2>
          <p className="text-justify text-lg">
            Ready to embark on a flavorful career journey with Tasty Zoom? Visit this Career
            Page to view all current job openings and submit your application online. If you
            don't see a specific role that matches your skills, feel free to send your resume
            and cover letter to careers@tastyzoom.com, and we'll keep it on file for future
            opportunities.
          </p>
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

export default Career;
