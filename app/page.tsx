import styles from "./page.module.css";
import Hero from "@/Components/Hero";
import Herobanner from "@/Components/Herobanner";
import Aboutus from "@/Components/Aboutus";
import Services from "@/Components/Services";
import Quality from "@/Components/Quality";
import Review from "@/Components/Review";
import Footer from "@/Components/Footer";
import BrandMarquee from "@/Components/Marquee";

export default function Home() {
  return (
    <div className={styles.page}>
      <section id="home">
        <Hero/>
      </section>
      <Herobanner/>

      <section id="about">
        <Aboutus/>
      </section>
      <section id="services">
        <Services/>
      </section>
      <Quality/>


      <section id="reviews">
      <Review/>
      </section>
      <BrandMarquee/>

      <Footer/>
    </div>
 
  );
}
