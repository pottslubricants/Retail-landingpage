"use client"

export default function PottsLubricantsLanding() {
  const applyNow = () => {
    window.open("https://www.amsoil.com/account-application/retail/?zo=7393004", "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-2 px-4 text-center">
        <p className="text-sm">
          <span className="font-semibold">Potts Lubricants - Independent AMSOIL Jobber</span>
        </p>
      </div>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Grow Your Profits with Premium Synthetic Lubricants
        </h1>
        <h2 className="text-xl md:text-2xl mb-8">
          Become an Official AMSOIL Retailer – Fast, Free & Easy
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Sell the #1 synthetic motor oil brand trusted by pros – AMSOIL. Perfect for auto shops, parts stores, and retail locations.
        </p>
        <button
          onClick={applyNow}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 rounded-lg"
        >
          Apply Now to Become a Retail Partner →
        </button>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose AMSOIL?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Trusted Brand</h3>
              <p>50+ years of industry leadership</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Wholesale Pricing</h3>
              <p>Maximize your margins</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Zero Risk</h3>
              <p>No minimum orders to start</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
        <button
          onClick={applyNow}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-12 py-6 rounded-lg"
        >
          Apply Now – Start Selling AMSOIL →
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <p>© 2024 Potts Lubricants - AMSOIL Independent Jobber</p>
      </footer>
    </div>
  )
}
