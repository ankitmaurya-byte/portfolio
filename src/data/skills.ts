interface Skills {
  name: string;
  src: string;
}

export const frontEnd: Skills[] = [
  { name: "TypeScript", src: "typescript.svg" },
  { name: "ReactJs", src: "reactjs.svg" },
  { name: "NextJs", src: "nextjs.svg" },
  { name: "Golang", src: "golang.svg" },
  { name: "Tailwind CSS", src: "tailwind-css.svg" },
];

export const backEnd: Skills[] = [
  { name: "NodeJs", src: "nodejs.svg" },
  { name: "PostgreSQL", src: "postgres.svg" },
  { name: "MongoDB", src: "mongodb.svg" },
  { name: "firebase", src: "firebase.svg" },
  { name: "mysql", src: "mysql.svg" },
];

export const other: Skills[] = [
  { name: "Git", src: "git.svg" },
  { name: "Jest", src: "jest.svg" },
  { name: "Docker", src: "docker.svg" },
  { name: "D3", src: "d3.svg" },
];
