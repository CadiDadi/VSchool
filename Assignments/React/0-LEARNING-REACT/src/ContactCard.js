import React from 'react'
import PropTypes from 'prop-types'

const ContactCard = (props) => {
    return (
        <div class='ContactCardDiv'>
            <h1>ContactCard Name: {props.name}</h1>
            <h6>ContactCard Age: {props.age}</h6>
            <p>ContactCard Living: {props.isLiving}</p>
        </div>
    )
}

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    someObj: PropTypes.object,
    someObj: PropTypes.shape({
        num: PropTypes.number,
        str: PropTypes.string
    }),
    isLiving: PropTypes.bool
}

export default ContactCard