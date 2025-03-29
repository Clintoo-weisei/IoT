function Payment({ courseId, price }) {
    try {
        const [phoneNumber, setPhoneNumber] = React.useState('');
        const [isProcessing, setIsProcessing] = React.useState(false);
        const [paymentStatus, setPaymentStatus] = React.useState(null);

        const handlePayment = async (e) => {
            e.preventDefault();
            setIsProcessing(true);
            try {
                const paymentResponse = await initiateMpesaPayment(
                    phoneNumber,
                    price,
                    `COURSE-${courseId}`
                );
                
                setPaymentStatus({ type: 'info', message: 'Please check your phone for the STK push' });
                
                // Poll for payment status
                const statusCheck = setInterval(async () => {
                    const status = await checkPaymentStatus(paymentResponse.checkoutRequestId);
                    if (status.completed) {
                        clearInterval(statusCheck);
                        setPaymentStatus({ type: 'success', message: 'Payment successful!' });
                        const receipt = await generatePaymentReceipt(status);
                        // Handle successful payment
                    }
                }, 5000);
            } catch (error) {
                setPaymentStatus({ type: 'error', message: 'Payment failed. Please try again.' });
                console.error('Payment processing error:', error);
            } finally {
                setIsProcessing(false);
            }
        };

        return (
            <div data-name="payment-page" className="container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-6">Course Payment</h2>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold">Amount: KSh {price}</h3>
                        <p className="text-gray-600">Pay securely with M-Pesa</p>
                    </div>

                    {paymentStatus && (
                        <div className={`mb-4 p-4 rounded ${
                            paymentStatus.type === 'success' ? 'bg-green-100 text-green-700' :
                            paymentStatus.type === 'error' ? 'bg-red-100 text-red-700' :
                            'bg-blue-100 text-blue-700'
                        }`}>
                            {paymentStatus.message}
                        </div>
                    )}

                    <form onSubmit={handlePayment}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="phone">
                                M-Pesa Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="254700000000"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full mpesa-button disabled:opacity-50"
                            disabled={isProcessing}
                        >
                            {isProcessing ? (
                                <span className="flex items-center justify-center">
                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                    Processing...
                                </span>
                            ) : (
                                'Pay with M-Pesa'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Payment page error:', error);
        reportError(error);
        return null;
    }
}
