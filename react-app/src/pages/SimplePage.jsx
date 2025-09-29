/* SimplePage.jsx */
import React from "react";
import EmailInput from "../components/emailinputs/Emailinputs";
export default class SimplePage extends React.Component {




    handleFormSubmit = e =>{
        e.prevetDefault()

        //console.log('handleFormsubmit', e)
        console.log('email', this.state.email)
    }

    handleEmailBlur = e =>{
        console.log('handleblur', e)
    }

    render() {
        return (
            <div id="content-simple" className="tab-content active">
            <h2>Simple Email Form</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <EmailInput/>
                    <button type="submit">Submit</button>
                    <input type="reset" value={"Reset"}/>
                </form>
            </div>
        )
    }
}