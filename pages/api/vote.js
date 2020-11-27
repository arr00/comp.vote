import { vote, runMiddleware } from "./helperFunctions";
export default async function handler(req, res) {
  // Runs CORS middleware
  await runMiddleware(req, res);

  const newTx = req.body;
  const proposalId = newTx.proposalId;
  const support = newTx.support;
  const address = newTx.address;
  const v = newTx.v;
  const r = newTx.r;
  const s = newTx.s;

  // Validate and submit tx. Reverts on error. True on success.
  let val = await vote(address, proposalId, support, v, r, s);
  res.end(JSON.stringify({ result: val }));
}
