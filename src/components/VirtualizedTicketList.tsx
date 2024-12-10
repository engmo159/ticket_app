import React, { useState, useMemo } from 'react'
import generateMockTickets from '../data/generateMockTickets'
import TicketRow from './TicketRow'
import Header from './Header'

interface VirtualizedTicketListProps {
  ticketsNumber: number
}

// height variables
const itemHeight = 30
const overHightScan = 20
const windowHeight = 600

const VirtualizedTicketList: React.FC<VirtualizedTicketListProps> = ({
  ticketsNumber,
}) => {
  // get tickets data
  const tickets = useMemo(
    () => generateMockTickets(ticketsNumber),
    [ticketsNumber]
  )
  // scroll states & functions
  const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }
  // start & ending calculation
  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / itemHeight) - overHightScan
  )
  const renderedNodesCount = Math.min(
    tickets.length - startIndex,
    Math.floor(windowHeight / itemHeight) + 2 * overHightScan
  )

  const visibleTickets = useMemo(() => {
    return tickets.slice(startIndex, startIndex + renderedNodesCount)
  }, [tickets, startIndex, renderedNodesCount])

  // constant styles
  const containerStyles = { height: `${tickets.length * itemHeight}px` }
  const translateStyle = {
    transform: `translateY(${startIndex * itemHeight}px)`,
  }
  return (
    <div className='bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden'>
      <Header />
      <div
        className='w-full overflow-y-auto'
        style={{ height: `${windowHeight}px` }}
        onScroll={handleScroll}
        role='listbox'
        aria-label='Ticket List'
      >
        <div style={containerStyles}>
          <div style={translateStyle}>
            {visibleTickets.map(ticket => (
              <TicketRow key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VirtualizedTicketList
