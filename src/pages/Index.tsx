import AmruteaHeader from "@/components/AmruteaHeader";
import AmruteaHero from "@/components/AmruteaHero";
import AmruteaBrandStatement from "@/components/AmruteaBrandStatement";
import AmruteaCollections from "@/components/AmruteaCollections";
import AmruteaStory from "@/components/AmruteaStory";
import AmruteaProducts from "@/components/AmruteaProducts";
import AmruteaTestimonials from "@/components/AmruteaTestimonials";
import AmruteaLifestyle from "@/components/AmruteaLifestyle";
import AmruteaNewsletter from "@/components/AmruteaNewsletter";
import AmruteaFooter from "@/components/AmruteaFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AmruteaHeader />
      <main>
        <AmruteaHero />
        <AmruteaBrandStatement />
        <AmruteaCollections />
        <AmruteaStory />
        <AmruteaProducts />
        <AmruteaTestimonials />
        <AmruteaLifestyle />
        <AmruteaNewsletter />
      </main>
      <AmruteaFooter />
    </div>
  );
};

export default Index;
