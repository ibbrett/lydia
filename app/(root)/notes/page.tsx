import SubmitButton from "./SubmitButton";
import NoteForm from "./NoteForm";
import fetchData from "./fetchData";

const Notes = () => {
  const notes = fetchData();

  console.log("Notes", "what type of component am I?", notes);

  return (
    <div className="text-5xl underline">
      <h1>Notes</h1>
      <NoteForm notes={notes} />
    </div>
  );
};

export default Notes;
