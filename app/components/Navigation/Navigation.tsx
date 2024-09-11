'use client';

import Link from 'next/link';
import { ShoppingCart, User, Sparkle, X } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className='bg-white'>
			<div className='px-4 mx-auto max-w-screen-3xl sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-24'>
					<Link href='/' className='flex md:items-center md:gap-12'>
						<button className='flex items-center gap-2 text-pale-gold-600 px-5 py-2.5 bg-pale-gold-50 rounded-md hover:bg-pale-gold-400 hover:text-pale-gold-50 font-bold'>
							<Sparkle size={24} weight='fill' />
							The Glam
						</button>
					</Link>

					<div className='md:flex md:items-center md:gap-12'>
						<nav aria-label='Global' className='hidden md:block'>
							<ul className='flex items-center gap-8 text-sm font-semibold'>
								<li>
									<Link className='text-gray-500 transition hover:text-pale-gold-400' href='/catalog'>
										Catalog
									</Link>
								</li>
								<li>
									<Link className='text-gray-500 transition hover:text-pale-gold-400' href='/'>
										About
									</Link>
								</li>
								<li>
									<Link className='text-gray-500 transition hover:text-pale-gold-400' href='/'>
										Contact Us
									</Link>
								</li>
							</ul>
						</nav>

						<div className='flex items-center gap-4'>
							<div className='sm:flex sm:gap-4'>
								<div className='hidden sm:flex sm:gap-4'>
									<Link href='#'>
										<button className='rounded-md bg-pale-gold-100 px-5 py-2.5 text-sm font-medium text-pale-gold-600 flex items-center gap-2 hover:bg-pale-gold-400 hover:text-pale-gold-50'>
											<ShoppingCart size={24} weight='bold' /> Cart
										</button>
									</Link>
									<Link href='#'>
										<button className='rounded-md bg-pale-gold-100 px-5 py-2.5 text-sm font-medium text-pale-gold-600 flex items-center gap-2 hover:bg-pale-gold-400 hover:text-pale-gold-50'>
											<User size={24} weight='bold' />
											Login
										</button>
									</Link>
								</div>
							</div>

							<div className='block md:hidden'>
								<button className='p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75' onClick={toggleMenu}>
									<svg xmlns='http://www.w3.org/2000/svg' className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'>
										<path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16M4 12h16M4 18h16' />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{isMenuOpen && (
				<div className='fixed inset-0 z-50 flex items-center justify-center w-full h-screen font-medium bg-pale-gold-50/80 backdrop-blur-md text-muted'>
					<span className='absolute top-4 right-4'>
						<button>
							<X size={32} weight='bold' onClick={toggleMenu} />
						</button>
					</span>
					<div>
						<ul className='flex flex-col gap-16 md:hidden'>
							<li>
								<Link className='transition hover:text-pale-gold-400' href='/catalog'>
									Catalog
								</Link>
							</li>
							<li>
								<Link className='transition hover:text-pale-gold-400' href='/'>
									About
								</Link>
							</li>
							<li>
								<Link className='transition hover:text-pale-gold-400' href='/'>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			)}
		</header>
	);
}
