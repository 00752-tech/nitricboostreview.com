import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">
       {` Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the https://www.nitricboostreview.com website (the "Service") operated by NitricBoostReview.com ("us", "we", or "our").`}
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Terms</h2>
      <p className="mb-4">
        By accessing the website at https://www.nitricboostreview.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use License</h2>
      <p className="mb-4">
      {`  Permission is granted to temporarily download one copy of the materials (information or software) on NitricBoostReview.com's website for personal, non-commercial transitory viewing only.`}
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Disclaimer</h2>
      <p className="mb-4">
        {`The materials on NitricBoostReview.com's website are provided on an 'as is' basis. NitricBoostReview.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`}
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>By email: terms@nitricboostreview.com</li>
        <li>By visiting this page on our website: <Link href="/contact" className="text-blue-600 hover:underline">https://www.nitricboostreview.com/contact</Link></li>
      </ul>
    </div>
  )
}

