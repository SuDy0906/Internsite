// import { plans } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import "../table.css"
const Planstable = ({ icon, title, content, index }) => (
  <div className="relative overflow-x-auto shadow-md sm:rounded-xl flex justify-center items-center">
    <table className="responsiveTable w-full text-sm text-left rtl:text-right text-white dark:text-white">
      <thead className="text-xs text-gray-700 uppercase bg-orange-400 dark:bg-orange-400 dark:text-white">
        <tr>
          <th scope="col" className="border-4 border-white rounded-xl px-6 py-3">
            Features
          </th>
          <th scope="col" className="border-4 border-white rounded-xl px-6 py-3 plantitle">
            WOLF
          </th>
          <th scope="col" className="border-4 border-white rounded-xl px-6 py-3 plantitle">
            EAGLE
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b border-gray-600 hover:bg-orange-100">
          <th scope="row" className="border-4 border-white rounded-xl px-6 py-4 font-bold text-black whitespace-nowrap dark:text-black">
            Product details
          </th>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            Xcelmins WOLF is a smart plan designed for individuals who want to have initial experience of systematic investing…
          </td>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            Xcelmins EAGLE includes multiple engines/avenues for finding investment opportunities across various segments. Eagle has more advance tools which help you to accelerate compounding during favorable environment
          </td>
        </tr>
        <tr className="bg-gray-200 border-b border-gray-600 hover:bg-orange-100">
          <th scope="row" className="border-4 border-white rounded-xl px-6 py-4 font-bold text-black whitespace-nowrap dark:text-black">
            Capital Required
          </th>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            10 Lacs
          </td>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            25 Lacs
          </td>
        </tr>
        <tr className="bg-white border-b border-gray-600 hover:bg-orange-100">
          <th scope="row" className="border-4 border-white rounded-xl px-6 py-4 text-black font-bold whitespace-nowrap dark:text-black">
            Professional Support
          </th>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            Yes
          </td>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            Yes
          </td>
        </tr>
        <tr className="bg-gray-200 border-b border-gray-600 hover:bg-orange-100">
          <th scope="row" className="border-4 border-white rounded-xl px-6 py-4 font-bold text-black whitespace-nowrap dark:text-black">
            Formal Dashboard
          </th>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            No
          </td>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            Yes
          </td>
        </tr>
        <tr className="bg-white border-b border-gray-600 hover:bg-orange-100">
          <th scope="row" className="border-4 border-white rounded-xl px-6 py-4 font-bold text-black whitespace-nowrap dark:text-black">
            No. of Strategies
          </th>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            3
          </td>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            4
          </td>
        </tr>
        <tr className="bg-gray-200 border-b border-gray-600 hover:bg-orange-100">
          <th scope="row" className="border-4 border-white rounded-xl px-6 py-4 font-bold text-black whitespace-nowrap dark:text-black">
            Segments
          </th>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            Limited
          </td>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            Multiple
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-orange-100">
          <th scope="row" className="border-4 border-white rounded-xl px-6 py-4 font-bold text-black whitespace-nowrap dark:text-black">
            Xcelmins Booster
          </th>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            No
          </td>
          <td className="border-4 border-white rounded-xl px-6 py-4 text-black">
            Yes
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );

const Plans = () =>  (
  <section id="plans" className={layout.section}>
    

    <div className={`${layout.sectionImg} flex-col`}>
      {/* {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))} */}
      <Planstable/>
    </div>
   </section>
);

export default Plans;