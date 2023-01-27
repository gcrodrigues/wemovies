import { PropsWithChildren } from 'react'

import { Container } from './styles'

type ButtonProps = {
	className?: string
	variant?: 'default' | 'success'
	onClick: () => void
} & PropsWithChildren

export function Button({
	className,
	variant = 'default',
	children,
	onClick,
}: ButtonProps) {
	return (
		<Container onClick={onClick} variant={variant} className={className}>
			{children}
		</Container>
	)
}

export default Button
