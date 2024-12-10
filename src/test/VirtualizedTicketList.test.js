import { jsx as _jsx } from "react/jsx-runtime";
import { render, fireEvent, screen } from '@testing-library/react';
import VirtualizedTicketList from '../components/VirtualizedTicketList';
jest.mock('../data/generateMockTickets', () => jest.fn(() => [
    {
        id: 1,
        subject: 'Subject 1',
        priority: 'High',
        status: 'Open',
        description: 'Description 1',
    },
    {
        id: 2,
        subject: 'Subject 2',
        priority: 'Medium',
        status: 'In Progress',
        description: 'Description 2',
    },
    {
        id: 3,
        subject: 'Subject 3',
        priority: 'Low',
        status: 'Closed',
        description: 'Description 3',
    },
    {
        id: 4,
        subject: 'Subject 4',
        priority: 'High',
        status: 'Open',
        description: 'Description 4',
    },
]));
describe('VirtualizedTicketList', () => {
    // test 1
    it('should render only visible tickets based on scroll', () => {
        render(_jsx(VirtualizedTicketList, { ticketsNumber: 1000 }));
        // Initially, the first ticket should be visible
        expect(screen.getByText('Subject 1')).toBeInTheDocument();
        // Simulate scroll event
        const scrollableDiv = screen.getByRole('listbox');
        fireEvent.scroll(scrollableDiv, { target: { scrollTop: 30 } });
        // After scrolling, another ticket should be visible
        expect(screen.getByText('Subject 2')).toBeInTheDocument();
    });
    // test 2
    it('should only render the correct number of tickets based on window height', () => {
        render(_jsx(VirtualizedTicketList, { ticketsNumber: 1000 }));
        // Check if Subject 1 and 2 are visible initially
        expect(screen.getByText('Subject 1')).toBeInTheDocument();
        expect(screen.getByText('Subject 2')).toBeInTheDocument();
        // Scroll down
        const scrollableDiv = screen.getByRole('listbox');
        fireEvent.scroll(scrollableDiv, { target: { scrollTop: 60 } });
        // Now check if Subject 3 is visible
        expect(screen.getByText('Subject 3')).toBeInTheDocument();
    });
});
