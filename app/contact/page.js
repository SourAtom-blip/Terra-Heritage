import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Contact | Beacon Land Holdings",
  description: "Get in touch with Beacon Land Holdings for a free, no-obligation land valuation.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="relative py-32 overflow-hidden bg-primary-container">
        <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary uppercase tracking-wide mb-6">
            Contact Us
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto">
            Reach out directly, or submit your property details below for a free valuation.
          </p>
        </div>
      </section>

      <section className="py-24 bg-soft-sand">
        <div className="max-w-2xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          <ContactCard icon="call" title="Call Us" detail="(601) 283-8734" href="tel:6012838734" />
          <ContactCard icon="mail" title="Email Us" detail="contact@beaconlandholdings.com" href="mailto:contact@beaconlandholdings.com" />
        </div>

        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-xl border border-slate-stone/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-fixed/10 rounded-bl-full -z-10" />
            <div className="text-center mb-12">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Request More Information</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Provide us with details about your land to receive a free, no-obligation valuation.
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ContactCard({ icon, title, detail, href }) {
  const content = (
    <div className="bg-surface-container-lowest p-8 rounded-xl border border-slate-stone/10 h-full text-center hover:shadow-[0_4px_20px_rgba(27,48,34,0.06)] transition-shadow">
      <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-4 text-on-primary-fixed mx-auto">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          {icon}
        </span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{title}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{detail}</p>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
