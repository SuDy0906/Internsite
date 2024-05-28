import { useEffect, useRef } from "react";
import { stats } from "../constants";
import styles from "../style";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} mt-16 flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true, // ensures the animation runs only once
          threshold: 0.1 // triggers when 10% of the element is visible
        });

        return (
          <div
            key={stat.id}
            ref={ref}
            className={`flex-1 flex justify-start items-center flex-row m-3`}
          >
            {inView && (
              <CountUp
                start={0}
                end={stat.value}
                duration={3}
                className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-black"
                suffix={stat.suffix}
                redraw={false}
              />
            )}
            <p className="font-poppins font-bold xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
