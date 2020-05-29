import React, { Component } from 'react'
import DatePicker  from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
class Date extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectedDate: ''
        }
    }
    setSelectedDate = (date) => {
        this.setState({
            selected: date
        })
    }
    
    render() {
        const { selectedDate } = this.props;
        return (
            <div>
                <DatePicker selected = { selectedDate  } onChange = { this.setSelectedDate}/>
            </div>
        )
    }
}

export default Date
