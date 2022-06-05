import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, 
Legend, Category, Tooltip, ColumnSeries, DataLabel } from "@syncfusion/ej2-react-charts"

import { ChartsHeader } from '../../components'

import { useStateContext } from '../../context/ContextProvider'

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'

const Bar = () => {

  const { currentMode } = useStateContext();

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl bg-white'>
      
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />

      <ChartComponent
        id='bar-chart'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 }}}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[ ColumnSeries, Legend, Tooltip, Category, DataLabel ]} />

        <SeriesCollectionDirective>
          { barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar