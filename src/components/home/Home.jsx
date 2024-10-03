import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MessageCircleMore } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

function Home() {
  const isLoggedIn = true;
  const navigator = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigator("/chat");
    }
  });
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <Card className='shadow-md'>
        <CardHeader className='flex items-center'>
            <MessageCircleMore size={30} />
            <CardTitle> Welcome</CardTitle>
            <CardDescription >Let's chat</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Log In to start chatting!</p>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Link to='/auth'>
          <Button>Login</Button>

          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Home;
