import { type Serve } from "bun";

const resume = {
  name: "Theodore S. Beers",
  tagline: "Research software engineer; PhD Persian & Arabic philologist",
  email: "theo.beers@fu-berlin.de",
  officeAddress: "Haverford, PA, USA (mailing address TBD)",
  links: {
    website: "https://www.theobeers.com/",
    github: "https://github.com/theodore-s-beers",
    twitter: "https://x.com/theodorebeers",
    scholar: "https://scholar.google.com/citations?user=dqd1ahUAAAAJ",
    bluesky: "https://bsky.app/profile/katomyomachia.bsky.social",
    keybase: "https://keybase.io/theobeers",
  },
  employment: [
    {
      from: "2024-08",
      to: "present",
      title: "Non-Resident Research Fellow",
      institution: "Freie Universität Berlin",
      department: "Seminar for Semitic and Arabic Studies",
      project: "AnonymClassic/Kalīla and Dimna (ERC, Leibniz)",
      notes: ["TBW"],
    },
    {
      from: "2024-08",
      to: "2025-06",
      title: "Research Software Engineer; Associate Researcher",
      institution: "Drexel University",
      department: "Colleges of Engineering, Computing & Informatics",
      project:
        "Platform for Accessible Data-Intensive Science and Engineering (NSF)",
      notes: ["TBW"],
    },
    {
      from: "2022-12",
      to: "2024-08",
      title: "Postdoctoral Research Fellow; Research Software Engineer",
      institution: "Freie Universität Berlin",
      department: "Seminar for Semitic and Arabic Studies",
      project: "Closing the Gap in Non-Latin-Script Data (DFG/BUA)",
      notes: ["TBW"],
    },
    {
      from: "2019-04",
      to: "2022-11",
      title: "Postdoctoral Research Fellow",
      institution: "Freie Universität Berlin",
      department: "Seminar for Semitic and Arabic Studies",
      project: "AnonymClassic/Kalīla and Dimna (ERC, Leibniz)",
      notes: ["TBW"],
    },
    {
      from: "2012-09",
      to: "2018-12",
      title: "Lecturer; Preceptor; Teaching Assistant",
      institution: "University of Chicago",
      department: "Near Eastern Languages and Civilizations",
      project: null,
      notes: ["TBW"],
    },
  ],
  education: [
    {
      degree: "PhD",
      institution: "University of Chicago",
      field: "Near Eastern Languages and Civilizations",
      year: 2020,
    },
    {
      degree: "AB",
      institution: "Princeton University",
      field: "Near Eastern Studies",
      year: 2009,
    },
  ],
  naturalLangs: {
    native: ["English"],
    philological: ["Persian", "Arabic"],
    strong: ["German"],
    intermediate: ["French"],
    reading: ["Turkish", "Latin"],
  },
  programmingLangs: {
    favorite: ["Rust", "TypeScript", "Go"],
    adept: ["Python", "JavaScript"],
    dabbling: ["Zig", "Swift", "F#"],
  },
};

export default {
  port: 8080,

  fetch(req) {
    const resHeaders = new Headers({
      "Content-Type": "application/json; charset=utf-8",
      Pitch: "I'd love to work on cool projects with you!",
    });

    const url = new URL(req.url);
    if (url.pathname === "/raw.json") {
      return new Response(JSON.stringify(resume, null, 2), {
        headers: resHeaders,
      });
    }

    const accept = req.headers.get("Accept");
    if (accept?.includes("application/json") || accept === "*/*") {
      return new Response(JSON.stringify(resume, null, 2), {
        headers: resHeaders,
      });
    }

    resHeaders.set("Content-Type", "text/html; charset=utf-8");
    return new Response(Bun.file("./fallback.html"), { headers: resHeaders });
  },
} satisfies Serve;
