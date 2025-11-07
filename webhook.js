export default async function handler(req,res){
  // Implement webhook verification if Daraz sends signatures.
  // Update your order status in DB and notify customer.
  res.status(200).send('ok');
}
