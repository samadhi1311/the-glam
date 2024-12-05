'use client';

import { Section } from './ui/layouts';

export default function Products() {
	return (
		<Section>
			<div className='mx-auto max-w-screen-xl'>
				<div className='grid gap-10 md:grid-cols-2'>
					<div className='order-1 flex flex-col gap-2 rounded-lg border p-2'>
						<img
							src='/catalog/gold-rings 2.jpg'
							alt='placeholder'
							className='aspect-video w-full rounded-lg border object-cover object-bottom contrast-125 saturate-0 filter duration-300 hover:contrast-100 hover:saturate-100'
						/>
						<div data-orientation='horizontal' role='none' className='bg-border h-[1px] w-full shrink-0'></div>
						<img
							src='/catalog/gold-rings.jpg'
							alt='placeholder'
							className='aspect-video w-full rounded-lg border object-cover object-bottom contrast-125 saturate-0 filter duration-300 hover:contrast-100 hover:saturate-100'
						/>
					</div>
					<div className='order-3 rounded-lg border p-2'>
						<img
							src='/catalog/pastel pink bow.jpg'
							alt='placeholder'
							className='h-full w-full rounded-lg border object-cover contrast-125 saturate-0 filter duration-300 hover:contrast-100 hover:saturate-100'
						/>
					</div>
					<div className='order-2 -mt-6 max-w-[412px] md:order-3'>
						<p className='mb-6 text-sm text-zinc-600 md:mb-12'>Lorem ipsum dolor sit amet.</p>
						<h3 className='mb-3 text-2xl font-medium md:mb-6'>Quality and Durability</h3>
						<p className='mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi distinctio maiores sint cupiditate ab ullam numquam a similique vel itaque.</p>
						<a href='#' className='font-medium hover:underline'>
							Learn more about our process
						</a>
					</div>
					<div className='order-4 -mt-6 max-w-[412px] md:order-3'>
						<p className='mb-6 text-sm text-zinc-600 md:mb-12'>Lorem ipsum dolor sit amet.</p>
						<h3 className='mb-3 text-2xl font-medium md:mb-6'>Transform Your Space a Reality</h3>
						<p className='mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi distinctio maiores sint cupiditate ab ullam numquam a similique vel itaque.</p>
						<a href='#' className='font-medium hover:underline'>
							Learn more about our process
						</a>
					</div>
				</div>
			</div>
		</Section>
	);
}
