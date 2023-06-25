import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ children, message }) => {
	return (<>
		<p className='lead'>{message}</p>
		{children}
	</>)
}

Section.propTypes = {
	message: PropTypes.string
}

export default Section