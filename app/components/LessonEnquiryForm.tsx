import { Form, useNavigate } from "react-router";
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
import { Button } from "~/components/ui/button";
import { toast } from "sonner";

export default function LessonEnquiryForm() {
  const navigate = useNavigate();
  return (
    <section>
      <Card className="w-[100%]">
        <CardHeader>
          <CardTitle>Lesson Enquiry</CardTitle>
          <CardDescription>Ready to to start lessons</CardDescription>
        </CardHeader>
        <CardContent>
          <Form
            id="contact-form"
            method="post"
            action="/lesson-enquiry"
            onSubmit={() => {
              toast("Thanks for the lesson enquiry", {
                description: "We will have you up and running in no time",
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
                <div className="flex items-center">
                  <Label htmlFor="email">I'm interested in</Label>
                </div>
                <div className="grid gap-2">
                  <select
                    name="choice"
                    id="choice"
                    className="w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="guitar">Guitar</option>
                    <option value="bass">Bass</option>
                    <option value="musicianship">Musicianship</option>
                  </select>
                </div>
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
    </section>
  );
}
