import React from 'react'
import { useParams } from 'react-router'
import { getDataById } from '../../dummy/data'

export const DetailPage = () => {
  
  const {id}= useParams()
  const post = getDataById(id)





  return (
    <div>
       <h1>{post.title}</h1>
       <p>{post.body}</p>
        
    </div>
  )
}

export default DetailPage
