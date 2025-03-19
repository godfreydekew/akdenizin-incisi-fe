import React from 'react';
const Footer = () => {
  return <footer className="bg-white py-8 border-t border-gray-100 dark:bg-gray-950 dark:border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SmartTRNC. All rights reserved.
          </p>
          <div className="flex gap-8">
            
            
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;