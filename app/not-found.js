import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="py-32 bg-soft-sand text-center">
        <div className="max-w-max-width mx-auto px-margin-mobile">
          <h1 className="font-headline-md text-headline-md text-primary mb-4">Page Not Found</h1>
          <p className="font-body-md text-on-surface-variant mb-8">
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link
            href="/"
            className="bg-deep-forest text-on-primary px-8 py-3.5 rounded font-label-caps text-label-caps hover:bg-primary transition-colors inline-block"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
