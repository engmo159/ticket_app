import React from 'react'

interface TicketRowProps {
  ticket: {
    id?: number
    subject: string
    priority: string
    status: string
    description: string
  }
}

const TicketRow: React.FC<TicketRowProps> = React.memo(({ ticket }) => {
  const { subject, priority, status, description } = ticket

  return (
    <div className='shadow-sm rounded-md border border-gray-300 p-3 bg-gray-50 mb-2'>
      <div className='flex items-center space-x-4'>
        <div className='w-1/6 font-bold text-sm text-gray-800 truncate'>
          {subject}
        </div>
        <div className='w-1/6 text-sm text-gray-600'>{priority}</div>
        <div className='w-1/6 text-sm text-gray-600'>{status}</div>
        <div className='w-1/2 text-sm text-gray-600 truncate'>
          {description}
        </div>
      </div>
    </div>
  )
})
export default TicketRow
