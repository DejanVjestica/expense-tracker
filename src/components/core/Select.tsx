import React from 'react'

type SelectProps = React.ComponentProps<'select'>

type SelectOwnProps = SelectProps & {
	selectitems: string[]
	handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select = (props: SelectOwnProps) => {
	return (
		<select {...props}>
			{props.selectitems.map((item, index) => {
				return (
					<option key={index} value={item}>
						{item}
					</option>
				)
			})}
		</select>
	)
}
