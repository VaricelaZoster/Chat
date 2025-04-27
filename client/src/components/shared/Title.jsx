import React from 'react'
import {Helmet} from 'react-helmet-async'

const Title = ({title1= "Chat App",description="This is a chat app",}) => {
  return(
    <>
        <title>{title1}</title>
        <meta name='description' content={description}/>
    </>
  )
}

export default Title