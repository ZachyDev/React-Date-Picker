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
            selectedDate: date
        })
    }
    
    render() {
        const { selectedDate } = this.state;
        return (
            <div>
                <DatePicker 
                    selected = { selectedDate  }   
                    onChange = { this.setSelectedDate }
                    dateFormat = "yyyy/MM/dd"
                    />
            </div>
        )
    }
}

export default Date
