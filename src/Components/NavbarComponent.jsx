import React from 'react';

const Navbar = () => {
    return (
    
            <div className="w-full p-4 bg-gray-800 rounded-lg mb-4">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <img
                      src="https://mlpotbgek3a1.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://www.tcoffee.in/wp-content/uploads/2018/08/foodsense_big.png"
                      alt="Profile"
                      className="w-20 h-20 rounded-full mr-4"
                    />
                    <h3 className="text-xl font-bold">CHEF OF THE MONTH</h3>
                  </div>
                  <div className="text-center mb-4 lg:mb-0">
                    <h3 className="text-4xl font-bold">1178</h3>
                    <p>Total Orders (This month)</p>
                    <p>Highest ever recorded is 1246</p>
                  </div>
                  <div className="text-center mb-4 lg:mb-0">
                    <h3 className="text-4xl font-bold">22.6</h3>
                    <p>Average order / Hour</p>
                    <p>Highest ever recorded is 36.6</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold">32542.7</h3>
                    <p>Average revenue / Day</p>
                    <p>Highest ever recorded is 46658.8</p>
                  </div>
                </div>
            </div>
    );
}

export default Navbar;
