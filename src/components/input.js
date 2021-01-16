import React from 'react'

export default function Input(props){

    return(
        <div>
            {props.items.forEach((item, index) => 
                <label key={'label'+index}>{item.name}
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
            )}
        </div>
    )
}