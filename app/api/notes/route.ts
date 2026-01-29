import { NextResponse, NextRequest } from "next/server";
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
}

/*
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    let event;
    try {
    } catch (e) {
      return NextResponse.json(
        { message: "invalid JSON data format" },
        { status: 400 },
      );
    }
    const updatedNotes = Notes.update(notes);
    return NextResponse.json(
      { message: "Notes updted successfully" },
      { status: 201 },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        message: "event creation failed",
        error: e instanceof Error ? e.message : "Unknown",
      },
      { status: 400 },
    );
  }
}
*/
