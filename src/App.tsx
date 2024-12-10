import React from 'react'
import VirtualizedTicketList from './components/VirtualizedTicketList'

const App: React.FC = () => {
  const ticketsNumber = 10000
  return (
    <div className='min-h-screen bg-black flex flex-col items-center justify-center'>
      <h1 className='text-xl font-semibold text-gray-100 '>Ticket List</h1>
      <h3 className='text-gray-200 m-1'>
        Total No of tickets:
        <span className='font-bold ml-1 text-green-500'> {ticketsNumber}</span>
      </h3>
      <div className='w-full xl:w-4/5 mt-2'>
        <VirtualizedTicketList ticketsNumber={ticketsNumber} />
      </div>
    </div>
  )
}

export default App
