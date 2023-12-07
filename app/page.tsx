import Banner from "@/components/Banner/page";
import Section1 from "@/components/Section1/page";
import Section2 from "@/components/Section2/page";
import Section3 from "@/components/Section3/page";
import Section4 from "@/components/Section4/page";
import Section5 from "@/components/Section5/page";
import Section6 from "@/components/Section6/page";
import Section7 from "@/components/Section7/page";
import Section8 from "@/components/Section8/page";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
}
