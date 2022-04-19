import React from 'react'

type SelectOwnProps = {
	selectitems: string[]
	children?: React.ReactNode
	onChangeHandler?: (event: React.MouseEvent<HTMLSelectElement>) => void
} & Omit<React.ComponentProps<'select'>, 'children'>

type SelectProps<E extends React.ElementType> = SelectOwnProps &
	Omit<React.ComponentProps<E>, keyof SelectOwnProps>

export const Select = <E extends React.ElementType = 'button'>(
	props: SelectProps<E>
) => {
	return (
		<select {...props} onChange={props.onChangeHandler}>
			{props.selectitems.map((item) => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				)
			})}
		</select>
	)
}
