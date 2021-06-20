import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'
import { Icon } from '../Icon/Icon'

export const Button = (props) => {
    const { children, className, size, color, iconType, ...rest } = props;
    const render = (
        <span>
            {iconType && <Icon type={iconType} />}
            {children || null}
        </span>
    );

    return (
        <button
            className={
                clsx(
                    [
                        styles.container,
                        {
                            [styles[size]]: size,
                            [styles[`container_${color}`]]: color
                        },
                        className
                    ]
                )
            }
            {...rest}
        >
            {render}
        </button>
    );
}