/* SimplePage.jsx */
import React from "react";
export default class SimplePage extends React.Component {
    handleFormSubmit = e =>{
        e.prevetDefault()

        console.log('handleFormsubmit', e)
    }

    render() {
        return (
            <div id="content-simple" className="tab-content active">
            <h2>Simple Email Form</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="simpleEmail">Email address:</label>
                    <input type="email" id="simpleEmail" name="simpleEmail" placeholder="name@example.com" required autoComplete="on" />
                    <button type="submit">Submit</button>
                    <input type="reset" value={"Reset"}/>
                </form>
            </div>
        )
    }
}