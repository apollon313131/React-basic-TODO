import React from 'react';
import styles from './Control.module.scss'
import clsx from 'clsx';


export const Control = props => {
    const { name, inputType, onChange, labelText, className, ...rest } = props; //TODO деструктуризация

    let input = null;
    if (inputType === 'input') {
        input = <input name={name} onChange={onChange} {...rest} />
    } else {
        input = <textarea name={name} onChange={onChange} {...rest} />
    }

    return (
        <div className={clsx(styles.control, className)}>
            {input}
            <label> {labelText} </label>
        </div>
    )
}