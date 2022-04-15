const Clouds: React.FC = () => {
	const cloudsWrapperStyles = {
		position: 'absolute',
		width: '100%',
		height: '100%',
	} as React.CSSProperties;

	const cloudStyles = {
		position: 'absolute',
		left: '-18vw',
		width: '20vw',
		height: '6vw',
		opacity: '0.8',
		borderRadius: '50%',
		background: '#ffffff',
		animation: 'cloud-movement var(--cloud-time) linear infinite',
	} as React.CSSProperties;

	return (
		<div className='clouds-wrapper' style={cloudsWrapperStyles}>
			{[...Array(4).keys()].map((i) => (
				<div
					className={`cloud cloud-${i + 1}`}
					style={{ ...cloudStyles, top: `${10 * (i + 1)}%` }}></div>
			))}
		</div>
	);
};

export default Clouds;
