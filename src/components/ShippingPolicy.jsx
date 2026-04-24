const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-secondary text-primary font-primary pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4 tracking-tight">Shipping Policy</h1>
        </div>
      
        <div className="space-y-12 p-6 md:p-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-wide text-center pb-4 mb-4">Processing Time</h2>
            <p className="text-lg text-primary leading-relaxed text-center">All orders are usually processed within 24 Hours.</p>
            <p className="text-lg text-primary leading-relaxed text-center">Delhi orders are processed and delivered on Sundays and bank holidays as well.</p>
          </div>
      
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-wide text-center pb-4 mb-4">Delivery Estimates</h2>
            <p className="text-lg text-primary leading-relaxed text-center">We use services of India's top logistics & shipping solution.</p>
            <p className="text-lg text-primary leading-relaxed text-center">Delivery of your order might take up to 1 - 2 working days, depending on your location in India.</p>
          </div>
      
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-wide text-center pb-4 mb-4">Shipping Rates</h2>
            <p className="text-lg text-primary leading-relaxed text-center">If there is an exception due to the nature of the product, shipping charges for your order will be calculated and displayed at the checkout.</p>
          </div>
      
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-wide text-center pb-4 mb-4">Shipment Confirmation & Order Tracking</h2>
            <p className="text-lg text-primary leading-relaxed text-center">You will receive a Shipment Confirmation email and/or SMS once your order has shipped containing your tracking number(s).</p>
            <p className="text-lg text-primary leading-relaxed text-center">The tracking number will be active within 24 hours.</p>
          </div>
      
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-wide text-center mb-4">Damages</h2>
            <p className="text-lg text-primary leading-relaxed text-center">We will not be liable for any products damaged or lost during shipping.</p>
            <p className="text-lg text-primary leading-relaxed text-center">If you received your order damaged, please contact the shipment carrier to file a claim.</p>
            <p className="text-lg text-primary leading-relaxed text-center">Please save all packaging materials and damaged goods before filing a claim.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
