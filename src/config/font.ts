import localFont from "next/font/local";

export const suitFont = localFont({
  src: [
    {
      path: "../fonts/SUIT-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/SUIT-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
