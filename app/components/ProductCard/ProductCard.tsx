import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard() {
	return (
		<li className='p-4 bg-white rounded-md'>
			<Link href='#' className='block overflow-hidden group'>
				<Image
					src='https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
					alt=''
					width={500}
					height={500}
					className='w-full object-cover transition duration-300 sm:h-[200px] md:h-[250px] lg:h-[300px] group-hover:scale-110'
				/>

				<div className='relative pt-3 bg-white'>
					<h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>Basic Tee</h3>

					<p className='mt-2'>
						<span className='sr-only'> Regular Price </span>

						<span className='tracking-wider text-gray-900'> LKR 2400.00 </span>
					</p>
				</div>
			</Link>
		</li>
	);
}
