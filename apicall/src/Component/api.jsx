import axios from "axios"

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers: {
        Authorization: 'Client-ID pESBPK_7Cgo1Q7k4aCbw4mUqadQuRW0GCAS7B22qhtk'
      }, 
      params: {
        query: term
      }
     })
     return response.data.results
    }

export default searchImages