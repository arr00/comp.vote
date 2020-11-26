const {canVote} = require('./helperFunctions');
export default async function handler(req, res) {
  const val = await canVote(req.query.address,req.query.proposalId);
  res.end(JSON.stringify({ result: val}));
}