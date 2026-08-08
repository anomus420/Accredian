import { NextRequest, NextResponse } from "next/server";
import { EnquireFormSchema } from "@/lib/schema";
import { saveLead, getLeads } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const parseResult = EnquireFormSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { success: false, errors: parseResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    
    const savedLead = await saveLead(parseResult.data);
    
    return NextResponse.json({ success: true, lead: savedLead }, { status: 201 });
  } catch (error) {
    console.error("Enquiry API POST Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await getLeads();
    return NextResponse.json({ success: true, leads }, { status: 200 });
  } catch (error) {
    console.error("Enquiry API GET Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
