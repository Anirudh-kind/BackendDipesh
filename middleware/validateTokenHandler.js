const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user = decoded.user; // Assuming you want to store the decoded user info in req.user
            next(); // Proceed to the next middleware or route handler
        });
    } else {
        res.status(401);
        throw new Error("No token provided");
    }
});

module.exports = validateToken;
