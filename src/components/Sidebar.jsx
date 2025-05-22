export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 space-y-4">
      <div className="text-xl font-bold">BeyondChats</div>
      <nav className="space-y-2">
        <a href="/" className="block hover:bg-gray-700 rounded px-2 py-1">Dashboard</a>
        <a href="/settings" className="block hover:bg-gray-700 rounded px-2 py-1">Settings</a>
      </nav>
    </div>
  );
}