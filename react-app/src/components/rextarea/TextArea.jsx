import React from "react";

export default class TeaxtArea extends React.Component{
    state = {
        content: ""
    }

    handleContentChange = e => {
        //console.log('content', e)
        const {value} = e.target
        console.log
        this.setState({content: value})
    }

    render(){
        return(
            <>
                <label htmlFor="adv-textarea">Textarea:</label>
                <textarea id="adv-textarea" name="adv-textarea" 
                    placeholder="Comments..." value={this.state.content}
                    onChange={this.handleContentChange}
                ></textarea>
            </>
        )
    }
}