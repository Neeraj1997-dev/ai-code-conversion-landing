'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface DataPoint {
  name: string
  total: number
}

interface DynamicBarChartProps {
  data: DataPoint[]
}

export default function DynamicBarChart({ data }: DynamicBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

