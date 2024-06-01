import styles from "../style";
import PButton from "./PButton";

const Purchase = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} shadow-xl flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] `}>
  <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-6 sm:space-y-0">
    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} shadow-xl bg-slate-600 rounded-[20px]  w-full sm:w-auto`}>
      <div className="text-center sm:text-left">
        <div className="mb-4 font-bold text-xl text-white shadow-xl bg-slate-900 text-center py-3 rounded-lg">Subscribe to Wolf</div>
        <div className="relative bg-white overflow-x-auto shadow-xl sm:rounded-xl">
          <table className="w-full text-sm text-left rtl:text-right text-black dark:text-white">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-sky-900 dark:text-white">
              <tr>
                <th className="border-4 border-white rounded-xl px-5 py-3">Monthly</th>
                <th className="border-4 border-white rounded-xl px-5 py-3">3 Months</th>
                <th className="border-4 border-white rounded-xl px-5 py-3">6 Months</th>
                <th className="border-4 border-white rounded-xl px-4 py-3">12 Months</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-600 hover:bg-sky-100">
                <th className="border-4 border-white rounded-xl px-1 py-1 font-bold text-black whitespace-nowrap dark:text-black"><PButton /></th>
                <td className="border-4 border-white rounded-xl px-1 py-1 text-black"><PButton /></td>
                <td className="border-4 border-white rounded-xl px-1 py-1 text-black"><PButton /></td>
                <td className="border-4 border-white rounded-xl px-1 py-1 text-black"><PButton /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}  bg-slate-600 rounded-[20px] shadow-xl w-full sm:w-auto`}>
      <div className="text-center sm:text-left">
        <div className="mb-4 font-bold text-xl text-white shadow-xl bg-slate-900 text-center py-3 rounded-lg">Subscribe to Eagle</div>
        <div className="relative bg-white shadow-xl overflow-x-auto  sm:rounded-xl">
          <table className="w-full text-sm text-left rtl:text-right text-black dark:text-white">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-sky-900 dark:text-white">
              <tr>
                <th className="border-4 border-white rounded-xl px-5 py-3">Monthly</th>
                <th className="border-4 border-white rounded-xl px-5 py-3">3 Months</th>
                <th className="border-4 border-white rounded-xl px-5 py-3">6 Months</th>
                <th className="border-4 border-white rounded-xl px-4 py-3">12 Months</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-600 hover:bg-sky-100">
                <th className="border-4 border-white rounded-xl px-1 py-1 font-bold text-black whitespace-nowrap dark:text-black"><PButton /></th>
                <td className="border-4 border-white rounded-xl px-1 py-1 text-black"><PButton /></td>
                <td className="border-4 border-white rounded-xl px-1 py-1 text-black"><PButton /></td>
                <td className="border-4 border-white rounded-xl px-1 py-1 text-black"><PButton /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

)


            {/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    5999
                </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    4999
                </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    4499
                </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    3999
                </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    7499
                </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    6749
                </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    6374
                </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    5999
                </span>
            </button> */}
        
        

export default Purchase;