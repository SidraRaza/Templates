import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResponsiveNav from "@/components/ResponsiveNav";
import Customer from "@/components/Customer";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
export default function Home() {
  return (
  <main>
    <Header/>
    <ResponsiveNav/>
  <Hero/>
  <Customer/>
  <Team/>
  <Footer/>
  </main>
  );
}
