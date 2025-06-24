import { Form, type ActionFunctionArgs, useNavigate } from "react-router";
import { useRef } from "react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";

import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

import { toast } from "sonner";

import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Get in Touch" },
  {
    name: "description",
    content: "Send me a message and I will get straight back to you",
  },
];

export default function ContactForm() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  if (formRef.current) {
    formRef.current.reset();
  }

  return (
    <Card className="w-[100%]">
      <CardHeader>
        <CardTitle>Get In Touch</CardTitle>
        <CardDescription>
          Send us a message and we will get back to you
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form
          id="contact-form"
          method="post"
          action="/contact"
          ref={formRef}
          onSubmit={() => {
            toast("Thanks for the message!", {
              description: "we will be in touch soon",
              action: {
                label: "home",
                onClick: () => navigate("/"),
              },
            });
          }}
        >
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Joe Bloggs"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="email">email</Label>
              </div>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="e.g. joe@bloggs.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message">message</label>
              <Textarea
                name="message"
                required
                placeholder="e.g. I really want to get started with bass guitar"
              ></Textarea>
            </div>
          </div>
        </Form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" form="contact-form" className="w-full">
          Send
        </Button>
      </CardFooter>
    </Card>
  );
}
