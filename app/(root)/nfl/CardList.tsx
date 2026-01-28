import { delay } from "@/app/lib/util";
import { Team } from "./types";
import Card from "./Card";
const CardList = async () => {
  await delay(3000);
  const response = await fetch("http://localhost:3000/api/nfl");
  const teams = await response.json();
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {teams.map((team: Team) => (
        <Card key={team.id} team={team} />
      ))}
    </div>
  );
};

export default CardList;
