import Image from "next/image";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import TopReviewSection from "../components/TopReviewSection";
import NewsletterSection from "../components/NewsletterSection";
import TopDestinations from "../components/TopDestinations";

export default function Home() {
  return (
    <div className="font-sans">
      <div>
        <Hero />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <TopDestinations />
      </div>
      <div>
        <TopReviewSection />
      </div>
      <div>
        <NewsletterSection />
      </div>
      
    </div>
  );
}
