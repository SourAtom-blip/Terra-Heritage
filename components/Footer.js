import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="py-16 bg-surface-variant/50 border-t border-slate-stone/10">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-headline-sm text-headline-sm text-primary text-center md:text-left m-0 uppercase tracking-wide">
            Beacon Land Holdings
          </h2>
          <a
            className="bg-transparent border border-primary text-primary px-8 py-3 rounded font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-colors active:scale-95 text-center flex items-center gap-2"
            href="mailto:contact@beaconlandholdings.com"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            Email Us
          </a>
        </div>
      </section>

      <footer className="w-full py-20 bg-deep-forest">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <span className="font-display-lg text-headline-sm text-soft-sand block mb-4">BEACON LAND HOLDINGS</span>
            <p className="font-body-sm text-body-sm text-on-primary-container/80 mb-6 max-w-xs">
              A family owned and operated land investment company built on honesty, integrity, and relationships.
            </p>
            <p className="font-body-sm text-body-sm text-on-primary-container/80">
              © {new Date().getFullYear()} Beacon Land Holdings. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-label-caps text-label-caps text-soft-sand mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-primary-container/80">
              <li>
                <Link href="/about" className="transition-opacity hover:opacity-100 opacity-80 hover:text-soft-sand underline decoration-warm-clay">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-opacity hover:opacity-100 opacity-80 hover:text-soft-sand underline decoration-warm-clay">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-opacity hover:opacity-100 opacity-80 hover:text-soft-sand underline decoration-warm-clay text-warm-clay font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label-caps text-label-caps text-soft-sand mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-primary-container/80">
              <li>
                <Link href="/privacy-policy" className="transition-opacity hover:opacity-100 opacity-80 hover:text-soft-sand underline decoration-warm-clay">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="transition-opacity hover:opacity-100 opacity-80 hover:text-soft-sand underline decoration-warm-clay">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label-caps text-label-caps text-soft-sand mb-4 uppercase tracking-wider">Connect</h4>
            <div className="font-body-sm text-body-sm text-on-primary-container/80 space-y-2">
              <p>
                <a className="hover:text-soft-sand transition-colors" href="tel:6012838734">
                  (601) 283-8734
                </a>
              </p>
              <p>
                <a className="hover:text-soft-sand transition-colors" href="mailto:contact@beaconlandholdings.com">
                  contact@beaconlandholdings.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
