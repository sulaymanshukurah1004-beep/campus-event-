export type CampusEvent = {
  id: string;
  title: string;
  category: "Tech" | "Sports" | "Faith" | "Social";
  date: string;
  time: string;
  venue: string;
  image: string;
  description: string;
};

const events: CampusEvent[] = [
  {
    id: "1",
    title: "Tech Innovation Summit",
    category: "Tech",
    date: "2026-11-10",
    time: "10:00 AM",
    venue: "University Auditorium",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900",
    description: "Join students and technology experts for a day of innovation, networking and exciting discussions."
  },
  {
    id: "2",
    title: "Interfaculty Football Match",
    category: "Sports",
    date: "2026-11-12",
    time: "3:00 PM",
    venue: "University Sports Field",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900",
    description: "Come support your faculty as students compete for the campus football championship."
  },
  {
    id: "3",
    title: "Campus Praise Night",
    category: "Faith",
    date: "2026-11-14",
    time: "5:00 PM",
    venue: "Student Centre",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900",
    description: "An evening of worship, praise, prayer and fellowship."
  },
  {
    id: "4",
    title: "Freshers Welcome Party",
    category: "Social",
    date: "2026-11-16",
    time: "6:00 PM",
    venue: "Campus Event Centre",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900",
    description: "Meet new friends, enjoy music and celebrate the beginning of an exciting academic journey."
  },
  {
    id: "5",
    title: "Coding and Robotics Workshop",
    category: "Tech",
    date: "2026-11-18",
    time: "11:00 AM",
    venue: "Computer Science Laboratory",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
    description: "Learn coding, robotics and creative problem solving through practical demonstrations."
  },
  {
    id: "6",
    title: "Basketball Championship",
    category: "Sports",
    date: "2026-11-20",
    time: "2:00 PM",
    venue: "Indoor Sports Hall",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900",
    description: "Watch talented students compete in an exciting basketball tournament."
  },
  {
    id: "7",
    title: "Student Fellowship Meeting",
    category: "Faith",
    date: "2026-11-22",
    time: "4:00 PM",
    venue: "Main Chapel",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=900",
    description: "A time for students to connect, share encouragement and grow together."
  },
  {
    id: "8",
    title: "Cultural Day Celebration",
    category: "Social",
    date: "2026-11-25",
    time: "12:00 PM",
    venue: "University Main Ground",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900",
    description: "Celebrate campus cultures through fashion, food, music, dance and performances."
  }
];

export default events;