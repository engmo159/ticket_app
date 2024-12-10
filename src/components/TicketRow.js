import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const TicketRow = React.memo(({ ticket }) => {
    const { subject, priority, status, description } = ticket;
    return (_jsx("div", { className: 'shadow-sm rounded-md border border-gray-300 p-3 bg-gray-50 mb-2', children: _jsxs("div", { className: 'flex items-center space-x-4', children: [_jsx("div", { className: 'w-1/6 font-bold text-sm text-gray-800 truncate', children: subject }), _jsx("div", { className: 'w-1/6 text-sm text-gray-600', children: priority }), _jsx("div", { className: 'w-1/6 text-sm text-gray-600', children: status }), _jsx("div", { className: 'w-1/2 text-sm text-gray-600 truncate', children: description })] }) }));
});
export default TicketRow;
