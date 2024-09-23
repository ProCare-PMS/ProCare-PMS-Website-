import React from 'react';
import dashB5 from './../assets/img/dashB5.jpg'; 

function Dashboard2() {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-100">
      {/* Text Section */}
      <div className="flex-1 pr-6">
        <h1 className="text-3xl font-bold text-black mb-4">
          The Power of Advanced Analytics
        </h1>
        <p className="text-lg text-gray-700">
          <ul>
            <li> ✓ Generate tailored report to track specific metrics to your pharmacy</li>
            <li>✓ Performance monitoring to easily track KPIs to optimize your operations </li>
            <li>✓ Trends & Forecast with predictive analytics that guide decision making  </li>
          </ul>
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src={dashB5}
          alt="dashB5"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default Dashboard2;
