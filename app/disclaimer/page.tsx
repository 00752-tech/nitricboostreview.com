import Link from 'next/link'

export default function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">
      {`  The information provided by NitricBoostReview.com ("we," "us," or "our") on https://www.nitricboostreview.com (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.`}
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Not Medical Advice</h2>
      <p className="mb-4">
        The content on our website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Affiliate Disclosure</h2>
      <p className="mb-4">
        Some of the links on our website are affiliate links. This means if you click on the link and purchase the item, we may receive an affiliate commission at no extra cost to you. All opinions remain our own.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Testimonials</h2>
      <p className="mb-4">
        The testimonials displayed on our website are real experiences from actual users of Nitric Boost Ultra. However, individual results may vary. We do not claim that they are typical results that consumers will generally achieve.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Disclaimer, please contact us:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>By email: disclaimer@nitricboostreview.com</li>
        <li>By visiting this page on our website: <Link href="/contact" className="text-blue-600 hover:underline">https://www.nitricboostreview.com/contact</Link></li>
      </ul>
    </div>
  )
}

