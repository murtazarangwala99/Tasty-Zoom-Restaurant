import React from "react";
import { DEV_GITHUB } from "../utils/constant";

const About = () => {
  return (
    <>
      <div className="flex mx-20 flex-col px-8 gap-4 justify-center my-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">About Us - Tasty Zoom</h1>
          <p className="text-justify text-lg">
            Welcome to Tasty Zoom, your ultimate destination for a culinary journey delivered
            right to your doorstep. We are more than just an online food delivery website, we
            are your goto hub for a diverse array of flavors and a seamless dining experience
            from the comfort of your home.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Our Digital Kitchen</h2>
          <p className="text-justify text-lg">
            At Tasty Zoom, we are passionate about bringing the finest cuisines to your table
            with just a few clicks. Our virtual kitchen is a symphony of culinary innovation,
            where skilled chefs craft delectable dishes using high-quality ingredients sourced
            from trusted partners.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Why Tasty Zoom?</h2>
          <ul className="list-disc px-10">
            <li className="text-justify text-lg">
              <span className="font-semibold">Convenience: </span> Enjoy the luxury of gourmet
              dining without the hassle. Order from the comfort of your home or office, and
              we'll take care of the rest.
            </li>
            <li className="text-justify text-lg">
              <span className="font-semibold">Variety: </span> Our extensive menu ensures that
              there's something for everyone. Explore a diverse range of cuisines, from hearty
              comfort food to exotic delicacies.
            </li>
            <li className="text-justify text-lg">
              <span className="font-semibold">Quality Assurance: </span> We prioritize quality
              in every aspect, from the selection of ingredients to the preparation and
              packaging of your meals. Your satisfaction is our guarantee.
            </li>
            <li className="text-justify text-lg">
              <span className="font-semibold">Fast and Reliable Delivery: </span>
              Experience prompt and reliable delivery services. Your order arrives fresh and
              flavorful, just as it should be.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Sustainable Dining</h2>
          <p className="text-justify text-lg">
            At Tasty Zoom, we are committed to sustainable dining practices. Our packaging is
            eco-friendly, and we continuously strive to minimize our environmental impact. Join
            us in making conscious choices that contribute to a greener, healthier planet.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Customer Satisfaction</h2>
          <p className="text-justify text-lg">
            Your satisfaction is our top priority. We value your feedback and continuously work
            to enhance your Tasty Zoom experience. Feel free to reach out to our customer
            support team for any assistance or suggestions.
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

export default About;
