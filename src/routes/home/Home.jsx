import { useEffect, useState } from 'react'
import Form from '../../Components/Form'
import FormTable from '../../Components/FormTable'
import { v4 as uuidv4 } from 'uuid'
import { Type } from 'lucide-react'

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
     const [urls, setUrls] = useState(()=>{
        const storedUrls = localStorage.getItem('shortenedUrls');
        if(storedUrls){
            try{
                const parseUrl = JSON.parse(storedUrls);
                console.log("Initialized URLs from localStorage:", parseUrl);
                return parseUrl
            }catch (error){
                console.error("Error parsing stored URLs from localStorage on initialization:", error);
                return [];
            }
        }
        console.log("No URLs found in localStorage, initializing with empty array.");
        return [];
});
     
     useEffect(()=>{
        localStorage.setItem('shortenedUrls', JSON.stringify(urls))
     },[urls])

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
                    createdAt: new Date().toISOString(),
                };
                setUrls(prevUrls => [newUrl,...prevUrls])
            } else{
                console.log("API Err Response:", data.Message || "Unknown API Error")
            }
        }catch (error){
            console.log("Network or Fetch error", error)

        } finally{
            setIsLoading(false);
        }
    }

    const deleteUrl = async(idToDelete) => {

        const urlItem = urls.find(url => url.id === idToDelete);
        if(!urlItem){
            alert("Url for deletion not found", idToDelete);
           
        }
         const parts = urlItem.short.split('/');
         const shortId = parts[parts.length - 1];

         if(!shortId){
            console.log("Could not extract short ID for deletion:", urlItem.short)
         }

         try{
            const apiUrl = `https://bokx81i066.execute-api.eu-west-1.amazonaws.com/api/${shortId}`;
            const response = await fetch(apiUrl,{
                method: 'DELETE',
            })
            if(response.ok){
                setUrls(prevUrls => prevUrls.filter(url => url.id !== idToDelete));
                console.log(`URL with ID ${idToDelete} and short_id ${shortId} deleted successfully from API and state.`);

            }else{
                const errorData = await response.json();
                console.log("Error deleting URL from API:", errorData.Message || "Unknown API Error")

            }
         } catch(error){
             console.error("Network or fetch error during deletion:", error);
         }


    }
  return (
    <div className=''>
      <Form onShortenUrl={addUrl} isLoading={isLoading}/>
      <FormTable urls={urls} setUrls={setUrls} onDeleteUrl={deleteUrl}/>
    </div>
  )
}

export default Home
