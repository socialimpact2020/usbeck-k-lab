"use client";
import Footer from "@/components/UI/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import Lottie from "react-lottie-player";
import lottieJson from "../..//public/404Lottie.json";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="my-20">
        <h1 className="text-center text-5xl font-bold text-gray-500">404</h1>
        <h2 className="text-center text-3xl text-gray-300 mt-5">
          Page not found.
        </h2>
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: "100%", height: "60dvh" }}
        />

        <p className="text-center text-sm">
          The Page you are looing for doesn't exist or an other error occured.
        </p>
        <p className="text-center text-sm">
          Go back, or head over to <strong>nipak-labuzb.co.kr</strong> to choose
          a new direction.
        </p>
      </div>
      <Footer />
    </>
  );
}
