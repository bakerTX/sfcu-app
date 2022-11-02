import ATMService from "/services/ATMService";

export default function handler(req, res) {
  try {
    const { balance, message } = ATMService.deposit(req.body.deposit);
    res.status(200).json({ status: 200, balance, message });
  } catch (e) {
    res.status(500).json({ status: 500, message: e.message });
  }
}