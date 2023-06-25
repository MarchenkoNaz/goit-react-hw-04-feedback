import FeedbackOption from 'components/FeedbackOption/FeedbackOption';
import React from 'react'
import PropTypes from 'prop-types'


const Feedback = ({ options, onLeaveFeedback }) => {
	return (
		<>
			<ul className='d-flex'>
				<FeedbackOption options={options} onLeaveFeedback={onLeaveFeedback} />
			</ul>
		</>
	)
}
Feedback.propTypes = {
	options: PropTypes.object,
	onLeaveFeedback: PropTypes.func
}

export default Feedback