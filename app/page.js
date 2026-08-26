import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="A breathtaking, cinematic sunrise over rolling rural farmland."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHbfjK_SrWETULE7RYVJCUEzyMLFfkwG0jDV03NwuQb7MqWqwL8ah4tnjqR3Q2Q1Tg7XCYPK6gEwAoi9M4HIWL1On6hUc1tPcm1U9vpIWDzYeA8_0OFhtSq0RKu5Z9WMtCArzc0o4f1Gjna9ghZOTitYIJE9YOeoSb9iZ77pwqwdAv67xTT0KRGA8d95jrUILy4kgwvbqKTBGnv8FjraoBJtS8MCWlA7GT8RlJlxEBvKK1pFtOmoE"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop w-full text-center mt-20">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary text-shadow mb-6 max-w-4xl mx-auto uppercase tracking-wide">
            Investing in the Future of Your Land
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-lowest font-medium mb-10 max-w-2xl mx-auto text-shadow">
            Make your land transactions quick, transparent, and strictly professional. We are your trusted partner in
            heritage land investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              className="bg-warm-clay text-on-primary px-8 py-3.5 rounded font-label-caps text-label-caps hover:bg-secondary transition-colors shadow-lg active:scale-95 w-full sm:w-auto"
              href="#contact"
            >
              Get a Free Land Valuation
            </a>
            <a
              className="bg-transparent border-2 border-surface-container-lowest text-surface-container-lowest px-8 py-3.5 rounded font-label-caps text-label-caps hover:bg-surface-container-lowest hover:text-primary transition-colors shadow-lg active:scale-95 w-full sm:w-auto backdrop-blur-sm"
              href="#about"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-soft-sand relative" id="about">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="relative group h-[500px] lg:h-[700px] rounded-lg overflow-hidden shadow-xl">
              <img
                alt="Vast, rolling hills and lush green pastures during the golden hour."
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf2CqNuiy0kL6Ww1aiILSI7ZEZ9DvrDax8Tpbtb0_k5Wr_NEMVFHkOxITIFBbKXkW1ylHddvpPDMMIaP1BS20ywwYXaO25FXBNbF1yEmdnarbCc8KcVyDO2rJNJbY6W_kK0wEiRObjmQt4zb9nP1hYk-Yz_y330RyMt2IpdqeQ5k5bubhRQ8JppfAYzN0uGMeHsRjLEYAKalBPJwxi0ZhUgen1ijjSk1Yw0KYNf931mN5kzBeWB5U"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg" />
            </div>
            <div className="flex flex-col justify-center h-full">
              <div className="mb-12">
                <h2 className="font-headline-md text-headline-md text-primary mb-6 uppercase tracking-wider">
                  Do you own unwanted land? Let us help!
                </h2>
                <div className="prose prose-slate font-body-md text-on-surface-variant space-y-6">
                  <p>
                    We&rsquo;re a dedicated land investment company specializing in rural and vacant land. We make it
                    seamless for you to sell your property by offering direct cash purchases, saving you significant
                    time and resources by bypassing traditional realtor fees and extended market wait times.
                  </p>
                  <p>
                    If your land has transitioned from an asset to a burden&mdash;whether through accumulating taxes
                    or shifting priorities&mdash;or if you simply prefer liquidity, we invite you to reach out. We
                    value transparency and long-term stewardship in every transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Services &amp; What We Do</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Straightforward solutions for landowners ready to sell, and for buyers looking to acquire raw land.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-soft-sand p-8 rounded-xl border border-slate-stone/10 hover:shadow-[0_4px_20px_rgba(27,48,34,0.06)] transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-6 text-on-primary-fixed">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{service.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary-container text-on-primary">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-md text-headline-md mb-6 uppercase tracking-wider">Service Areas</h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-3xl mx-auto mb-12">
            We operate nationwide with a strong focus on acquiring rural land in the Southeast, Midwest, and beyond.
            No matter the size of your property we are ready to evaluate it.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-body-md text-on-primary/90">
            {["Southeast", "Midwest", "Southwest", "Nationwide"].map((area) => (
              <div key={area} className="bg-primary/50 p-6 rounded-lg border border-on-primary/10">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">How It Works</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A straightforward, transparent process designed to save you time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/4 left-[16%] right-[16%] h-0.5 bg-slate-stone/20 -z-10" />
            {STEPS.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-warm-clay text-on-primary rounded-full flex items-center justify-center font-headline-sm mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{step.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-soft-sand">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-md text-headline-md text-primary text-center mb-16">What Landowners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-slate-stone/5">
                <div className="text-warm-clay mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-on-surface-variant italic mb-6">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-label-caps text-primary font-semibold">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-md text-headline-md text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question} className="border border-slate-stone/20 rounded-lg p-6">
                <h3 className="font-headline-sm text-[20px] text-primary mb-3">{faq.question}</h3>
                <p className="font-body-md text-on-surface-variant">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-soft-sand relative" id="contact">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-12">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Request More Information</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Provide us with details about your land to receive a free, no-obligation valuation.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-xl border border-slate-stone/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-fixed/10 rounded-bl-full -z-10" />
            <LeadForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const SERVICES = [
  {
    icon: "payments",
    title: "Sellers",
    description:
      "We close on your land. We purchase raw and vacant land directly from owners across the country — no listing, no commission, no agent fees, and no parade of strangers walking on your property.",
  },
  {
    icon: "handshake",
    title: "Buyers",
    description:
      "Looking to purchase raw, undeveloped land? We work with builders and developers across the country to provide property for future projects.",
  },
];

const STEPS = [
  {
    number: 1,
    title: "Submit Details",
    description: "Fill out our simple online form with your property information.",
  },
  {
    number: 2,
    title: "Receive Fair Offer",
    description: "We evaluate your land and present a no-obligation cash offer within 48-72 hours.",
  },
  {
    number: 3,
    title: "Get Paid",
    description: "We handle all paperwork and closing costs. You get paid quickly and easily.",
  },
];

const TESTIMONIALS = [
  {
    quote: "An incredibly easy process. They offered a fair price and handled every detail. I didn't have to lift a finger.",
    name: "James T., Texas",
  },
  {
    quote: "Very professional team. They clearly know land valuation and respected the heritage of our family property.",
    name: "Sarah M., Georgia",
  },
  {
    quote: "Fair pricing and incredibly fast closing. I highly recommend Beacon Land Holdings if you're looking to sell vacant land.",
    name: "David L., Ohio",
  },
];

const FAQS = [
  {
    question: "How long does the process take?",
    answer:
      "Typically, we present an offer within 48-72 hours of reviewing your property details. From our first conversation to closing, the average transaction takes 30 to 90 days.",
  },
  {
    question: "Are there any hidden fees or commissions?",
    answer: "No, there are absolutely no hidden fees. We cover all traditional closing costs. The offer we agree upon is the amount you receive.",
  },
  {
    question: "What types of land do you buy?",
    answer: "We primarily purchase rural, vacant, agricultural, and recreational land. If you have an unwanted parcel, we are interested in evaluating it.",
  },
];
