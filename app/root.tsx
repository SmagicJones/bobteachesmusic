import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

import { Toaster } from "sonner";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <DesktopNav />
        <MobileNav />
        {children}
        <footer className="pt-2">
          <h6 className="text-center text-2xl">Reviews</h6>
          <div className="flex justify-center items-center p-4">
            <div className="w-[90%] pl-4 pr-4">
              <Carousel className="w-full text-center ">
                <CarouselContent>
                  <CarouselItem>
                    &quot;Learning is always fun, Bob likes to mix things up,
                    generally we just have a really great time. Lessons pass so
                    quickly but by the end I feel certain my skills have
                    increased&quot;
                    <h5 className="font-bold pt-2">Little Jimmy</h5>
                  </CarouselItem>
                  <CarouselItem>
                    &quot;I have been a pupil of Bob for some time and I can
                    hightly recommend his musicianship and teching techniques.
                    He is very a knowledgable teacher anbd provides quality
                    individual lessons. &quot;
                    <h5 className="font-bold pt-2">Lee Walsh</h5>
                  </CarouselItem>
                  <CarouselItem>
                    &quot;I've been taught by Bob for the past 10 years off and
                    on. He's a patient, knowledgable teacher who manages to get
                    the best out of my abilities and boost my confidence &quot;
                    <h5 className="font-bold pt-2">Rob Stockwell</h5>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="p-4" />
                <CarouselNext className="p-4" />
              </Carousel>
            </div>
          </div>
        </footer>
        <Toaster />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <main>
      {isNavigating ? (
        <div className="flex justify-center items-center h-screen w-screen">
          {/* <div className="loading-spinner"></div> */}
          <div className="w-12 h-12 border-4 border-black dark:border-white border-b-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <Outlet />
      )}
    </main>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
