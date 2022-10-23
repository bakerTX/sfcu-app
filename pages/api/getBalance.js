import ATMService from '../../services/ATMService';

export default function handler(req, res) {
    res.status(200).json({
        balance: ATMService.balance
    })
}