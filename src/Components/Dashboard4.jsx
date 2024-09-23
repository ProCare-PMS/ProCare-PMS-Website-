import React from 'react';
import dashB9 from './../assets/img/dashB9.jpg'; 
import dashB10 from './../assets/img/dashB10.jpg';
import dashB11 from './../assets/img/dashB11.jpg';
import dashB12 from './../assets/img/dashB12.jpg';

function Dashboard4() {
  return (
    <div className="p-6 bg-gray-100">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black mb-4">
          Simplify, Streamline and Succeed
        </h1>
      </div>
      <br/><br/>

      {/* First Row of Two Contents */}
      <div className="flex justify-between items-center mb-10 space-x-6">
        {/* Content 1 */}
        <div className="flex-1 flex flex-col items-start space-y-4 bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
          <img src={dashB9} alt="dashB9" className="w-[60px] h-[60px] object-cover rounded-lg" />
          <h2 className="text-2xl font-bold text-black text-center">Enhanced Efficiency and Accuracy</h2>
          <p className="text-gray-700 text-center">
            Streamline your Pharmacy operations with automated inventory management, prescription processing and billing systems.Reduce errors and save time, allowing you to focus on patient care. 
          </p>
        </div>

        {/* Content 2 */}
        <div className="flex-1 flex flex-col items-start space-y-4 bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
          <img src={dashB10} alt="dashB10" className="w-[60px] h-[60px] object-cover rounded-lg" />
          <h2 className="text-2xl font-bold text-black text-center">Improved Financial Performance </h2>
          <p className="text-gray-700 text-center">
           By automating task, reducing errors, and optimizing inventory, you can significantly lower operating cost. At the same time, the system can help you increase revenue by improving patient adherence, ensuring accurate billing and implementing targeted marketing strategies. 
          </p>
        </div>
      </div>

      {/* Second Row of Two Contents */}
      <div className="flex justify-between items-center space-x-6">
        {/* Content 3 */}
        <div className="flex-1 flex flex-col items-start space-y-4 bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
          <img src={dashB11} alt="dashB11" className="w-[60px] h-[60px] object-cover rounded-lg" />
          <h2 className="text-2xl font-bold text-black text-center">Data Driven Insights for Growth</h2>
          <p className="text-gray-700 text-center">
       Leverage adavanced analytics and reporting tools to make informed decisions. Track sales trends, optimize inventory, improve patient satisfaction with actionable insights from ProHelium RxMPS. 
          </p>
        </div>

        {/* Content 4 */}
        <div className="flex-1 flex flex-col items-start space-y-4 bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
          <img src={dashB12} alt="dashB12" className="w-[60px] h-[60px] object-cover rounded-lg" />
          <h2 className="text-2xl font-bold text-black text-center">Enhanced Patient Experience</h2>
          <p className="text-gray-700 text-center">
          We provide more personalized care, improve safety through automated error prevention, and offer convenient online services. By investing in this technology, you can build stronger patient relationships, increase loyalty and drive positive word-of mouth. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard4;
