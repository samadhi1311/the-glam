'use client';

import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export const Navigation = () => {
	const navigationItems = [
		{
			title: 'Home',
			href: '/',
			description: '',
		},
		{
			title: 'Catalog',
			description: 'Browse and select what fits you the best.',
			href: '/catalog',
		},
	];

	const [isOpen, setOpen] = useState(false);
	return (
		<header className='w-full z-40 fixed top-0 left-0 bg-background'>
			<div className='container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center'>
				<div className='justify-start items-center gap-4 lg:flex hidden flex-row'>
					<NavigationMenu className='flex justify-start items-start'>
						<NavigationMenuList className='flex justify-start gap-4 flex-row'>
							{navigationItems.map((item) => (
								<NavigationMenuItem key={item.title}>
									{item.href ? (
										<>
											<NavigationMenuLink>
												<Button variant='ghost'>{item.title}</Button>
											</NavigationMenuLink>
										</>
									) : (
										<>
											<NavigationMenuTrigger className='font-medium text-sm'>{item.title}</NavigationMenuTrigger>
											<NavigationMenuContent className='!w-[450px] p-4'>
												<div className='flex flex-col lg:grid grid-cols-2 gap-4'>
													<div className='flex flex-col h-full justify-between'>
														<div className='flex flex-col'>
															<p className='text-base'>{item.title}</p>
															<p className='text-muted-foreground text-sm'>{item.description}</p>
														</div>
													</div>
												</div>
											</NavigationMenuContent>
										</>
									)}
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className='flex lg:justify-center'>
					<p className='font-semibold'>The Glam</p>
				</div>
				<div className='flex justify-end w-full gap-4'>
					<Button className='gap-4'>
						<ShoppingCart className='w-4 h-4' /> Cart
					</Button>
					<div className='border-r hidden md:inline'></div>
					<Button variant='outline'>Sign in</Button>
				</div>
				<div className='flex w-12 shrink lg:hidden items-end justify-end'>
					<Button variant='ghost' onClick={() => setOpen(!isOpen)}>
						{isOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
					</Button>
					{isOpen && (
						<div className='absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8'>
							{navigationItems.map((item) => (
								<div key={item.title}>
									<div className='flex flex-col gap-2'></div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</header>
	);
};
