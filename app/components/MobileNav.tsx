import { Link, NavLink } from "react-router";

import { MenuIcon, X } from "lucide-react";

import DarkModeToggle from "./DarkModeToggle";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

import { Button } from "./ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import { lessons, type Lesson } from "~/data/lesson";

export default function MobileNav() {
  return (
    <main>
      <div className="mobile w-[100%] flex justify-between">
        <NavLink to="/" className="flex justify-center items-center p-4">
          <p className="text-md font-bold hover:text-yellow-600">
            Music Lessons
          </p>
        </NavLink>
        <div className="p-4">
          <Drawer direction="right">
            <DrawerTrigger>
              <MenuIcon className="z-10" />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerClose className="flex justify-end">
                  <X />
                </DrawerClose>
                <ul className="">
                  <li>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Lessons</AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            {lessons.map((lesson: Lesson) => (
                              <li>
                                <NavLink to={`/lessons/${lesson.slug}`}>
                                  <DrawerClose>{lesson.title}</DrawerClose>
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>About</AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            <li>
                              <NavLink to="/contact">
                                <DrawerClose>get in touch</DrawerClose>
                              </NavLink>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                </ul>
              </DrawerHeader>
              {/* <div className="p-4">
                <DarkModeToggle />
              </div> */}
              <DrawerFooter>
                <Link to="/contact">
                  <Button className="w-[100%]">Contact us</Button>
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </main>
  );
}
