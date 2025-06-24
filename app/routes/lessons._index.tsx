import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { lessons, type Lesson } from "~/data/lesson";

export default function Lessons() {
  return (
    <main>
      <header className="bob-header">
        <div className="grid grid-cols-1 gap-4 p-2 h-[100%]">
          <div className="flex justify-center items-center">
            <div className="">
              <h1 className="lg:text-8xl md:text-4xl sm:text-2xl text-white">
                Music Lessons
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
      <section>
        <h1 className="md:text-4xl sm:text-2xl  text-center p-4">
          Choose your Lessons
        </h1>
        <div className="grid md:grid-cols-3 gap-4 m-2">
          {lessons.map((lesson: Lesson) => (
            <Card>
              <CardHeader>
                <CardTitle>{lesson.title}</CardTitle>
                <CardDescription>{lesson.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{lesson.intro}</p>
              </CardContent>

              <CardFooter>
                <Link to={`/lessons/${lesson.slug}`}>
                  <Button>Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
