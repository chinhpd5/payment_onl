import axios from 'axios'
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function CheckPayment() {
  const [searchParams]= useSearchParams()

  useEffect(()=>{
    (
      async ()=>{
        try {
          console.log(searchParams);
          
          const {data} = await axios.get(`http://localhost:3000/check_payment?${searchParams.toString()}`)
        } catch (error) {
          
        }
      }
    )()
  },[searchParams])


  return (
    <div>
      Kết quả: 
    </div>
  )
}

export default CheckPayment  