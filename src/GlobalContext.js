import React, { createContext } from 'react';
import PostApi from './API/PostApi';


export const GlobalContext = createContext();

function Dataprovider(props) {



    const data = {

        postApi : PostApi(),

    }
    return (
        <GlobalContext.Provider value={data}>
            {props.children}

        </GlobalContext.Provider>
    )
}

export default Dataprovider;
