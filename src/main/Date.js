import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
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
        const { selectedDate } = this.state
        return (
            <div>
                <DatePicker 
                    selected = { selectedDate }
                    onChange = { this.setSelectedDate }
                    filterDate = { date => date.getDay() !== 6 && date.getDay() !== 0}
                    isClearable
                    showYearDropdown
                    dateFormat = "dd/MM/yyyy"
                    scrollableYearDropdown
                />
            </div>
        )
    }
}

export default Date
