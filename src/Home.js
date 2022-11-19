import React from 'react';
import Bottom from './Bottom';
import Card from './Card';
import "./Home.css"
/* 
    This is just a sample introduction file.
    You can clear the code written in this file and start writing your own code.
*/

const Home=()=>{
        return (
          <div>
            <Card/>
             <Bottom/>
             <footer className='foot'>@copywrite by suchendra</footer>
          </div>
        )
    }


export default Home
