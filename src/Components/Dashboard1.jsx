import React from 'react';
import dashB1 from './../assets/img/dashB1.jpg';
import dashB2 from './../assets/img/dashB2.jpg';
import dashB3 from './../assets/img/dashB3.jpg';

function Dashboard1() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 p-4'>
      <div className='text-center max-w-4xl mb-10'>
        <h1 className='text-black text-5xl font-bold mb-4'>
          A Smarter Way to Manage Your Pharmacy
        </h1>
        <p className='text-black text-[19px] mb-8 text-center'>
          Simplify your operations, streamline your workflow and focus on what matters most providing exceptional patient care.
        </p>
        
        {/* Search Box Section */}
        <div className='flex items-center justify-center mb-8'>
        <div className='flex items-center w-full max-w-2xl'>
          <input
            type='email'
            placeholder='Enter your email address'
            className='w-full p-5 border border-gray-300 focus:outline-none text-black bg-white'
          />
          <button className='bg-blue-500 text-white px-10 py-5 border-none font-bold ml-2'>
            Get&nbsp;&nbsp;Started
          </button>
        </div>
      </div>
      </div>
      <br/><br/>

      {/* Image Section */}
      <div className='w-full bg-gray-200 p-0 rounded-lg'>
        <div className='flex items-center justify-center w-full'>
          <img
            src={dashB1}
            alt='dashB1'
            className='w-[calc(15%-10px)] h-[350px] object-cover mx-8' 
          />
          <img
            src={dashB2}
            alt='dashB2'
            className='w-[calc(50%-10px)] h-[350px] object-cover mx-8' 
          />
          <img
            src={dashB3}
            alt='dashB3'
            className='w-[calc(15%-10px)] h-[350px] object-cover mx-8' 
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard1;
