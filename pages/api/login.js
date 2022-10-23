export default function handler(req, res) {
    const whitelist = {
        '1337': {
            name: 'Aaron Baker',
        },
    }

    if (whitelist[req.body.pin]) {
        res.status(200).json(whitelist[req.body.pin]);
    } else {
        res.status(401).send('Unauthorized')
    }
}