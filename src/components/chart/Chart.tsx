import React from 'react'
import { ChartBar } from './ChartBar'
import { DataPoint } from '../Expenses.types'

import './Chart.scss'

type ChartProps = {
	dataPoints: DataPoint[]
}

export const Chart = (props: ChartProps) => {
	const totalMax = Math.max(
		...props.dataPoints.map((point) => point.value)
	)
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint, index) => {
				return (
					<ChartBar
						key={index}
						value={dataPoint.value}
						maxValue={totalMax}
						label={dataPoint.label}
					/>
				)
			})}
		</div>
	)
}
