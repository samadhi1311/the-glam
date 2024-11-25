'use client';

import { useState } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'motion/react';
import Navigation from './navigation';
import { TextSwitch } from '../animations/animations';

export default function MenuButton() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<motion.button
				className='group fixed left-4 top-4 z-[100] font-medium transition-colors duration-100 hover:bg-foreground md:left-8 md:top-8'
				onClick={() => setIsOpen(!isOpen)}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1 }}>
				<div className='relative flex h-10 w-32 items-center overflow-hidden px-6 py-2 uppercase tracking-widest group-hover:text-background'>
					<motion.span className='absolute size-4' variants={TextSwitch} animate={isOpen ? 'open' : 'closed'}>
						<FaX />
					</motion.span>
					<motion.span className='absolute size-4' variants={TextSwitch} animate={!isOpen ? 'open' : 'closed'}>
						<FaBars />
					</motion.span>
					<span className='ml-6'>MENU</span>
				</div>
			</motion.button>

			<AnimatePresence mode='wait'>{isOpen && <Navigation closeMenu={() => setIsOpen(false)} />}</AnimatePresence>
		</>
	);
}
