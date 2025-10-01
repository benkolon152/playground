import { Fragment, useState } from "react";

export default function RadioGroup(props, onRadioChecked){
    const [choice, setChoice] = useState('adv.radio1')

    const handleRadioChange = e => {
        console.log("on/off", e)
        onRadioChecked(e)
        setChoice(e.id)
    }

    return(
        <div className="radio-group">
            {props.ids.map((id, idx)=>
            <Fragment key={idx}>
                <input
                type="radio"
                id={id}
                name={props.name}
                value={props.values[idx]}
                onChange={()=> handleRadioChange({id})}
            />
            <label htmlFor={id}>{props.labels[idx]}</label>
            </Fragment>)}
        </div>
    )
}