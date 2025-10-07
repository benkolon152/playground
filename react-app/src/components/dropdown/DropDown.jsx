import React, {Component, Fragment} from "react";

export default class DropDown extends Component{
    state = {
        dropdownChosen: null
    }

    handleChose = e => {
        const {value} = e.target
        console.log("dropdown", e)
        console.log("value", value)
        this.setState({dropdownChosen: e})
    }


    render(){
        return(
            <Fragment>
                <label htmlFor="adv-select">Select:</label>
                <select id="adv-select" name="adv-select" onChange={this.handleChose}>
                    <option>--- Choose ---</option>
                    <option value="foo">Foo</option>
                    <option value="bar">Bar</option>
                    <option value="baz">Baz</option>
                </select>
            </Fragment>
        )
    }
}