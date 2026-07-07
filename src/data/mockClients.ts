import type { Client } from "../types/client";

export const mockClients: Client[] = [

  {

    id: "1",

    companyName: "Alpha Plumbing",

    contactName: "John Smith",

    email: "john@alphaplumbing.co.uk",

    phone: "07123456789",

    status: "active",

    monthlyValue: 200,

    nextFollowUpDate: "2026-07-15",

    notes: "Interested in invoice automation.",

    createdAt: "2026-07-07",

  },

  {

    id: "2",

    companyName: "Merseyside Cleaning Co",

    contactName: "Sarah Johnson",

    email: "sarah@merseycleaning.co.uk",

    phone: "07987654321",

    status: "lead",

    monthlyValue: 200,

    nextFollowUpDate: "2026-07-12",

    notes: "Needs help tracking leads and follow-ups.",

    createdAt: "2026-07-07",

  },

  {

    id: "3",

    companyName: "Liverpool Electrical Services",

    contactName: "Mark Wilson",

    email: "mark@liverpoolelectrical.co.uk",

    phone: "07811223344",

    status: "contacted",

    monthlyValue: 200,

    nextFollowUpDate: "2026-07-20",

    notes: "Asked for a demo next week.",

    createdAt: "2026-07-07",

  },

];