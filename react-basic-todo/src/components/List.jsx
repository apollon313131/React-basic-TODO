import React from 'react'
import PropTypes from 'prop-types'


const ListItem = props => {
    const value = props.value;   //TODO извлечение компонентов
    return <li>{value}</li>
}

export const List = ({ items }) => {
    // const elements = items.map(item => <li key={item.toString()}>{item}</li>)
    return (
        <ul>
            {/* {elements} */}
            {items.map(item => <ListItem key={item.toString()} value={item} />)}
        </ul>
    )
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.number)
}

List.defaultProps = {
    items: []
}

