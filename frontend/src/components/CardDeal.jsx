import { about, card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About Us: <br className="sm:block hidden" /> Smart strategies for wealth creation
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      XCELMINS stands as an advanced AI investment platform, specializing in index and cash market trading. Our clients enjoy the flexibility to customize strategies daily or weekly, aligning with their risk preferences. Equipped with cutting-edge tools and insightful analytics, we empower decision-making by eliminating emotional biases. 
      <br/> XCELMINS: Your dedicated partner in navigating financial success.
      </p>
      
      {/* <Button styles={`mt-10`} /> */}
    </div>
  
    <div className={layout.sectionImg}>
      <img src={about} alt="billing" className="w-[90%] h-[80%]" />
    </div>
   
  </section>
);

export default CardDeal;
