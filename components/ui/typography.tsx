'use client';

import { cn } from '@/lib/utils';

function H1({ className, children }: { className?: string; children?: React.ReactNode }) {
	return <h1 className={cn('playfair scale-y-95 tracking-widest text-4xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase', className)}>{children}</h1>;
}

function H2({ className, children }: { className?: string; children?: React.ReactNode }) {
	return <h1 className={cn('playfair scale-y-95 tracking-wide text-4xl md:text-5xl', className)}>{children}</h1>;
}

function H3({ className, children }: { className?: string; children?: React.ReactNode }) {
	return <h2 className={cn('text-2xl md:text-3xl tracking-tighter font-light', className)}>{children}</h2>;
}

function P1({ className, children }: { className?: string; children?: React.ReactNode }) {
	return <p className={cn('inter leading-normal text-base', className)}>{children}</p>;
}

function P2({ className, children }: { className?: string; children?: React.ReactNode }) {
	return <p className={cn('inter leading-normal text-sm', className)}>{children}</p>;
}

function P3({ className, children }: { className?: string; children?: React.ReactNode }) {
	return <p className={cn('inter leading-normal text-xs uppercase tracking-widest', className)}>{children}</p>;
}

export { H1, H2, H3, P1, P2, P3 };
