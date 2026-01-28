import { Suspense } from "react";
import SubmitButton from "./SubmitButton";
import AddNote from "./AddNote";
import ClientTextarea from "./ClientTextarea";
import { delay } from "@/app/lib/util";

const NotesSkeleton = () => {
  return <div>waiting on notes</div>;
};

const addHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  console.log("Add Button clicked!", event.currentTarget.id);
};

const NotesTextarea = async () => {
  await delay(3000);
  const response = await fetch("http://localhost:3000/api/notes");
  const notes = await response.json();
  return <ClientTextarea initialContent={notes.content} />;
};

const Notes = () => {
  console.log("Notes", "what type of component am I?");

  return (
    <div className="text-5xl underline">
      <h1>Notes</h1>
      <Suspense fallback={<NotesSkeleton />}>
        <NotesTextarea />
      </Suspense>
      {/*<AddNote addHandler={addHandler} />*/}
      <SubmitButton />
    </div>
  );
};

export default Notes;
