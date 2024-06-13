import styles from "../style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero, Plans, Contact, Testi, Purchase, Founder} from "./";

const HomePage = () => (
  <div className="bg-blue-50 w-full overflow-hidden">
    

    <div className={`bg-blue-50 ${styles.flexStart} mt-[108px]`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-blue-50 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <CardDeal />
        <Business />
        <Founder/>
        {/* <Billing /> */}
        {/* <Plans/> */}
        <Testimonials />
        <CTA />
        {/* <Purchase/> */}
        <Contact/>
        <Footer />
      </div>
    </div>
  </div>
);

export default HomePage;