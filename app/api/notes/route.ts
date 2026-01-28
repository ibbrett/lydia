import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// GET notes
export async function GET() {
  try {
    // Construct the absolute path to the file
    const filePath = path.join(
      process.cwd(),
      "app",
      "api",
      "notes",
      "notes.txt",
    );
    console.log(process.cwd(), filePath);

    // Read the file content asynchronously
    const fileContents = await fs.readFile(filePath, "utf8");

    // Return the content in a JSON response
    return NextResponse.json({ success: true, content: fileContents });
  } catch (e) {
    console.error("Error reading file:", e);
    return NextResponse.json({
      message: "Notes retrieval failed",
      error: e instanceof Error ? e.message : "Unknown",
    });
  }
  // return Response.json(books);
}
