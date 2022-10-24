import UserService from '/services/UserService';

export default function handler(req, res) {
    const { pin } = req.body;
    const user = UserService.getUser(pin)
    if (user) {
        res.status(200).json({ status: 200, token: 'abc123', name: user.name });
    } else {
        res.status(401).json({ status: 401, message: 'No user found.' })
    }
}