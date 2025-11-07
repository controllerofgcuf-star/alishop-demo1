import fetch from 'node-fetch';
export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'});
  const body = req.body;
  try{
    const sellerToken = process.env.DARAZ_SELLER_TOKEN || null;
    if(!sellerToken) return res.status(400).json({error:'Daraz seller not connected. Complete OAuth and store seller token.'});
    // Build Daraz order payload according to Daraz API docs.
    // Sign request per Daraz signing rules and POST to order create endpoint.
    // This is placeholder response for demo.
    return res.status(200).json({ok:true, order_id:'DEMO-DARAZ-ORDER-12345'});
  }catch(err){
    return res.status(500).json({error: err.message});
  }
}
