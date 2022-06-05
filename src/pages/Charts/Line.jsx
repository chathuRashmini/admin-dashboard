import React from 'react'

import { LineChart, Header } from '../../components'

const Line = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl bg-white'>
      <Header category="Line" title="Inflation Rate" />

      <div className="w-full">
        <LineChart />
      </div>
    </div>
  )
}

export default Line