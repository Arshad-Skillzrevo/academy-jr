export const metadata = {
  title: "SkillzRevo | Best Data Science, AI & Cybersecurity Training Institute in India 2025",
  description:
    "Transform your career with SkillzRevo's industry-leading courses in Data Science, Generative AI, Cybersecurity & Business Intelligence. 100% placement assistance with live projects.",
    keywords: ["SkillzRevo", "data science training", "AI courses", "cybersecurity certification", "business intelligence", "online tech courses india"],
  alternates: {
    canonical: "https://academy.skillzrevo.com/",
  },
    metadataBase: new URL('https://academy.skillzrevo.com'),

  openGraph: {
    title: "SkillzRevo | Best Data Science, AI & Cybersecurity Training Institute in India 2025",
    description:
      "Transform your career with SkillzRevo's industry-leading courses in Data Science, Generative AI, Cybersecurity & Business Intelligence. 100% placement assistance with live projects.",
    url: "https://academy.skillzrevo.com/",
    images: [
      {
        url: "/favicon.png",
        width: 500,
        height: 500,
      },
    ],
  },
};

import BookDemo from "./components/BookDemo";
import CourseCatalog from "./components/CourseCatalog";
import Hero from "./components/Hero";
import LearningJourney from "./components/LearningJourney";
import OurTeam from "./components/OurTeam";
import PopularCourses from "./components/PopularCourses";
import ReviewsSlider from "./components/ReviewsSlider";
import WhyChooseUs from "./components/Whychooseus";


export default function Page() {
  return (
    <>
      <Hero />
      <PopularCourses />
      <WhyChooseUs/>
      <CourseCatalog />
      <ReviewsSlider />
      <LearningJourney/>
      <OurTeam/>
      <BookDemo />
    </>
  );
}