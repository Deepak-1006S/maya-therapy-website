"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const sections = [
    { id: "about", label: "About" },
    { id: "who-i-work-with", label: "Who I Work With" },
    { id: "services", label: "Therapy Services" },
    { id: "expertise", label: "Expertise" },
    { id: "how-i-work", label: "How I Work" },
    { id: "office", label: "Our Office" },
    { id: "contact", label: "Contact" },
  ];

  const faqs = [
    {
      question: "Do you offer in-person therapy?",
      answer:
        "Yes. Dr. Maya Reynolds offers in-person therapy from her Santa Monica office.",
    },
    {
      question: "Do you offer telehealth?",
      answer:
        "Yes. Secure telehealth sessions are available for clients located in California.",
    },
    {
      question: "Who do you work with?",
      answer:
        "Dr. Maya works with adults, including high-achieving professionals, entrepreneurs, creatives, and adults navigating anxiety, panic, trauma, burnout, perfectionism, and the effects of past experiences.",
    },
    {
      question: "What therapeutic approaches do you use?",
      answer:
        "Dr. Maya integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques depending on the client's needs.",
    },
    {
      question: "What can I expect from your approach?",
      answer:
        "Her approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive while leaving room for reflection and depth, with an emphasis on safety, stabilization, insight, and sustainable growth.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-ivory">
      {/* ========== NAVBAR ========== */}
      <nav className="sticky top-0 z-50 w-full bg-ivory border-b border-charcoal/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-7 md:py-6 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-xl md:text-lg font-playfair font-400 text-charcoal tracking-tight">
              Dr. Maya Reynolds
            </h2>
            <p className="text-xs text-sage tracking-[0.15em] uppercase font-600 mt-1">
              PsyD · Licensed Clinical Psychologist
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-14">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-xs text-charcoal hover:text-sage transition-colors duration-200 relative group uppercase tracking-wide font-500"
              >
                {section.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-sage transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-charcoal/10 py-6 px-6 bg-white">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block py-3 text-base text-charcoal hover:text-sage transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ========== HERO ========== */}
      <section className="w-full px-6 md:px-12 py-20 md:py-56 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-end">
            {/* Right: Image First on Mobile, Second on Desktop */}
            <div className="md:col-span-5 order-first md:order-last">
              <div className="w-full aspect-[3/4] bg-cream border border-charcoal/10 overflow-hidden">
                <div className="w-full h-full relative group">
                  <Image
                    src="/images/maya.jpg"
                    alt="Dr. Maya Reynolds"
                    fill
                    quality={100}
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500 motion-safe:ease-in-out z-0"
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Left: Text */}
            <div className="md:col-span-7 order-last md:order-first flex flex-col gap-8 md:gap-12">
              <div>
                <p className="text-xs md:text-sm text-sage uppercase tracking-[0.25em] font-600 mb-6">
                  Therapy in Santa Monica & Across California
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-400 text-charcoal leading-[1.1] tracking-tight">
                  A calmer place to understand yourself and begin to heal.
                </h1>
              </div>
              <p className="text-base sm:text-lg md:text-lg text-charcoal/70 leading-[1.8] max-w-2xl font-300">
                Warm, collaborative therapy for adults navigating anxiety, trauma, burnout, perfectionism, and the lasting effects of difficult experiences.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-block px-8 md:px-10 py-4 bg-sage text-ivory font-dm-sans font-500 text-sm md:text-base hover:bg-dark-sage transition-colors duration-300 tracking-wide"
                >
                  SCHEDULE A FREE CONSULTATION
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section id="about" className="w-full px-6 md:px-12 py-20 md:py-40 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            {/* Left: Image */}
            <div className="md:col-span-4">
              <div className="w-full aspect-[3/4] bg-cream border border-charcoal/10 overflow-hidden sticky top-32">
                <div className="w-full h-full relative group">
                  <Image
                    src="/images/maya.jpg"
                    alt="Dr. Maya Reynolds, PsyD"
                    fill
                    quality={100}
                    className="object-cover group-hover:scale-[1.01] transition-transform duration-500 z-0"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right: Detailed Text Content */}
            <div className="md:col-span-8 flex flex-col gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-400 text-charcoal mb-4 leading-tight">
                  About Dr. Maya Reynolds, PsyD
                </h2>
                <p className="text-base md:text-lg text-charcoal/75 leading-[1.8]">
                  I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                </p>
              </div>

              <div className="border-t border-charcoal/15 pt-8">
                <h3 className="text-sm font-playfair font-600 text-charcoal mb-3 uppercase tracking-wide">
                  What Brings People to Therapy
                </h3>
                <p className="text-base text-charcoal/70 leading-[1.8]">
                  My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling "functional" on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong.
                </p>
              </div>

              <div className="border-t border-charcoal/15 pt-8">
                <h3 className="text-sm font-playfair font-600 text-charcoal mb-3 uppercase tracking-wide">
                  My Approach
                </h3>
                <p className="text-base text-charcoal/70 leading-[1.8]">
                  I take a warm, collaborative, and grounded approach. I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of their experience.
                </p>
              </div>

              <div className="border-t border-charcoal/15 pt-8">
                <h3 className="text-sm font-playfair font-600 text-charcoal mb-3 uppercase tracking-wide">
                  Trauma & Burnout
                </h3>
                <p className="text-base text-charcoal/70 leading-[1.8]">
                  I work with adults who have experienced trauma with careful pacing and an emphasis on safety. I also support professionals, entrepreneurs, and creatives navigating burnout and perfectionism, helping them develop sustainable ways of living and working.
                </p>
              </div>

              <div className="bg-sage/8 border-l-4 border-sage p-6">
                <p className="text-base text-charcoal/75 leading-[1.8] italic">
                  I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is helping you develop insight, resilience, and a stronger relationship with yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHO I WORK WITH ========== */}
      <section id="who-i-work-with" className="w-full px-6 md:px-12 py-20 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-playfair font-400 text-charcoal leading-tight">
              Who I Work With
            </h2>
            <p className="text-lg md:text-xl text-sage mt-4 font-playfair font-400">
              You don't have to carry it alone.
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            {/* Item 1 */}
            <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="col-span-3 md:col-span-2">
                <p className="text-5xl md:text-6xl font-playfair font-300 text-sage/30">01</p>
              </div>
              <div className="col-span-9 md:col-span-10 border-t border-charcoal/15 pt-6">
                <h3 className="text-2xl md:text-3xl font-playfair font-400 text-charcoal mb-3">
                  Adults
                </h3>
                <p className="text-base md:text-lg text-charcoal/70 leading-[1.8]">
                  If you're navigating life's challenges and want support in understanding yourself better, therapy can provide clarity and tools for sustainable change.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="col-span-3 md:col-span-2">
                <p className="text-5xl md:text-6xl font-playfair font-300 text-sage/30">02</p>
              </div>
              <div className="col-span-9 md:col-span-10 border-t border-charcoal/15 pt-6">
                <h3 className="text-2xl md:text-3xl font-playfair font-400 text-charcoal mb-3">
                  High-Achieving Adults
                </h3>
                <p className="text-base md:text-lg text-charcoal/70 leading-[1.8]">
                  You may appear functional externally while struggling internally with perfectionism, burnout, or chronic stress. Therapy can help you reconnect and build more sustainable ways of living.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="col-span-3 md:col-span-2">
                <p className="text-5xl md:text-6xl font-playfair font-300 text-sage/30">03</p>
              </div>
              <div className="col-span-9 md:col-span-10 border-t border-charcoal/15 pt-6">
                <h3 className="text-2xl md:text-3xl font-playfair font-400 text-charcoal mb-3">
                  Adults Navigating Trauma
                </h3>
                <p className="text-base md:text-lg text-charcoal/70 leading-[1.8]">
                  Whether single-incident or complex trauma, therapy can be a safe space to process experiences and move toward greater regulation, safety, and resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== THERAPY SERVICES ========== */}
      <section id="services" className="w-full px-6 md:px-12 py-20 md:py-40 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <p className="text-xs text-sage uppercase tracking-[0.2em] font-600 mb-4">Therapy Services</p>
            <h2 className="text-3xl md:text-5xl font-playfair font-400 text-charcoal leading-tight">
              Support for what you’re carrying.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                number: "01",
                title: "Anxiety Therapy",
                description:
                  "Support for adults experiencing persistent worry, overthinking, panic, physical tension, difficulty sleeping, and feeling emotionally on edge. Incorporate CBT, mindfulness-based practices, and body-oriented techniques as appropriate.",
              },
              {
                number: "02",
                title: "Trauma Therapy",
                description:
                  "A carefully paced approach for adults navigating single-incident trauma, complex trauma, childhood experiences, relationship experiences, or the lasting effects of chronic stress. Emphasize safety, stabilization, and regulation.",
              },
              {
                number: "03",
                title: "Burnout & Perfectionism Therapy",
                description:
                  "Support for professionals, entrepreneurs, and creatives experiencing burnout, high internal pressure, perfectionism, and disconnection from themselves. Focus on slowing down, reconnecting, and developing more sustainable ways of living and working.",
              },
            ].map((service) => (
              <div
                key={service.number}
                className="border border-charcoal/15 bg-white p-7 md:p-8 flex flex-col gap-6"
              >
                <p className="text-xs text-sage uppercase tracking-[0.18em] font-600">{service.number} —</p>
                <h3 className="text-2xl md:text-[2rem] font-playfair font-400 text-charcoal leading-tight">
                  {service.title}
                </h3>
                <p className="text-base text-charcoal/70 leading-[1.8]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== AREAS OF EXPERTISE ========== */}
      <section id="expertise" className="w-full px-6 md:px-12 py-20 md:py-40 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-400 text-charcoal mb-16 md:mb-20">
            Areas of Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              { num: "01", name: "Anxiety" },
              { num: "02", name: "Panic" },
              { num: "03", name: "Trauma" },
              { num: "04", name: "Burnout" },
              { num: "05", name: "Perfectionism" },
              { num: "06", name: "Chronic Stress" },
              { num: "07", name: "Overthinking" },
              { num: "08", name: "Emotional Regulation" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-b border-r border-charcoal/12 md:border-r-0 md:even:border-r py-10 md:py-12 px-6 md:px-8 last:md:border-r-0 md:odd:border-r"
              >
                <p className="text-xs text-sage uppercase tracking-wider font-600 mb-3">
                  {item.num}
                </p>
                <h3 className="text-2xl md:text-2xl font-playfair font-400 text-charcoal">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW I WORK ========== */}
      <section id="how-i-work" className="w-full px-6 md:px-12 py-20 md:py-40 bg-dark-sage">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            {/* Left: Text & Principles */}
            <div className="md:col-span-6 flex flex-col gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-400 text-ivory mb-6 leading-tight">
                  How I Work
                </h2>
                <p className="text-lg font-playfair font-400 text-cream mb-6">
                  Warm, collaborative, and grounded.
                </p>
                <p className="text-base md:text-lg text-ivory/85 leading-[1.8]">
                  Sessions are structured enough to feel supportive while leaving space for reflection and depth. I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques to help you understand both the emotional and physiological sides of your experience.
                </p>
              </div>

              {/* Three Principles */}
              <div className="space-y-8">
                <div>
                  <p className="text-xs text-cream/60 uppercase tracking-wider font-600 mb-2">01</p>
                  <h3 className="text-xl font-playfair font-600 text-ivory mb-2">Safety</h3>
                  <p className="text-base text-ivory/80 leading-[1.7]">Creating an environment where you feel secure and respected.</p>
                </div>
                <div>
                  <p className="text-xs text-cream/60 uppercase tracking-wider font-600 mb-2">02</p>
                  <h3 className="text-xl font-playfair font-600 text-ivory mb-2">Collaboration</h3>
                  <p className="text-base text-ivory/80 leading-[1.7]">You're an active partner in understanding and shaping your healing.</p>
                </div>
                <div>
                  <p className="text-xs text-cream/60 uppercase tracking-wider font-600 mb-2">03</p>
                  <h3 className="text-xl font-playfair font-600 text-ivory mb-2">Depth</h3>
                  <p className="text-base text-ivory/80 leading-[1.7]">Moving beyond symptom relief toward genuine insight and resilience.</p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="md:col-span-6">
              <div className="w-full aspect-square bg-cream border border-charcoal/15 overflow-hidden">
                <div className="w-full h-full relative group">
                  <Image
                    src="/images/office-1.jpg"
                    alt="Therapy office interior"
                    fill
                    quality={100}
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500 z-0"
                    sizes="(max-width: 768px) 100vw, 45vw"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATEMENT SECTION ========== */}
      <section className="w-full px-6 md:px-12 py-32 md:py-56 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-center">
            {/* Left: Statement */}
            <div className="order-last md:order-first">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-400 text-charcoal leading-[1.2]">
                Honoring where you've been and helping shape where you're headed.
              </p>
            </div>

            {/* Right: Image */}
            <div className="order-first md:order-last">
              <div className="w-full aspect-square bg-cream border border-charcoal/15 overflow-hidden">
                <div className="w-full h-full relative group">
                  <Image
                    src="/images/office-2.jpg"
                    alt="Therapy office"
                    fill
                    quality={100}
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500 z-0"
                    sizes="(max-width: 768px) 100vw, 45vw"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MY SPECIALTIES ========== */}
      <section className="w-full px-6 md:px-12 py-20 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-400 text-charcoal mb-16 md:mb-20">
            My Specialties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {[
              { title: "Anxiety", desc: "Understanding and managing worry, panic, and hypervigilance with evidence-based techniques." },
              { title: "Trauma", desc: "Careful, paced work with single-incident and complex trauma in a safe, grounded environment." },
              { title: "Burnout", desc: "Support for professionals and creatives experiencing exhaustion and disconnection." },
              { title: "Perfectionism", desc: "Exploring high internal pressure and building more sustainable approaches to achievement." },
              { title: "EMDR", desc: "Eye Movement Desensitization and Reprocessing for trauma processing and nervous system healing." },
              { title: "Mindfulness & Body-Oriented Work", desc: "Grounding practices and somatic techniques for emotional regulation and resilience." },
            ].map((item, idx) => (
              <div key={idx} className="border-t border-charcoal/15 pt-8">
                <h3 className="text-2xl md:text-2xl font-playfair font-400 text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-charcoal/70 leading-[1.8]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OUR OFFICE ========== */}
      <section id="office" className="w-full px-6 md:px-12 py-20 md:py-40 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <p className="text-xs text-sage uppercase tracking-[0.2em] font-600 mb-3">Our Office</p>
            <h2 className="text-3xl md:text-4xl font-playfair font-400 text-charcoal">
              A quiet place to slow down.
            </h2>
          </div>

          {/* Asymmetric Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16 items-stretch">
            {/* Primary Image - 2 columns */}
            <div className="md:col-span-2">
              <div className="w-full aspect-[5/3] bg-cream border border-charcoal/10 overflow-hidden">
                <div className="w-full h-full relative group">
                  <Image
                    src="/images/office-1.jpg"
                    alt="Main therapy office space"
                    fill
                    quality={100}
                    className="object-cover group-hover:scale-[1.01] transition-transform duration-500 z-0"
                    priority
                    sizes="(max-width: 768px) 100vw, 60vw"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Secondary Image + Info - 1 column */}
            <div className="flex flex-col gap-6">
              <div className="w-full aspect-square bg-cream border border-charcoal/10 overflow-hidden">
                <div className="w-full h-full relative group">
                  <Image
                    src="/images/office-2.jpg"
                    alt="Secondary office details"
                    fill
                    quality={100}
                    className="object-cover group-hover:scale-[1.01] transition-transform duration-500 z-0"
                    sizes="(max-width: 768px) 100vw, 28vw"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* Office Info */}
              <div className="bg-white border border-charcoal/10 p-6 md:p-8">
                <p className="text-xs uppercase tracking-wider font-600 text-sage mb-4">Santa Monica</p>
                <p className="text-base text-charcoal/75 leading-relaxed mb-6 font-dm-sans">
                  123th Street 45 W<br />
                  Santa Monica, CA 90401
                </p>
                <div className="space-y-3 text-sm text-charcoal/70">
                  <p className="flex gap-3">
                    <span className="text-sage font-500">●</span>
                    <span>In-person therapy</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-sage font-500">●</span>
                    <span>Secure telehealth across California</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Description */}
          <div className="bg-sage/8 border border-sage/20 p-8 md:p-12">
            <p className="text-base md:text-lg text-charcoal/75 leading-[1.9]">
              Located in Santa Monica, my office is designed to feel calm, private, and grounding. Natural light, comfortable furnishings, and an uncluttered environment create space to settle in and focus on the work of therapy. Clients often share that the space itself helps them feel more at ease when they arrive.
            </p>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="w-full px-6 md:px-12 py-20 md:py-40 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="text-xs text-sage uppercase tracking-[0.2em] font-600 mb-4">Common Questions</p>
            <h2 className="text-3xl md:text-5xl font-playfair font-400 text-charcoal leading-tight">
              A little more clarity before you begin.
            </h2>
          </div>

          <div className="divide-y divide-charcoal/15 border-y border-charcoal/15">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={item.question} className="py-0">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-medium text-charcoal pr-4">
                      {item.question}
                    </span>
                    <span className="text-2xl text-sage leading-none shrink-0 transition-transform duration-200 ease-out">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 md:pb-6 text-base leading-[1.8] text-charcoal/70 max-w-3xl">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== VIDEO SECTION ========== */}
      <section className="w-full px-6 md:px-12 py-20 md:py-40 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-xs text-sage uppercase tracking-[0.2em] font-600 mb-4">Client Demo</p>
            <h2 className="text-3xl md:text-5xl font-playfair font-400 text-charcoal leading-tight">
              A calm, clear path forward.
            </h2>
          </div>

          <div className="border border-charcoal/15 bg-white p-3 md:p-4">
            <video
              className="w-full h-auto block bg-ivory"
              controls
              playsInline
              preload="metadata"
              poster="/images/maya.jpg"
            >
              <source src="/videos/maya-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section id="contact" className="w-full px-6 md:px-12 py-20 md:py-40 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-sage uppercase tracking-[0.2em] font-600 mb-6">Start Here</p>
          <h2 className="text-3xl md:text-4xl font-playfair font-400 text-charcoal mb-8 leading-tight">
            Finding the right therapist matters.
          </h2>
          <p className="text-base md:text-lg text-charcoal/70 leading-[1.8] mb-12">
            If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-sage text-ivory font-dm-sans font-500 text-base hover:bg-dark-sage transition-colors duration-300 tracking-wide"
          >
            SCHEDULE A FREE CONSULTATION
          </a>
          <p className="text-sm text-charcoal/60 mt-10">
            Based in Santa Monica. Serving clients across California.
          </p>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="w-full px-6 md:px-12 py-16 md:py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-16">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-playfair font-400 text-ivory mb-3">
                Dr. Maya Reynolds, PsyD
              </h3>
              <p className="text-sm text-ivory/70 leading-relaxed">
                Licensed Clinical Psychologist<br />
                Santa Monica, California
              </p>
            </div>

            {/* Navigate */}
            <div>
              <p className="text-xs uppercase tracking-wider font-600 text-ivory/80 mb-6">Navigate</p>
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-ivory/70 hover:text-ivory transition-colors"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice */}
            <div>
              <p className="text-xs uppercase tracking-wider font-600 text-ivory/80 mb-6">Practice</p>
              <ul className="space-y-3">
                <li><p className="text-sm text-ivory/70">In-person therapy</p></li>
                <li><p className="text-sm text-ivory/70">California telehealth</p></li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <p className="text-xs uppercase tracking-wider font-600 text-ivory/80 mb-6">Location</p>
              <p className="text-sm text-ivory/70 leading-relaxed">
                123th Street 45 W<br />
                Santa Monica, CA 90401
              </p>
            </div>
          </div>

          <div className="border-t border-ivory/10 pt-8 md:pt-12">
            <p className="text-sm text-ivory/60 text-center">
              © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
