import React from "react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowLeft,
  ChevronDown,
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

function ChatList() {
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConversation, setSelectedConversation] = useState(null);

  const currentUser = {
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
  };

  const conversations = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Hey, how's it going?",
      time: "2m",
      unread: 2,
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Lunch tomorrow?",
      time: "1h",
      unread: 0,
    },
    {
      id: 3,
      name: "Bob Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the help!",
      time: "3h",
      unread: 1,
    },
    {
      id: 4,
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "See you at the meeting",
      time: "1d",
      unread: 0,
    },
    {
      id: 5,
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
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

  const username = "sudipthakur";
  return (
    <>
      <div className="w-[27vw] border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-semibold text-lg">
                  {currentUser.name}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="relative w-full">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-8 bg-gray-100 border-none w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <div className="absolute z-10 mt-1 w-[318px] bg-white border border-gray-200 rounded-md shadow-lg">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="ml-2">{user.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
<ScrollArea className="flex-grow">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer ${selectedConversation === conversation.id ? 'bg-gray-100' : ''}`}
              onClick={() => setSelectedConversation(conversation.id)}
            >
              <Avatar className="h-14 w-14">
                <AvatarImage src={conversation.avatar} alt={conversation.name} />
                <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold">{conversation.name}</h3>
                  <span className="text-xs text-gray-500">{conversation.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
              </div>
              {conversation.unread > 0 && (
                <div className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {conversation.unread}
                </div>
              )}
            </div>
          ))}
        </ScrollArea>
      </div>
    </>
  );
}

export default ChatList;
