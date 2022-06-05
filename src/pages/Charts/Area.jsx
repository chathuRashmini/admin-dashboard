import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective,
Inject, DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts'

import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'

import { Header } from '../../components'

import { useStateContext } from '../../context/ContextProvider'

const Area = () => {

  const { currentMode } = useStateContext()

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl bg-white'>
      <Header category="Area" title="Inflation Rate In Percentage" />

      <div className="w-full">
        <ChartComponent
          id='line-chart'
          height='420px'
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
        >
          <Inject services={[ SplineAreaSeries, DateTime, Legend ]} />

          <SeriesCollectionDirective>
            { areaCustomSeries.map((item, index) => 
              <SeriesDirective key={index} {...item} />
            )}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Area