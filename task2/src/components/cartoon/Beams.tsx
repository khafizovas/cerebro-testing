const Beams: React.FC = () => {
	const beamStyles = {
		position: 'absolute',
		top: '-20px',
		left: '50%',
		width: '2px',
		height: '100px',
		border: 'solid #ffcf11',
		borderWidth: '10px 0 10px 0',
	} as React.CSSProperties;

	return (
		<>
			{[...Array(10).keys()].map((i) => (
				<div
					style={{
						...beamStyles,
						transform: `rotate(${18 * (i + 1)}deg)`,
					}}></div>
			))}
		</>
	);
};

export default Beams;
