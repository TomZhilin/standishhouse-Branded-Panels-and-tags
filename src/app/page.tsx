'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Standish House — single-file landing page (v3.1)
// Clean drop-in replacement for src/app/page.tsx
// Includes: required message field, honeypot bot trap, anchor scroll fix, no duplicate components

const CONTACT_EMAIL = "tom@standishhouse.com";

export default function StandishHouseLanding() {
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [request, setRequest] = useState("");
  // Honeypot (bot trap)
  const [bot, setBot] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // If honeypot has any value, silently drop submission
    if (bot && bot.trim().length > 0) return;
    const subject = `Mockup Request: ${company || "(No company)"} — ${name || "(No name)"}`;
    const body = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nRequest:\n${request}`;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-neutral-900 text-white grid place-items-center font-semibold">SH</div>
            <div>
              <div className="font-semibold leading-tight">Standish House</div>
              <div className="text-xs text-neutral-500">Branded Panels & Tags · Illinois</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-neutral-600">Why Us</a>
            <a href="#gallery" className="hover:text-neutral-600">Gallery</a>
            <a href="#specs" className="hover:text-neutral-600">Specs</a>
            <a href="#faq" className="hover:text-neutral-600">FAQ</a>
          </nav>
          <a href="#quote"><Button className="rounded-2xl">Request a Mockup</Button></a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Branded <span className="text-neutral-700">Blanking Panels</span> & <span className="text-neutral-700">Aluminum Tags</span>
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">
              Full‑color, scratch/chemical‑resistant printing. Made locally in Illinois. No minimums. Fast digital proofs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge icon={<ShieldCheck className="h-4 w-4" />} text="Durable UV inks" />
              <Badge icon={<Sparkles className="h-4 w-4" />} text="Professional finish" />
              <Badge icon={<Truck className="h-4 w-4" />} text="Quick turnaround" />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quote"><Button size="lg" className="rounded-2xl">Request a Mockup</Button></a>
              <a href="#gallery"><Button variant="secondary" size="lg" className="rounded-2xl">See Examples</Button></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-0 overflow-hidden">
                <img
                  src="/photos/IMG_0691.JPEG"
                  alt="Hero Image · Angled Panel with Gold & Silver Tags · Premium Finish"
                  className="w-full h-full object-cover max-h-[440px]"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section id="features" className="bg-white border-t border-neutral-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Why Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Feature title="Local & Personal" desc="Printed and finished in Harvard, Illinois by a small, engineer‑led shop. Direct communication, no offshore delays." />
            <Feature title="Built for Integrators" desc="Designed with AV, cabling, and electrical pros in mind. Professional‑grade look that installs cleanly." />
            <Feature title="Flexible Ordering" desc="Order 1 or 100. We’ll keep your artwork on file so repeat jobs stay consistent." />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-neutral-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Recent Work & Mockups</h2>
            <span className="text-sm text-neutral-500">Swap in your real photos anytime</span>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Figure src="/photos/IMG_0693.JPEG" alt="Stacked Zeus panels with gold and silver tags" caption="Showcase · Matching Gold & Silver Panels" />
            <Figure src="/photos/IMG_0712.JPEG" alt="Gold aluminum tag close-up on panel" caption="Brushed Gold Finish · Crisp Print Detail" />
            <Figure src="/photos/IMG_0713.JPEG" alt="Silver aluminum tag close-up on panel" caption="Brushed Silver Finish · Durable UV Ink" />
            <Figure src="/photos/IMG_0714.JPEG" alt="Zeus Systems panel straight-on" caption="Full Panel Branding · Clean Rack Presentation" />
            <Figure src="/photos/IMG_0698.JPEG" alt="Cyberdyne gold tag boardroom HDMI input" caption="Corporate Branding · Boardroom Gold Tag" />
            <Figure src="/photos/IMG_0699.JPEG" alt="AMP Closet silver tag functional label" caption="Functional Labeling · Electrical Closet ID" />
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="bg-white border-t border-neutral-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold">Specifications</h3>
            <ul className="mt-4 space-y-3 text-neutral-700">
              <li className="flex gap-3"><CheckCircle className="h-5 w-5 text-neutral-700 mt-0.5" /> <span><strong>Steel Blanking Panels:</strong> 19-inch wide, standard rack widths in 1U–4U. Larger sizes can be made on request. Matte black base with full‑color UV print.</span></li>
              <li className="flex gap-3"><CheckCircle className="h-5 w-5 text-neutral-700 mt-0.5" /> <span><strong>Aluminum Tags:</strong> Brushed gold or silver, adhesive‑backed only with industrial‑strength German tesa® tape. Available in 1.5×3 in. and 1×3 in. sizes.</span></li>
              <li className="flex gap-3"><CheckCircle className="h-5 w-5 text-neutral-700 mt-0.5" /> <span><strong>Durability:</strong> UV printing with scratch‑ and chemical‑resistant inks, built for service environments.</span></li>
              <li className="flex gap-3"><CheckCircle className="h-5 w-5 text-neutral-700 mt-0.5" /> <span><strong>Reordering:</strong> Easy repeat orders for consistent branding across projects.</span></li>
            </ul>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Perfect for</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3 text-neutral-700">
              <Pill>AV & low‑voltage integrators</Pill>
              <Pill>Structured cabling</Pill>
              <Pill>IT closets & MDF/IDF</Pill>
              <Pill>Boardrooms & conference rooms</Pill>
              <Pill>Electrical contractors</Pill>
              <Pill>Manufacturers/equipment ID</Pill>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quote / Mockup form */}
      <section id="quote" className="bg-neutral-50 border-t border-neutral-200 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Request a Free Mockup</CardTitle>
            </CardHeader>
            <CardContent>
              {!submitted ? (
                <form className="grid md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                  {/* Honeypot field (hidden from users) */}
                  <div className="hidden" aria-hidden="true">
                    <label>Leave this field empty</label>
                    <input type="text" value={bot} onChange={(e) => setBot(e.target.value)} autoComplete="off" tabIndex={-1} />
                  </div>

                  <div className="md:col-span-1">
                    <label className="text-sm text-neutral-600">Name</label>
                    <Input required placeholder="Jane Doe" className="rounded-2xl mt-1" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="md:col-span-1">
                    <label className="text-sm text-neutral-600">Company</label>
                    <Input required placeholder="ACME Integrators" className="rounded-2xl mt-1" value={company} onChange={(e) => setCompany(e.target.value)} />
                  </div>
                  <div className="md:col-span-1">
                    <label className="text-sm text-neutral-600">Email</label>
                    <Input type="email" required placeholder="you@company.com" className="rounded-2xl mt-1" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="md:col-span-1">
                    <label className="text-sm text-neutral-600">Phone (optional)</label>
                    <Input placeholder="(555) 123‑4567" className="rounded-2xl mt-1" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-neutral-600">What would you like mocked up?</label>
                    <Textarea placeholder="e.g., 1U panel with logo + support info; 2x aluminum tags in gold" className="rounded-2xl mt-1" rows={4} required value={request} onChange={(e) => setRequest(e.target.value)} />
                  </div>
                  <div className="md:col-span-2 flex items-center justify-between">
                    <div className="text-sm text-neutral-500 flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> No minimum order · Digital proof included</div>
                    <Button type="submit" className="rounded-2xl">Send Request</Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto h-12 w-12 rounded-2xl bg-neutral-900 text-white grid place-items-center mb-3"><Mail className="h-6 w-6" /></div>
                  <h4 className="text-xl font-semibold">Thanks! Your mockup request is in.</h4>
                  <p className="text-neutral-600 mt-2">We just opened your email client to send details to <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>. If it didn’t open, email us directly.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white border-t border-neutral-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-2xl font-semibold">FAQ</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <FaqItem q="Do you have minimum order quantities?" a="No. You can order one piece or one hundred. We keep your art on file for easy reorders." />
            <FaqItem q="How durable is the print?" a="We use UV‑cured inks that resist scratches and chemicals/solvents — built for job sites." />
            <FaqItem q="Can I see a photo before ordering?" a="Yes. Ask for a quick photo or mockup and we’ll send one before production." />
            <FaqItem q="What’s the typical turnaround time?" a="Most proofs are ready in 24–48 hours; production begins after approval." />
            <FaqItem q="Will the tags stay in place?" a="Yes. Tags are backed with industrial‑strength German tesa® tape, chosen for long‑term adhesion on racks and equipment surfaces." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold">Standish House</div>
            <p className="text-sm text-neutral-400 mt-2">Branded blanking panels and aluminum tags. Printed in Illinois.</p>
          </div>
          <div className="text-sm space-y-2">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> {CONTACT_EMAIL}</div>
          </div>
          <div className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Standish House. All rights reserved.
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 pb-8 text-xs text-neutral-500">
          Made in Illinois · No minimum order · Digital proofing
        </div>
      </footer>

      {/* JSON-LD for SEO (can tweak later) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Standish House",
            url: "https://standishhouse.com",
            description:
              "Branded blanking panels and aluminum tags. Full-color, scratch/chemical resistant, made in Illinois with no minimums.",
            address: { "@type": "PostalAddress", addressRegion: "IL", addressCountry: "US" },
            email: CONTACT_EMAIL,
            areaServed: "Illinois",
            sameAs: []
          }),
        }}
      />
    </div>
  );
}

// ========== Helper components ==========
function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-neutral-600 mt-2 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <img src={src} alt={alt} className="aspect-video w-full object-cover" />
      <figcaption className="p-3 text-sm text-neutral-600">{caption}</figcaption>
    </figure>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-sm w-fit">{children}</div>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-sm shadow-sm">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
      <div className="font-medium text-neutral-900">{q}</div>
      <div className="mt-2 text-neutral-700 text-sm leading-relaxed">{a}</div>
    </div>
  );
}
