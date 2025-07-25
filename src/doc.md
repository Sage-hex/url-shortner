import React, { useState } from 'react';

// Main App component
const App = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Function to simulate URL shortening API call
  const shortenUrl = async () => {
    setError(''); // Clear previous errors
    setMessage(''); // Clear previous messages

    if (!longUrl.trim()) {
      setError('Please enter a URL.');
      return;
    }

    // Basic URL validation (can be more robust)
    try {
      new URL(longUrl); // Throws an error if URL is invalid
    } catch (e) {
      setError('Please enter a valid URL (e.g., https://example.com).');
      return;
    }

    setIsLoading(true); // Set loading state
    setShortUrl(''); // Clear previous short URL

    try {
      // Simulate an API call with a delay
      // In a real application, you would make a fetch request to your backend:
      // const response = await fetch('/api/shorten', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ longUrl })
      // });
      // const data = await response.json();
      // if (response.ok) {
      //   setShortUrl(data.shortUrl);
      // } else {
      //   setError(data.message || 'Failed to shorten URL.');
      // }

      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      // Generate a mock short URL for demonstration
      const mockShortUrl = `https://short.url/${Math.random().toString(36).substring(2, 8)}`;
      setShortUrl(mockShortUrl);
      setMessage('URL shortened successfully!');

    } catch (err) {
      console.error('Error shortening URL:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Function to copy the short URL to clipboard
  const copyToClipboard = () => {
    if (shortUrl) {
      // Using document.execCommand for broader compatibility in iframes
      const textArea = document.createElement('textarea');
      textArea.value = shortUrl;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setMessage('Short URL copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy text: ', err);
        setError('Failed to copy URL to clipboard. Please copy manually.');
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          URL Shortener
        </h1>

        <div className="mb-6">
          <label htmlFor="longUrl" className="block text-gray-700 text-sm font-semibold mb-2">
            Enter Long URL:
          </label>
          <input
            type="url"
            id="longUrl"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800 placeholder-gray-400 transition duration-200 ease-in-out"
            placeholder="e.g., https://verylongurl.com/some/path/to/a/resource"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <button
          onClick={shortenUrl}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Shortening...
            </div>
          ) : (
            'Shorten URL'
          )}
        </button>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mt-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline ml-2">{error}</span>
          </div>
        )}

        {message && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mt-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline ml-2">{message}</span>
          </div>
        )}

        {shortUrl && (
          <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-inner">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Shortened URL:
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 font-mono text-sm focus:outline-none cursor-text"
                value={shortUrl}
                readOnly
              />
              <button
                onClick={copyToClipboard}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Copy
              </button>
            </div>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center text-purple-600 hover:text-purple-800 font-medium transition duration-200 ease-in-out"
            >
              Go to Short URL
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
