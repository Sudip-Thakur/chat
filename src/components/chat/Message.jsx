import React from "react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input.jsx";
import { ScrollArea } from "@/components/ui/scroll-area";
import {

  MoreHorizontal,
  Phone,
  Search,
  Send,
  Video,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function Message() {
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const currentUser = {
    name: "Alex Johnson",
    avatar: "/current-user-avatar.jpg",
  };

  const conversations = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/avatar-1.jpg",
      lastMessage: "Hey, how's it going?",
      time: "2m",
      unread: 2,
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/avatar-2.jpg",
      lastMessage: "Lunch tomorrow?",
      time: "1h",
      unread: 0,
    },
    {
      id: 3,
      name: "Bob Johnson",
      avatar: "/avatar-3.jpg",
      lastMessage: "Thanks for the help!",
      time: "3h",
      unread: 1,
    },
    {
      id: 4,
      name: "Emma Wilson",
      avatar: "/avatar-4.jpg",
      lastMessage: "See you at the meeting",
      time: "1d",
      unread: 0,
    },
    {
      id: 5,
      name: "Michael Brown",
      avatar: "/avatar-5.jpg",
      lastMessage: "Great idea!",
      time: "2d",
      unread: 0,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "John Doe",
      content: "Hey, how's it going?",
      time: "2:30 PM",
      isSent: false,
    },
    {
      id: 2,
      sender: "You",
      content: "Not bad, just working on a new project. How about you?",
      time: "2:31 PM",
      isSent: true,
    },
    {
      id: 3,
      sender: "John Doe",
      content: "That's cool! I'm just relaxing at home.",
      time: "2:33 PM",
      isSent: false,
    },
  ];

  const filteredUsers = conversations.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="hidden md:flex flex-1 flex-col">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/avatar-1.jpg" alt="John Doe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="ml-4 flex-1">
          <h2 className="font-semibold">John Doe</h2>
          <p className="text-sm text-gray-600">Active now</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.isSent ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`rounded-lg p-3 max-w-[70%] ${
                msg.isSent ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              <p>{msg.content}</p>
              <span className="text-xs mt-1 block">{msg.time}</span>
            </div>
          </div>
        ))}
      </ScrollArea>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center space-x-2"
        >
          <Input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Message;
