import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import VirtualizedTicketList from './components/VirtualizedTicketList';
const App = () => {
    const ticketsNumber = 10000;
    return (_jsxs("div", { className: 'min-h-screen bg-black flex flex-col items-center justify-center', children: [_jsx("h1", { className: 'text-xl font-semibold text-gray-100 ', children: "Ticket List" }), _jsxs("h3", { className: 'text-gray-200 m-1', children: ["Total No of tickets:", _jsxs("span", { className: 'font-bold ml-1 text-green-500', children: [" ", ticketsNumber] })] }), _jsx("div", { className: 'w-full xl:w-4/5 mt-2', children: _jsx(VirtualizedTicketList, { ticketsNumber: ticketsNumber }) })] }));
};
export default App;
