import React, { Fragment } from "react";

export default class DateTimePicker extends React.Component{
    state = {
        dateTime: new Date(Date.now)
    }

    handleDateTimeChange = e =>{
        this.props.onDateTimeChange(e.target.value)
        this.setState({date: e.target.value})
    }


    render(){
        return(
            <Fragment>
                    <label htmlFor="adv-datetime">Local Datetime:</label>
                    <input type="datetime-local" id="adv-datetime" name="adv-datetime"
                    onChange={this.handleDateTimeChange}
                />
            </Fragment>
        )
    }
}