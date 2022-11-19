import React,{useState} from 'react'
import titles from './titles.json';
import { set } from './action';
import { connect } from 'react-redux';
import './Bottom.css';
const Bottom = ({title,img,ageGroup,dec,set}) => {
  const [item,setItem]=useState("")
  return (
    <div  className="btsyle"style={{backgroundImage: `url(${img})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",position:"relative"}}>
        <div className='container'>
          <div className='row r'></div>
          <div className='row p'>
              <div className='col-md-4'>
              <div className='mb-2'>{dec}</div>              
              <button className='btn btn-light'>Play</button>&nbsp;&nbsp;
              <button className='btn btn-secondary'>more info</button></div>
              <div className='col-md-6'></div><div className='col-md-2'><button style={{color:"grey"}}>{ageGroup}</button></div>
              <div className='row' style={{height:"200px",width:"200px"}}></div>
          </div>
        <div className='row'>
          <h5 style={{color:"white"}}>popular shows on netflix</h5>
      {
      titles.movies.map((item,index)=>(
        <div className='col-md-1' key={index}>
            <img  src={item.img}  onClick={()=>set(item.title,item.img,item.ageGroup,item.description)} heigth="100px" width="100px"/>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}
const mapStateTOProps=state=>(
  {
      title:state.inreducer.title,
      img:state.inreducer.img,
      ageGroup:state.inreducer.ageGroup,
      dec:state.inreducer.dec
  }
)

export default connect(mapStateTOProps,{set})(Bottom)