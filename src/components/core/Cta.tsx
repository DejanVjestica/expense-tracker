import React from 'react'
import './Cta.scss'

// TODO: Restrain the type to accept only button or anchor elements

type CtaOwnProps<E extends React.ElementType> = {
	as?: E
	children?: React.ReactNode
} & Omit<React.ComponentProps<'button'>, 'children'>

type CtaProps<E extends React.ElementType> = CtaOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof CtaOwnProps<E>>

export const Cta = <E extends React.ElementType = 'button'>({
	as,
	children,
	...props
}: CtaProps<E>) => {
	const Component = as || 'button'

	return (
		<Component className="cta" {...props}>
			{children || 'Click me'}
		</Component>
	)
}
