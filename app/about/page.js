import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Beacon Land Holdings",
  description: "Learn about Beacon Land Holdings' commitment to honesty, integrity, and relationships in land investment.",
};

const VALUES = [
  {
    icon: "verified",
    title: "Honesty",
    description: "Every offer, every timeline, and every detail is explained clearly, with nothing hidden along the way.",
  },
  {
    icon: "shield",
    title: "Integrity",
    description: "We do what we say we'll do. The number we put in writing is the number you receive at closing.",
  },
  {
    icon: "handshake",
    title: "Relationships",
    description: "We build long-term relationships with landowners, builders, and developers rooted in trust, not transactions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="relative py-32 overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            className="w-full h-full object-cover"
            alt="Rolling farmland hills at dusk"
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
          />
        </div>
        <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary uppercase tracking-wide mb-6">
            About Beacon Land Holdings
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto">
            We are a family owned and operated land investment company. Our business is based on honesty, integrity
            and relationships.
          </p>
        </div>
      </section>

      <section className="py-24 bg-soft-sand">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative h-[400px] lg:h-[550px] rounded-lg overflow-hidden shadow-xl">
            <img
              className="w-full h-full object-cover"
              alt="Golden hour over open pastures"
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-6 uppercase tracking-wider">Our Story</h2>
            <div className="font-body-md text-on-surface-variant space-y-6">
              <p>
                We are a family owned and operated land investment company. Our business is based on honesty,
                integrity and relationships. We will work with you to make the transaction as simple and painless as
                possible.
              </p>
              <p>
                We built our company to change that. By offering direct cash purchases, handling all closing costs,
                and communicating clearly at every step, we've helped landowners move forward with confidence
                &mdash; whether they're settling an estate, offloading an inherited parcel, or simply ready to
                convert land into liquidity.
              </p>
              <p>
                Every transaction we complete is guided by direct, honest communication &mdash; no realtors, no
                hidden fees, and no unnecessary delays. Just a simple, fair process from your first call to closing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">What We Stand For</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              The principles that guide every offer, every conversation, and every closing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-soft-sand p-8 rounded-xl border border-slate-stone/10 hover:shadow-[0_4px_20px_rgba(27,48,34,0.06)] transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-6 text-on-primary-fixed">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {value.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{value.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary-container text-on-primary">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-md text-headline-md mb-6 uppercase tracking-wider">Ready to Talk?</h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-10">
            Reach out today for a no-obligation conversation about your property.
          </p>
          <a
            href="/contact"
            className="bg-warm-clay text-on-primary px-8 py-3.5 rounded font-label-caps text-label-caps hover:bg-secondary transition-colors shadow-lg active:scale-95 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
