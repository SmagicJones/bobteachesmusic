import nodemailer from "nodemailer";
import {
  type ActionFunctionArgs,
  redirect,
  Form,
  useNavigate,
} from "react-router";
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

export default function LessonEnquiry() {
  const navigate = useNavigate();
  return (
    <main>
      <section>
        <Card className="w-[100%]">
          <CardHeader>
            <CardTitle>Lesson</CardTitle>
            <CardDescription>Ready to to start lessons</CardDescription>
          </CardHeader>
          <CardContent>
            <Form
              id="contact-form"
              method="post"
              onSubmit={() => {
                toast("Thanks for the message!", {
                  description:
                    "I look forward to reading it and getting back to you",
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
    </main>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const formEntry = Object.fromEntries(formData);
  const name = formEntry.name as string;
  const email = formEntry.email as string;
  const message = formEntry.message as string;
  const choice = formEntry.choice as string;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Contact Form Submission from ${name}`,
      text: message,
      html: `<div>
            <p>${message}</p><p>From: ${name} (${email}) </p>
            <p>They are interested in ${choice} lessons</p>
              </div>`,
    });
    return redirect("/success");
  } catch (err) {
    console.error("Failed to send email", err);
    return { success: false, error: "Failed to send" };
  }
}
