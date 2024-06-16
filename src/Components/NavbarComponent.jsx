import React from 'react';

const Navbar = () => {
    return (
        <div className="w-full p-4 mb-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">

                {/* Chef of the Month section */}
                <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center lg:items-start mb-4 lg:mb-0 lg:mr-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-2 lg:mb-0">
                        <img
                            src="https://i.pinimg.com/736x/03/55/19/0355196bc9ea5aaa4e07e1802673c3af.jpg"
                            alt="Profile"
                           
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-1 lg:text-left">CHEF OF THE MONTH</h3>
                   
                </div>

                {/* Statistics sections */}
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
  <div className="bg-gray-800 rounded-lg p-4 text-center mb-4 lg:mb-0">
    <div className="rounded-lg mb-2">
      <h3 className="text-4xl font-bold">1178</h3>
    </div>
    <div className="rounded-lg">
      <p>Total Orders (This month)</p>
      <p>Highest ever recorded is 1246</p>
    </div>
  </div>

  <div className="bg-gray-800 rounded-lg p-4 text-center mb-4 lg:mb-0">
    <h3 className="text-4xl font-bold">22.6</h3>
    <p>Average order / Hour</p>
    <p>Highest ever recorded is 36.6</p>
  </div>

  <div className="bg-gray-800 rounded-lg p-4 text-center">
    <h3 className="text-4xl font-bold">32542.7</h3>
    <p>Average revenue / Day</p>
    <p>Highest ever recorded is 46658.8</p>
  </div>
</div>

            </div>
        </div>
    );
}

export default Navbar;
