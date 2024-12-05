'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Page } from '@/components/ui/layouts';
import { PasswordInput } from '@/components/ui/password-input';
import { Separator } from '@/components/ui/separator';
import { H2, H3, P1, P2 } from '@/components/ui/typography';
import { useAuth } from '@/lib/hooks/use-auth';
import { Loader2Icon, LogInIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
	const { authLoading, login, user } = useAuth();

	const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

	return (
		<Page className='flex h-full items-center justify-center'>
			<div className='grid h-svh w-full grid-cols-1 md:grid-cols-2'>
				<div className='relative hidden w-full overflow-hidden md:block'>
					<span className='absolute left-4 top-4 z-10 md:left-8 md:top-8 lg:left-16 lg:top-16'>
						<P1 className='leading-none'>Welcome back to, </P1>
						<H2 className='scale-y-95'>THE GLAM</H2>
						{user ? user.email : null}
					</span>
					<img src='/pawel-czerwinski-WEjv3BMP2ik-unsplash.jpg' alt='Background image' className='-z-10 object-cover opacity-50' />
				</div>
				<div className='mx-auto flex w-full items-center justify-center'>
					<div className='flex w-full flex-col items-center justify-center gap-4 p-4 md:max-w-sm md:gap-8 md:p-8'>
						<div className='space-y-2 text-center'>
							<H3>Login</H3>
							<P2 className='text-foreground/60'>Login to your account</P2>
						</div>
						<div className='mt-8 grid w-full gap-8'>
							<div className='grid gap-2'>
								<Input id='email' placeholder='Email' type='email' required onChange={(e) => setUserCredentials({ ...userCredentials, email: e.target.value })} />
							</div>

							<div className='grid gap-2'>
								<PasswordInput id='password' placeholder='Password' type='password' required onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })} />
								<div className='flex items-center'>
									<Link href='#' className='ml-auto inline-block text-sm underline'>
										Forgot your password?
									</Link>
								</div>
							</div>

							<div className='mt-4 flex flex-col items-center justify-center gap-4'>
								{authLoading ? (
									<Button type='submit' className='flex w-fit min-w-36 items-center gap-3'>
										<Loader2Icon className='size-4 animate-spin object-center' /> Wait
									</Button>
								) : (
									<Button type='submit' className='flex w-fit min-w-36 items-center gap-3' onClick={() => login(userCredentials.email, userCredentials.password)}>
										<LogInIcon className='size-4' /> Login
									</Button>
								)}
								<span className='text-center text-sm'>or</span>
								<Button variant='outline' className='w-fit min-w-36'>
									Continue with Google
								</Button>
							</div>
						</div>
						<Separator />
						<div className='text-center text-sm'>
							Don&apos;t have an account?{' '}
							<Link href='/signup' className='underline'>
								Sign up
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}
