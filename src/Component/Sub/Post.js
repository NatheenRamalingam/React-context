import React from 'react'

function Post(props) {
    const {userId,id,title} = props;
    return (
       
                <div className='col-md-6 mt-2 mb-2'>
                   <div className='card'>
                       <div className='card-header'>
                           Title : {title}

                       </div>
                       <div className='card-body'>
                          <span className='float-start'>UserId :</span>  <span className='float-end'>{userId}</span><br />
                           <span className='float-start'>id :</span> <span className='float-end'>{id}</span>
                           
                       </div>

                   </div>
                </div>

    )
}

export default Post;
