import React from "react";

const tableData = [
    {
        id: 1,
        timestamp: "Oct 12, 2024 at 14:08 PM",
        action: { type: "text", content: "Bitscale Evaluation - Account relev..." },
        enrich: { icon: "/Logomark.png", content: "Bitscale Evaluation - Account r..." },
    },
    {
        id: 2,
        timestamp: "Oct 12, 2024 at 14:08 PM",
        action: { type: "error", content: "cell data size exceeds limit" },
        enrich: { icon: "/Content.png", content: "BMW Evaluation - Relevancy c..." },
    },
    {
        id: 3,
        timestamp: "Oct 12, 2024 at 14:08 PM",
        action: { type: "link", content: "https://www.linkedin.com/bitS..." },
        enrich: { icon: "/Logomark4.png", content: "Google Evaluation - Lilevancy..." },
    },
    {
        id: 4,
        timestamp: "Oct 12, 2024 at 14:08 PM",
        action: { type: "loading", content: "Loading data, Please wait" },
        enrich: { icon: "/Logomark 2.png", content: "Apple Evaluation - Olvancy che..." },
    },
    {
        id: 5,
        timestamp: "Oct 12, 2024 at 14:08 PM",
        action: { type: "loading", content: "Loading data, Please wait" },
        enrich: { icon: "/Logomark3.png", content: "Figma Evaluation - Evancy che..." },
    },
];

const Table = () => {
    const maxRows = 12; // Number of rows to fill the screen
    const emptyRows = maxRows - tableData.length;

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="bg-[#F6F6F6] h-9">
                        <th className="px-4 py-3 text-left w-10 border-r"></th>
                        <th className="px-4 py-3 text-left w-10 border-r"></th>
                        <th
                            className="px-4 py-2 bg-[#FEF2C7] text-left border-r"
                            style={{ width: "267px" }}
                        >
                            <div className="flex items-center">
                                <span className="text-sm font-medium bg-black text-white py-[3px] px-[6px]">A</span>
                                <span className="ml-2 text-[#1C1B1F] text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                                    Input Column
                                </span>
                            </div>
                        </th>
                        <th
                            className="px-4 py-2 text-left border-r"
                            style={{ width: "267px" }}
                        >
                            Action column
                        </th>
                        <th
                            className="px-4 py-2 text-left border-r"
                            style={{ width: "267px" }}
                        >
                            Enrich Company
                        </th>
                        <th className="px-4 py-2 text-left gap-2">
                            <div className="flex items-center gap-2">
                                <img className="cursor-pointer h-4 w-4" src="/plus.png" alt="add" />
                                <span className="text-sm font-semibold">Add Column</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {tableData.map((row, index) => (
    <tr key={row.id} className="border-t">
        <td className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r">
            {index + 1}
        </td>
        <td className="text-center px-2 py-2 text-sm font-medium text-gray-700 border-r">
            <img className="cursor-pointer h-4 w-4" src="/play_circle.png" alt="play" />
        </td>
        <td className="px-4 py-2 border-r" style={{ width: "267px" }}>
            <div className="flex items-center space-x-2">
                <span className="text-sm text-[#374151] font-medium text-nowrap">{row.timestamp}</span>
            </div>
        </td>
        <td className="px-4 py-2 border-r" style={{ width: "267px" }}>
            {row.action.type === "error" ? (
                <div className="flex items-center space-x-2 text-sm font-normal">
                    <img className="cursor-pointer h-4 w-4" src="/alert-triangle.png" alt="error" />
                    <span className="text-sm italic text-[#374151] text-nowrap">{row.action.content}</span>
                </div>
            ) : row.action.type === "link" ? (
                <div className="flex items-center space-x-2 text-[#1E429F] underline">
                    <img className="cursor-pointer h-4 w-4" src="/link-external.png" alt="link" />
                    <span className="text-sm text-nowrap">{row.action.content}</span>
                </div>
            ) : row.action.content === "Loading data, Please wait" ? (
                <div className="flex items-center space-x-2">
                    <img className="cursor-pointer h-4 w-4" src="/loading.png" alt="loading" />
                    <span className="text-sm italic text-[#374151] text-nowrap">{row.action.content}</span>
                </div>
            ) : (
                <span className="text-sm font-medium text-[#374151] text-nowrap">{row.action.content}</span>
            )}
        </td>
        <td className="px-4 py-2 border-r" style={{ width: "267px" }}>
            <div className="flex items-center space-x-2">
                <img src={row.enrich.icon} alt="Company logo" />
                <span className="text-sm text-[#374151] font-medium text-nowrap">{row.enrich.content}</span>
            </div>
        </td>
        <td className="px-4 py-2 text-right"></td>
    </tr>
))}

                    {emptyRows > 0 && (
                        <>
                            <tr className="border-t bg-[#F6F6F6]">
                                <td className="px-4 py-3 text-center text-sm text-gray-300 border-r">
                                    &nbsp;
                                </td>
                                <td className="px-2 py-2 text-sm text-gray-300 border-r">&nbsp;</td>
                                <td className="px-2 py-2 border-r">
                                    <button className="px-4 py-2 text-xs font-normal items-center gap-2 flex">
                                        <img className="cursor-pointer h-4 w-4" src="/plus.png" alt="add" />
                                        Add Row
                                    </button>
                                </td>
                                <td className="px-4 py-2 border-r">&nbsp;</td>
                                <td className="px-4 py-2 border-r">&nbsp;</td>
                                <td className="px-4 py-2 text-right">&nbsp;</td>
                            </tr>
                            {[...Array(emptyRows - 1)].map((_, index) => (
                                <tr key={`empty-${index}`} className="border-t bg-[#F6F6F6]">
                                    <td className="px-4 py-3 text-center text-sm text-gray-300 border-r">
                                        &nbsp;
                                    </td>
                                    <td className="px-2 py-2 text-sm text-gray-300 border-r">&nbsp;</td>
                                    <td className="px-4 py-2 border-r">&nbsp;</td>
                                    <td className="px-4 py-2 border-r">&nbsp;</td>
                                    <td className="px-4 py-2 border-r">&nbsp;</td>
                                    <td className="px-4 py-2 text-right">&nbsp;</td>
                                </tr>
                            ))}
                        </>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
