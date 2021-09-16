import React, { Children } from 'react';

import NavBar from '../../componets/NavBar.jsx';

//styles 
import './AppLayout.css';

export default function AppLayout () {

    return(

        <>

    
        <NavBar/>

        <div 
        className="
        top-6
        left-3/4
        -right-0.5
        md:-right-32

        fixed
        "
        >
            <a id="tittle_layout" href="#"
            className="text-4xl text-white
            "
            >01</a>

        </div>
        </>

    )

}