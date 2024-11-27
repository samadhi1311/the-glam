'use client';

import { cn } from '@/lib/utils';

function Page({ children, className }: Readonly<{ children?: React.ReactNode; className?: string }>) {
	return <div className={cn('mx-auto min-h-svh', className)}>{children}</div>;
}

function Section({ children, className }: Readonly<{ children?: React.ReactNode; className?: string }>) {
	return <div className={cn('mx-auto px-4 py-16 md:px-8 md:py-32', className)}>{children}</div>;
}

export { Page, Section };
