import HelloWorld from "@/app/components/HelloWorld";
const Home = () => {
  console.log("Home", "what type of component am I?");
  return (
    <main>
      <div className="text-5xl underline">Home Page</div>
      <HelloWorld />
    </main>
  );
};

export default Home;
