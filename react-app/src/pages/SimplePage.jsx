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

    handleEmailChange = email => {
        console.log('emailchange', email)
        this.setState({email})
    }

    handleReset = e => {
        console.log('reset', e)

    }

    render() {
        return (
            <div id="content-simple" className="tab-content active">
            <h2>Simple Email Form</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <EmailInput onEmailChange={this.handleEmailChange}/>
                    <button type="submit">Submit</button>
                    <input type="reset" value={"Reset"} onClick={this.handleReset}/>
                </form>
            </div>
        )
    }
}