import ATMService from "@/services/ATMService";
import type { NextApiRequest, NextApiResponse } from "next";
import getErrorMessage from "@/utils/getErrorMessage";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { balance, message } = ATMService.deposit(req.body.deposit);
    res.status(200).json({ status: 200, balance, message });
  } catch (e: unknown) {
    res.status(500).json({ status: 500, message: getErrorMessage(e) });
  }
}
