import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import generateMockTickets from '../data/generateMockTickets';
import TicketRow from './TicketRow';
import Header from './Header';
// height variables
const itemHeight = 30;
const overHightScan = 20;
const windowHeight = 600;
const VirtualizedTicketList = ({ ticketsNumber, }) => {
    // get tickets data
    const tickets = useMemo(() => generateMockTickets(ticketsNumber), [ticketsNumber]);
    // scroll states & functions
    const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = (e) => {
        setScrollTop(e.currentTarget.scrollTop);
    };
    // start & ending calculation
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overHightScan);
    const renderedNodesCount = Math.min(tickets.length - startIndex, Math.floor(windowHeight / itemHeight) + 2 * overHightScan);
    const visibleTickets = useMemo(() => {
        return tickets.slice(startIndex, startIndex + renderedNodesCount);
    }, [tickets, startIndex, renderedNodesCount]);
    // constant styles
    const containerStyles = { height: `${tickets.length * itemHeight}px` };
    const translateStyle = {
        transform: `translateY(${startIndex * itemHeight}px)`,
    };
    return (_jsxs("div", { className: 'bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden', children: [_jsx(Header, {}), _jsx("div", { className: 'w-full overflow-y-auto', style: { height: `${windowHeight}px` }, onScroll: handleScroll, role: 'listbox', "aria-label": 'Ticket List', children: _jsx("div", { style: containerStyles, children: _jsx("div", { style: translateStyle, children: visibleTickets.map(ticket => (_jsx(TicketRow, { ticket: ticket }, ticket.id))) }) }) })] }));
};
export default VirtualizedTicketList;
