// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import TopHeader from './components/TopHeader';
// import TableSection from './components/TableSection';

// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   return (
//     <div className="h-screen flex">
//       <Sidebar />
//       <div className="flex-1 flex flex-col bg-gray-50">
//         <TopHeader />
//         <TableSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import TableSection from './components/TableSection';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="h-screen flex flex-col">
      {/* Top Header */}
      <div className="flex-none w-full">
        <TopHeader />
      </div>

      {/* Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="flex">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-50">
          <TableSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>
    </div>
  );
};

export default App;
