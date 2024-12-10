// Mock data generator
const generateMockTickets = (count) => {
    const tickets = [];
    const priorities = ['High', 'Medium', 'Low'];
    const statuses = ['Open', 'In Progress', 'Closed'];
    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
    for (let i = 0; i < count; i++) {
        tickets.push({
            id: i + 1,
            subject: `Ticket ${i + 1}`,
            priority: getRandomItem(priorities),
            status: getRandomItem(statuses),
            description: `This is the description for ticket ${i + 1}.`,
        });
    }
    return tickets;
};
export default generateMockTickets;
