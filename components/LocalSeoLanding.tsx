import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import BreadcrumbJsonLd from "./BreadcrumbJsonLd";
import ServiceJsonLd from "./ServiceJsonLd";

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
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
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

      <section className="relative min-h-[88vh] overflow-hidden px-5 pb-20 pt-40 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/70 to-[#050505]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,26,0.25),transparent_35%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex rounded-full border border-[#f6c21a]/35 bg-[#f6c21a]/10 px-4 py-2 text-sm font-black text-[#f6c21a]">
              {badge}
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
              {h1Top}
              <span className="gradient-text block">{h1Highlight}</span>
              {h1Bottom}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              {intro}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="glow-button rounded-full px-8 py-4 text-center font-black text-black"
              >
                Kostenlos anfragen
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-white/20 bg-white/[0.05] px-8 py-4 text-center font-black text-white transition hover:border-[#f6c21a] hover:text-[#f6c21a]"
              >
                Direkt anrufen: {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f2] px-5 py-24 text-black lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
              {sectionKicker}
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              {sectionTitle}
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              {sectionText}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-3xl border border-black/10 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f6c21a] font-black text-black">
                    ✓
                  </span>
                  <p className="font-black">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
            <div className="relative h-[520px]">
              <Image src={image} alt={imageAlt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.7rem] border border-white/10 bg-black/55 p-6 backdrop-blur-xl">
                <h3 className="text-3xl font-black text-white">
                  Persönlich geplant. Sauber umgesetzt.
                </h3>
                <p className="mt-3 leading-7 text-white/65">
                  Umzüge LAF unterstützt Kunden in Landshut und Umgebung mit
                  klarer Abstimmung, zuverlässigem Team und fairer Planung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
            Ablauf
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
            So läuft die Zusammenarbeit mit Umzüge LAF ab.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6c21a] text-xl font-black text-black">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-black">{step.title}</h3>
                <p className="mt-4 leading-7 text-white/60">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f2] px-5 py-24 text-black lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-[#b28a00]">
            Weitere Leistungen
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
            Passende Leistungen rund um Umzug und Entrümpelung.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
              >
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-4 leading-7 text-black/60">{service.text}</p>
                <p className="mt-6 font-black text-[#b28a00]">Mehr erfahren →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-[#f6c21a]">
            Häufige Fragen
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
            Fragen zu {breadcrumbName}.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl"
              >
                <h3 className="text-xl font-black text-white">{item.q}</h3>
                <p className="mt-4 leading-7 text-white/60">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] bg-[#f6c21a] p-8 text-black">
            <h2 className="text-3xl font-black">Jetzt Anfrage stellen</h2>
            <p className="mt-4 max-w-2xl leading-7 text-black/70">
              Senden Sie uns Ihre Anfrage oder rufen Sie direkt an. Wir klären
              Umfang, Termin und Ablauf persönlich mit Ihnen.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="rounded-full bg-black px-7 py-4 text-center font-black text-white transition hover:bg-white hover:text-black"
              >
                Anfrage senden
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-black/20 px-7 py-4 text-center font-black text-black hover:bg-black hover:text-white"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
