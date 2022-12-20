
function authorize(req,res,next){
    const app = require('../index');

    const user = app.auth.getuser();
    if (!user) throw new Error('not authenticated');

    const key = req.method.toUpperCase()+req.url;
    if (user.role.includes(key))return true;
    throw new Error('not authorize');
}

module.exports = authorize