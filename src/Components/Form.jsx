import React, { useState } from 'react';

const Form = ({onShortenUrl,isLoading}) => {
    const [longUrl, setLongUrl] = useState('');

    // const handleAd
  return (
    <div className='bg-white w-full md:w-2/4 mx-auto p-6 md:p-8 '>
      <h1 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6'>
        Shorten Your URL
      </h1>
      
      <form className='space-y-4' onSubmit={ (event) => {
        event.preventDefault();
        onShortenUrl(longUrl, 'https://short.ly'+ Math.random().toString(36).substring(7));
        setLongUrl('')
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
              disabled={isLoading}

            />
          </div>

          {
            isLoading ? (<button className='bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 cursor-wait transition duration-200 shadow-sm whitespace-nowrap'
         >Shortening...</button>)
            :(
                  <button 
            type="submit" 
            className='bg-orange-500 hover:bg-gray-800 text-white font-medium py-3 px-6 cursor-pointer transition duration-200 shadow-sm whitespace-nowrap'
          >
            Shorten
          </button>
            )
          }
        
        </div>
      </form>

    
    </div>
  )
}

export default Form;