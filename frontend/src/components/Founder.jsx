import React from 'react';
import 'remixicon/fonts/remixicon.css';
import '../card.css'; // Make sure to adjust the path according to your project structure
import styles, { layout } from "../style";
import { people01 } from '../assets';
const CardInfoButton = () => {
  return (
    <div className='flex flex-row space-x-14'>
      {/* Card */}
      <div className="card">
        <div className="card__border">
          <div className="card__perfil">
            <img src={people01} alt="card image" className="card__img" />
          </div>
        </div>

        <h3 className="card__name">Mynton Moore</h3>
        <span className="card__profession">Frontend Developer</span>

        {/* Card info */}
        <div className="info">
          <div className="info__icon">
            <i className="ri-information-line"></i>
          </div>

          <div className="info__border">
            <div className="info__perfil">
              <img src={people01} alt="card image" className="info__img" />
            </div>
          </div>

          <div className="info__data">
            <h3 className="info__name">Jules Moore Mynton</h3>
            <span className="info__profession">Master in Frontend Developer</span>
            <span className="info__location">Lima - Perú</span>
          </div>

          <div className="info__social">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="info__social-link">
              <span className="info__social-icon">
                <i className="ri-linkedin-box-line"></i>
              </span>
            </a>

            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="info__social-link">
              <span className="info__social-icon">
                <i className="ri-dribbble-fill"></i>
              </span>
            </a>

            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="info__social-link">
              <span className="info__social-icon">
                <i className="ri-github-fill"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__border">
          <div className="card__perfil">
            <img src={people01} alt="card image" className="card__img" />
          </div>
        </div>

        <h3 className="card__name">Mynton Moore</h3>
        <span className="card__profession">Frontend Developer</span>

        {/* Card info */}
        <div className="info">
          <div className="info__icon">
            <i className="ri-information-line"></i>
          </div>

          <div className="info__border">
            <div className="info__perfil">
              <img src={people01} alt="card image" className="info__img" />
            </div>
          </div>

          <div className="info__data">
            <h3 className="info__name">Jules Moore Mynton</h3>
            <span className="info__profession">Master in Frontend Developer</span>
            <span className="info__location">Lima - Perú</span>
          </div>

          <div className="info__social">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="info__social-link">
              <span className="info__social-icon">
                <i className="ri-linkedin-box-line"></i>
              </span>
            </a>

            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="info__social-link">
              <span className="info__social-icon">
                <i className="ri-dribbble-fill"></i>
              </span>
            </a>

            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="info__social-link">
              <span className="info__social-icon">
                <i className="ri-github-fill"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Founder = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
  
      <div className="w-full flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
          Our Founders 
        </h2>
        
      </div>
  
      <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
        <CardInfoButton/>
      </div>
    </section>
  );
  
  export default Founder;
  
