// api.js
import { useState, useEffect } from 'react'

export const useFetchMcqs = () => {
  const [uniqueBooks, setUniqueBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let baseUrl

        if (process.env.NODE_ENV === 'development') {
          baseUrl = 'http://localhost:8000'
        } else {
          baseUrl = 'https://education-website-backend.vercel.app'
        }

        const apiUrl = `${baseUrl}/api/get/mcqs/book`
        const response = await fetch(apiUrl)
        console.log(response)
        const data = await response.json()
        console.log('data:', data)
        setUniqueBooks(data)
      } catch (error) {
        console.error('Error fetching data:', error)
        // You can also handle errors here if needed
      }
    }

    fetchData()
  }, [])

  return uniqueBooks
}
