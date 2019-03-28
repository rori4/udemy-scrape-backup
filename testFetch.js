const fetch = require("node-fetch");

fetch(
  "https://www.contestgirl.com/add-sweepstakes.pl?ur=https%3A%2F%2Fwww.pepsi.com%2Fen-us%2Fsweeps&l=Example%3A+Pepsi--Trip+to+London+Sweeps&d=Enter+for+a+chance+to+win+a+Pepsi&r=none&e=March+24%2C+2019&f=s&ca=ca&us=us&thanks=pepsiFan&phase=2&Send=Send",
  {
    credentials: "omit",
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      "accept-language": "en-US,en;q=0.9",
      "upgrade-insecure-requests": "1"
    },
    referrer:
      "https://www.contestgirl.com/add-sweepstakes.pl?ur=http%3A%2F%2Fwww.pepsi.com%2Fsweeps&l=Example%3A+Pepsi--Trip+to+London+Sweeps&d=Enter+for+a+chance+to+win+a+Pepsi&r=none&e=March+24%2C&f=s&us=us&ca=ca&thanks=pepsiFan&Send=Send",
    referrerPolicy: "no-referrer-when-downgrade",
    body: null,
    method: "GET",
    mode: "cors"
  }
)
  .then(response => response.text())
  .then(body => console.log(body))
  .catch(console.error);
