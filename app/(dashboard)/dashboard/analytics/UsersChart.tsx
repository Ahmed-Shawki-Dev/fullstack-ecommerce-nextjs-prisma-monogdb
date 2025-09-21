'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../../../../service/axiosInstance'

export const description = 'A simple area chart'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-4)',
  },
} satisfies ChartConfig
type ChartPoint = { month: string; users: number }

export function UsersChart() {
  const [chartData, setChartData] = useState<ChartPoint[]>([])

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axiosInstance.get('/users')
      const users = response.data

      const usersGroupedByMonth: Record<string, number> = {}

      users.forEach((user: { createdAt: string }) => {
        const createdDate = new Date(user.createdAt)
        const month = monthNames[createdDate.getMonth()]
        usersGroupedByMonth[month] = (usersGroupedByMonth[month] || 0) + 1
      })

      const formattedData = Object.entries(usersGroupedByMonth).map(
        ([month, users]) => ({
          month,
          users,
        }),
      )

      setChartData(formattedData)
    }

    fetchUserData()
  }, [])

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Area Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className='h-[300] w-full'>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='line' />}
            />
            <Area
              dataKey='users'
              type='natural'
              fill='var(--color-desktop)'
              fillOpacity={0.4}
              stroke='var(--color-desktop)'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
