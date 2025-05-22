export default function Header() {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border px-2 py-1 rounded w-1/3"
      />
      <div className="flex items-center space-x-2">
        <img src="/avatars/admin.png" alt="admin" className="w-8 h-8 rounded-full" />
        <span>Admin</span>
      </div>
    </div>
  );
}