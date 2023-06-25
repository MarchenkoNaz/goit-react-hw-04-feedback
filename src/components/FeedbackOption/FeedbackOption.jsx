import React from 'react'
import PropTypes from 'prop-types'

const FeedbackOption = ({ options, onLeaveFeedback }) => {
	const namesOfBtn = Object.keys(options)
	return (
		<>
			{namesOfBtn.map(btn => <li key={btn} type='button' className='list-group-item'> <button className='btn btn-dark m-2' onClick={(e) => onLeaveFeedback(e)} name={btn}>{btn}</button></li>)}
		</>
	)
}

FeedbackOption.propTypes = {
	options: PropTypes.object,
	onLeaveFeedback: PropTypes.func
}

export default FeedbackOption