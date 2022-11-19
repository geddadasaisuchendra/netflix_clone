import React, { useEffect, useState } from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import titles from './titles.json';

const Search = ({details}) => {
  const [data,setData]=useState([]);
  const temp=titles.movies
  useEffect(()=>{
    if(details!=null){
      const specific=temp.filter(item => item.title==details)
      setData(specific)
    }
    else{
      setData(temp)
    }
  },[details])
  return (
    <div>
      <Card/>
      <div>showing search result:<span>{details}</span></div>
      <div className='container'>
        <div className='row'>
      {
        data.map((item,index)=>(
          <div className='col-md-1' key={index}>
            <img  src={item.img} heigth="100px" width="100px"/>
          </div>
        ))
      }
      </div>
      </div>
    </div>
  )
}

const mapStateTOProps=state=>(
  {
    details:state.shReducer.items
  }
)

export default connect(mapStateTOProps)(Search)
