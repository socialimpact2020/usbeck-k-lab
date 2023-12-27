import Image from "next/image";
import Link from "next/link";
import dummy1 from "@/images/dummy1.jpg";
import dummy2 from "@/images/dummy2.jpg";
import dummyImg from "@/images/img_loading.jpg";
import { urls } from "@/config/site";
import Header from "@/components/UI/Header/Header";
import Footer from "@/components/UI/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mb-10">
        <div className="bg-gray-950 relative">
          <video muted autoPlay loop className="opacity-[0.5] h-[720px] w-full">
            <source src="/background-video.mp4" />
          </video>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-6xl text-white font-bold shadow-sm">
              Uzbekistan
            </h2>
            <h2 className="text-6xl text-white font-bold shadow-sm mt-5 mb-10">
              K_LAB MAKER SPACE
            </h2>
            <button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-5 rounded-md shadow-lg">
              <Link href={urls.aboutus}>Enter MarketSpace</Link>
            </button>
          </div>
        </div>

        {/* 프로그램 / 오시는길 */}
        <div className="grid grid-cols-2 max-w-7xl m-auto  mt-10 gap-20">
          <div>
            <div className="flex items-center justify-between border-b-gray-300 border-b-2 pb-1">
              <p className="text-lg font-semibold">Programs</p>

              <div className="flex items-center space-x-2">
                <Link href={urls.sw} className="text-md text-gray-500">
                  More
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 mb-5 gap-5">
              <Link href="/programs/sw/0">
                <div>
                  <Image
                    src={dummyImg}
                    alt="dummy1"
                    className="aspect-square object-cover w-[300px]"
                  />

                  <h3 className="font-bold my-3">Coming soon..</h3>

                  <h3 className="text-xs">
                    모집 기간 | 2023-12-09 ~ 2023-12-20
                  </h3>
                  <h3 className="text-xs">
                    진행 기간 | 2023-12-21 ~ 2023-12-22
                  </h3>
                </div>
              </Link>
              <Link href="/programs/sw/0">
                <div>
                  <Image
                    src={dummyImg}
                    alt="dummy2"
                    className="aspect-square object-cover w-[300px]"
                  />

                  <h3 className="font-bold my-3">Coming soon..</h3>

                  <h3 className="text-xs">
                    모집 기간 | 2023-12-09 ~ 2023-12-20
                  </h3>
                  <h3 className="text-xs">
                    진행 기간 | 2023-12-21 ~ 2023-12-22
                  </h3>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between border-b-gray-300 border-b-2 pb-1">
              <p className="text-lg font-semibold">Way to come</p>

              <div className="flex items-center space-x-2">
                <Link
                  href="https://www.google.com/maps/place/25+Shakhrisabz+Street,+Tashkent,+%EC%9A%B0%EC%A6%88%EB%B2%A0%ED%82%A4%EC%8A%A4%ED%83%84/@41.3055591,69.2784915,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae8ad671d84dcb:0x3175fb9f24cd3354!8m2!3d41.3055591!4d69.2810718!16s%2Fg%2F11h82385c7?entry=ttu"
                  className="text-md text-gray-500"
                  target="_blank"
                >
                  More
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-5 bg-black w-full h-[378px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.1518968960327!2d69.27849151203073!3d41.30555907119057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad671d84dcb%3A0x3175fb9f24cd3354!2zMjUgU2hha2hyaXNhYnogU3RyZWV0LCBUYXNoa2VudCwg7Jqw7KaI67Kg7YKk7Iqk7YOE!5e0!3m2!1sko!2skr!4v1703168927173!5m2!1sko!2skr"
                width="100%"
                height="378"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* 공지사항 / 언론보도 */}
        <div className="grid grid-cols-2 max-w-7xl m-auto  mt-20 gap-20">
          <div>
            <div className="flex items-center justify-between border-b-gray-300 border-b-2 pb-1">
              <p className="text-lg font-semibold">Notice</p>

              <div className="flex items-center space-x-2">
                <Link href={urls.notice} className="text-md text-gray-500">
                  More
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="font-bold">
                      <Link href={urls.notice + "/1"}>Coming soon..</Link>
                    </td>

                    <td className="text-right text-gray-500">2023-12-21</td>
                  </tr>
                  <tr>
                    <td className="font-bold">
                      <Link href={urls.notice + "/1"}>Coming soon.. </Link>
                    </td>

                    <td className="text-right text-gray-500">2023-12-21</td>
                  </tr>
                  <tr>
                    <td className="font-bold">
                      <Link href={urls.notice + "/1"}>Coming soon..</Link>
                    </td>

                    <td className="text-right text-gray-500">2023-12-21</td>
                  </tr>
                  <tr>
                    <td className="font-bold">
                      <Link href={urls.notice + "/1"}>Coming soon..</Link>
                    </td>

                    <td className="text-right text-gray-500">2023-12-21</td>
                  </tr>
                  <tr>
                    <td className="font-bold">
                      <Link href={urls.notice + "/1"}>Coming soon..</Link>
                    </td>

                    <td className="text-right text-gray-500">2023-12-21</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between border-b-gray-300 border-b-2 pb-1">
              <p className="text-lg font-semibold">News</p>

              <div className="flex items-center space-x-2">
                <Link href={urls.news} className="text-md text-gray-500">
                  More
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="font-bold">
                      <Link href="https://google.com">Coming soon..</Link>
                    </td>

                    <td className="text-right text-gray-500">2023-12-21</td>
                  </tr>
                  <tr>
                    <td className="font-bold">
                      <Link href="https://google.com">Coming soon..</Link>
                    </td>

                    <td className="text-right text-gray-500">2023-12-21</td>
                  </tr>
                  <tr>
                    <td className="font-bold">
                      <Link href="https://google.com">Coming soon..</Link>
                    </td>

                    <td className="text-right text-gray-500">2023-12-21</td>
                  </tr>
                  <tr>
                    <td className="font-bold">
                      <Link href="https://google.com">Coming soon..</Link>
                    </td>

                    <td className="text-right text-gray-500">2023-12-21</td>
                  </tr>
                  <tr>
                    <td className="font-bold">
                      <Link href="https://google.com">Coming soon..</Link>
                    </td>

                    <td className="text-right text-gray-500">2023-12-21</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
