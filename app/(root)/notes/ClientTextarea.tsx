"use client";

import { use } from "react";
import { useState } from "react";

//const ClientTextarea = ({ data }: { data: any }) => {
const ClientTextarea = ({ data }) => {
  const notes = use(data);
  // Use useState to manage the value, initialized with the prop
  const [content, setContent] = useState(notes.content);

  console.log("ClientTextarea", content);

  const handleChange = (event) => {
    // Update the state with the new value from the textarea
    setContent(event.target.value);
  };

  return (
    <div>
      <label htmlFor="notes">Notes</label>
      <textarea
        id="notes"
        value={content} // Use 'value' for a controlled component
        onChange={handleChange} // Attach the change handler
        rows={4}
        cols={50}
        className="border p-2 rounded w-full"
        placeholder="Add notes here..."
      />
      <p className="mt-2">Current content length: {content.length}</p>
    </div>
  );
};

export default ClientTextarea;
