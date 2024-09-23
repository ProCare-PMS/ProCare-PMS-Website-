import React from 'react';
import dashB4 from './../assets/img/dashB4.jpg'; 

function Dashboard1b() {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-100">
      {/* Image Section */}
      <div className="flex-1">
        <img
          src={dashB4}
          alt="dashB4"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 pl-6">
        <h1 className="text-3xl font-bold text-black mb-4">
        A Dashboard That Sees The Big Picture
        </h1>
        <p className="text-lg text-gray-700">
            <ol>
                <li>Gain a complete overview of your pharmacy operations at a glance. </li> 
                <li>Our intuitive dashboard consolidates key metrics, from inventory levels to sales performance, helping you stay on top of every aspect of your business with real-time insights </li>
                
                <div className="my-4"></div>

                <li> ✓ Automated Inventory Management to track stock levels in real time </li> 
                <li> ✓ Streamline Billing Processes to reduce manual entry errors </li>
                <li> ✓ Improved Workflow Efficiency  to free up your staff repetitive tasks </li>
                
            </ol>
        </p>
      </div>
    </div>
  );
}

export default Dashboard1b;
