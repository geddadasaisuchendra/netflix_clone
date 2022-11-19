import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Icon from '../src/assets/images/logo.png'
import { Add } from './action'

const Card = ({details,Add}) => {
return (
  <div>
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <img src={Icon} class="navbar-brand"  height="50px" width="70px"/>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <Link to="/" style={{textDecoration:"none"}}><a class="nav-link active" style={{color:"white"}}>Home</a></Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
       <Link to="/search" style={{textDecoration:"none"}}><input class="form-control me-2" type="search"  onChange={(e)=>Add(e.target.value)} placeholder="Search"/></Link>
      </form>
    </div>
  </div>
</nav>
  </div>
)
}

 const mapStateTOProps=state=>(
    {
        details:state.shReducer.items
    }
 )

export default connect(mapStateTOProps,{Add})(Card)