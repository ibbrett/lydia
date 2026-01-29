// "use client";
import { Suspense } from "react";
import ClientTextarea from "./ClientTextarea";

const NotesSkeleton = () => {
  return <div>loading notes ...</div>;
};

const NoteForm = (notes: any) => {
  console.log("NotesForm", notes);

  // Define the Server Action inline or import it from another file
  async function createItem(formData: FormData) {
    "use server"; // Marks the function as a Server Action

    const name = formData.get("name") as string;
    // Process the data, e.g., save to a database
    console.log("Submitting item:", name);
    // You can also use Next.js's redirect function or revalidate data here
  }

  return (
    <form action={createItem} className="p-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Item Name
      </label>
      <Suspense fallback={<NotesSkeleton />}>
        <ClientTextarea data={notes} />
      </Suspense>
      <button type="submit" className="gradient-button">
        Save notes
      </button>
    </form>
  );
};

export default NoteForm;
