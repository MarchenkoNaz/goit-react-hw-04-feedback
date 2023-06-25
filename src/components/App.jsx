import React from 'react'
import Section from './Section/Section'
import Feedback from './Feedback/Feedback'
import Statistic from './Statistic/Statistic'
import { useState } from 'react'

const App = props => {
	const INITIAL_FEEDBACK = {
		good: 0,
		neutral: 0,
		bad: 0,
	};
	const [feedbackData, setFeedbackData] = useState(INITIAL_FEEDBACK);
	const onLeaveFeedback = event => {
		const {
			target: { name },
		} = event;

		setFeedbackData(prevState => ({
			...prevState,
			[name]: Number.parseInt(prevState[name]) + 1,
		}));
	};

	const countTotal = () => {
		const { good, neutral, bad } = feedbackData
		return good + neutral + bad
	}

	const countPositivePercentage = () => {
		const { good } = feedbackData
		return Math.round((good * 100) / countTotal())
	}
	return (
		<>
			<Section message='Please leave Feedback'>
				<Feedback options={INITIAL_FEEDBACK} onLeaveFeedback={onLeaveFeedback} />
			</Section >
			<Section message='Statistic'>
				<Statistic options={feedbackData} total={countTotal()} pos={countPositivePercentage()} />
			</Section>

		</>
	)
}

App.propTypes = {}

export default App