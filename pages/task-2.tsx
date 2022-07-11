import Link from 'next/link';
import headerBackground from '../assets/header_background.png';
import logo from '../assets/logo.png';
import locationIcon from '../assets/location_icon.png';
import emergencyIcon from '../assets/emergency_icon.png';
import covid from '../assets/covid.png';
import avatar from '../assets/avatar.png';
import socialIcons from '../assets/socialIcons.png';
import Countries from '../assets/countries.png';
import Icon from '../components/Icon';

export default function Task2() {
	return (
		<>
			<header
				style={{
					backgroundImage: `url(${headerBackground.src})`,
					backgroundSize: '50% ',
				}}
				className='bg-no-repeat bg-right'
			>
				<div
					className='py-10'
					style={{
						backgroundImage:
							'linear-gradient(to right, black 45%, transparent 80%)',
					}}
				>
					<div className='container max-w-6xl'>
						<Link href='/'>
							<a>
								<img src={logo.src} className='h-16' />
							</a>
						</Link>
					</div>
				</div>
			</header>
			<main>
				<div className='container max-w-6xl py-2 space-y-10'>
					<div className='border-b border-gray-500 flex mt-2 py-2 '>
						<form action='' className='w-full'>
							<input
								type='text'
								className='text-sm focus:outline-none w-full text-center'
								placeholder='How can we help you?'
							/>
						</form>
						<div className='text-3xl'>
							<Icon name='search-outline'></Icon>
						</div>
					</div>
					<div className='grid gap-x-24 place-items-center grid-cols-1 md:grid-cols-2 '>
						<div className=''>
							<div className='space-y-5'>
								<div>
									<h1 className='text-3xl text-blue-400'>
										Full knowledge of all your documents as they go
									</h1>
								</div>

								<div>
									<p>
										Document tracking software, also known as DMS (Document
										Management System), is a computer program that helps you
										store, find, manage, edit, and control your organizational
										documents in a single place.
									</p>
								</div>

								<div>
									<div className='grid  gap-3 grids-cols-1  md:grid-cols-2'>
										<div className='bg-gray-100 p-4'>
											<figure className='h-36 flex items-center justify-center p-4'>
												<img src={locationIcon.src} alt='Location' />
											</figure>
											<p>
												Know exactly where your files are at any given time of
												the day and be at peace as we treat them .{' '}
												<a href='#'>Read more</a>
											</p>
										</div>
										<div className='bg-gray-100 p-4'>
											<figure className='h-36 flex items-center justify-center p-4'>
												<img src={emergencyIcon.src} alt='Emergency' />
											</figure>
											<p>
												We peruse thoroughly to vet emergencies from everyday
												cases because our mission is to save lives.{' '}
												<a href='#'>Read more</a>
											</p>
										</div>
									</div>
								</div>

								<div>
									<img src={covid.src} className='w-full' alt='Covid' />
								</div>
								<div className='text-xs space-y-3 italic text-gray-500'>
									<p>Terms and conditions</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea{' '}
									</p>
								</div>
							</div>
						</div>
						<div className='w-full h-full flex items-center bg-gray-100 py-8 text-center'>
							<form action='' className='space-y-8 max-w-xs w-full mx-auto'>
								<div className='flex items-center justify-center'>
									<figure>
										<img src={avatar.src} alt='Avatar' />
									</figure>
								</div>
								<div>
									<input
										className='w-full py-2 px-3 border-b border-gray-500 focus:border-blue-500 text-center bg-transparent focus:outline-none'
										type='username'
										placeholder='Adele Moukouri'
									/>
								</div>
								<div>
									<input
										className='w-full py-2 px-3 border-b border-gray-500 focus:border-blue-500 text-center bg-transparent focus:outline-none'
										type='password'
										placeholder='*********'
									/>
								</div>

								<div>
									<p>Forgot/Reset Password</p>
								</div>

								<div>
									<button className='text-white text-lg bg-blue-500 w-full px-2 py-2'>
										Login
									</button>
								</div>

								<div>
									<p>
										Not Registered?{' '}
										<Link href=''>
											<a className='text-blue-500 no-underline'>Register Now</a>
										</Link>
									</p>
								</div>

								<div className='py-8'>
									<div className='flex justify-center space-x-3'>
										<figure>
											<img src={socialIcons.src} alt='' />
										</figure>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
			<footer className='text-white py-8 bg-black'>
				<div className='container space-y-5 max-w-6xl'>
					<div className='flex items-center justify-between'>
						<div className='space-y-4'>
							<div className='flex items-center space-x-1'>
								<Icon name='hand-right' />
								<span className='text-xs underline'>Help Text</span>
							</div>
							<ul className='text-sm'>
								<li>How to create an account </li>{' '}
								<li> How to track document proccessing progress</li>
								<li>How to retrive password</li>
								<li> How to change password</li>
							</ul>
						</div>
						<div className='space-y-4 text-sm text-right'>
							<address className='not-italic'>
								<span className='font-semibold'>Address: </span> N°8, Rue 3038
								quartier du Lac <br />
								(Yaoundé III)
							</address>

							<p>
								<span className='font-semibold'>Telephone: </span> (00237) 222
								23 04 68
							</p>
						</div>
					</div>

					<div className='flex justify-between'>
						<div>
							<img src={Countries.src} className='w-12' />
						</div>
						<p className='text-center text-sm'>
							© 2022 | Ministry of public health - Cameroon
						</p>
						<div>
							<ul className='flex space-x-2'>
								<li>
									<Icon name='logo-facebook' />
								</li>
								<li>
									<Icon name='logo-twitter' />
								</li>
								<li>
									<Icon name='chatbubble' />
								</li>
								<li>
									<Icon name='mail' />
								</li>
								<li>
									<Icon name='logo-youtube' />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
