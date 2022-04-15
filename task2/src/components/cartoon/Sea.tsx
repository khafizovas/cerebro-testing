import Ship from './Ship';

const Sea: React.FC = () => {
	const seaStyles = {
		position: 'absolute',
		right: 0,
		bottom: 0,
		left: 0,
		height: '10%',
		background: '#2a94d6',
	} as React.CSSProperties;

	return (
		<>
			<Ship />
			<div className='sea' style={seaStyles}></div>
		</>
	);
};

export default Sea;
