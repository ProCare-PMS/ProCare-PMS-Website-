import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing arrow icon from react-icons
import dashB6 from './../assets/img/dashB6.jpg';
import dashB7 from './../assets/img/dashB7.jpg';
import dashB8 from './../assets/img/dashB8.jpg';

function Dashboard3() {
  return (
    <div className="p-6 bg-gray-100">
      
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black mb-4">
          Simplify Your Pharmacy Management in Just a Few Steps
        </h1>
        <p className="text-lg text-gray-700">
          Discover how ProHelium makes managing your pharmacy easier, more efficient, and more effective.
        </p>
      </div>
      <br/><br/>

      {/* Three Content Sections with Arrows */}
      <div className="flex justify-between items-center space-x-6">
        
        {/* Content 1 */}
        <div className="flex-1 text-center flex flex-col items-center">
          <img src={dashB6} alt="dashB6" className="w-[60px] h-[60px] rounded-lg mb-4 mx-auto" />
          <h1 className="text-2xl font-bold text-black mb-2">Sign up and Get Started</h1>

          <p className="text-gray-700">Start your journey by signing up with your details. Choose a plan that suits your pharmacy's needs and gain instant access to our full suite of management tools.</p>
        </div>

        {/* Arrow/Curve between Content 1 and Content 2 */}
        <FaArrowRight className="text-gray-500" size={30} />

        {/* Content 2 */}
        <div className="flex-1 text-center flex flex-col items-center">
          <img src={dashB7} alt="dashB7" className="w-[60px] h-[60px] rounded-lg mb-4 mx-auto" />
          <h1 className="text-2xl font-bold text-black mb-2">Set Up Your Pharmacy Profile</h1>
          <p className="text-gray-700">Customize your dashboard with all the essential details of your pharmacy, including store information, inventory, staff roles and permissions.</p>
        </div>

        {/* Arrow/Curve between Content 2 and Content 3 */}
        <FaArrowRight className="text-gray-500" size={30} />

        {/* Content 3 */}
        <div className="flex-1 text-center flex flex-col items-center">
          <img src={dashB8} alt="dashB8" className="w-[60px] h-[60px] rounded-lg mb-4 mx-auto" />
          <h1 className="text-2xl font-bold text-black mb-2">Manage Your Operations</h1>
          <p className="text-gray-700">Sync your systems with Prohelium RxPMS to manage inventory, orders, and patients records in one place with real-time updates..</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard3;
