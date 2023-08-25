const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const verifyGoogleUser = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    const email = payload['email'];
    const domain = email.split('@')[1];
    
    if(domain !== 'gov.com') {
        throw new Error('Not a government agent');
    }
    
    return userid;
}

const createPayment = async (userId, amount) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        metadata: {integration_check: 'accept_a_payment', userId},
    });
    
    return paymentIntent;
}

module.exports = { verifyGoogleUser, createPayment };
