import React from 'react'
import './Wrapper.scss'

type WrapperProps = {
	children: React.ReactNode
	className?: string
}

export const Wrapper = (props: WrapperProps) => {
	return <div className={props.className || 'card'}>{props.children}</div>
}
