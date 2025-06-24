import { Link, useNavigation, type MetaFunction } from "react-router";
import { Button } from "~/components/ui/button";
import testImage from "/images/header-image-mobile.jpg";
import { Separator } from "~/components/ui/separator";
import ContactForm from "~/components/ContactForm";
import { lessons, type Lesson } from "~/data/lesson";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export const meta: MetaFunction = () => [
  { title: "bobteachesmusic lessons Blackburn" },
  {
    name: "description",
    content: "Music Lessons in Guitar, Bass, and Musicianship in Blackburn",
  },
];

export default function Home() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <main className="w-[100%]">
      <header className="bob-header">
        <div className="grid grid-cols-1 gap-4 p-2 h-[100%]">
          <div className="flex justify-center items-center">
            <div className="">
              <h1 className="lg:text-8xl md:text-4xl sm:text-2xl text-white">
                bobteachesmusic
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
          <Link to="#now">
            <Button className="w-[100%]">Learn Now!</Button>
          </Link>
        </div>
      </header>

      <section id="now" className="p-4">
        <div className="grid md:grid-cols-2 gap-4  p-4">
          <div className="grid grid-cols-1 text-center sm:text-left">
            <div className="p-4">
              <h3 className="text-4xl pb-4">What's Stopping you?</h3>
              <p className="pb-4">
                Have you always wanted to learn the guitar?
              </p>
              <p className="pb-4">
                Want to dust off that old bass and learn something new?
              </p>
              <p className="pb-4">Just getting started? want some guidance?</p>
              <p>Want to learn the songs you love?</p>
              {/* <div className="flex justify-center items-center p-4">
                <div className="w-[70%]">
                  <Carousel className="overflow-hidden w-full">
                    <CarouselContent>
                      <CarouselItem>
                        &quot;Learning is always fun, Bob likes to mix things
                        up, generally we just have a really great time. Lessons
                        pass so quickly but by the end I feel certain my skills
                        have increased&quot;
                      </CarouselItem>
                      <CarouselItem>
                        &quot;I have been a pupil of Bob for some time and I can
                        hightly recommend his musicianship and teching
                        techniques. He is very a knowledgable teacher anbd
                        provides quality individual lessons. &quot;
                      </CarouselItem>
                      <CarouselItem>
                        &quot;I've been taught by Bob for the past 10 years off
                        and on. He's a patient, knowledgable teacher who manages
                        to get the best out of my abilities and boost my
                        confidence &quot;
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="p-4" />
                    <CarouselNext className="p-4" />
                  </Carousel>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-cool flex justify-center items-center">
            {isNavigating ? (
              <div className="loading-spinner"></div>
            ) : (
              <div className="xl:w-[70%] md:w-[100%]">
                <ContactForm />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="p-4 background-fade">
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

      <section className="background-fade">
        <div className="flex justify-center items-center">
          <img src={testImage} className="w-[600px] rounded" alt="" />
        </div>
      </section>
    </main>
  );
}
