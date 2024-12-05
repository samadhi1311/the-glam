'use client';

import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Navigation from '@/components/navigation';
import { TextSwitch } from './animations/animations';

export default function MenuButton() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<motion.button
				className='fixed left-4 top-4 z-[100] font-medium transition-all duration-300 hover:bg-foreground/10 md:left-8 md:top-8'
				onClick={() => setIsOpen(!isOpen)}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1 }}>
				<div className='relative flex h-10 w-32 items-center overflow-hidden px-6 py-2 uppercase tracking-widest'>
					<motion.span className='absolute size-4' variants={TextSwitch} animate={isOpen ? 'open' : 'closed'}>
						<XIcon className='size-4' />
					</motion.span>
					<motion.span className='absolute size-4' variants={TextSwitch} animate={!isOpen ? 'open' : 'closed'}>
						<MenuIcon className='size-4' />
					</motion.span>
					<span className='ml-6'>MENU</span>
				</div>
			</motion.button>

			<AnimatePresence mode='wait'>{isOpen && <Navigation closeMenu={() => setIsOpen(false)} />}</AnimatePresence>
		</>
	);
}
