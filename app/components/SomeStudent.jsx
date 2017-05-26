import React, { Component } from 'react';
import Form from './Form';
import StudentsInRows from './StudentsInRows'


export default class Student extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getSomeofDeezStudents()

    }

render() {
    console.log('props.students:', this.props)
    return (
        <div>
        {/*<Form />*/}
             <table className="table table-striped">
                 <tbody>
           {this.props.students.allStudents && this.props.students.allStudents.map(student => {
             return (  <StudentsInRows name={student.name}
                            email={student.email}
                             campus={student.campus.name}/>)
           })}
           </tbody>
           </table>
        </div>
    )
}

}
