import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

type Message = {
  from: "user" | "system";
  text: string;
};

const stages = ["email", "name", "message"];
function TypingIndicator() {
  return (
    <div className="flex space-x-1">
      {[...Array(3)].map((_, i) => (
        <motion.span
          key={i}
          className="w-2.5 h-2.5 bg-yellow-400 rounded-full"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
export default function ChatContactForm() {
  const [messages, setMessages] = useState<Message[]>([
    { from: "system", text: "Hi! Please enter your email:" },
  ]);
  const [stage, setStage] = useState<number>(0);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Handle user input submission
  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    const newUserMessage: Message = { from: "user", text: trimmed };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setLoading(true);

    // Simulate system 'typing'
    setTimeout(() => {
      let systemResponse = "";

      // Basic validation example
      if (stage === 0) {
        systemResponse = /^\S+@\S+\.\S+$/.test(trimmed)
          ? "Thanks! Now, please type your name."
          : "That email doesn’t look valid. Please enter a valid email.";
      } else if (stage === 1) {
        systemResponse = trimmed.length > 1
          ? "Great! What message would you like to send?"
          : "Hmm, that name seems too short. Please enter your full name.";
      } else {
        systemResponse = trimmed.length > 5
          ? "Thanks for your message! We'll get back to you shortly. 👍"
          : "Your message is too short. Please write a bit more.";
      }

      // Update messages
      setMessages((prev) => [...prev, { from: "system", text: systemResponse }]);
      setLoading(false);

      // Advance stage only if checks passed for email and name and message length
      if (
        (stage === 0 && /^\S+@\S+\.\S+$/.test(trimmed)) ||
        (stage === 1 && trimmed.length > 1) ||
        (stage === 2 && trimmed.length > 5)
      ) {
        setStage((st) => Math.min(st + 1, stages.length));
      }
    }, 1500);
  };

  // On Enter key press
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !loading) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
    className="
      flex flex-col 
      w-[26rem] sm:max-w-md md:max-w-lg lg:max-w-xl 
      h-[46rem] mx-auto">
      <div
  ref={containerRef}
  className="flex-1 rounded-[25px] p-8 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-400"
>
     {messages.map((msg, idx) => (
  <motion.div
    key={idx}
    initial={{ opacity: 0, scale: 0.9, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.25, delay: idx * 0.07 }}
    className={cn(
      "relative max-w-full px-4 py-2 rounded-2xl break-words whitespace-pre-wrap shadow-sm",
      msg.from === "user"
        ? "bg-[#dcf8c6] w-fit text-[#202c33] justify-self-end rounded-bl-3xl"
        : " w-fit justify-self-start  bg-[#171717c2] text-gray-300 rounded-tr-3xl"
    )}
  >
    <div className={
        msg.from === "user"
          ? "absolute -right-6 top-[-15px] w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 shadow-lg flex items-center justify-center"
          : "absolute -left-6 top-[-15px] w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg flex items-center justify-center"
      }
    >
      <span className="text-2xl font-bold text-white">
        {msg.from === "user" ? "U" : "D"}
      </span>
    </div>
   <p>{msg.text}</p> 
  </motion.div>
))}
        {loading && (
          <div className="flex space-x-2 items-center w-[60px] self-start">
            <TypingIndicator />
          </div>
        )}
      </div>
      <div className="flex items-center bg-white rounded-b-[25px] text-black shadow-lg py-2 px-4 mt-2 gap-2">
      {/* Input area */}
      {stage === 2 ? (
      <textarea
        rows={1}
        className="flex-1 justify-center resize-none bg-transparent border-none outline-none font-medium text-base placeholder:text-gray-400"
        placeholder="Type your message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKey}
        autoFocus
      />
    ) : (
      <input
        type={stage === 0 ? "email" : "text"}
        placeholder={stage === 0 ? "Email" : stage === 1 ? "Name" : ""}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKey}
        autoFocus
        disabled= {stage>=2}
        className="flex-1 bg-transparent border-none outline-none font-medium text-base placeholder:text-gray-400"
      />
    )}
    <button
      onClick={handleSend}
      disabled={(!inputValue.trim()) || (stage >= 2)}
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition disabled:bg-emerald-200 disabled:text-emerald-400",
        inputValue.trim()
          ? "bg-emerald-500 hover:bg-emerald-600"
          : "bg-emerald-200 text-emerald-400 cursor-not-allowed"
      )}
    >
      <span className="text-2xl"><ChevronRight/></span>
    </button>
     </div>
      
    </div>
  );
}
