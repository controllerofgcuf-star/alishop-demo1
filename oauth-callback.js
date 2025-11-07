import fetch from 'node-fetch';
export default async function handler(req,res){
  const { code } = req.query;
  if(!code) return res.status(400).send('Missing code');
  // TODO: Exchange code for access_token using Daraz API and sign request per docs.
  // For security, implement on server and store token in DB or environment (not in code).
  res.send('Authorization received. Implement token exchange in /pages/api/daraz/oauth-callback.js');
}
