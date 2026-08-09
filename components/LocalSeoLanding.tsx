import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import BreadcrumbJsonLd from "./BreadcrumbJsonLd";
import ServiceJsonLd from "./ServiceJsonLd";
import ContactForm from "./ContactForm";

type FaqItem = {
  q: string;
  a: string;
};

type RelatedService = {
  title: string;
  text: string;
  href: string;
};

type LocalSeoLandingProps = {
  breadcrumbName: string;
  path: string;
  serviceName: string;
  serviceType: string;
  serviceDescription: string;
  badge: string;
  h1Top: string;
  h1Highlight: string;
  h1Bottom: string;
  intro: string;
  image: string;
  imageAlt: string;
  sectionKicker: string;
  sectionTitle: string;
  sectionText: string;
  benefits: string[];
  steps: {
    title: string;
    text: string;
  }[];
  relatedServices: RelatedService[];
  faqs: FaqItem[];
};

const phone = "0162 900 75 65";
const phoneHref = "tel:+491629007565";

function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function LocalSeoLanding({
  breadcrumbName,
  path,
  serviceName,
  serviceType,
  serviceDescription,
  badge,
  h1Top,
  h1Highlight,
  h1Bottom,
  intro,
  image,
  imageAlt,
  sectionKicker,
  sectionTitle,
  sectionText,
  benefits,
  steps,
  relatedServices,
  faqs,
}: LocalSeoLandingProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafaf7] text-[#18181b]">
      <Header />

      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: breadcrumbName, path },
        ]}
      />

      <ServiceJsonLd
        name={serviceName}
        description={serviceDescription}
        path={path}
        serviceType={serviceType}
      />

      <FaqJsonLd faqs={faqs} />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf7]/98 via-[#fafaf7]/90 to-[#fafaf7]/40 sm:to-[#fafaf7]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf7] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.15),transparent_35%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#f6c21a] bg-[#f6c21a]/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#b28a00] sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f6c21a]" />
              </span>
              {badge}
            </div>

            <h1 className="text-[2.5rem] font-black leading-[1.02] tracking-tight text-[#18181b] min-[390px]:text-[2.85rem] sm:text-6xl md:text-7xl lg:text-8xl">
              {h1Top}
              <span className="gradient-text block">{h1Highlight}</span>
              {h1Bottom}
            </h1>

            <p className="mt-5 max-w-2xl text-[16px] leading-7 text-black/75 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
              {intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#anfrage-formular"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black shadow-lg"
              >
                Kostenlos anfragen
              </a>

              <a
                href={phoneHref}
                className="rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10"
              >
                Direkt anrufen: {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-[#ffffff] px-5 py-20 text-black lg:px-8 border-t border-black/5">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              {sectionKicker}
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
              {sectionTitle}
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              {sectionText}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-3xl border border-black/5 bg-[#fafaf7] p-5 shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] font-black text-black">
                    ✓
                  </span>
                  <p className="font-black text-[#18181b]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl border border-black/5">
            <div className="relative h-[480px]">
              <Image src={image} alt={imageAlt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.7rem] border border-white/10 bg-black/50 p-6 text-white backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  Persönlich geplant. Sauber umgesetzt.
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Umzüge LAF unterstützt Kunden in Landshut und Umgebung mit
                  klarer Abstimmung, zuverlässigem Team und fairer Planung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative bg-[#fafaf7] px-5 py-20 lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
            Ablauf
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
            So läuft die Zusammenarbeit mit Umzüge LAF ab.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-black text-[#18181b]">{step.title}</h3>
                <p className="mt-3 leading-7 text-black/60">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="relative bg-[#ffffff] px-5 py-20 text-black lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
            Weitere Leistungen
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
            Passende Leistungen rund um Umzug und Entrümpelung.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-[2rem] border border-black/5 bg-[#fafaf7] p-7 shadow-sm transition duration-300 hover:shadow-md"
              >
                <h3 className="text-2xl font-black text-[#18181b]">{service.title}</h3>
                <p className="mt-3 leading-7 text-black/60">{service.text}</p>
                <p className="mt-6 font-black text-[#b28a00]">Mehr erfahren →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Form Section */}
      <section className="relative bg-[#fafaf7] px-5 py-20 lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
            Häufige Fragen
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#18181b] md:text-5xl lg:text-6xl">
            Fragen zu {breadcrumbName}.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-black text-[#18181b]">{item.q}</h3>
                <p className="mt-3 leading-7 text-black/60">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-black text-[#18181b]">Umzug in Landshut geplant?</h2>
              <p className="mt-4 leading-7 text-black/60">
                Senden Sie uns Ihre Anfrage oder rufen Sie direkt an. Wir klären
                Umfang, Termin und Ablauf persönlich mit Ihnen.
              </p>
              
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href={phoneHref}
                  className="glow-button rounded-full px-8 py-4 text-center font-black text-black shadow-lg"
                >
                  Direkt anrufen: {phone}
                </a>

                <a
                  href={`mailto:info@umzuege-laf.de`}
                  className="rounded-full border border-black/15 bg-white px-8 py-4 text-center font-black text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10"
                >
                  E-Mail schreiben
                </a>
              </div>
            </div>

            <div id="anfrage-formular" className="scroll-mt-24">
              <div className="mb-5">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b28a00]">
                  Direktanfrage
                </p>
                <h3 className="mt-2 text-2xl font-black text-[#18181b]">
                  Kostenloses Angebot anfordern
                </h3>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
