'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { H2, H3 } from '@/components/ui/typography';
import { Badge } from './ui/badge';

export default function Navigation({ closeMenu }: { closeMenu: () => void }) {
	return (
		<motion.div
			className='fixed left-0 top-0 z-50 flex w-full flex-col items-center justify-center bg-beige-light backdrop-saturate-0 md:h-[40vh]'
			initial={{ y: '-100%' }}
			animate={{ y: 0 }}
			exit={{ y: '-100%' }}
			transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}>
			<nav className='grid h-full w-full grid-cols-1 place-content-end gap-4 px-4 pb-8 pt-32 md:grid-cols-[1fr_1fr_1fr] md:gap-8 md:px-8'>
				<div className='w-full space-y-2'>
					<Link href='/' onClick={closeMenu} className='flex items-center justify-start px-4 py-4 transition duration-300 hover:bg-foreground/10'>
						<H3>Home</H3>
					</Link>
					<Link href='/' onClick={closeMenu} className='flex items-center justify-start px-4 py-4 transition duration-300 hover:bg-foreground/10'>
						<H3>Catalog</H3>
					</Link>
					<Link href='/' onClick={closeMenu} className='flex items-center justify-start px-4 py-4 transition duration-300 hover:bg-foreground/10'>
						<H3>About</H3>
					</Link>
				</div>

				<div className='w-full space-y-2'>
					<Link href='/' onClick={closeMenu} className='flex items-center justify-start px-4 py-4 transition duration-300 hover:bg-foreground/10'>
						<H3>Cart</H3>
						<Badge className='ml-4'>2</Badge>
					</Link>
					<Link href='/' onClick={closeMenu} className='flex items-center justify-start px-4 py-4 transition duration-300 hover:bg-foreground/10'>
						<H3>Account</H3>
					</Link>
				</div>

				<div className='flex h-full flex-col items-end justify-end gap-2'>
					<H2 className='text-5xl tracking-widest lg:text-6xl'>THE GLAM</H2>
					<div className='flex w-fit items-center gap-4'>
						<Link href='/' onClick={closeMenu} className='group/social'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='size-8 rounded-md bg-transparent fill-foreground object-scale-down p-1 transition-colors duration-300 group-hover/social:bg-foreground/10'>
								<path d='M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z' />
							</svg>
						</Link>
						<Link href='/' onClick={closeMenu} className='group/social'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='size-8 rounded-md bg-transparent fill-foreground object-scale-down p-1 transition-colors duration-300 group-hover/social:bg-foreground/10'>
								<path d='M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z' />
								<circle cx='16.806' cy='7.207' r='1.078' />
								<path d='M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z' />
							</svg>
						</Link>
						<Link href='/' onClick={closeMenu} className='group/social'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='size-8 rounded-md bg-transparent fill-foreground object-scale-down p-1 transition-colors duration-300 group-hover/social:bg-foreground/10'>
								<path
									fillRule='evenodd'
									d='M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263'
									clipRule='evenodd'
								/>
							</svg>
						</Link>
					</div>
				</div>
			</nav>
		</motion.div>
	);
}
