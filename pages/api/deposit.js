import ATMService from '../../services/ATMService';

export default function handler(req, res) {
    try {
        const newBalance = ATMService.deposit(req.body.deposit);
        res.status(200).json({ balance: newBalance })
    } catch(e) {
        res.status(401).send('Deposit failed.')
    }
}