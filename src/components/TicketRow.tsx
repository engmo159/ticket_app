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
  // styling based on value
  const priorityColor =
    priority.toLowerCase() === 'high'
      ? 'text-red-500'
      : priority.toLowerCase() === 'medium'
      ? 'text-yellow-700'
      : 'text-green-700'
  const statusColor =
    status.toLowerCase() === 'open'
      ? 'text-red-500'
      : status === 'In Progress'
      ? 'text-yellow-700'
      : 'text-green-700'

  return (
    <div className='shadow-sm rounded-md border border-gray-300 p-3 bg-sky-400 mb-2'>
      <div className='flex items-center space-x-4 font-bold text-md'>
        <div className='w-1/6  text-gray-800 truncate'>{subject}</div>
        <div className={`w-1/6  ${priorityColor}`}>{priority}</div>
        <div className={`w-1/6  ${statusColor}`}>{status}</div>
        <div className='w-1/2  text-gray-600 truncate'>{description}</div>
      </div>
    </div>
  )
})
export default TicketRow
