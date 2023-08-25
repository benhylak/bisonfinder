import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';
import { User } from '../models/User';
import { Bison } from '../models/Bison';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export class Store {
    async getUser(userId) {
        return await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
    }
    
    async getBison(bisonId) {
        return await prisma.bison.findUnique({
            where: {
                id: bisonId,
            },
        });
    }
    
    async createUser(data) {
        const newUser = await prisma.user.create({
            data,
        });
        
        return newUser;
    }
    
    async createBison(data) {
        const newBison = await prisma.bison.create({
            data,
        });
        
        return newBison;
    }
    
    async handleStripePayment(amount, token) {
        const charge = await stripe.charges.create({
            amount,
            currency: 'usd',
            source: token,
        });
        
        return charge;
    }
    
    async authenticateUser(token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await this.getUser(decoded.id);
        
        if (!user) {
            throw new Error('User not found');
        }
        
        return user;
         }
}