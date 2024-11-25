'use client';

import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Products from '@/components/products';
import { Page } from '@/components/ui/layouts';

export default function Home() {
	return (
		<Page>
			<Hero />
			<Products />
			<Footer />
		</Page>
	);
}
