import React, { Component } from 'react';

// import Student from './Student';

import Navbar from './Navbar';
import StudentsContainer from '../containers/StudentsContainer';



export default function Students() {

    return (
      <div> 
            <Navbar />
        <div id="main" className="container-fluid">
            <StudentsContainer />
          </div>
      </div>
    )

}

