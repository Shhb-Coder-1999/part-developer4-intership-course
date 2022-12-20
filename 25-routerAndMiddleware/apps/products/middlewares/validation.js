function validation(req, res, next) {
  try {
    if (!("name" in req.data)) throw new Error("name is not defined");
    else if (!("price" in req.data)) throw new Error("price is not defined");
    else if (!/^\d+$/.test(req.data.price))
      throw new Error("price is not a number");
    else return req;
  } catch (e) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "oops! Something went wrong!",
        addtionalInfo: e.message,
      })
    );
  }
}

module.exports = validation;
