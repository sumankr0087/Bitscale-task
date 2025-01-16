import React from 'react';
import { Plus } from 'lucide-react';
import Table from './Table';

const TableSection = ({ searchQuery, setSearchQuery }) => (
    <div className="flex-1 p-4">
        <div className="bg-white rounded-lg shadow">
            {/* Table Controls */}
            <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                    {/* Search Input */}
                    <div className="relative">
                        <img
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
                            src="/search.png"
                            alt="search"
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-[364px] h-[37px] text-sm font-normal pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center space-x-4 ml-4 text-sm font-medium text-[#1F2A37]">
                        <span className="flex items-center space-x-2">
                            <img className="h-4 w-4" src="/row.png" alt="row" />
                            <span>1/1 Row</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <img className="h-4 w-4" src="/columns.png" alt="columns" />
                            <span>3/3 Column</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <img className="h-4 w-4" src="/filter-funnel.png" alt="filter" />
                            <span>0 Filter</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <img className="h-4 w-4" src="/switch-vertical.png" alt="sort" />
                            <span>Sort</span>
                        </span>
                    </div>


                    {/* Controls Section */}
                    <div className="flex items-center space-x-4 ml-auto">
                        <button className="flex items-center px-4 py-1.5 bg-[#1F2A37] text-white rounded-lg text-sm hover:bg-gray-800">
                            <img className="h-4 w-4 mr-1" src="/star.png" alt="enrich" />
                            <span>Enrich</span>
                        </button>
                        <div className="flex items-center space-x-2">
                            <img className="cursor-pointer" src="/share.png" alt="share" />
                            <img className="cursor-pointer" src="/download.png" alt="download" />
                            <img className="cursor-pointer" src="/delete.png" alt="delete" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <Table />

            {/* Add Row Button */}
            {/* <div className="p-4 border-t">
                <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Plus className="h-4 w-4" />
                    <span className="text-sm">Add Row</span>
                </button>
            </div> */}
        </div>
    </div>
);

export default TableSection;
