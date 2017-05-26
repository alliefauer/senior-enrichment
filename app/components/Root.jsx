import React, { Component } from 'react';

import Navbar from './Navbar';
import CampusesContainer from '../containers/CampusesContainer';

export default function Root() {
    return (
         <div>
                <Navbar />
         <div id="main" className="container-fluid">
            <CampusesContainer />
          </div>
      </div>
    )

}