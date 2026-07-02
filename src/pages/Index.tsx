import { useEffect, useRef } from "react";
import { ArrowUpRight, Sparkles, Megaphone, Rocket, Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import heroSubject from "@/assets/hero-subject.jpg";
import heroOrb from "@/assets/hero-orb.jpg";
import heroDetail from "@/assets/hero-detail.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import texture from "@/assets/texture.jpg";

const services = [
  { icon: Megaphone, title: "Brand Media", desc: "Editorial campaigns, content systems and visuals that move culture." },
  { icon: Sparkles, title: "Creative Marketing", desc: "Story-led strategy that turns attention into devotion." },
  { icon: Rocket, title: "Momentum", desc: "Launch engines that compound — from teaser to sold out." },
];

const works = [
  { src: work3, title: "Maison Velour", tag: "Fashion · Campaign" },
  { src: work2, title: "Camée Parfum", tag: "Beauty · Launch" },
  { src: work1, title: "Liquid Gold", tag: "Art Direction" },
  { src: work4, title: "Studio Noir", tag: "Editorial" },
];

const testimonials = [
  { quote: "Buzz Culture rebuilt our brand from the inside out. The launch was electric.", author: "Amelia Carter", role: "Founder, Maison Velour" },
  { quote: "Effortless taste, surgical strategy. They moved us from noise to icon.", author: "Idris Vale", role: "CMO, Camée" },
  { quote: "Every frame, every word, on-brand. The momentum is real.", author: "Noor Rahimi", role: "Creative Director" },
];

const Index = () => {
  useReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const y = window.scrollY;
      heroRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1 + y * 0.0004})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/40 border-b border-border/40">
        <div className="container flex items-center justify-between py-5">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Buzz Culture" className="h-9 w-9 rounded-md object-cover" />
            <span className="font-display text-lg tracking-tight">Buzz Culture</span>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
            {["Work", "Services", "Studio", "Journal"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-full">
                {l}
              </a>
            ))}
          </nav>
          <Button variant="outline" className="rounded-full border-foreground/20 hover:bg-foreground hover:text-background transition-all">
            Let's talk <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center pt-28 pb-16 overflow-hidden">
        {/* Parallax background layer */}
        <div ref={heroRef} className="absolute inset-0 -z-10 will-change-transform">
          <div className="absolute inset-0 bg-gradient-hero" />
          <img src={heroOrb} alt="" className="absolute -right-32 -top-32 h-[120%] w-[70%] object-cover opacity-30 mix-blend-screen [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
          <div className="absolute inset-0 bg-grain opacity-60" />
        </div>

        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-7 relative z-10">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground animate-fade-in">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-float" />
                Media · Marketing · Momentum
              </p>

              <h1 className="font-display text-[clamp(2.5rem,7.5vw,7rem)] leading-[1] tracking-tight text-balance">
                <span className="block overflow-hidden">
                  <span className="inline-block animate-fade-up [animation-delay:200ms]">
                    We build <span className="italic  ">brands</span>
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="inline-block animate-fade-up [animation-delay:450ms]">
                    the world <em className="italic text-primary-foreground/80">remembers.</em>
                  </span>
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground animate-fade-up [animation-delay:700ms]">
                A creative studio crafting cinematic identity, content and momentum for the next generation of cultural brands.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5 animate-fade-up [animation-delay:900ms]">
                <Button size="lg" className="group h-14 rounded-full bg-gradient-mehron px-8 text-base shadow-glow hover:shadow-glow hover:scale-[1.03] transition-all duration-500 ease-smooth">
                  Start a project
                  <ArrowUpRight className="ml-1 h-5 w-5 transition-transform group-hover:rotate-45" />
                </Button>
                <a href="#work" className="text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
                  View our work →
                </a>
              </div>
            </div>

            {/* Right: layered photo collage */}
            <div className="lg:col-span-5 relative h-[420px] md:h-[520px] lg:h-[600px]">
              <div className="absolute top-0 right-0 w-[68%] h-[62%] rounded-2xl overflow-hidden shadow-elegant clip-reveal float-a" style={{ animationDelay: "0.4s, 1.6s" }}>
                <img src={heroSubject} alt="Brand subject" className="h-full w-full object-cover ken-burns" />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-[58%] h-[50%] rounded-2xl overflow-hidden shadow-elegant clip-reveal float-b" style={{ animationDelay: "0.7s, 1.9s" }}>
                <img src={heroDetail} alt="Brand detail" className="h-full w-full object-cover ken-burns" />
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/30 via-transparent to-transparent mix-blend-overlay" />
              </div>
              <div className="absolute top-[38%] left-[34%] w-[34%] h-[28%] rounded-xl overflow-hidden border border-foreground/10 shadow-elegant clip-reveal float-c z-10" style={{ animationDelay: "1s, 2.2s" }}>
                <img src={hero} alt="" className="h-full w-full object-cover ken-burns" />
              </div>
              <div className="absolute -bottom-4 right-4 w-[28%] h-[24%] rounded-full overflow-hidden shadow-glow clip-reveal float-d" style={{ animationDelay: "1.2s, 2.4s" }}>
                <img src={heroOrb} alt="" className="h-full w-full object-cover ken-burns" />
              </div>
              <div className="absolute top-4 left-2 rounded-full border border-foreground/15 bg-background/60 backdrop-blur-md px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground animate-fade-up [animation-delay:1.4s] float-c">
                Est. 2019 · Global
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/40 pt-8 reveal">
            {[["120+", "Brands launched"], ["50M", "Impressions delivered"], ["14", "Industry awards"], ["98%", "Client retention"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-4xl md:text-5xl text-gradient">{n}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="relative overflow-hidden border-y border-border/40 py-8 bg-secondary/30">
        <div className="marquee-track flex whitespace-nowrap gap-16 font-display text-3xl md:text-5xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-16">
              {["Brand", "Identity", "Content", "Campaign", "Momentum", "Story", "Design"].map((w) => (
                <span key={w} className="flex items-center gap-16 text-muted-foreground">
                  {w}
                  <Star className="h-5 w-5 text-primary-glow" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-20 md:mt-10">
        <div className="container">
          <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-16 items-end mb-20">
            <div className="reveal">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">— Capabilities</p>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
                A studio built for <em className="italic ">cultural</em> velocity.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground reveal">
              We pair editorial craft with performance discipline — every output is engineered to look beautiful and to move the number.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="group reveal relative overflow-hidden rounded-2xl border border-border/60 bg-card p-10 transition-all duration-700 ease-smooth hover:-translate-y-2 hover:border-primary-glow/60 hover:shadow-glow" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-mehron" />
                <s.icon className="h-10 w-10 text-primary-glow transition-transform duration-700 group-hover:scale-110 group-hover:text-accent" strokeWidth={1.25} />
                <h3 className="mt-10 font-display text-3xl">{s.title}</h3>
                <p className="mt-10 text-muted-foreground group-hover:text-accent/90 transition-colors">{s.desc}</p>
                <div className="mt-10 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground group-hover:text-accent">
                  <span>0{i + 1}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative py-10 md:py-10">
        <img src={texture} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 -z-10" />
        <div className="container">
          <div className="flex items-end justify-between mb-16 reveal">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">— Selected work</p>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">Recent <em className="italic text-gradient">obsessions.</em></h2>
            </div>
            <a href="#" className="hidden md:inline-flex text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground">All projects →</a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {works.map((w, i) => (
              <a key={w.title} href="#" className={`group reveal relative block overflow-hidden rounded-2xl bg-secondary ${i % 3 === 0 ? "md:mt-20" : ""}`}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={w.src} alt={w.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-smooth group-hover:scale-[1.06]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
                <div className="absolute inset-x-0 bottom-0 p-8 flex items-end justify-between translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{w.tag}</p>
                    <h3 className="mt-2 font-display text-3xl md:text-4xl">{w.title}</h3>
                  </div>
                  <div className="rounded-full border border-foreground/30 p-3 backdrop-blur-sm transition-all group-hover:bg-foreground group-hover:text-background group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="studio" className="relative py-20 mt-10">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative reveal">
            <img src={hero} alt="Studio" loading="lazy" className="rounded-2xl shadow-elegant" />
            <div className="absolute -bottom-8 -right-8 hidden md:block rounded-2xl border border-border bg-card p-6 shadow-elegant w-64">
              <p className="font-display text-3xl text-gradient">Est. 2019</p>
              <p className="mt-2 text-sm text-muted-foreground">A studio of strategists, designers, and storytellers.</p>
            </div>
          </div>
          <div className="reveal">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">— The studio</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.02]">
              We treat <em className="italic text-gradient">brands</em> like cinema. <br />Every frame intentional.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground">
              Our team operates at the intersection of art direction and growth. From identity to launch film, we create the artifacts that turn audiences into believers.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8">
              {[["Strategy", "Positioning · Naming · Voice"], ["Identity", "Logo · System · Guidelines"], ["Content", "Photo · Film · Editorial"], ["Growth", "Paid · Organic · Lifecycle"]].map(([t, d]) => (
                <div key={t} className="border-t border-border/60 pt-4">
                  <h4 className="font-display text-xl">{t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="relative py-20  md:mt-10 overflow-hidden">
        <img src={texture} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="container">
          <div className="max-w-3xl mb-20 reveal">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">— The process</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              From whisper to <em className="italic text-gradient">wildfire.</em>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-primary-glow/40 to-transparent hidden md:block" />
            <div className="grid md:grid-cols-4 gap-10">
              {[
                { n: "01", t: "Discover", d: "Audit, immersion, audience truth.", img: heroDetail },
                { n: "02", t: "Define", d: "Positioning, narrative, identity.", img: work2 },
                { n: "03", t: "Design", d: "Systems, content, art direction.", img: heroSubject },
                { n: "04", t: "Deploy", d: "Launch film, paid, lifecycle.", img: heroOrb },
              ].map((s, i) => (
                <div key={s.n} className="reveal group" style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className="relative mb-6 flex items-center gap-4">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-background border border-primary-glow/40 font-display text-sm">
                      {s.n}
                    </span>
                    <span className="h-px flex-1 bg-border/60 md:hidden" />
                  </div>
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 mb-5">
                    <img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-smooth group-hover:scale-[1.06]" />
                  </div>
                  <h3 className="font-display text-2xl">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Manifesto — split image collage with bold type */}
      <section className="relative py-20  mt-10 overflow-hidden border-y border-border/40">
        <div className="container grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative h-[480px] reveal">
            <div className="absolute top-0 left-0 w-[70%] h-[55%] rounded-2xl overflow-hidden shadow-elegant float-a">
              <img src={work3} alt="" loading="lazy" className="h-full w-full object-cover ken-burns" />
            </div>
            <div className="absolute bottom-0 right-0 w-[60%] h-[55%] rounded-2xl overflow-hidden shadow-elegant float-b">
              <img src={work4} alt="" loading="lazy" className="h-full w-full object-cover ken-burns" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-overlay" />
            </div>
            <div className="absolute top-[42%] left-[42%] w-24 h-24 rounded-full overflow-hidden border border-foreground/10 shadow-glow float-c z-10">
              <img src={heroOrb} alt="" loading="lazy" className="h-full w-full object-cover ken-burns" />
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">— Manifesto</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Beautiful work that <em className="italic ">moves the number.</em>
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6 text-muted-foreground">
              {[
                "Taste is a strategy.",
                "Restraint over noise.",
                "Every frame earns its place.",
                "Story compounds attention.",
                "Craft is the unfair advantage.",
                "Momentum is a system, not a moment.",
              ].map((line, i) => (
                <div key={i} className="flex gap-3 border-t border-border/60 pt-4">
                  <span className="font-display text-sm text-primary-glow">0{i + 1}</span>
                  <p className="text-foreground/90">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-10 mt-10 border-y border-border/40 bg-secondary/20">
        <div className="container">
          <p className="mb-16 text-xs uppercase tracking-[0.3em] text-muted-foreground reveal">— Trusted by</p>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <figure key={i} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary-glow text-primary-glow" />
                  ))}
                </div>
                <blockquote className="font-display text-2xl leading-snug text-balance">"{t.quote}"</blockquote>
                <figcaption className="mt-8 text-sm">
                  <div className="text-foreground">{t.author}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-mehron opacity-30" />
        <div className="absolute inset-0 -z-10 bg-grain" />
        <div className="container text-center reveal">
          <h2 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight">
            Let's make <em className="italic text-gradient">noise.</em>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            Booking a limited slate of brand partners for the next quarter. Tell us what you're building.
          </p>
          <Button size="lg" className="mt-12 h-16 rounded-full bg-foreground text-background hover:bg-accent px-10 text-base hover:scale-[1.03] transition-all duration-500 ease-smooth">
            Start the conversation
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-7 w-7 rounded object-cover" />
            <span>© {new Date().getFullYear()} Buzz Culture. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
