import './Cartoon.css';

const Cartoon: React.FC = () => {
	return (
		<div className='canvas'>
			<div className='box_front'>
				<div className='sun-wrapper'>
					<div className='sun'>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div className='clouds-wrapper'>
					<div className='cloud cloud-1'></div>
					<div className='cloud cloud-2'></div>
					<div className='cloud cloud-3'></div>
					<div className='cloud cloud-4'></div>
				</div>
				<div className='ship'>
					<div className='smoke'>
						<div className='smoke-1'></div>
						<div className='smoke-2'></div>
						<div className='smoke-3'></div>
					</div>
					<div className='ship_smokestack'></div>
					<div className='ship_window'></div>
				</div>
				<div className='sea'></div>
			</div>
		</div>
	);
};

export default Cartoon;
