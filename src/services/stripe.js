const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const verifyGoogleUser = async (token) => {
    // Verify the token with Google's OAuth2 client
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    // Extract user's payload from the ticket
    const payload = ticket.getPayload();
    // Get user's unique Google ID and email from the payload
    const userid = payload['sub'];
    const email = payload['email'];
    // Extract the domain from the user's email
    const domain = email.split('@')[1];
    
    // Check if the user's email domain is 'gov.com'
    if(domain !== 'gov.com') {
        // If not, throw an error
        throw new Error('Not a government agent');
    }
    
    // If the domain check passed, return the user's Google ID
    return userid;
}

const createPayment = async (userId, amount) => {
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        metadata: {integration_check: 'accept_a_payment', userId},
    });
 
    //if payment amount is over 1000, log an error
    return paymentIntent;
}

module.exports = { verifyGoogleUser, createPayment };
