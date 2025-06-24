import { Link } from "react-router";
import { Button } from "~/components/ui/button";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";

export default function Success() {
  return (
    <main className="flex justify-center items-center p-4">
      <Card className="lg:w-[70%]">
        <CardHeader>
          <CardTitle>Success!</CardTitle>
          <CardDescription>
            We have recieved your message and will get back to you very soon
          </CardDescription>
          <CardFooter>
            <Link to="/">
              <Button>Go Home</Button>
            </Link>
          </CardFooter>
        </CardHeader>
      </Card>
    </main>
  );
}
