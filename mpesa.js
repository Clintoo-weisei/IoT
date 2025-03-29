async function initiateMpesaPayment(phoneNumber, amount, accountReference) {
    try {
        // Simulate M-Pesa STK Push request
        const response = await fetch('https://api.example.com/mpesa/stkpush', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber,
                amount,
                accountReference
            })
        });

        if (!response.ok) {
            throw new Error('Failed to initiate M-Pesa payment');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('M-Pesa payment error:', error);
        throw error;
    }
}

async function checkPaymentStatus(checkoutRequestId) {
    try {
        const response = await fetch(`https://api.example.com/mpesa/status/${checkoutRequestId}`);
        if (!response.ok) {
            throw new Error('Failed to check payment status');
        }
        return await response.json();
    } catch (error) {
        console.error('Payment status check error:', error);
        throw error;
    }
}

async function generatePaymentReceipt(paymentData) {
    try {
        return {
            transactionId: paymentData.transactionId,
            amount: paymentData.amount,
            date: new Date().toISOString(),
            status: 'completed',
            receiptNumber: `MPESA${Date.now()}`
        };
    } catch (error) {
        console.error('Receipt generation error:', error);
        throw error;
    }
}
