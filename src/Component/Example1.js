import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext';
import Post from './Sub/Post';

function Example1() {

    const data = useContext(GlobalContext);
    let [albums] = data.postApi.albums;
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <h3 className='text-center display-3'>Example for Context</h3>

                </div>


            </div>

            <div className='row'>
                {
                    albums.map((item,key)=>{
                        return(
                            <Post key={key} {...item}/>
                        )
                    })

                }

            </div>
            
        </div>
    )
}

export default Example1;
