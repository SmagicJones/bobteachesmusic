export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  intro: string;
  content: string;
  img_url: string;
  img_alt: string;
}

export const lessons: Lesson[] = [
  {
    id: 0,
    title: "Guitar",
    subtitle: "Master the art of the guitar",
    slug: "guitar",
    intro:
      "Whether you are just starting out or want to get some new chops this is the place for you",
    content: `<div>
            <p>Guitar is the greatest instrument in the world ever, fact</p>
            <p class="pt-4">Lets get to the bottom of you as a guitar player</p>
      <div>`,
    img_url: "/images/guitar.jpg",
    img_alt: "an image of an electric guitar close up",
  },
  {
    id: 1,
    title: "Bass",
    subtitle: "Experience the immense fun of playing the bass",
    slug: "bass",
    intro:
      "There's always so much to explore and enjoy with the bass - learn to listen in a whole new way",
    content:
      "<div><p>Why the hell do Bass Players get some kind of a negative portrayl by rock culture? Its utter madness... learn why</p></div>",
    img_url: "/images/bass.jpg",
    img_alt: "a bass guitar in a rustic setting",
  },
  {
    id: 2,
    title: "Musicianship",
    subtitle: "Get really in the groove",
    slug: "musicianship",
    intro:
      "Being a musician is about listening, learning, feeling - also understanding - explore music theory as well as practical musicianship",
    content:
      "<div><p>Ever wanted to improve your by ear playing? looking for more reference to recognisable patterns? what to get your head around music theory? you are in the right place</p></div>",
    img_url: "/images/musicianship.jpg",
    img_alt: "Guys in the air playing guitars with hair all over the place",
  },
];
