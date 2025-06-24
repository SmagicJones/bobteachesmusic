import { type ActionFunctionArgs, redirect } from "react-router";
import nodemailer from "nodemailer";
import { Link } from "react-router";
import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import ContactForm from "~/components/ContactForm";

import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Get in Touch" },
  {
    name: "description",
    content: "Send me a message and I will get straight back to you",
  },
];

export default function Contact() {
  return (
    <main>
      <header className="bob-header">
        <div className="grid grid-cols-1 gap-4 p-2 h-[100%]">
          <div className="flex justify-center items-center">
            <div className="">
              <h1 className="lg:text-8xl md:text-4xl sm:text-2xl text-white">
                Get in Touch
              </h1>
              <h2 className="text-4xl text-white text-center p-4">Blackburn</h2>
              <div className="flex h-5 justify-center items-center space-x-4  text-white">
                <Link to="/lessons/guitar" className="text-white">
                  Guitar
                </Link>
                <Separator orientation="vertical" />
                <Link to="/lessons/bass" className="text-white">
                  Bass
                </Link>
                <Separator orientation="vertical" />
                <Link to="/lessons/musicianship" className="text-white">
                  Musicianship
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="button-wrapper">
          <Link to="/">
            <Button className="w-[100%]">Home</Button>
          </Link>
        </div>
      </header>

      <section className="flex justify-center items-center p-4 background-fade pb-4">
        <div className="w-[100%] md:w-[70%] lg:w-[50%] new-col">
          <h2 className="p-4 text-2xl text-center md:text-left">Talk to Us</h2>
          <ContactForm />
        </div>
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
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    });
    return redirect("/success");
  } catch (err) {
    console.error("Failed to send email", err);
    return { success: false, error: "Failed to send" };
  }
}
