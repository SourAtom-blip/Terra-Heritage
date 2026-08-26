import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Beacon Land Holdings",
  description: "Beacon Land Holdings works with both sellers and buyers of raw and vacant land across the country.",
};

const SERVICES = [
  {
    icon: "payments",
    title: "Sellers",
    heading: "WE Close On Your Land.",
    description:
      "We purchase raw and vacant land directly from owners across the country. Most of our acquisitions come from off-market relationships. There's no listing, no commission, no agent fees and no parade of strangers walking on your property. You speak with the same person from first conversation to wire transfer, and we close on the number we put in writing. From our first conversation to closing the average transaction takes 30 &ndash; 90 days.",
  },
  {
    icon: "handshake",
    title: "Buyers",
    heading: null,
    description:
      "If you are looking to purchase raw, undeveloped land reach out to us. We work with several builders and developers across the country to provide them with property for future projects. Let us know what you are looking for and our acquisition team will be in touch.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <section className="relative py-32 overflow-hidden bg-primary-container">
        <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary uppercase tracking-wide mb-6">
            Services / What We Do
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto">
            Transparent solutions for landowners ready to sell, and for buyers looking to acquire raw land.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop space-y-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-start ${
                index !== SERVICES.length - 1 ? "pb-16 border-b border-slate-stone/10" : ""
              }`}
            >
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center text-on-primary-fixed shrink-0">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {service.icon}
                </span>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-primary mb-4">{service.title}</h2>
                {service.heading && (
                  <p className="font-headline-sm text-headline-sm text-primary mb-4">{service.heading}</p>
                )}
                <p
                  className="font-body-md text-body-md text-on-surface-variant max-w-2xl"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-soft-sand relative">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-6">Interested in a Free Valuation?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto mb-10">
            Submit your property details and we'll respond with a no-obligation cash offer within 48-72 hours.
          </p>
          <a
            href="/contact"
            className="bg-deep-forest text-on-primary px-8 py-3.5 rounded font-label-caps text-label-caps hover:bg-primary transition-colors shadow-lg active:scale-95 inline-block"
          >
            Request Valuation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
