import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import InputBackground from '../assets/bg-shorten-desktop.svg';

const UrlInput = () => {
  const [url, setUrl] = useState('');
  const [shortUrls, setShortUrls] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copy, setCopy] = useState(false);

  const bitlyToken = import.meta.env.VITE_BITLY_TOKEN;
  const bitlyGroupGuid = import.meta.env.VITE_GUID;

  async function shortenUrl(e) {
    e.preventDefault();
    try {
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        mode: 'cors',
        headers: {
          Authorization: `Bearer ${bitlyToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          long_url: url,
          domain: 'bit.ly',
          group_guid: `${bitlyGroupGuid}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await response.json();
      setShortUrls((prevShortUrls) => [...prevShortUrls, data]);
      setLoading(false);
      setUrl('');
    } catch (error) {
      setError('Error shortening URL');
      setLoading(false);
      console.error(error);
    }
  }

  return (
    <section>
      <div className='w-full mx-4 md:w-2/3 md:mx-36 p-4 md:p-12 rounded-xl' style={{ backgroundImage: `url(${InputBackground})`, backgroundPosition: 'cover', backgroundColor: 'hsl(257, 27%, 26%)' }}>
        <form onSubmit={shortenUrl} className='grid md:flex gap-4 items-center md:px-4 mx-auto '>
          <input
            type='text'
            aria-label='Enter your URL'
            name='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={`px-4 py-3 text-xl text-gray-500 ${error ?'border-2 border-red-500' :'border-none'} w-full md:w-3/4 outline-none rounded-md font-light`}
            placeholder='enter url'
          />
          <button
            type='submit'
            aria-label='Shorten URL'
            disabled={loading}
            className={`bg-cyan-500 hover:bg-cyan-300 transition-all duration-300 text-white font-semibold py-4 px-[5%] rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Shortening...' : 'Shorten it'}
          </button>
        </form>
        {error && <p className='md:px-4 text-red-500'>{error}</p>}

      </div>

      {shortUrls.map((shortUrl) => (
        <div key={shortUrl.id} className='bg-white md:ml-36 w-3/4 ml:8 mx-auto py-4 px-4 my-2 rounded-md flex justify-between'>
          <div className='flex flex-col space-y-2'>
            <p className='overflow-hidden overflow-ellipsis text-black max-w-[80%]'>{shortUrl.long_url}</p>
            <p className='overflow-hidden overflow-ellipsis'>{shortUrl.link}</p>
          </div>
          <div className='flex items-center gap-8'>
            <p className='overflow-hidden overflow-ellipsis'>{shortUrl.id}</p>
            <CopyToClipboard
             onCopy={() => {setCopy(true);}}
            text={shortUrl.id}>
            <button className={`px-6 py-2 rounded-md ${!copy ? 'bg-cyan-500' : 'bg-violet-900'} text-white`}>
             {!copy ? 'Copy' : 'Copied'}
            </button>
          </CopyToClipboard>

          </div>
        </div>
      ))}

    </section>
  );
};

export default UrlInput;
