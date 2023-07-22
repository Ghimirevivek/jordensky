import React from 'react';
import { Link } from 'react-router-dom';

// Home component
const Home = () => {
  return (
    <main className='w-full h-auto md:h-[100vh] flex flex-col items-center bg-gradient-to-b from-purple-300 to-indigo-400 '>
      <div className='text-center mb-8'>
        <div className='font-bold text-[36px] mb-2 '>
          Welcome to Your Financial Dashboard
        </div>
        <p className='text-[16px] text-[#666]'>
          Track and manage your financial data with ease
        </p>
      </div>
      <div className='text-center mb-10'>
        <div className='max-w[600px] my-auto'>
          <div className='font-bold text-[24px] mb-2'>Get Started</div>
          <p className='text-[#666]'>
            Choose one of the options below to get started:
          </p>
          <div className='flex justify-around mt-8'>
            <Link
              to={'table'}
              className='mx-2 inline-block px-4 py-5 text-[18px] font-bold text-[#fff] rounded-lg bg-[#4caf50] border-none cursor-pointer transition ease-in-out delay-100 hover:scale-105 hover:bg-[#45a049] duration-200'
            >
              View My Table
            </Link>
            <Link
              to={'chart'}
              className='mx-2 inline-block px-4 py-5 text-[18px] font-bold text-[#fff] rounded-lg bg-[#4caf50] border-none cursor-pointer transition ease-in-out delay-100 hover:scale-105 hover:bg-[#45a049] duration-200'
            >
              Explore Charts
            </Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center flex-wrap'>
        <div className='max-w-[300px] m-5 p-7 text-center rounded-xl shadow-md transition ease-in-out delay-100 hover:shadow-xl bg-[#FFFFD2]'>
          <div className='text-[24px] mb-[2]'>Data Visualization</div>
          <p className='text-[16px] text-[#666]'>
            Visualize your financial data with interactive charts and graphs.
          </p>
        </div>
        <div className='max-w-[300px] m-5 p-7 text-center rounded-xl shadow-md transition ease-in-out delay-100 hover:shadow-xl bg-[#FFFFD2]'>
          <div className='text-[24px] mb-[2]'>Interactive Tables</div>
          <p className='text-[16px] text-[#666]'>
            View your financial accounts in a hierarchical and expandable table.
          </p>
        </div>
        <div className='max-w-[300px] m-5 p-7 text-center rounded-xl shadow-md transition ease-in-out delay-100 hover:shadow-xl bg-[#FFFFD2]'>
          <div className='text-[24px] mb-[2]'>Customizable Settings</div>
          <p className='text-[16px] text-[#666]'>
            Customize your dashboard to suit your financial needs.
          </p>
        </div>
      </div>
      <div className='mt-auto py-6 px-10 text-center bg-[#333] text-[#fff] rounded-sm'>
        <p className='text-[14px]'>
          Financial Dashboard App &copy; {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
};

export default Home;
