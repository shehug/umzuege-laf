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
      <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
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

        <div className="relative mx-auto flex min-h-[45vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f6c21a] bg-[#f6c21a]/10 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-[#b28a00] sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6c21a] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f6c21a] sm:h-2.5 sm:w-2.5" />
              </span>
              {badge}
            </div>

            <h1 className="text-[2.2rem] font-black leading-[1.12] tracking-tight text-[#18181b] min-[380px]:text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl">
              {h1Top}
              <span className="gradient-text block">{h1Highlight}</span>
              {h1Bottom}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-black/75 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
              {intro}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <a
                href="#anfrage-formular"
                className="glow-button rounded-full px-6 py-3.5 text-center text-sm font-black text-black shadow-md sm:px-8 sm:py-4 sm:text-base"
              >
                Kostenlos anfragen
              </a>

              <a
                href={phoneHref}
                className="rounded-full border border-black/15 bg-white px-6 py-3.5 text-center text-sm font-black text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10 sm:px-8 sm:py-4 sm:text-base"
              >
                Direkt anrufen: {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-[#ffffff] px-4 py-14 text-black sm:px-6 sm:py-20 lg:px-8 border-t border-black/5">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b28a00] sm:text-sm sm:tracking-[0.25em]">
              {sectionKicker}
            </p>

            <h2 className="mt-3 text-2xl font-black tracking-tight text-[#18181b] sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
              {sectionTitle}
            </h2>

            <p className="mt-4 text-base leading-7 text-black/60 sm:mt-6 sm:text-lg sm:leading-8">
              {sectionText}
            </p>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3.5 rounded-2xl border border-black/5 bg-[#fafaf7] p-4 shadow-sm sm:rounded-3xl sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f6c21a] text-sm font-black text-black sm:h-11 sm:w-11 sm:rounded-2xl">
                    ✓
                  </span>
                  <p className="text-sm font-black text-[#18181b] sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-black/5 sm:rounded-[2.2rem] sm:shadow-xl">
            <div className="relative h-[360px] sm:h-[480px]">
              <Image src={image} alt={imageAlt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-black/55 p-4 text-white backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-[1.7rem] sm:p-6">
                <h3 className="text-lg font-black sm:text-2xl">
                  Persönlich geplant. Sauber umgesetzt.
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-white/80 sm:mt-2 sm:text-sm sm:leading-6">
                  Umzüge LAF unterstützt Kunden in Landshut und Umgebung mit
                  klarer Abstimmung, zuverlässigem Team und fairer Planung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative bg-[#fafaf7] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b28a00] sm:text-sm sm:tracking-[0.25em]">
            Ablauf
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#18181b] sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
            So läuft die Zusammenarbeit mit Umzüge LAF ab.
          </h2>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition duration-300 sm:rounded-[2rem] sm:p-6"
              >
                <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f6c21a] text-lg font-black text-black sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black text-[#18181b] sm:text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60 sm:mt-3 sm:text-base sm:leading-7">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="relative bg-[#ffffff] px-4 py-14 text-black sm:px-6 sm:py-20 lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b28a00] sm:text-sm sm:tracking-[0.25em]">
            Weitere Leistungen
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#18181b] sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Passende Leistungen rund um Umzug und Entrümpelung.
          </h2>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-2xl border border-black/5 bg-[#fafaf7] p-5 shadow-sm transition duration-300 hover:shadow-md sm:rounded-[2rem] sm:p-7"
              >
                <h3 className="text-xl font-black text-[#18181b] sm:text-2xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60 sm:mt-3 sm:text-base sm:leading-7">{service.text}</p>
                <p className="mt-4 text-sm font-black text-[#b28a00] sm:mt-6 sm:text-base">Mehr erfahren →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Form Section */}
      <section className="relative bg-[#fafaf7] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b28a00] sm:text-sm sm:tracking-[0.25em]">
            Häufige Fragen
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#18181b] sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Fragen zu {breadcrumbName}.
          </h2>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-7"
              >
                <h3 className="text-lg font-black text-[#18181b] sm:text-xl">{item.q}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60 sm:mt-3 sm:text-base sm:leading-7">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-black text-[#18181b] sm:text-3xl">Umzug in Landshut geplant?</h2>
              <p className="mt-3 text-sm leading-6 text-black/60 sm:mt-4 sm:text-base sm:leading-7">
                Senden Sie uns Ihre Anfrage oder rufen Sie direkt an. Wir klären
                Umfang, Termin und Ablauf persönlich mit Ihnen.
              </p>
              
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <a
                  href={phoneHref}
                  className="glow-button rounded-full px-6 py-3.5 text-center text-sm font-black text-black shadow-md sm:px-8 sm:py-4 sm:text-base"
                >
                  Direkt anrufen: {phone}
                </a>

                <a
                  href={`mailto:info@umzuege-laf.de`}
                  className="rounded-full border border-black/15 bg-white px-6 py-3.5 text-center text-sm font-black text-black shadow-sm transition hover:border-[#f6c21a] hover:bg-[#f6c21a]/10 sm:px-8 sm:py-4 sm:text-base"
                >
                  E-Mail schreiben
                </a>
              </div>
            </div>

            <div id="anfrage-formular" className="scroll-mt-24">
              <div className="mb-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b28a00] sm:text-sm">
                  Direktanfrage
                </p>
                <h3 className="mt-1 text-xl font-black text-[#18181b] sm:text-2xl">
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
