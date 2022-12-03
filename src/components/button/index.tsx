import { PropsWithChildren } from 'react'

import { Container } from './styles'

type ButtonProps = {
	className?: string
	variant?: 'default' | 'success'
} & PropsWithChildren

export function Button({
	className,
	variant = 'default',
	children,
}: ButtonProps) {
	return (
		<Container variant={variant} className={className}>
			{children}
		</Container>
	)
}

export default Button
