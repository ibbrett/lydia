import { nfl } from "@/app/api/db";

export async function GET() {
  return Response.json(nfl.teams);
}
