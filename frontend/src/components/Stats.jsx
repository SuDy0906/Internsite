import { useEffect, useRef } from "react";
import { stats } from "../constants";
import styles from "../style";
import CountUp from "react-countup";

const Stats = () => {
  const countersRef = useRef([]);
  const observersRef = useRef([]);

  useEffect(() => {
    countersRef.current = countersRef.current.slice(0, stats.length);

    countersRef.current.forEach((counter, index) => {
      observersRef.current[index] = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("start-count");
            observersRef.current[index].disconnect();
          }
        });
      });

      observersRef.current[index].observe(counter);
    });

    return () => {
      observersRef.current.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          ref={(el) => (countersRef.current[index] = el)}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <CountUp
            start={0}
            end={stat.value}
            duration={3}
            className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-black"
            suffix={stat.suffix}
            redraw={false}
          />
          <p className="font-poppins font-bold xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
