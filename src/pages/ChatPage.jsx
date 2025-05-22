import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import UserDetails from '../components/UserDetails';

export default function ChatPage() {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <ChatList />
      <ChatWindow />
      <UserDetails />
    </div>
  );
}