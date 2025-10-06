import React, { useState} from "react";
const NumInput = props => {
    const [number, setNumber] = useState(42)
    

    const handleNumberChange = e =>{
        //console.log('numchange', e)
        setNumber(e.target.value)
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