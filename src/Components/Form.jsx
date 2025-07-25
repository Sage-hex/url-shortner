import React, { useState } from 'react';

const Form = ({onShortenUrl}) => {
    const [longUrl, setLongUrl] = useState('');
    // const [shortUrl, setShortUrl] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState('');
    // const [message, setMessage] = useState('');

    // const handleAd
  return (
    <div className='bg-white w-full md:w-2/4 mx-auto p-6 md:p-8 '>
      <h1 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6'>
        Shorten Your URL
      </h1>
      
      <form className='space-y-4' onSubmit={ (event) => {
        event.preventDefault();
        onShortenUrl(longUrl, 'https://short.ly'+ Math.random().toString(36).substring(7));
        setLongUrl(' ')
      }}>
        <div className='flex flex-row gap-2'>
          <div className='flex-1'>
            <input 
              type="url" 
              id="url"
              placeholder="Enter a long URL" 
              className='w-full px-4 py-5 border border-gray-300  focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition'
              required
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
            //   disabled={isLoading}

            />
          </div>
          <button 
            type="submit" 
            className='bg-orange-500 hover:bg-gray-800 text-white font-medium py-3 px-6 cursor-pointer transition duration-200 shadow-sm whitespace-nowrap'
          >
            Shorten
          </button>
        </div>
      </form>

      {/* Results section (hidden by default) */}
      <div className='mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 hidden'>
        <p className='text-sm text-gray-500 mb-2'>
          Your shortened URL:
        </p>
        <div className='flex flex-row gap-2'>
          <input 
            type="text" 
            value=""
            readOnly
            className='flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-white text-orange-600 font-medium'
          />
          <button className='bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition'>
            Copy
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form;