// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const crypto = require("crypto");
const getRawBody = require("raw-body");

export default async function handler(req, res) {
  console.log("Cart update event received.");

  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  const body = await getRawBody(req);
  const hmac = req.headers["x-shopify-hmac-sha256"];
  const secretKey = process.env['SHOPIFY_WEBHOOK_SECRET'];

  const hash = crypto
    .createHmac("sha256", secretKey)
    .update(body, "utf8", "hex")
    .digest("base64");

  // Compare our hash to Shopify's hash to verify integratity of request
  if (hash === hmac) {
    console.log("Request verified: hash matches hmac.");

    console.log("Body: ", body.toString());

    res.status(200).send();
  } else {
    console.log("Request verification failed: hash DOES NOT match hmac.");
    console.log("HMAC: " + hmac);
    console.log("HASH: " + hash);
    res.status(403).send();
  }
}

// Next.js's body parser is great, but turn this off so we can access the raw body.
export const config = {
  api: {
    bodyParser: false,
  },
}