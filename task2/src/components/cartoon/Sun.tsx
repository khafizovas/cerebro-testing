import Beams from './Beams';

const Sun: React.FC = () => {
	const sunWrapperStyles = {
		position: 'absolute',
		width: '100%',
		height: '100%',
		transformOrigin: 'bottom center',
		animation: 'sun-movement 90s linear infinite',
	} as React.CSSProperties;

	const sunStyles = {
		position: 'absolute',
		top: '30px',
		right: '50%',
		width: '80px',
		height: '80px',
		borderRadius: '50%',
		background: '#ffcf11',
		boxShadow: '0 0 100px #ffdf05',
		animation:
			'beams-rotation 20s linear infinite,	sun-coloring 90s linear infinite',
	} as React.CSSProperties;

	return (
		<div className='sun-wrapper' style={sunWrapperStyles}>
			<div className='sun' style={sunStyles}>
				<Beams />
			</div>
		</div>
	);
};

export default Sun;
