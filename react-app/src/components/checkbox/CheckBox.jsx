import React, { Fragment } from "react";
export default class CheckBox extends React.Component{
    state = {
        checked: false
    }

    toggleCheck = function(){
        console.log('toggleCheck', !this.state.check)

        this.props.onCheckToggle(this.props.name)

        this.setState({check: !this.state.check})
    }

    render(){
        return(
            <Fragment>
                    <input 
                        type="checkbox"
                        id = {this.props.name} 
                        name={this.props.name} 
                        onChange={e => this.toggleCheck()}
                    />
                    <label htmlFor={this.props.name}>{this.props.label}</label>
            </Fragment>
        )
    }
}