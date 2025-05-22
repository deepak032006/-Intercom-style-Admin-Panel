export default function UserDetails() {
  return (
    <div className="w-full md:w-1/4 border-l p-4 space-y-2 hidden md:block">
      <div className="text-lg font-bold">User Info</div>
      <img src="/avatars/user.png" className="w-16 h-16 rounded-full" alt="User" />
      <div><strong>Name:</strong> Alice</div>
      <div><strong>Email:</strong> alice@example.com</div>
      <div><strong>Tags:</strong> Premium, Support</div>
    </div>
  );
}