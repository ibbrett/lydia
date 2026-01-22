import HelloWorld from "@/app/components/HelloWorld";
import Link from "next/link";

const Home = () => {
  console.log("Home", "what type of component am I?");
  return (
    <main>
      <div className="text-5xl underline">Home Page</div>
      <HelloWorld />

      <ul className="mt-10">
        <li>
          <Link href={`/dashboard/analytics`}>analytics</Link>
        </li>
        <li>
          <Link href={`/dashboard/users`}>users</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
