import React from "react";

const Table = ({ head, body }: { head: any[]; body: any[] }) => {
  return (
    <div className="w-full  shadow-custom-sh">
      <table className="p-4 w-full">
        <thead>
          <tr>
            {head.map((item, key) => (
              <th
                className="text-left text-base dark:border-gray-800 dark:bg-black dark:text-white bg-gray-100 font-semibold p-2 border-b text-gray-600"
                key={key}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((items, key) => (
            <tr className="group" key={key}>
              {items.map((item: any) => (
                <td className="text-sm dark:group-hover:bg-black group-hover:bg-gray-100 p-2">
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
