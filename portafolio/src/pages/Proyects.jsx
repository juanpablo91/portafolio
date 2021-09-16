import React from 'react';

//SlideOption

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


import ScrollList from '../componets/ScrollableList.jsx'

import './Proyects.css';



export default function Proyects(){

    return(

        <>
        <div className="w-full h-screen bg-gray-400 ">

            <div className="absolute mt-40 left-14 text-left ">
                <h1 className="mb-10 md:text-9xl font-medium 
                bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
                
                ">Proyectos
                </h1>
                <h3 className="text-2xl text-white ml-2 mb-10
                backdrop-filter backdrop-blur-lg 
                ">
                Un vistaso a mis tres proyectos mas <br />
                importantes como Vospacechat(proyecto red social), betSocial, <br />
                aquanima y otros como cincell
                </h3>

                 <button type="button" className=" absolute ml-2 mt-1 w-28 h-10 rounded-lg text-white text-2xl border-white border-2 shadow-2xl bg-blur-md">
                  Ver <FontAwesomeIcon icon={faPlay}/>
                 </button>

            </div>

            <div className="">
               <a  className="absolute ml-32 mt-52 text-4xl text-white"href="/    "><FontAwesomeIcon icon={faGithub}/></a>
               <a href="/"></a>
            </div>

            <div id="bg" className="  w-20 h-32">
                <div>
                    <h2>Hello World</h2>
                </div>
             </div>  
            





        </div>
        
        </>
    )


}