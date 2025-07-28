// import React, { useState } from "react";
// import { Copy, Trash } from "lucide-react";

// const FormTable = ({urls, setUrls}) => {

//   const [message, setMessage] = useState("");
//   const clearTable = () => {
//     setUrls([]);
//   }

//   //   const deleteUrl = (index) => {
//   //     const updatedUrls = [...urls];
//   //     updatedUrls.splice(index, 1);
//   //     setUrls(updatedUrls);
//   //   }

//   const handleDeleteUrl = (index) => {
//     const updatedUrls = urls.filter((url, idx) => idx !== index);
//     setUrls(updatedUrls);
//   };

//   const copyToClipboard = (text) => {
//     const result = navigator.clipboard.writeText(text);

//     result
//       .then(() => {
//         setMessage(`Copied ${text} to clipboard! `);
//       })
//       .catch((err) => {
//         setMessage(`Failed to copy ${text} to clipboard: ${err}`);
//       })
//       .finally(() => {
//         setTimeout(() => {
//           setMessage("");
//         }, 2000);
//       });
//   };
//   return (
//     <div className="bg-white w-full md:w-2/4 mx-auto p-6 md:p-8">
//       <div className="p-4">
//         <div className="flex justify-between">
//           <h1 className="text-2xl font-bold mb-4">Shortened URL</h1>
//           <div className="">
//   <button className="bg-gray-800 hover:bg-red-500 cursor-pointer text-white text-xs p-2 md:text-sm py- md:py-2 md:px-4 rounded" onClick={()=> clearTable()}>
//     Clear
//   </button>
// </div>

//         </div>
//         {/* <h2 className="text-2xl font-bold mb-4">Shortened URLs</h2> */}
        
//         {message && (
//           <p className="bg-green-200 p-2  text-sm mb-4 rounded">{message}</p>
//         )}
//         <div className="rounded-lg w-full overflow-x-auto">
//           <table className="w-full border-collapse hidden md:table">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border p-2 text-left">Original URL</th>
//                 <th className="border p-2 text-left">Short URL</th>
//                 <th className="border p-2 text-left">Actions </th>
//               </tr>
//             </thead>
//             <tbody>
//               { 
//               urls.length === 0 ? (<p className="text-center text-gray-500">No URLs found....</p>
//               ):
//               (urls.map((url, index) => (
//                 <tr key={url.id} className="hover:bg-gray-50">
//                   <td className="border p-2 table-cell-url">{url.original}</td>
//                   <td className="border p-2">{url.short}</td>
//                   <td className="border p-2 flex space-x-2">
//                     <Copy
//                       className="cursor-pointer text-gray-800"
//                       onClick={() => copyToClipboard(url.short)}
//                     />
//                     <Trash
//                       className="cursor-pointer text-gray-800"
//                       onClick={() => handleDeleteUrl(index)}
//                     />
//                   </td>
//                 </tr>
//               )))}
//             </tbody>
//           </table>
//           {/* Mobile View */}
//           <div className="md:hidden space-y-4">
//             {
//             urls.length === 0 ? (<p className="text-center text-gray-500">No URLs found....</p>
//             ):
            
//             (urls.map((url, index) => (
//               <div key={url.id} className="border p-4 rounded-lg shadow-sm">
//                 <div className="font-semibold">Original URL</div>
//                 <div className="text-sm break-all">{url.original}</div>
//                 <div className="font-semibold mt-2">Short URL</div>
//                 <div className="text-sm break-all">{url.short}</div>
//                 <div className="flex space-x-2 mt-2">
//                   <Copy
//                     className="cursor-pointer text-gray-800"
//                     onClick={() => copyToClipboard(url.short)}
//                   />
//                   <Trash
//                     className="cursor-pointer text-gray-800"
//                     onClick={() => handleDeleteUrl(index)}
//                   />
//                 </div>
//               </div>
//             )))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormTable;



// import React, { useState, useCallback } from "react";
// import { Copy, Trash, AlertTriangle } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const FormTable = ({ urls, setUrls }) => {
//   const [message, setMessage] = useState("");
//   const [isClearing, setIsClearing] = useState(false);
//   const [showClearConfirm, setShowClearConfirm] = useState(false);

//   // Clear table with confirmation
//   const clearTable = useCallback(() => {
//     if (urls.length === 0) {
//       setMessage("No URLs to clear!");
//       setTimeout(() => setMessage(""), 2000);
//       return;
//     }
//     setShowClearConfirm(true);
//   }, [urls.length]);

//   const confirmClear = useCallback(() => {
//     setIsClearing(true);
//     setTimeout(() => {
//       setUrls([]);
//       setMessage("Table cleared successfully!");
//       setIsClearing(false);
//       setShowClearConfirm(false);
//       setTimeout(() => setMessage(""), 2000);
//     }, 500);
//   }, [setUrls]);

//   // Delete a single URL
//   const handleDeleteUrl = useCallback(
//     (index) => {
//       const updatedUrls = urls.filter((_, idx) => idx !== index);
//       setUrls(updatedUrls);
//       setMessage("URL deleted successfully!");
//       setTimeout(() => setMessage(""), 2000);
//     },
//     [urls, setUrls]
//   );

//   // Copy URL to clipboard
//   const copyToClipboard = useCallback((text) => {
//     navigator.clipboard
//       .writeText(text)
//       .then(() => {
//         setMessage(`Copied ${text} to clipboard!`);
//         setTimeout(() => setMessage(""), 2000);
//       })
//       .catch((err) => {
//         setMessage(`Failed to copy: ${err}`);
//         setTimeout(() => setMessage(""), 3000);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-50 to-blue-100">
//       <div className="max-w-5xl mx-auto rounded-2xl shadow-xl bg-white overflow-hidden">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border-b border-gray-200">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
//             Shortened URLs
//           </h1>
//           <button
//             className={`mt-4 sm:mt-0 px-4 py-2 rounded-lg text-sm font-medium text-white flex items-center gap-2 transition-all duration-300 ${
//               isClearing || urls.length === 0
//                 ? "bg-red-400 cursor-not-allowed"
//                 : "bg-red-600 hover:bg-red-700"
//             }`}
//             onClick={clearTable}
//             disabled={isClearing || urls.length === 0}
//           >
//             {isClearing ? (
//               <svg
//                 className="animate-spin h-5 w-5 text-white"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 />
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                 />
//               </svg>
//             ) : (
//               "Clear All"
//             )}
//           </button>
//         </div>

//         {/* Confirmation Dialog */}
//         <AnimatePresence>
//           {showClearConfirm && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
//             >
//               <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full">
//                 <div className="flex items-center gap-3 mb-4">
//                   <AlertTriangle className="text-yellow-500" />
//                   <h2 className="text-xl font-semibold text-gray-800">
//                     Confirm Clear
//                   </h2>
//                 </div>
//                 <p className="text-gray-600 mb-6">
//                   Are you sure you want to clear all URLs? This action cannot be
//                   undone.
//                 </p>
//                 <div className="flex justify-end gap-3">
//                   <button
//                     className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
//                     onClick={() => setShowClearConfirm(false)}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//                     onClick={confirmClear}
//                   >
//                     Clear
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Feedback Message */}
//         <AnimatePresence>
//           {message && (
//             <motion.p
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className={`mx-6 mt-4 p-3 text-sm rounded-lg ${
//                 message.includes("Failed")
//                   ? "bg-red-100 text-red-800"
//                   : "bg-green-100 text-green-800"
//               }`}
//             >
//               {message}
//             </motion.p>
//           )}
//         </AnimatePresence>

//         {/* Desktop Table */}
//         <div className="hidden md:block overflow-x-auto p-6">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-100 text-gray-700">
//                 <th className="p-4 text-left font-semibold">Original URL</th>
//                 <th className="p-4 text-left font-semibold">Short URL</th>
//                 <th className="p-4 text-left font-semibold">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {urls.length === 0 ? (
//                 <tr>
//                   <td colSpan={3} className="text-center p-6 text-gray-500">
//                     No URLs found...
//                   </td>
//                 </tr>
//               ) : (
//                 urls.map((url, index) => (
//                   <motion.tr
//                     key={url.id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="hover:bg-gray-50 transition-colors"
//                   >
//                     <td className="p-4 border-b border-gray-200 truncate max-w-xs">
//                       <span title={url.original} className="text-gray-800">
//                         {url.original}
//                       </span>
//                     </td>
//                     <td className="p-4 border-b border-gray-200">
//                       <a
//                         href={url.short}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 hover:underline"
//                       >
//                         {url.short}
//                       </a>
//                     </td>
//                     <td className="p-4 border-b border-gray-200 flex space-x-4">
//                       <button
//                         className="relative group"
//                         onClick={() => copyToClipboard(url.short)}
//                         aria-label="Copy short URL"
//                       >
//                         <Copy className="text-gray-600 hover:text-blue-600 transition-colors" />
//                         <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2">
//                           Copy
//                         </span>
//                       </button>
//                       <button
//                         className="relative group"
//                         onClick={() => handleDeleteUrl(index)}
//                         aria-label="Delete URL"
//                       >
//                         <Trash className="text-gray-600 hover:text-red-600 transition-colors" />
//                         <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2">
//                           Delete
//                         </span>
//                       </button>
//                     </td>
//                   </motion.tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Mobile View */}
//         <div className="md:hidden p-6 space-y-4">
//           {urls.length === 0 ? (
//             <p className="text-center text-gray-500">No URLs found...</p>
//           ) : (
//             urls.map((url, index) => (
//               <motion.div
//                 key={url.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="p-4 rounded-lg shadow-md bg-white"
//               >
//                 <div className="font-semibold text-gray-700">Original URL</div>
//                 <div className="text-sm break-all text-gray-600">
//                   {url.original}
//                 </div>
//                 <div className="font-semibold mt-2 text-gray-700">Short URL</div>
//                 <div className="text-sm break-all">
//                   <a
//                     href={url.short}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline"
//                   >
//                     {url.short}
//                   </a>
//                 </div>
//                 <div className="flex space-x-4 mt-3">
//                   <button
//                     className="relative group"
//                     onClick={() => copyToClipboard(url.short)}
//                     aria-label="Copy short URL"
//                   >
//                     <Copy className="text-gray-600 hover:text-blue-600 transition-colors" />
//                     <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2">
//                       Copy
//                     </span>
//                   </button>
//                   <button
//                     className="relative group"
//                     onClick={() => handleDeleteUrl(index)}
//                     aria-label="Delete URL"
//                   >
//                     <Trash className="text-gray-600 hover:text-red-600 transition-colors" />
//                     <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2">
//                       Delete
//                     </span>
//                   </button>
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormTable;



import React, { useState } from "react";
import { Copy, Trash, ExternalLink, Calendar, BarChart3 } from "lucide-react";

const FormTable = ({ urls, setUrls }) => {
  const [message, setMessage] = useState("");
  const [deletingIndex, setDeletingIndex] = useState(null);

  const clearTable = () => {
    setUrls([]);
    setMessage("All URLs cleared successfully!");
    setTimeout(() => setMessage(""), 2000);
  };

  const handleDeleteUrl = (index) => {
    setDeletingIndex(index);
    setTimeout(() => {
      const updatedUrls = urls.filter((url, idx) => idx !== index);
      setUrls(updatedUrls);
      setDeletingIndex(null);
      setMessage("URL deleted successfully!");
      setTimeout(() => setMessage(""), 2000);
    }, 300);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setMessage(`URL copied to clipboard!`);
      })
      .catch((err) => {
        setMessage(`Failed to copy URL: ${err.message}`);
      })
      .finally(() => {
        setTimeout(() => setMessage(""), 2000);
      });
  };

  const openUrl = (url) => {
    window.open(url, '_blank');
  };

  const formatDate = (dateString) => {
    // Ensure dateString is valid before trying to format
    if(!dateString) return "N/A";

    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString('en-US', {
        // month: 'short',
        // day: 'numeric',
        // year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
    } catch (error) {
        console.error("Error formatting date:", error)
      return "Invalid Date";
    }
  };

  const truncateUrl = (url, maxLength = 40) => {
    return url.length > maxLength ? `${url.substring(0, maxLength)}...` : url;
  };

  return (
    <div className="min-h-screen mt-4 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto">
       {/* Header Section */}
<div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 mb-6">
  <div className="flex flex-row justify-between items-center gap-3 w-full">
    <h1 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-800 truncate">
      Shortened URLs
    </h1>
    <button 
      className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 text-xs sm:text-sm"
      onClick={clearTable}
      disabled={urls.length === 0}
    >
      Clear All
    </button>
  </div>
</div>


        {/* Success/Error Message */}
        {message && (
          <div className="mb-6 transform transition-all duration-300 ease-out">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl shadow-lg flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-medium">{message}</span>
            </div>
          </div>
        )}

        {/* Table Container */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          {urls.length === 0 ? (
            <div className="p-16 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-12 h-12 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No URLs Yet</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Start by shortening your first URL. Your shortened links will appear here.
              </p>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-indigo-100">
                      <th className="text-left p-6 font-semibold text-gray-800">Original URL</th>
                      <th className="text-left p-6 font-semibold text-gray-800">Short URL</th>
                      <th className="text-left p-6 font-semibold text-gray-800">Created</th>
                      <th className="text-center p-6 font-semibold text-gray-800">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {urls.map((url, index) => (
                      <tr 
                        key={url.id} 
                        className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-indigo-25 hover:to-purple-25 transition-all duration-200 ${
                          deletingIndex === index ? 'animate-pulse opacity-50' : ''
                        }`}
                      >
                        <td className="p-6">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                            <div>
                              <div className="font-medium table-cell-url  text-gray-800" title={url.original}>
                                {truncateUrl(url.original, 50)}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                {new URL(url.original).hostname}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-6">
                          <div className="table-cell-url bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-4 py-2 rounded-lg font-mono text-sm inline-block">
                            {url.short}
                          </div>
                        </td>
                        <td className="p-6">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">
                              {formatDate(url.createdAt)}
                            </span>
                          </div>
                        </td>
                        <td className="p-6">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => copyToClipboard(url.short)}
                              className="p-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-600 rounded-lg transition-all duration-200 hover:scale-110"
                              title="Copy to clipboard"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => openUrl(url.short)}
                              className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-all duration-200 hover:scale-110"
                              title="Open URL"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteUrl(index)}
                              className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-all duration-200 hover:scale-110"
                              title="Delete URL"
                              disabled={deletingIndex === index}
                            >
                              <Trash className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile/Tablet Cards */}
              <div className="md:hidden p-4 space-y-3">
                {urls.map((url, index) => (
                  <div 
                    key={url.id} 
                    className={`bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 ${
                      deletingIndex === index ? 'animate-pulse opacity-50' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => copyToClipboard(url.short)}
                          className="p-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-600 rounded-lg transition-all duration-200"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => openUrl(url.short)}
                          className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-all duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteUrl(index)}
                          className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-all duration-200"
                          disabled={deletingIndex === index}
                        >
                          <Trash className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-semibold text-gray-600 mb-1 table-cell-url ">Original URL</div>
                        <div className="text-gray-800 break-all text-sm" title={url.original}>
                          {truncateUrl(url.original, 60)}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {new URL(url.original).hostname}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-semibold text-gray-600 mb-1">Short URL</div>
                        <div className="table-cell-url bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-3 py-2 rounded-lg font-mono text-sm inline-block">
                          {url.short}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">
                            {formatDate(url.createdAt)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormTable;