import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center h-[100vh]">
      {/* main */}
      <div className="flex flex-col gap-5 p-16 bg-gray-100 items-center ">
        <h1 className=" text-7xl font-bold text-blue-600">404</h1>
        <p className="font-bold text-xl text-gray-500 w-96 mx-auto">
          Oops. Looks like the page you're looking for no longer exists
        </p>
        <p className="text-lg text-gray-400 font-bold">
          But we're here to bring you back to safety
        </p>
        <button className="font-bold text-white bg-red-400 w-40 mx-auto py-1 rounded-3xl">
        <Link to="/home">
            Back to Home
          </Link>
        </button>
      </div>

      {/* Image */}
      <div className="mt-16 mb-14">
        <img
          src="https://flatlogic.github.io/sofia-react-template/static/media/errorImage.f2dac3af.svg"
          alt=""
          className="w-[50%] mx-auto"
        />
      </div>

      {/* footer */}
      <footer>
        <div className="flex justify-center p-3 gap-3 items-center">
          <p className="text-sm text-gray-500 ">
            2021 © Flatlogic. Hand-crafted &amp; Made with
          </p>
          <div className="">
            <AiFillHeart className="text-red-600" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ErrorPage;
