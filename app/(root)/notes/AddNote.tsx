"use client";

const AddNote = (addHandler: any) => {
  const addButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Add Button clicked!", event.currentTarget.id);
    addHandler();
  };

  return (
    <button className="gradient-button" onClick={addButtonHandler}>
      Add Note
    </button>
  );
};

export default AddNote;
