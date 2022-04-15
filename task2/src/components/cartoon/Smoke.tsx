const Smoke: React.FC = () => {
	const smokeStyles = {
		position: 'absolute',
		top: '-70%',
		width: '1vw',
		height: '1vw',
		borderRadius: '50%',
		background: '#ffffff',
		animation: 'smoke-scale 2s ease-out infinite var(--smoke-delay)',
	} as React.CSSProperties;

	return (
		<div className='smoke'>
			{[...Array(3).keys()].map((i) => (
				<div className={`smoke-${i + 1}`} style={smokeStyles}></div>
			))}
		</div>
	);
};

export default Smoke;
