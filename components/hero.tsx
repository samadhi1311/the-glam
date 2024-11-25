'use client';

import { motion, stagger, useAnimate } from 'motion/react';
import { H1, P1 } from '@/components/ui/typography';
import { useEffect } from 'react';
import { HiOutlineSparkles } from 'react-icons/hi2';

export default function Hero() {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		async function animations() {
			animate(
				'.elegant-flowers',
				{
					opacity: 1,
					x: [5, 0],
					y: [-10, 0],
					scale: [0.98, 1],
				},
				{
					duration: 3,
					ease: [0.645, 0.045, 0.355, 1],
				}
			);

			animate(
				'.the-glam-heading',
				{
					opacity: 1,
					y: [-100, 0],
				},
				{
					duration: 2.5,
					delay: stagger(0.02),
					ease: [0.645, 0.045, 0.355, 1],
				}
			);

			await animate(
				'.the-glam-slogan',
				{
					opacity: 0.6,
				},
				{
					delay: 1,
					duration: 2.5,
					ease: [0.645, 0.045, 0.355, 1],
				}
			);
		}

		animations();
	}, [animate]);

	return (
		<main ref={scope} className='flex h-svh w-full flex-col items-center justify-center'>
			<div className='relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-x-hidden'>
				<img src='/flowers/elegant-flowers-tr.svg' alt='Flowers' className='elegant-flowers absolute right-0 top-0 h-full max-h-[30vh] origin-top-right fill-accent opacity-0' />
				<H1 className='flex scale-y-95 items-center gap-2 text-center md:gap-3'>
					{Array.from('THE GLAM').map((char, index) => (
						<motion.span key={index} className='the-glam-heading opacity-0' style={{ display: 'inline-block' }}>
							{char}
						</motion.span>
					))}
				</H1>
				<P1 className='the-glam-slogan flex items-start pt-4 font-semibold uppercase tracking-widest text-foreground opacity-0'>
					Handmade Luxury Accessories
					<HiOutlineSparkles className='ml-1 size-4' />
				</P1>
			</div>
		</main>
	);
}
