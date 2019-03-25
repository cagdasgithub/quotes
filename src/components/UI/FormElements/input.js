import React from 'react';

const Input = (props) => {

    return (
        <input
                className="input is-success is-primary"
                type="text"
                placeholder={props.placeholder}
                value={props.initialValue}
                onChange={props.onChange}
              />
      );
}
 
export default Input;