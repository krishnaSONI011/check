import React from "react";

export const metadata = {
  title: "TOC",
};

export default function Page() {
  return (
    <div className="static">
      <section id="toc" className="relative top-20">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

          <div className="space-y-4">
            <section>
              <h2 className="text-xl font-bold mb-2">1. Introduction</h2>
              <p>
                These terms and conditions (Terms) govern the use of our
                website and the services we provide. By accessing or using our
                website, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">2. User Accounts</h2>
              <p>
                To use certain features of our website, you may be required to
                create an account. You are responsible for maintaining the
                confidentiality of your account information and for all
                activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">
                3. Intellectual Property
              </h2>
              <p>
                Our website and its content, including but not limited to text,
                graphics, logos, and images, are the property of our company and
                are protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">
                4. Limitation of Liability
              </h2>
              <p>
                We shall not be liable for any indirect, special, incidental, or
                consequential damages arising out of or in connection with the
                use of our website or the services we provide.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">5. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Jurisdiction], without giving effect to
                any principles of conflicts of law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">6. Modifications</h2>
              <p>
                We reserve the right to modify these Terms at any time. Any
                changes will be effective immediately upon posting the revised
                Terms on our website.
              </p>
            </section>
          </div>
        </div>
      </section>
      <section id="privacy" className="relative top-20">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

          <div className="space-y-4">
            <section>
              <h2 className="text-xl font-bold mb-2">
                1. Information Collection
              </h2>
              <p>
                We collect certain personal information from you, such as your
                name, email address, and any other information you provide to us
                through our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">2. Use of Information</h2>
              <p>
                We use the information we collect to provide and improve our
                services, to communicate with you, and to comply with legal
                obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">3. Data Sharing</h2>
              <p>
                We may share your personal information with third-party service
                providers who assist us in operating our website and providing
                our services. We do not sell or rent your personal information
                to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">4. Data Security</h2>
              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, use, or disclosure. However, no method
                of transmission over the internet or electronic storage is 100%
                secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">5. Data Retention</h2>
              <p>
                We will retain your personal information for as long as
                necessary to fulfill the purposes outlined in this Privacy
                Policy, unless a longer retention period is required or
                permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">6. Your Rights</h2>
              <p>
                You have certain rights regarding your personal information,
                such as the right to access, correct, or delete your
                information. You can exercise these rights by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">
                7. Changes to this Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be effective immediately upon posting the revised policy on
                our website.
              </p>
            </section>
          </div>
        </div>
      </section>

      <div className="mb-96"></div>
    </div>
  );
}
