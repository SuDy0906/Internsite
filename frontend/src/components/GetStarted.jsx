import styles from "../style";
import { arrowup } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexStart} group w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-white w-[100%] h-[100%] rounded-full transition-colors duration-300 hover:bg-blue-gradient`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] transition-colors duration-300">
          <span className="text-gradient hover:text-white">Get</span>
        </p>
        <img src={arrowup} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px] transition-colors duration-300">
        <span className="text-gradient hover:text-white">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
