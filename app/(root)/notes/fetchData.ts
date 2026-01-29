// The fetch call returns a Promise
// import { delay } from "@/app/lib/util";
export default async function fetchData() {
  // await delay(3000);
  const response = await fetch("http://localhost:3000/api/notes");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
