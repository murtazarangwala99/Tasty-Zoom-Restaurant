import React, { useEffect, useState } from "react";

const Contact = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/murtazarangwala99");
    const json = await data.json();
    // console.log(json);
    setUser(json);
  };

  return (
    <>
      <div className="flex mx-4 sm:mx-20 flex-col sm:px-8 gap-4 justify-center my-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">Contact Us - Tasty Zoom</h1>
          <p className="text-justify text-lg">
            We're thrilled to connect with you! Whether you have questions, feedback, or simply
            want to say hello, the Tasty Zoom team is here to assist you. Feel free to reach
            out through the following channels:
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Customer Support</h2>
          <p className="text-justify text-lg">
            For any inquiries related to your orders, delivery, or general questions, our
            dedicated customer support team is ready to assist you. You can reach us through:
          </p>
          <ul className="list-disc px-10 text-lg">
            <li className="hover:underline">
              <a href="mailto:dummyemail@gmail.com" target="_blank">
                <span className="font-semibold ">Email: </span> dummyemail@gmail.com
              </a>
            </li>
            <li className="hover:underline">
              <a href="tel:+91 9988776655" target="_blank">
                <span className="font-semibold">Phone: </span> +91 9988776655
              </a>
            </li>
          </ul>
          <p className="text-justify text-lg">
            Our customer support hours are 9AM to 6PM IST, Monday to Saturday.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Restaurant Partnerships</h2>
          <p className="text-justify text-lg">
            If you are a restaurant owner interested in partnering with Tasty Zoom, we'd love
            to hear from you! Collaborate with us to expand your reach and connect with a
            broader audience. Reach our partnerships team via:
          </p>
          <ul className="list-disc px-10 text-lg">
            <li className="hover:underline">
              <a href="mailto:partnershipsdummy@gmail.com" target="_blank">
                <span className="font-semibold ">Email: </span> partnershipsdummy@gmail.com
              </a>
            </li>
            <li className="hover:underline">
              <a href="tel:+91 9944332211" target="_blank">
                <span className="font-semibold">Phone: </span> +91 9944332211
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Feedback</h2>
          <p className="text-justify text-lg">
            Your feedback is invaluable to us. Whether it's a compliment, suggestion, or even
            constructive criticism, we welcome it all.
          </p>
        </div>

        <div>
          <p className="text-justify text-lg mt-4">
            Thank you for choosing Tasty Zoom. We look forward to serving you!
          </p>
          <a
            className="text-justify text-lg italic mt-2 hover:underline hover:cursor-pointer"
            href={user?.html_url}
            target="_blank">
            Murtuza Rangwala,
          </a>
          <p className="text-justify text-lg italic">The Tasty Zoom, Developer</p>
        </div>

        {/* User Card */}
        <div className="flex text-center justify-center">
          <div className="border-2 p-2 border-black">
            <div className="border-b-2 text-center">@Developer</div>
            <img src={user?.avatar_url} className="w-[150px]" alt="Github-User-Image" />
            <div>
              <p>{user?.name}</p>
              <p className="mb-2">{user?.location}</p>
              <a
                href={user?.html_url}
                target="_blank"
                className="hover:underline rounded-lg font-bold px-2 py-2 bg-blue-400 text-white ">
                Github Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
