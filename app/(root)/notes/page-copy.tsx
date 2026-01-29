import { Suspense } from "react";
import SubmitButton from "./SubmitButton";
import AddNote from "./AddNote";
import ClientTextarea from "./ClientTextarea";
import fetchData from "./fetchData";

const NotesSkeleton = () => {
  return <div>loading notes ...</div>;
};

const addHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  console.log("Add Button clicked!", event.currentTarget.id);
};

const Notes = () => {
  console.log("Notes", "what type of component am I?");

  const notes = fetchData();

  return (
    <div className="text-5xl underline">
      <h1>Notes</h1>
      <Suspense fallback={<NotesSkeleton />}>
        <ClientTextarea data={notes} />
      </Suspense>
      {/*<AddNote addHandler={addHandler} />*/}
      <SubmitButton />
    </div>
  );
};

export default Notes;
