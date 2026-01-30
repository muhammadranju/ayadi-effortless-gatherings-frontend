import AboutPage from "./AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AYADI Catering",
  description:
    "Learn about AYADI Catering's story, our commitment to quality, and our passion for creating memorable culinary experiences.",
  alternates: {
    canonical: "https://www.ayadicatering.com/about",
  },
};

function page() {
  return (
    <>
      <AboutPage />
    </>
  );
}

export default page;
