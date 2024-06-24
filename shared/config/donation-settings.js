"use strict";
// Configuration for client side
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProvider = exports.PaymentContext = exports.donationUrls = exports.paypalConfigurator = exports.paypalConfigTypes = exports.donationSubscriptionConfig = exports.donationOneTimeConfig = exports.durationKeysConfig = exports.onetimeSKUConfig = exports.defaultTierAmount = exports.defaultDonation = exports.subscriptionAmounts = void 0;
exports.subscriptionAmounts = [500, 1000, 2000, 4000];
exports.defaultDonation = {
    donationAmount: 500,
    donationDuration: 'month'
};
exports.defaultTierAmount = 2000;
exports.onetimeSKUConfig = {
    live: [
        { amount: '15000', id: 'sku_IElisJHup0nojP' },
        { amount: '10000', id: 'sku_IEliodY88lglPk' },
        { amount: '7500', id: 'sku_IEli9AXW8DwNtT' },
        { amount: '5000', id: 'sku_IElhJxkNh9UgDp' },
        { amount: '2500', id: 'sku_IElhQtqLgKZC8y' }
    ],
    staging: [
        { amount: '15000', id: 'sku_IEPNpHACYJmUwz' },
        { amount: '10000', id: 'sku_IEPMY1OXxnY4WU' },
        { amount: '7500', id: 'sku_IEPLOotEqlMOWC' },
        { amount: '5000', id: 'sku_IEPKAxxAxfMnUI' },
        { amount: '2500', id: 'sku_IEPIgLRzViwq5z' }
    ]
};
// Configuration for server side
exports.durationKeysConfig = ['month', 'one-time'];
exports.donationOneTimeConfig = [100000, 25000, 6000];
exports.donationSubscriptionConfig = {
    duration: {
        month: 'Monthly'
    },
    plans: {
        month: [25000, 3500, 500]
    }
};
// Shared paypal configuration
// keep the 5 dollars for the modal
exports.paypalConfigTypes = {
    live: {
        month: {
            500: { planId: 'P-6B636789V3105190KMTJFH7A' },
            1000: { planId: 'P-53P76823N8780520DMVTWF3I' },
            2000: { planId: 'P-8HY47434FB9663500MVTWFOA' },
            3000: { planId: 'P-1KY930839N8045117L6E4BKY' },
            4000: { planId: 'P-0MH28916302828423MVTWEBI' },
            5000: { planId: 'P-0WR49877YD949401BL6E4CTA' }
        }
    },
    staging: {
        month: {
            500: { planId: 'P-37N14480BW163382FLZYPVMA' },
            1000: { planId: 'P-28B62039J8092810UL6E3FXA' },
            2000: { planId: 'P-7HR706961M9170433L6HI5VI' },
            3000: { planId: 'P-35V33574BU596924JL6HI6XY' },
            4000: { planId: 'P-45M45060289267734L6HJSXA' },
            5000: { planId: 'P-0MD70861FY4172444L6HJTUQ' }
        }
    }
};
const paypalConfigurator = (donationAmount, donationDuration, paypalConfig) => {
    if (donationDuration === 'one-time') {
        return { amount: donationAmount, duration: donationDuration, planId: null };
    }
    return {
        amount: donationAmount,
        duration: donationDuration,
        planId: paypalConfig[donationDuration][donationAmount].planId
    };
};
exports.paypalConfigurator = paypalConfigurator;
exports.donationUrls = {
    successUrl: 'https://www.freecodecamp.org/news/thank-you-for-donating/',
    cancelUrl: 'https://freecodecamp.org/donate'
};
var PaymentContext;
(function (PaymentContext) {
    PaymentContext["Modal"] = "modal";
    PaymentContext["DonatePage"] = "donate page";
    PaymentContext["Certificate"] = "certificate";
})(PaymentContext || (exports.PaymentContext = PaymentContext = {}));
var PaymentProvider;
(function (PaymentProvider) {
    PaymentProvider["Paypal"] = "paypal";
    PaymentProvider["Patreon"] = "patreon";
    PaymentProvider["Stripe"] = "stripe";
    PaymentProvider["StripeCard"] = "stripe card";
})(PaymentProvider || (exports.PaymentProvider = PaymentProvider = {}));
