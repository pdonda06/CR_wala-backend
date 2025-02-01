export const processPayment = async (req, res) => {

    const { cardNumber, cardExpiry, cardSecurityPin, billingAddress, contactInfo } = req.body;

    // Simulate payment processing
    const isPaymentSuccessful = Math.random() > 0.5; // Randomly decide if the payment is successful

    if (isPaymentSuccessful) {
        res.status(200).send({
            message: "Payment successfully completed"
        });
    } else {
        res.status(400).send({
            message: "Payment Failed",
            details: "Unable to Proceed Further",
            suggestion: "Pay with another card"
        });
    }
};