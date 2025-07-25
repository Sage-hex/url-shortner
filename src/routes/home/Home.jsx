import { useState } from 'react'
import Form from '../../Components/Form'
import FormTable from '../../Components/FormTable'

const Home = () => {
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

      const addUrl = (original, short) => {
        const newUrl = {
            id:urls.length + 1,
            original:original,
            short:short
        };
        setUrls(prevUrls => [...prevUrls, newUrl])
      }
  return (
    <div className=''>
      <Form onShortenUrl={addUrl}/>
      <FormTable urls={urls} setUrls={setUrls}/>
    </div>
  )
}

export default Home
