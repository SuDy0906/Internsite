// import { plans } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Planstable = ({ icon, title, content, index }) => (
  

<div className="relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center items-center">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    
                </th>
                <th scope="col" class="px-6 py-3">
                    WOLF
                </th>
                <th scope="col" class="px-6 py-3">
                    EAGLE
                </th>
                
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Product details
                </th>
                <td class="px-6 py-4">
                Xcelmins WOLF is a smart plan designed for individuals who want to have initial experience of systematic investing…
                </td>
                <td class="px-6 py-4">
                Xcelmins EAGLE includes multiple engines/avenues for finding investment opportunities across various segments. Eagle has more advance tools which help you to accelerate compounding during favorable environment
                </td>
                
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Capital Required
                </th>
                <td class="px-6 py-4">
                    10 Lacs
                </td>
                <td class="px-6 py-4">
                    25 Lacs
                </td>
                
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Professional Support
                </th>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
               
            
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Formal Dashboard
                </th>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
               
            
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    No. of Strategies
                </th>
                <td class="px-6 py-4">
                    3
                </td>
                <td class="px-6 py-4">
                    4
                </td>
               
            
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Segments
                </th>
                <td class="px-6 py-4">
                    Limited
                </td>
                <td class="px-6 py-4">
                    Multiple
                </td>
               
            
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Xcelmins Booster
                </th>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
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