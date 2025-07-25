import React, { useState } from "react";
import { Copy, Trash } from "lucide-react";

const FormTable = ({urls, setUrls}) => {

  const [message, setMessage] = useState("");
//   const [tableData, setTableData] = useState([urls]);
  const clearTable = () => {
    setUrls([]);
  }

  //   const deleteUrl = (index) => {
  //     const updatedUrls = [...urls];
  //     updatedUrls.splice(index, 1);
  //     setUrls(updatedUrls);
  //   }

  const handleDeleteUrl = (index) => {
    const updatedUrls = urls.filter((url, idx) => idx !== index);
    setUrls(updatedUrls);
  };

  const copyToClipboard = (text) => {
    const result = navigator.clipboard.writeText(text);

    result
      .then(() => {
        setMessage(`Copied ${text} to clipboard! `);
      })
      .catch((err) => {
        setMessage(`Failed to copy ${text} to clipboard: ${err}`);
      })
      .finally(() => {
        setTimeout(() => {
          setMessage("");
        }, 2000);
      });
  };
  return (
    <div className="bg-white w-full md:w-2/4 mx-auto p-6 md:p-8">
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-4">Shortened URL</h1>
          <div className="">
  <button className="bg-gray-800 hover:bg-red-500 cursor-pointer text-white text-xs p-2 md:text-sm py- md:py-2 md:px-4 rounded" onClick={()=> clearTable()}>
    Clear
  </button>
</div>

        </div>
        {/* <h2 className="text-2xl font-bold mb-4">Shortened URLs</h2> */}
        
        {message && (
          <p className="bg-green-200 p-2  text-sm mb-4 rounded">{message}</p>
        )}
        <div className="rounded-lg w-full overflow-x-auto">
          <table className="w-full border-collapse hidden md:table">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Original URL</th>
                <th className="border p-2 text-left">Short URL</th>
                <th className="border p-2 text-left">Actions </th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url, index) => (
                <tr key={url.id} className="hover:bg-gray-50">
                  <td className="border p-2 table-cell-url">{url.original}</td>
                  <td className="border p-2">{url.short}</td>
                  <td className="border p-2 flex space-x-2">
                    <Copy
                      className="cursor-pointer text-gray-800"
                      onClick={() => copyToClipboard(url.short)}
                    />
                    <Trash
                      className="cursor-pointer text-gray-800"
                      onClick={() => handleDeleteUrl(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {urls.map((url, index) => (
              <div key={url.id} className="border p-4 rounded-lg shadow-sm">
                <div className="font-semibold">Original URL</div>
                <div className="text-sm break-all">{url.original}</div>
                <div className="font-semibold mt-2">Short URL</div>
                <div className="text-sm break-all">{url.short}</div>
                <div className="flex space-x-2 mt-2">
                  <Copy
                    className="cursor-pointer text-gray-800"
                    onClick={() => copyToClipboard(url.short)}
                  />
                  <Trash
                    className="cursor-pointer text-gray-800"
                    onClick={() => handleDeleteUrl(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTable;
