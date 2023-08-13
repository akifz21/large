"use client";

import { useState } from "react";

const Table = ({
  head,
  body,
  searchable,
}: {
  head: any[];
  body: any[];
  searchable?: boolean;
}) => {
  const [searchParam, setSearchParam] = useState("");
  const filteredData = body?.filter((items: any[]) =>
    items?.some((item: any) =>
      item?.toString().toLowerCase().includes(searchParam)
    )
  );

  return (
    <>
      {searchable && (
        <div className="mb-4">
          <input
            type="text"
            value={searchParam}
            className="custom-input w-full"
            onChange={(e) => setSearchParam(e.target.value)}
            placeholder="Search..."
          />
        </div>
      )}
      <div className="w-full  shadow-custom-sh">
        <table className="p-4 w-full">
          <thead>
            <tr>
              {head.map((item, key) => (
                <th
                  className="text-left text-base dark:border-gray-800 dark:bg-black dark:text-white bg-gray-100 font-semibold p-2 border-b text-gray-600"
                  key={key}
                >
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((items, key) => (
              <tr className="group" key={key}>
                {items.map((item: any, key: any) => (
                  <td
                    key={key}
                    className="text-sm dark:group-hover:bg-black group-hover:bg-gray-100 p-2"
                  >
                    {item}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
