import { useState } from 'react'
import Form from '../../Components/Form'
import FormTable from '../../Components/FormTable'
import { v4 as uuidv4 } from 'uuid'
import { Type } from 'lucide-react'

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
     const [urls, setUrls] = useState([
        {
          id: "1",
          original: "https://www.example.com/",
          short: "https://abcd.in/XyZ123",
        },
        {
          id: "2",
          original: "https://www.example.com/",
          short: "https://abcd.in/XyZ123",
        },
        {
          id: "3",
          original: "https://www.example.com/",
          short: "https://abcd.in/XyZ123",
        },
        {
          id: "4",
          original: "https://www.example.com/",
          short: "https://abcd.in/XyZ123",
        },
      ]);

    //   Old function simulation

    //   const addUrl = (original, short) => {
    //      setIsLoading(true);
    //     const newUrl = {
    //         // id:urls.length + 1,
    //         id: uuidv4(),
    //         original:original,
    //         short:short
    //     };
       
    //     setTimeout(()=> {

    //         setUrls(prevUrls => [...prevUrls, newUrl]);
    //         setIsLoading(false)
    //     },1500)
    //   }

    const addUrl = async (original) => {
        setIsLoading(true);

        try{
            const url = 'https://bokx81i066.execute-api.eu-west-1.amazonaws.com/api/shorten';

            const response = await fetch(url, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:
                    JSON.stringify({
                        long_url : original
                    }),
                
            });
            const data = await response.json();
            console.log("API Response :", data);

            if (response.ok){
                const shortUrlFromAPi = data.short_url;
                const parts = shortUrlFromAPi.split('/');
                const shortId = parts[parts.length - 1];
                const redirectShortUrl = `https://bokx81i066.execute-api.eu-west-1.amazonaws.com/api/redirect/${shortId}`
                const newUrl = {
                    id:uuidv4(),
                    original:original,
                    short:redirectShortUrl,
                };
                setUrls(prevUrls => [...prevUrls, newUrl])
            } else{
                console.log("API Err Response:", data.Message || "Unknown API Error")
            }
        }catch (error){
            console.log("Network or Fetch error", error)

        } finally{
            setIsLoading(false);
        }
    }
  return (
    <div className=''>
      <Form onShortenUrl={addUrl} isLoading={isLoading}/>
      <FormTable urls={urls} setUrls={setUrls}/>
    </div>
  )
}

export default Home
