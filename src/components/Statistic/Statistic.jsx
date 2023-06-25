import React from 'react'
import PropTypes from 'prop-types'

const Statistic = ({ options, total, pos }) => {
	const { good, neutral, bad } = options
	return (
		<ul className='list-group'>
			<li className='list-group-item'>Good feedbacks: {good}</li>
			<li className='list-group-item'>Neutral feedbacks: {neutral}</li>
			<li className='list-group-item'>Bad feedbacks: {bad}</li>
			{total !== 0 && <li className='list-group-item'>Total feedbacks: {total}</li>}
			{!!pos && <li className='list-group-item'>Positive feedbacks: {pos}</li>}
		</ul>
	)
}

Statistic.propTypes = {
	options: PropTypes.object,
	total: PropTypes.number,
	pos: PropTypes.number,
}

export default Statistic