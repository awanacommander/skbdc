import MainSection from "@/app/components/Home/MainSection";
import OurDesign from "@/app/components/Home/OurDesign";
import OurPartners from "@/app/components/Home/OurPartners";
import OurService from "@/app/components/Home/OurServices";
import PremiumSolutions from "@/app/components/Home/PremiumSolutions";
import WelcomePanel from "@/app/components/Home/WelcomePanel";

export const metadata = {
  title: 'Home • Skbdc',
  description: 'YOUR VISION OUR EXPERTISE LET’S TALK WELCOME TO SHIRLINGTON KITCHEN & BATH...',
  site_name: "Skbdc",
  openGraph: {
    title: 'Home • Skbdc',
    images: [
      {
        url: '/assets/services/kitchen.webp',
        alt: 'SKBDC',
      },
    ],
  }
};

export default function Home() {
  return (
    <div className="relative">
      <MainSection />
      <WelcomePanel />
      <OurService />
      <PremiumSolutions />
      <OurDesign />
      <OurPartners />
    </div>
  );
}
