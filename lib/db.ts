import fs from "fs";
import path from "path";

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  companyName: string;
  domain: string;
  candidatesCount: number;
  modeOfDelivery: "Online" | "Offline" | "Hybrid";
  location: string;
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "leads.json");

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
  }
}

export async function saveLead(lead: Omit<LeadSubmission, "id" | "createdAt">): Promise<LeadSubmission> {
  ensureDataFile();
  
  const fileContent = fs.readFileSync(DATA_FILE, "utf8");
  const leads: LeadSubmission[] = JSON.parse(fileContent);
  
  const newLead: LeadSubmission = {
    ...lead,
    id: `lead_${Math.random().toString(36).substring(2, 9)}`,
    createdAt: new Date().toISOString(),
  };
  
  leads.push(newLead);
  fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2));
  
  return newLead;
}

export async function getLeads(): Promise<LeadSubmission[]> {
  try {
    ensureDataFile();
    const fileContent = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(fileContent);
  } catch (e) {
    console.error("Error reading leads", e);
    return [];
  }
}
