import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Terms of Service | Terra Heritage" };

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <section className="py-24 bg-soft-sand">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <h1 className="font-headline-md text-headline-md text-primary mb-8">Terms of Service</h1>
          <div className="font-body-md text-on-surface-variant space-y-6">
            <p>Last updated: 2026</p>
            <p>
              By submitting a property inquiry through this website, you confirm that the information provided is
              accurate to the best of your knowledge and that you are the owner or an authorized representative of
              the property described.
            </p>
            <p>
              Any valuation or offer provided by Terra Heritage is preliminary and non-binding until formalized in a
              written purchase agreement signed by both parties. Terra Heritage reserves the right to decline any
              submission or withdraw an offer prior to closing.
            </p>
            <p>
              This website and its content are provided "as is" without warranties of any kind. For questions about
              these terms, contact us at contact@terraheritage.com.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
