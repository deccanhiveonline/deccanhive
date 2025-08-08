import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <Header />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Privacy <span className="text-[#F9C326]">Policy</span>
            </h1>
            <p className="text-lg text-gray-300">
              How we collect, use, and protect your personal information
            </p>
          </div>

          <div className="bg-black/40 border border-[#F9C326]/20 rounded-lg p-8 md:p-12 space-y-8">
            <div>
              <p className="text-gray-300 mb-8">
                At Deccan Hive Digital Agency Pvt Ltd, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 mb-4">We may collect the following information:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Name, email address, phone number</li>
                <li>Business or company name</li>
                <li>Project or service-related details</li>
                <li>Website usage data (via cookies, analytics tools)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use your data to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Communicate and respond to your inquiries</li>
                <li>Provide and manage our digital marketing services</li>
                <li>Improve our website experience</li>
                <li>Send updates, invoices, and marketing communications (only with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">3. How We Protect Your Information</h2>
              <p className="text-gray-300">
                Your data is stored securely and is only accessible to authorized personnel. We use standard security measures to protect against unauthorized access, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">4. Sharing of Information</h2>
              <p className="text-gray-300 mb-4">We do not sell or share your personal information with third parties, except:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>With your permission</li>
                <li>To comply with legal obligations</li>
                <li>To service providers who assist in delivering our services (under confidentiality agreements)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">5. Cookies and Tracking</h2>
              <p className="text-gray-300">
                Our website may use cookies or third-party analytics tools (like Google Analytics) to enhance user experience and track site usage. You can disable cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">6. Your Rights</h2>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access the data we hold about you</li>
                <li>Request corrections or deletion of your data</li>
                <li>Opt-out of marketing communications at any time</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To exercise these rights, contact us at <a href="mailto:deccanhive@gmail.com" className="text-[#F9C326] hover:underline">deccanhive@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">7. Third-Party Links</h2>
              <p className="text-gray-300">
                Our site may contain links to other websites. We are not responsible for the privacy practices of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">8. Policy Updates</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">9. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-300">
                  Email: <a href="mailto:deccanhive@gmail.com" className="text-[#F9C326] hover:underline">deccanhive@gmail.com</a>
                </p>
                <p className="text-gray-300">
                  Phone: <a href="tel:+919063117093" className="text-[#F9C326] hover:underline">+91 9063117093</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
