import type { Route } from "./+types/home";
import { Tick } from "../tic-tac-toe/Tick";
import { Pattern } from "~/patterns/Pattern";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Tick />
      <Pattern />
    </>
  );
}
