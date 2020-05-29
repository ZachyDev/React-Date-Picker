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
                    dateFormat = "dd/MM/yyyy"
                    // minDate = { new Date()}
                    // maxDate = { new Date()}
                    filterDate = { day => day.getDay() !== 6 && day.getDay() !==0}
                    isClearable
                    />
            </div>
        )
    }
}

export default Date
