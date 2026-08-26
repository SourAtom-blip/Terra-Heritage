import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FAQ | Beacon Land Holdings",
  description: "Frequently asked questions about selling land to Beacon Land Holdings.",
};

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
  {
    question: "Do I need to make repairs or clear the land before selling?",
    answer: "No. We purchase land as-is, regardless of condition, access issues, or overgrowth. There's nothing you need to prepare before we evaluate your property.",
  },
  {
    question: "What if there are back taxes or a lien on the property?",
    answer: "We regularly work with sellers facing back taxes, liens, or probate complications. Our team can often resolve these issues as part of the closing process.",
  },
  {
    question: "Is there any obligation once I submit my property details?",
    answer: "None at all. Submitting the form starts a free, no-obligation valuation. You're free to decline any offer we present.",
  },
  {
    question: "How do you determine the offer price?",
    answer: "We evaluate comparable land sales, location, access, zoning, and acreage to arrive at a fair cash offer reflective of current market conditions.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />

      <section className="relative py-32 overflow-hidden bg-primary-container">
        <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary uppercase tracking-wide mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto">
            Everything you need to know before selling your land to Beacon Land Holdings.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question} className="border border-slate-stone/20 rounded-lg p-6">
                <h3 className="font-headline-sm text-[20px] text-primary mb-3">{faq.question}</h3>
                <p className="font-body-md text-on-surface-variant">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Still have questions?</p>
            <a
              href="/contact"
              className="bg-deep-forest text-on-primary px-8 py-3.5 rounded font-label-caps text-label-caps hover:bg-primary transition-colors shadow-lg active:scale-95 inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
