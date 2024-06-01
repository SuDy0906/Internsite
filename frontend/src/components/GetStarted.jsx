import styles from "../style";
import { arrowup } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexStart} group w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-blue-50 w-[100%] h-[100%] rounded-full transition-colors duration-300 group-hover:bg-opacity-0`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins text-sky-900 font-medium text-[18px] leading-[23.4px] transition-colors duration-300 group-hover:text-white">
          <span >Get</span>
        </p>
        <img src={arrowup} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      <p className="font-poppins text-sky-900 font-medium text-[18px] leading-[23.4px] transition-colors duration-300 group-hover:text-white">
        <span>Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;