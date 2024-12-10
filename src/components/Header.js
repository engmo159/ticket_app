import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Header = () => {
    return (_jsx("div", { className: 'sticky top-0 z-10 border  rounded p-2', children: _jsxs("div", { className: 'flex items-center space-x-4 font-bold text-md text-black uppercase', children: [_jsx("div", { className: 'w-1/6 ', children: "subject" }), _jsx("div", { className: 'w-1/6 ', children: "priority" }), _jsx("div", { className: 'w-1/6', children: "status" }), _jsx("div", { className: 'w-1/2 ', children: "description" })] }) }));
};
export default Header;
