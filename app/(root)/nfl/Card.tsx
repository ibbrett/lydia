import { Team } from "./types";
import LikeButton from "./LikeButton";
const Card = ({ team }: { team: Team }) => {
  console.log(team);
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h2 className="text-xl font-bold">{team.name}</h2>
      <p className="text-gray-600">
        <img src={team.img} />
      </p>
      <p className="text-gray-600">
        <LikeButton />
      </p>
    </div>
  );
};

export default Card;
