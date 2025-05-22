const mockUsers = [
  { id: '1', name: 'Alice', lastMessage: 'Hey, I need help!', time: '10:30 AM', unread: true },
  { id: '2', name: 'Bob', lastMessage: 'Thanks for the info', time: '9:15 AM', unread: false },
];

export default function ChatList() {
  return (
    <div className="w-1/4 border-r overflow-y-auto">
      {mockUsers.map(user => (
        <div key={user.id} className="p-4 border-b hover:bg-gray-100 cursor-pointer">
          <div className="font-semibold flex justify-between">
            <span>{user.name}</span>
            <span className="text-xs text-gray-400">{user.time}</span>
          </div>
          <div className="text-sm text-gray-600">{user.lastMessage}</div>
          {user.unread && <span className="text-xs text-red-500">● Unread</span>}
        </div>
      ))}
    </div>
  );
}
