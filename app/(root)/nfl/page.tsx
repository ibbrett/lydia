// "use cache";

import { Suspense } from "react";
import CardList from "./CardList";

const CardListSkeleton = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      <h1>loading teams ...</h1>
    </div>
  );
};

const NFLTeams = async () => {
  return (
    <div>
      <h1>NFLTeams</h1>
      <Suspense fallback={<CardListSkeleton />}>
        <CardList />
      </Suspense>
    </div>
  );
};

export default NFLTeams;
