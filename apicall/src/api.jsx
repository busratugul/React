import axios from 'axios'

const searchImages = async (term) => {
    try {
    const result = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
          authorization: 'Client-ID r6-bbEJkR-fkFeHSRr47q0mR3793hsLWQORYSfzziOQ'
        },
        params: {
          query: term
        }
      })
      const results = result.data.results
      return results

    }catch (error) {
console.error("Api isteği sırasında hata oluştu:", error)
    }
}

    export default searchImages;