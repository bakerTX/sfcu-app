import ATMService from "@/services/ATMService";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    balance: ATMService.balance,
  });
}
