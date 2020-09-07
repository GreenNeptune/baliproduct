const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { serverError } = require('../util/server');

exports.isValidToken = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'Missing token, authorization denied' });
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);
        req.user = decodedToken.user;
        return next();
    } catch (error) {
        serverError(null, res, 'Invalid token', 401);
    }
}

exports.resendToken = async (req, res) => {
    if (!req.user) return res.status(400).json({ error: [{ msg: 'Invalid credentials' }] });

    const { password } = req.body;
    const { user } = req;
    const options = { expiresIn: '1h' };

    try {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: [{ msg: 'Invalid credentials' }] });

        const payload = { user: { id: user.id, name: user.name } };
        jwt.sign(payload, JWT_SECRET, options, (error, token) => {
            if (error) {
                return serverError(error, res)
            } else {
                return res.json({ token });
            }
        });
    } catch (error) {
        serverError(error, res);
    }
}
