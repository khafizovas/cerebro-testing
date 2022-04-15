import Smoke from './Smoke';

const Ship: React.FC = () => {
	const shipStyles = {
		position: 'absolute',
		right: 0,
		bottom: '9%',
		width: '15vw',
		height: '5vw',
		animation: 'ship-movement 40s linear infinite',
	} as React.CSSProperties;

	const shipWindowStyles = {
		position: 'absolute',
		top: '0.6vw',
		left: '40%',
		width: '0.8vw',
		height: '0.8vw',
		borderRadius: '50%',
		background: '#a18e6e',
		boxShadow: '13px 0 0 0 #a18e6e, -13px 0 0 0 #a18e6e',
	} as React.CSSProperties;

	const shipSmokeStackStyles = {
		position: 'absolute',
		bottom: '5vw',
		left: '60%',
		width: '1.5vw',
		height: '2.5vw',
		background: '#a18e6e',
	} as React.CSSProperties;

	return (
		<div className='ship' style={shipStyles}>
			<Smoke />
			<div className='ship_smokestack' style={shipSmokeStackStyles}></div>
			<div className='ship_window' style={shipWindowStyles}></div>
		</div>
	);
};

export default Ship;
