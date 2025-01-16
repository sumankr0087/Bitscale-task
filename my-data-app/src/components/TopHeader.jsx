import React from 'react';

const TopHeader = () => (
    <div className="h-14 py-4 bg-white border-b px-4 flex items-center">
        <div className="flex items-center gap-4">
            <img src='/Icon.png' alt='Left icon' />
            <span className="ml-2 text-sm font-normal text-[#6B7280]">Name of the file</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center space-x-2">
                <img src='/Toggle.png' alt='Toggle button' className='w-10 h-5' />
                <span className="text-sm font-medium text-[#0E9F6E]">Auto Save</span>
            </div>
            <div className="w-8 h-8 bg-[#FEECDC] rounded-full flex items-center justify-center">
                <img src="/Frame 1.png" alt="User" className="w-8 h-8 object-contain" />
            </div>
        </div>
    </div>
);

export default TopHeader;
