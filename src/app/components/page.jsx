import BookDemo from "./BookDemo";
import CourseCatalog from "./CourseCatalog";
import Hero from "./Hero";
import LearningJourney from "./LearningJourney";
import OurTeam from "./OurTeam";
import PopularCourses from "./PopularCourses";
import ReviewsSlider from "./ReviewsSlider";
import Whychooseus from "./Whychooseus";

export default function Page() {
  return (
    <>
      <Hero />
      <PopularCourses />
      <Whychooseus/>
      <CourseCatalog />
      <ReviewsSlider />
      <LearningJourney/>
      <OurTeam/>
      <BookDemo />
    </>
  );
}