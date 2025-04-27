import styles from "./page.module.css";
import Hero from "@/Components/Hero";
import Herobanner from "@/Components/Herobanner";
import Aboutus from "@/Components/Aboutus";
import Services from "@/Components/Services";
import Quality from "@/Components/Quality";
import Review from "@/Components/Review";
import ContactUs from "@/Components/Contact";
import Footer from "@/Components/Footer";

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


      <section id="contact">
        <ContactUs/>
      </section>
      <Footer/>
    </div>
 
  );
}
