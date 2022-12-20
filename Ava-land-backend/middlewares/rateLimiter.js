const {default:rateLimit} = require('express-rate-limit')

const ratelimit = rateLimit({
		windowMs: 1 * 60 * 1000, // 1 minutes
		max: 10, // Limit each IP to 100 requests per `window` (here, per 1 minutes)
		standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
		legacyHeaders: false, // Disable the `X-RateLimit-*` headers
		
		handler:function(req, res) {
			const err = new Error()
			err.code = "429";
			throw err;
		},
})


module.exports = ratelimit;
