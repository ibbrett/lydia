type Team = {
  id: number;
  name: string;
  img: string;
};

const Card = ({ team }: { team: Team }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h2 className="text-xl font-bold">{team.name}</h2>
      <p className="text-gray-600">
        <img src={team.img} />
      </p>
    </div>
  );
};

const NFLTeams = async () => {
  const response = await fetch("http://localhost:3000/api/nfl");
  const teams = await response.json();

  return (
    <div>
      <h1>NFLTeams NFLTeams</h1>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {teams.map((team: Team) => (
          <Card team={team} />
        ))}
      </div>
    </div>
  );
};

export default NFLTeams;
