const { Router } = require("express");
const fetch = require("node-fetch");
const jokeAPI = `https://icanhazdadjoke.com/`;

// ...other imports...
const router = Router();

// endpoints in route
router.get("/jokes", async (req, res) => {
  const joke = await fetch(jokeAPI, {
    headers: {
      Accept: "text/plain"
    },
    method: "GET"
  }).then(res => res.text());

  console.log(joke);

  if (!joke) {
    return res.sendStatus(404);
  }
  return res.json(joke);
});

// ...more endpoints...
module.exports = router;
