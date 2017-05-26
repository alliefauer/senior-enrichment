import React, { Component } from 'react';

import Campus from './Campus';


export default class Campuses extends Component {
constructor(props) {
    super(props)
    // this.state = Object.assign({}, store.getState(), {campuses: []})
  }
 

componentDidMount() {
        this.props.getDeezCampuses();


}


  render() {

    return (
        <div className="container-fluid campuses">
            <div className="row">
                {this.props.campuses.all && this.props.campuses.all.map(campus => {
                    return (<Campus imgUrl={campus.imageUrl} link={campus.id}/>)
                    })}
            </div>
        </div>
    )
}
}
