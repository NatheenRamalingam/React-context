import React, {  useEffect, useState } from 'react';


const url = "https://jsonplaceholder.typicode.com"

export default function PostApi() {

    const[albums,setAlbums] = useState([]);


    useEffect(()=>{
        readPosts()
    },[])


    const readPosts = ()=>{
        fetch(`${url}/albums`)
            .then(resp=>resp.json())
            .then(res=>{
                console.log('res data =',res)
                setAlbums(res)

            }).catch(err=>console.log(err.message))
    }
    
    return (
        {
            albums : [albums]
        }
        
        
        
        
    )
}
