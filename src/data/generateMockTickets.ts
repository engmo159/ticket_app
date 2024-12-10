export interface Ticket {
  id: number
  subject: string
  priority: string
  status: string
  description: string
}
// Mock data generator
const generateMockTickets = (count: number): Ticket[] => {
  const tickets = []
  const priorities = ['High', 'Medium', 'Low']
  const statuses = ['Open', 'In Progress', 'Closed']
  const getRandomItem = (array: string[]) =>
    array[Math.floor(Math.random() * array.length)]

  for (let i = 0; i < count; i++) {
    tickets.push({
      id: i + 1,
      subject: `Ticket ${i + 1}`,
      priority: getRandomItem(priorities),
      status: getRandomItem(statuses),
      description: `This is the description for ticket ${i + 1}.`,
    })
  }

  return tickets
}

export default generateMockTickets
