import { useState, useEffect } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { from: 'user', text: 'Hello!' },
    { from: 'admin', text: 'Hi there!' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => setIsTyping(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [isTyping]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'admin', text: input }]);
    setInput('');
    setShowEmojiPicker(false);
  };

  const handleTyping = (e) => {
    setInput(e.target.value);
    setIsTyping(true);
  };

  const addEmoji = (emoji) => {
    setInput(input + emoji.native);
  };

  return (
    <div className="flex flex-col flex-1 p-4">
      <div className="flex-1 overflow-y-auto space-y-2">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`max-w-xs px-3 py-2 rounded-md ${msg.from === 'admin' ? 'self-end bg-blue-500 text-white' : 'self-start bg-gray-200'}`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="self-start text-sm text-gray-500"
          >
            User is typing...
          </motion.div>
        )}
      </div>
      <div className="mt-4">
        {showEmojiPicker && (
          <div className="absolute bottom-24">
            <Picker data={data} onEmojiSelect={addEmoji} />
          </div>
        )}
        <div className="flex items-center">
          <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="mr-2 text-lg"
          >
            😀
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={handleTyping}
            className="flex-1 border px-3 py-2 rounded-md mr-2"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
