import React from 'react';
//import { Route } from 'react-router-dom';
import AppLayout from '../pages/layout/AppLayout.jsx';

//styles 
import  './HomePage.css'

export default function HomePage(){

    return(

        <>
         <div>
             <div className="h-screen">
                 <h1 id="tittle"
                 className=" text-9xl sm:text-9xl
                 leading-none sm:leading-normal
                 -left-20 sm:left-0
                 sm:-left-10
                 top-32 sm:top-20
                 rigth-32

                 bg-clip-text text-transparent bg-gradient-to-b from-green-400 via-yellow-400 to-red-400
                
                 
                 ">
                     01
                     <br />
                     co
                     <br />
                     de
                 </h1>

             </div>

             <span id="name"
             className="absolute text-2xl sm:text-4xl
             left-10
             bottom-10

             sm:left-2/4
             sm:right-15

             sm:bottom-2/4
            
             "
             
             >Juan pablo gonzalez</span>

             <a>

             </a>


         </div>

        </>
    )


}