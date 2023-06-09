import { type Serve } from "bun";

const resume = {
  name: "Theodore S. Beers",
  tagline: "PhD Persian and Arabic philologist; programmer",
  email: "theo.beers@fu-berlin.de",
  officeAddress: "Fabeckstraße 23–25, 14195 Berlin, Germany",
  links: {
    website: "https://www.theobeers.com/",
    github: "https://github.com/theodore-s-beers",
    twitter: "https://twitter.com/theodorebeers",
    scholar: "https://scholar.google.com/citations?user=dqd1ahUAAAAJ",
    keybase: "https://keybase.io/theobeers",
  },
  employment: [
    {
      from: "2022-12",
      to: "present",
      title: "Postdoctoral Researcher; Software Engineer",
      institution: "Freie Universität Berlin",
      department: "Seminar for Semitic and Arabic Studies",
      project: "BUA: “Closing the Gap in Non-Latin-Script Data”",
      notes: ["TBW"],
    },
    {
      from: "2019-04",
      to: "2022-11",
      title: "Postdoctoral Research Fellow",
      institution: "Freie Universität Berlin",
      department: "Seminar for Semitic and Arabic Studies",
      project: "ERC: “AnonymClassic”",
      notes: ["TBW"],
    },
    {
      from: "2012-09",
      to: "2018-12",
      title: "Lecturer; Teaching Assistant",
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
    strong: ["Persian", "Arabic"],
    intermediate: ["German"],
    reading: ["French", "Turkish", "Latin"],
  },
  programmingLangs: {
    preferred: ["Rust", "TypeScript", "Go"],
    accepted: ["JavaScript", "Python"],
    dabbling: ["F#", "Elixir"],
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
