import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Plans, Contact, Testi, Purchase} from "./components";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}` }>
        <Navbar />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <CardDeal />
        <Business />
        
        <Billing />
        
        <Plans/>
        
        <Testimonials />
        
        
        <CTA />
        <Purchase/>
        {/* <Clients /> */}
        <Contact/>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
