import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Terra Heritage",
  description: "Explore Terra Heritage's land investment services: direct cash offers, land management, and consultation.",
};

const SERVICES = [
  {
    icon: "payments",
    title: "Direct Cash Offers",
    description:
      "We purchase land directly, with no financing contingencies or bank approvals to slow things down. You receive a clear, no-obligation cash offer, and if you accept, we cover 100% of standard closing costs.",
    points: ["No realtor commissions", "No financing delays", "Close in as little as 2 weeks"],
  },
  {
    icon: "nature",
    title: "Land Management",
    description:
      "For acquired properties, we focus on long-term stewardship &mdash; conservation practices, responsible agricultural use, and preservation of natural resources for future generations.",
    points: ["Sustainable land use planning", "Conservation-first approach", "Ongoing property upkeep"],
  },
  {
    icon: "handshake",
    title: "Consultation",
    description:
      "Not ready to sell? We offer expert guidance on land valuation, heritage planning, and legacy strategies to help you make the most informed decision about your property's future.",
    points: ["Free property valuations", "Heritage & legacy planning", "No-pressure advice"],
  },
  {
    icon: "gavel",
    title: "Title & Closing Support",
    description:
      "Our team coordinates directly with title companies to resolve liens, back taxes, and probate issues that often stall traditional land sales.",
    points: ["Clear title resolution", "Probate & estate support", "Full paperwork handling"],
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
            Comprehensive, transparent solutions for land owners at every stage of the decision-making process.
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
                <p
                  className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-2xl"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
                <ul className="space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 font-body-sm text-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-warm-clay text-[18px]">check_circle</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-soft-sand relative">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-6">Interested in a Free Valuation?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto mb-10">
            Submit your property details and we'll respond with a no-obligation cash offer within 48 hours.
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
