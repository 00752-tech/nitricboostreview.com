import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">
        NitricBoostReview.com ("we", "us", or "our") operates the website https://www.nitricboostreview.com (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Information Collection and Use</h2>
      <p className="mb-4">
        We collect several different types of information for various purposes to provide and improve our Service to you.
      </p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Types of Data Collected</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
          <ul className="list-circle pl-6 mt-2">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Cookies and Usage Data</li>
          </ul>
        </li>
        <li>Usage Data: We may also collect information on how the Service is accessed and used ("Usage Data").</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>By email: privacy@nitricboostreview.com</li>
        <li>By visiting this page on our website: <Link href="/contact" className="text-blue-600 hover:underline">https://www.nitricboostreview.com/contact</Link></li>
      </ul>
    </div>
  )
}

