import { render } from '@testing-library/react'
import TicketRow from '../components/TicketRow'

const mockTicket = {
  id: 1,
  subject: 'Subject 1',
  priority: 'High',
  status: 'Open',
  description: 'Description of ticket 1',
}

describe('TicketRow', () => {
  it('should render ticket details correctly', () => {
    const { getByText } = render(<TicketRow ticket={mockTicket} />)

    // Check if each ticket detail is displayed
    expect(getByText('Subject 1')).toBeInTheDocument()
    expect(getByText('High')).toBeInTheDocument()
    expect(getByText('Open')).toBeInTheDocument()
    expect(getByText('Description of ticket 1')).toBeInTheDocument()
  })

  it('should render with proper styles', () => {
    const { container } = render(<TicketRow ticket={mockTicket} />)
    expect(container.firstChild).toHaveClass('shadow-sm')
    expect(container.firstChild).toHaveClass('rounded-md')
  })
})
