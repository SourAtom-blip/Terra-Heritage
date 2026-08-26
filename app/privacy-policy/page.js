import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Privacy Policy | Beacon Land Holdings" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <section className="py-24 bg-soft-sand">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <h1 className="font-headline-md text-headline-md text-primary mb-8">Privacy Policy</h1>
          <div className="font-body-md text-on-surface-variant space-y-6">
            <p>Last updated: 2026</p>
            <p>
              Beacon Land Holdings ("we", "us") collects information you voluntarily submit through our
              property valuation form, including your name, contact details, and information about your land. This
              information is used solely to evaluate your property and communicate with you about a potential
              purchase.
            </p>
            <p>
              We do not sell your personal information to third parties. Information may be shared with title
              companies, attorneys, or closing agents solely as required to complete a transaction you've agreed to.
            </p>
            <p>
              You may request that we delete your information at any time by contacting us at
              contact@beaconlandholdings.com.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
