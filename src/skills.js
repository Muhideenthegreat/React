import React from 'react'

const Progress_bar = ({bgcolor,progress,height,Name}) => {
	
	const Parentdiv = {
		height: height,
		width: '90%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 20
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}>{`${Name}`}</span>
	</div>
	</div>
	)
}

export default Progress_bar;
