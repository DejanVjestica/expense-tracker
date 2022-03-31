import React from 'react'

type DateProps = {
	date: Date
}

export const Date = (props: DateProps) => {
	const date = props.date.toLocaleDateString('de-DE')
	return <time>created: {date} </time>
}
