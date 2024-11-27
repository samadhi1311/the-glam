'use client';

import MenuButton from '@/components/menu-button';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion } from 'motion/react';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<ReactLenis root options={{ lerp: 0.35 }}>
			<MenuButton />

			<motion.div>{children}</motion.div>
		</ReactLenis>
	);
}
