const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-secondary text-primary font-primary pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4 tracking-tight">Refund Policy</h1>
        </div>

        <div className="space-y-12 p-6 md:p-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-wide text-center pb-4 mb-4">Returns</h2>
            <p className="text-lg text-primary leading-relaxed text-center">
              We have a 7-day return policy, which means you have 7 days after receiving your item to request a return.
            </p>
            <p className="text-lg text-primary leading-relaxed text-center">
              To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You'll also need the receipt or proof of purchase.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-wide text-center pb-4 mb-4">How to Start a Return</h2>
            <p className="text-lg text-primary leading-relaxed text-center">
              To start a return, you can contact us at{" "}
              <a className="text-primary hover:underline decoration-primary transition-colors font-medium" href="mailto:store@acesrollingpapers.com">
                store@acesrollingpapers.com
              </a>
              . Please note that returns will need to be sent to the following address:
            </p>
            <div className="flex justify-center w-full">
              <address className="not-italic text-lg text-primary leading-relaxed p-4 inline-block mt-2 mb-4 text-center">New Delhi, India</address>
            </div>
            <p className="text-lg text-primary leading-relaxed text-center">
              If your return is accepted, we'll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
            </p>
            <p className="text-lg text-primary leading-relaxed text-center mt-4">
              You can always contact us for any return question at{" "}
              <a className="text-primary hover:underline decoration-primary transition-colors font-medium" href="mailto:store@acesrollingpapers.com">
                store@acesrollingpapers.com
              </a>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-wide text-center pb-4 mb-4">Refunds</h2>
            <p className="text-lg text-primary leading-relaxed text-center">
              We will notify you once we've received and inspected your return, and let you know if the refund was approved or not. If approved, you'll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.
            </p>
            <p className="text-lg text-primary leading-relaxed text-center mt-4">
              If more than 15 business days have passed since we've approved your return, please contact us at{" "}
              <a className="text-primary hover:underline decoration-primary transition-colors font-medium" href="mailto:store@acesrollingpapers.com">
                store@acesrollingpapers.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
