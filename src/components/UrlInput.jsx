import React, { useState } from 'react';
import InputBackground from '../assets/bg-shorten-desktop.svg';

const UrlInput = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

const bitlyToken = import.meta.env.VITE_BITLY_TOKEN;
const bitlyGroupGuid = import.meta.env.VITE_GUID;

  async function shortenUrl(e) {
    e.preventDefault();
    await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${bitlyToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: url,
        domain: "bit.ly",
        group_guid: `${bitlyGroupGuid}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const new_link = data.link.replace("https://", "");
        setShortUrl(data);
        setLoading(false);
        console.log(data)
      });
    setUrl("");
  }
  

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl)
      .then(() => {
        console.log('URL copied to clipboard');
      })
      .catch((err) => {
        console.error('Error copying to clipboard:', err);
      });
  };

  return (
    <section>
      <div className='w-full mx-4 md:w-2/3 md:mx-36 p-4 md:p-12 rounded-xl' style={{ backgroundImage: `url(${InputBackground})`, backgroundPosition: 'cover', backgroundColor: 'hsl(257, 27%, 26%)' }}>

        <form onSubmit={shortenUrl} className='grid md:flex gap-4 items-center md:px-4 mx-auto '>
          <input
            type="text"
            aria-label="Enter your URL"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className='px-4 py-3 text-xl text-gray-500 w-full md:w-3/4 outline-none rounded-md font-light' placeholder='enter url'
          />
          <button type="submit" aria-label="Shorten URL" disabled={loading}
            className={`bg-cyan-500 hover:bg-cyan-300 transition-all duration-300 text-white font-semibold py-4 px-[5%] rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {loading ? 'Shortening...' : 'Shorten it'}
          </button>
        </form>
      </div>

      {shortUrl && (
  <div className='bg-white md:ml-36 w-3/4 ml:8 mx-auto py-4 px-4 my-2 rounded-md flex justify-between'>
  <p className="overflow-hidden overflow-ellipsis text-black max-w-[80%]">{shortUrl.long_url}</p>
    <div className="flex items-center gap-8">
      <p className="overflow-hidden overflow-ellipsis">{shortUrl.id}</p>
      <button onClick={copyToClipboard} className='px-6 py-2  bg-cyan-500 rounded-md text-white'>
        Copy
      </button>
    </div>
    
  </div>
)}


      {error && <p className="text-red-500">{error}</p>}
    </section>
  );
};

export default UrlInput;
