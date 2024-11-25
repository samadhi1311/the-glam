'use client';

function Page({ children }: Readonly<{ children?: React.ReactNode }>) {
	return <div className='mx-auto'>{children}</div>;
}

function Section({ children }: Readonly<{ children?: React.ReactNode }>) {
	return <div className='mx-auto px-4 py-16 md:px-8 md:py-32'>{children}</div>;
}

export { Page, Section };
