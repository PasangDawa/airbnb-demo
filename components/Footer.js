const Footer = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
			<div className='space-y-4 text-gray-800'>
				<h5 className='font-bold uppercase'>About</h5>
				<p>How Airbnb works</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>

			<div className='space-y-4 text-gray-800'>
				<h5 className='font-bold uppercase'>Community</h5>
				<p>Accessibility</p>
				<p>This is a clone</p>
				<p>Project</p>
				<p>With plans for a</p>
				<p>Working site</p>
			</div>

			<div className='space-y-4 text-gray-800'>
				<h5 className='font-bold uppercase'>Host</h5>
				<p>Pasang's Home</p>
				<p>Presents</p>
				<p>New Rent To Earn Money</p>
				<p>With Nice Adds</p>
				<p>Join Now</p>
			</div>

			<div className='space-y-4 text-gray-800'>
				<h5 className='font-bold uppercase'>Support</h5>
				<p>Help Center</p>
				<p>Trust & Safety</p>
				<p>Say Hi</p>
				<p>Mega Deal</p>
				<p>For the Property Owners</p>
			</div>
		</div>
	);
};

export default Footer;
