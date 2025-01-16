import React from 'react';

const Sidebar = () => (
    <div className="w-16 bg-white border-r flex flex-col items-center py-4">
        {/* Top Icons */}
        <div className="mb-6 mt-4">
            <img src='/Icon1.png' alt="Icon 1" className='h-5 w-5' />
        </div>
        <div className="space-y-6 flex-grow">
            <div className="">
                <img src='/Icon2.png' alt="Icon 2" className='h-5 w-5' />
            </div>
            <div className="">
                <img src='/Icon3.png' alt="Icon 3" className='h-5 w-5' />
            </div>
        </div>

        {/* Bottom Icons */}
        <div className="space-y-6">
            <div className="">
                <img src='/credit-card.png' alt="Credit Card" className='h-5 w-5' />
            </div>
            <div className="">
                <img src='/coins-stacked.png' alt="Coins Stacked" className='h-5 w-5' />
            </div>
        </div>
    </div>
);

export default Sidebar;
