import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <Header />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Terms & <span className="text-[#F9C326]">Conditions</span>
            </h1>
            <p className="text-lg text-gray-300">
              Please read these terms carefully before using our services
            </p>
          </div>

          <div className="bg-black/40 border border-[#F9C326]/20 rounded-lg p-8 md:p-12 space-y-8">
            <div>
              <p className="text-gray-300 mb-8">
                By accessing and using this website, you agree to the following terms and conditions. If you do not agree, please do not use our site or services.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">1. Services</h2>
              <p className="text-gray-300">
                We offer digital marketing services including but not limited to social media marketing, paid advertising, branding, and influencer campaigns. All services are subject to availability and project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">2. Payments</h2>
              <p className="text-gray-300">
                All payments must be made in advance or as per agreed milestones. Prices are subject to change based on project scope. Late payments may delay delivery timelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">3. Refund Policy</h2>
              <p className="text-gray-300">
                Due to the nature of digital services, we do not offer refunds once the work has started. However, we are open to revising deliverables based on the original brief.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">4. Client Responsibilities</h2>
              <p className="text-gray-300">
                Clients must provide clear briefs, access to relevant accounts, and timely feedback. Delays in approvals or content sharing can affect timelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300">
                All designs, creatives, and campaigns remain the intellectual property of the agency until full payment is received. After that, ownership transfers to the client unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">6. Confidentiality</h2>
              <p className="text-gray-300">
                We respect your privacy. All information shared with us will be treated as confidential and not disclosed to third parties without your permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300">
                We are not liable for any loss, damage, or disruption caused by external factors such as platform policy changes, ad rejections, or downtime.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">8. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to update these terms at any time. Continued use of our services means you agree to the latest version.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F9C326] mb-4">Contact</h2>
              <p className="text-gray-300">
                For questions, contact:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-300">
                  Email: <a href="mailto:deccanhiveonline@gmail.com" className="text-[#F9C326] hover:underline">deccanhiveonline@gmail.com</a>
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

export default TermsConditions;
