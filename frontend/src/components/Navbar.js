import React from 'react'


export default function Navbar() {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };
    
    const rightStyle = {
        marginLeft: 'auto', // Pushes the element to the right
    };  
    return (
    <>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
      <a class="navbar-brand" href="#">FilmFrenzy</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
    
      
    
      
      
      

    <div style={containerStyle}>
      
      <div style={rightStyle}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Signin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Signup</a>
        </li>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
     </form>
      
      </ul>
      </div>
    </div>  
     
      
    
    </div>
    </nav>
   </div>
  
   </> 
    
  )
}
