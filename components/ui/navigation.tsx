'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { H2, H3, P1 } from './typography';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

export default function Navigation({ closeMenu }: { closeMenu: () => void }) {
	return (
		<motion.div
			className='absolute left-0 top-0 z-50 flex w-full flex-col items-center justify-center bg-background backdrop-saturate-0 md:h-[40vh]'
			initial={{ y: '-100%' }}
			animate={{ y: 0 }}
			exit={{ y: '-100%' }}
			transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}>
			<nav className='grid h-full w-full grid-cols-1 place-content-end gap-4 px-4 pb-8 pt-32 md:grid-cols-[4fr_1fr] md:gap-8 md:px-8'>
				<div className='w-full space-y-2'>
					<Link href='/' onClick={closeMenu} className='flex items-center justify-start px-4 py-4 transition duration-150 hover:bg-foreground hover:text-background'>
						<H3>Home</H3>
					</Link>
					<Link href='/' onClick={closeMenu} className='flex items-center justify-start px-4 py-4 transition duration-150 hover:bg-foreground hover:text-background'>
						<H3>Catalog</H3>
					</Link>
					<Link href='/' onClick={closeMenu} className='flex items-center justify-start px-4 py-4 transition duration-150 hover:bg-foreground hover:text-background'>
						<H3>About</H3>
					</Link>
				</div>

				<div className='flex h-full flex-col items-end justify-end gap-2'>
					<div className='hidden h-full w-full bg-white/50 md:block'></div>
					<H2 className='text-5xl tracking-widest lg:text-6xl'>THE GLAM</H2>
					<div className='flex w-fit items-center gap-4'>
						<Link href='/' onClick={closeMenu} className='flex items-center justify-start px-1 py-1 transition duration-150 hover:bg-foreground hover:text-background'>
							<P1 className=''>
								<FaFacebookF className='size-5' />
							</P1>
						</Link>
						<Link href='/' onClick={closeMenu} className='flex items-center justify-start px-1 py-1 transition duration-150 hover:bg-foreground hover:text-background'>
							<P1 className=''>
								<FaInstagram className='size-5' />
							</P1>
						</Link>
						<Link href='/' onClick={closeMenu} className='flex items-center justify-start px-1 py-1 transition duration-150 hover:bg-foreground hover:text-background'>
							<P1 className=''>
								<FaWhatsapp className='size-5' />
							</P1>
						</Link>
					</div>
				</div>
			</nav>
		</motion.div>
	);
}
