export type ClientStatus = "lead" | "contacted" | "active" | "lost";

export type Client = {

  id: string;

  companyName: string;

  contactName: string;

  email: string;

  phone: string;

  status: ClientStatus;

  monthlyValue: number;

  nextFollowUpDate: string;

  notes: string;

  createdAt: string;

};