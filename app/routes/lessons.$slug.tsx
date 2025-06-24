import { useLoaderData } from "react-router";
import type { Route } from "../+types/root";
import { lessons, type Lesson } from "~/data/lesson";
import { Link } from "react-router";
import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function Lesson() {
  const lesson = useLoaderData();
  return (
    <main>
      <header className="bob-header">
        <div className="grid grid-cols-1 gap-4 p-2 h-[100%]">
          <div className="flex justify-center items-center">
            <div className="">
              <h1 className="lg:text-8xl md:text-4xl sm:text-2xl text-white">
                {lesson.title} Lessons
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
        <div className="grid grid-cols-1 gap-4 m-2">
          <Card>
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
              <CardDescription>{lesson.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{lesson.content}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

export async function loader({ params }: Route.LoaderArgs) {
  const slug = await params.slug;
  const lesson = await lessons.find((lesson) => lesson.slug === slug);
  return lesson;
}
