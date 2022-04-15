import './Animations.css';
import './Pseudoclasses.css';
import './Cartoon.css';

import Sky from './Sky';
import Sea from './Sea';

const Cartoon: React.FC = () => {
	const canvasStyles = {
		position: 'fixed',
		width: '100%',
		height: '100%',
		opacity: 0.5,
		transition: '0.3s ease',
		perspective: '800px',
	} as React.CSSProperties;

	const boxFrontStyles = {
		position: 'absolute',
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		background: '#87ceeb',
		boxShadow: '0 -400px 300px -300px #4682b4 inset',
		animation: 'day-and-night 90s linear infinite',
	} as React.CSSProperties;

	return (
		<div className='canvas' style={canvasStyles}>
			<div className='box_front' style={boxFrontStyles}>
				<Sky />
				<Sea />
			</div>
		</div>
	);
};

export default Cartoon;
