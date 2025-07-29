import * as React from 'react';

function Viewallbutton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex justify-between items-center gap-2 pt-0.5 pr-2 pb-0.5 pl-2 text-[12px] font-plusjakarta  text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    >
      {children}
      <svg
        width="5"
        height="10"
        viewBox="0 0 5 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.82188 4.56208C4.93601 4.67626 5.00013 4.83108 5.00013 4.99252C5.00013 5.15396 4.93601 5.30878 4.82188 5.42295L1.37779 8.86704C1.32163 8.92519 1.25445 8.97157 1.18017 9.00348C1.10589 9.03539 1.026 9.05218 0.945164 9.05288C0.864325 9.05359 0.784156 9.03818 0.709335 9.00757C0.634513 8.97696 0.566537 8.93175 0.509373 8.87459C0.45221 8.81742 0.407003 8.74945 0.376391 8.67463C0.345779 8.5998 0.330375 8.51964 0.331078 8.4388C0.33178 8.35796 0.348575 8.27807 0.380483 8.20379C0.41239 8.12951 0.458771 8.06233 0.51692 8.00617L3.53057 4.99252L0.516919 1.97887C0.406018 1.86404 0.344653 1.71025 0.34604 1.55062C0.347427 1.39099 0.411456 1.2383 0.524335 1.12541C0.637215 1.01254 0.789915 0.948505 0.949545 0.947119C1.10918 0.945731 1.26296 1.0071 1.37779 1.118L4.82188 4.56208Z"
          fill="#262338"
        />
      </svg>
    </button>
  );
}

export default Viewallbutton;
