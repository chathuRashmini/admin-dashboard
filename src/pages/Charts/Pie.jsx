import React from 'react'

import { ChartsHeader, Pie as PieChart } from '../../components'

import { pieChartData } from '../../data/dummy'

const Pie = () => {
  
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl bg-white'>
      
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />

      <div className="w-full">
        <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
      </div>
    </div>
  )
}

export default Pie