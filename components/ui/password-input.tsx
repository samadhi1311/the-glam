'use client';

import * as React from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(({ className, ...props }, ref) => {
	const [showPassword, setShowPassword] = React.useState(false);

	return (
		<div className='relative'>
			<Input type={showPassword ? 'text' : 'password'} className={cn('hide-password-toggle pr-10', className)} ref={ref} {...props} />
			<Button type='button' variant='ghost' size='sm' className='absolute right-0 top-0 z-10 h-full px-3 py-2 hover:bg-transparent' onClick={() => setShowPassword((prev) => !prev)}>
				{showPassword ? <EyeIcon className='size-4' aria-hidden='true' /> : <EyeOffIcon className='size-4' aria-hidden='true' />}
				<span className='sr-only'>{showPassword ? 'Hide password' : 'Show password'}</span>
			</Button>
		</div>
	);
});

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
