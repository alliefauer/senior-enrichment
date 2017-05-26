import React, {Component} from 'react'

export default class StudentsInRows extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return  (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.campus}</td>
                <td><button type="button" className="btn btn-danger">X</button></td>
            </tr>
        )
        
    }
}