import React, { useState} from "react";
const NumInput = props => {
    const [number, setNumber] = useState(42)
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(100)

    const handleNumberChange = e =>{
        //console.log('numchange', e)
        let newNumberValue = +e.target.value
        if (newNumberValue<minValue) newNumberValue = minValue
        if (newNumberValue>maxValue) newNumberValue = maxValue

        setNumber(newNumberValue)
    }

    return(
        <>
            <label htmlFor="adv-number">Number:</label>
            <input type="number" id="adv-number" name="adv-number" min="0" max="100" step="1" value={number} 
                onChange={handleNumberChange} />
        </>
    )
}
export default NumInput;