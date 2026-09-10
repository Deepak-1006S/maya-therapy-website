"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "about", label: "About" },
    { id: "who-i-work-with", label: "Who I Work With" },
    { id: "expertise", label: "Expertise" },
    { id: "how-i-work", label: "How I Work" },
    { id: "office", label: "Our Office" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col w-full bg-ivory">
      {/* ========== NAVBAR ========== */}
      <nav className="sticky top-0 z-50 w-full bg-ivory border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl md:text-xl font-playfair font-600 text-charcoal">
              Dr. Maya Reynolds
            </h2>
            <p className="text-xs text-sage tracking-[0.2em] uppercase font-500">
              Clinical Psychologist
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-charcoal hover:text-sage transition-colors duration-200 relative group"
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
                className="block py-3 text-sm text-charcoal hover:text-sage transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ========== HERO ========== */}
      <section className="w-full px-6 md:px-12 py-16 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-end">
            {/* Right: Image First on Mobile, Second on Desktop */}
            <div className="md:col-span-5 order-first md:order-last">
              <div className="w-full aspect-square bg-cream border border-charcoal/15 overflow-hidden">
                <div className="w-full h-full relative group">
                  <Image
                    src="/images/maya.jpg"
                    alt="Dr. Maya Reynolds"
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500 motion-safe:ease-in-out"
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-cream via-ivory to-sage/10" />
                </div>
              </div>
            </div>

            {/* Left: Text */}
            <div className="md:col-span-7 order-last md:order-first flex flex-col gap-8 md:gap-10">
              <div>
                <p className="text-xs md:text-sm text-sage uppercase tracking-[0.25em] font-500 mb-4 md:mb-6">
                  Therapy in Santa Monica & Across California
                </p>
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-400 text-charcoal leading-[1.1] tracking-tight">
                  A calmer place to understand yourself and begin to heal.
                </h1>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-charcoal/75 leading-[1.75] max-w-2xl font-300">
                Evidence-based therapy for adults navigating anxiety, trauma, burnout, and the weight of perfectionism.
              </p>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-block px-8 md:px-10 py-4 bg-sage text-ivory font-dm-sans font-500 text-sm md:text-base hover:bg-dark-sage transition-colors duration-300"
                >
                  SCHEDULE A FREE CONSULTATION
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT / INTRO ========== */}
      <section id="about" className="w-full py-20 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Left: Image */}
            <div className="md:col-span-1">
              <div className="w-full aspect-square bg-cream border border-charcoal/10 overflow-hidden rounded-sm sticky top-32">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/maya.jpg"
                    alt="Dr. Maya Reynolds, PsyD"
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-cream via-ivory to-sage/10" />
                </div>
              </div>
            </div>

            {/* Right: Detailed Text Content */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-600 text-charcoal mb-6">
                  About Dr. Maya Reynolds, PsyD
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                  I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-playfair font-600 text-charcoal mb-4">
                  What Brings People to Therapy
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling "functional" on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-playfair font-600 text-charcoal mb-4">
                  My Approach
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they're experiencing.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-playfair font-600 text-charcoal mb-4">
                  Trauma Work
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-playfair font-600 text-charcoal mb-4">
                  Burnout & Perfectionism
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-playfair font-600 text-charcoal mb-4">
                  My Practice Space
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
                </p>
              </div>

              <div className="bg-sage/5 border border-sage/20 p-6 rounded-sm">
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.
                </p>
                <p className="text-charcoal/80 leading-relaxed italic">
                  If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHO I WORK WITH ========== */}
      <section id="who-i-work-with" className="w-full py-20 md:py-32 px-6 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-600 text-charcoal mb-4">
              Who I Work With
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Therapy works best when you feel respected, understood, and
              actively involved in your healing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border border-charcoal/10 p-8 bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-playfair font-600 text-charcoal mb-4">
                Adults
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                If you're navigating life's challenges and want support in
                understanding yourself better, therapy can provide clarity and
                tools for sustainable change.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-charcoal/10 p-8 bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-playfair font-600 text-charcoal mb-4">
                High-Achieving Adults
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                You may appear functional externally while struggling internally
                with perfectionism, burnout, or chronic stress. Therapy can help
                you reconnect with yourself and build more sustainable ways of
                living.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-charcoal/10 p-8 bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-playfair font-600 text-charcoal mb-4">
                Adults Navigating Trauma
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Whether single-incident or complex trauma, therapy can be a safe
                space to process experiences and move toward greater regulation,
                safety, and resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== AREAS OF EXPERTISE ========== */}
      <section id="expertise" className="w-full py-20 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-600 text-charcoal mb-16 text-center">
            Areas of Expertise
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              "Anxiety",
              "Panic",
              "Trauma",
              "Burnout",
              "Perfectionism",
              "High Internal Pressure",
              "Overthinking",
              "Emotional Regulation",
            ].map((area, idx) => (
              <div
                key={idx}
                className="border border-charcoal/10 p-6 bg-ivory text-center hover:bg-cream transition-colors"
              >
                <p className="font-dm-sans text-charcoal font-500">{area}</p>
              </div>
            ))}
          </div>

          <div className="bg-sage/5 border border-sage/20 p-8 md:p-12 rounded-sm">
            <h3 className="text-lg font-playfair font-600 text-charcoal mb-4">
              Deeper Understanding
            </h3>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Many clients experience a constellation of symptoms: constant
              worry, physical tension, difficulty sleeping, feeling emotionally
              on edge, effects of earlier life experiences, and challenges with
              confidence, relationships, or sense of safety.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Through therapy, we explore both the emotional and physiological
              sides of your experience, working toward genuine relief and
              resilience.
            </p>
          </div>
        </div>
      </section>

      {/* ========== HOW I WORK ========== */}
      <section id="how-i-work" className="w-full py-20 md:py-32 px-6 bg-sage/5 border-y border-sage/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-600 text-charcoal mb-4">
              How I Work
            </h2>
            <p className="text-xl text-dark-sage font-playfair font-500 mb-8">
              Warm, Collaborative, and Grounded
            </p>
            <p className="text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
              Sessions are structured enough to feel supportive while still
              leaving space for reflection and depth. You're an active partner
              in your healing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Left: Methods */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-lg font-playfair font-600 text-charcoal mb-3">
                  Therapeutic Methods
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-dusty-terracotta font-bold">✓</span>
                    <span className="text-charcoal/80">
                      Cognitive Behavioral Therapy (CBT)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-dusty-terracotta font-bold">✓</span>
                    <span className="text-charcoal/80">EMDR</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-dusty-terracotta font-bold">✓</span>
                    <span className="text-charcoal/80">
                      Mindfulness-based practices
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-dusty-terracotta font-bold">✓</span>
                    <span className="text-charcoal/80">Body-oriented techniques</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Goals */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-lg font-playfair font-600 text-charcoal mb-3">
                  Goals of Therapy
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-dusty-terracotta font-bold">→</span>
                    <span className="text-charcoal/80">Symptom relief</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-dusty-terracotta font-bold">→</span>
                    <span className="text-charcoal/80">Deeper insight and understanding</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-dusty-terracotta font-bold">→</span>
                    <span className="text-charcoal/80">Increased resilience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-dusty-terracotta font-bold">→</span>
                    <span className="text-charcoal/80">
                      Sustainable ways of living and working
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LARGE EDITORIAL STATEMENT ========== */}
      <section className="w-full py-24 md:py-40 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
          {/* Statement */}
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-playfair font-600 text-charcoal leading-tight">
              "Honoring where you've been and helping shape where you're headed."
            </p>
          </div>

          {/* Optional Image Below Statement */}
          <div className="w-full max-w-2xl aspect-video bg-cream border border-charcoal/10 overflow-hidden rounded-sm">
            <div className="w-full h-full relative">
              <Image
                src="/images/office-2.jpg"
                alt="Therapy office"
                fill
                className="object-cover"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = "none";
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-cream via-ivory to-sage/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== MY SPECIALTIES (TRAUMA & BURNOUT DETAIL) ========== */}
      <section className="w-full py-20 md:py-32 px-6 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-600 text-charcoal mb-16 text-center">
            My Specialties
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Trauma Specialty */}
            <div className="border-l-4 border-dusty-terracotta pl-6">
              <h3 className="text-2xl font-playfair font-600 text-charcoal mb-4">
                Trauma
              </h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Trauma therapy requires care, pacing, and structure. Whether
                you've experienced single-incident trauma, complex trauma,
                childhood experiences, or relationship trauma, I work at a pace
                that feels safe for you.
              </p>
              <div className="bg-white p-6 rounded-sm border border-charcoal/10">
                <p className="text-sm font-dm-sans font-600 text-dark-sage uppercase tracking-wide mb-3">
                  Trauma Work Emphasizes
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-charcoal/80">• Safety and stabilization</li>
                  <li className="text-sm text-charcoal/80">• Grounding and regulation</li>
                  <li className="text-sm text-charcoal/80">• Restoring sense of control</li>
                  <li className="text-sm text-charcoal/80">• Processing at a sustainable pace</li>
                </ul>
              </div>
            </div>

            {/* Burnout & Perfectionism Specialty */}
            <div className="border-l-4 border-dusty-terracotta pl-6">
              <h3 className="text-2xl font-playfair font-600 text-charcoal mb-4">
                Burnout & Perfectionism
              </h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                If you're a professional, entrepreneur, or creative experiencing
                burnout or wrestling with perfectionism, therapy can be a space
                to slow down, reconnect, and build more sustainable ways of
                living and working.
              </p>
              <div className="bg-white p-6 rounded-sm border border-charcoal/10">
                <p className="text-sm font-dm-sans font-600 text-dark-sage uppercase tracking-wide mb-3">
                  I Support
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-charcoal/80">• Professionals and entrepreneurs</li>
                  <li className="text-sm text-charcoal/80">• Creatives and high achievers</li>
                  <li className="text-sm text-charcoal/80">• People experiencing burnout</li>
                  <li className="text-sm text-charcoal/80">• Adults with perfectionism patterns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Specialties */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Anxiety", "Panic", "Trauma", "Burnout", "Perfectionism", "EMDR", "Mindfulness & Body-Oriented Work"].map(
              (specialty, idx) => (
                <div
                  key={idx}
                  className="border border-charcoal/10 p-4 bg-white text-center"
                >
                  <p className="text-sm font-dm-sans text-charcoal font-500">
                    {specialty}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========== OUR OFFICE ⭐ NEW SECTION ========== */}
      <section id="office" className="w-full py-20 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-600 text-charcoal mb-4">
              A quiet place to slow down.
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Our office is designed to be a grounding, restorative space for
              your healing journey.
            </p>
          </div>

          {/* Two-Image Editorial Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch">
            {/* Primary Image - Takes up 2 columns on desktop */}
            <div className="md:col-span-2">
              <div className="w-full h-96 md:h-full aspect-auto bg-cream border border-charcoal/10 overflow-hidden rounded-sm">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/office-1.jpg"
                    alt="Therapy office main"
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-cream via-ivory to-sage/10" />
                </div>
              </div>
            </div>

            {/* Secondary Image + Info */}
            <div className="flex flex-col gap-8">
              {/* Secondary Image */}
              <div className="h-64">
                <div className="w-full h-full bg-cream border border-charcoal/10 overflow-hidden rounded-sm">
                  <div className="w-full h-full relative">
                    <Image
                      src="/images/office-2.jpg"
                      alt="Therapy office secondary"
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.style.display = "none";
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-cream via-ivory to-sage/10" />
                  </div>
                </div>
              </div>

              {/* Office Details */}
              <div className="bg-ivory p-6 border border-charcoal/10 rounded-sm flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-playfair font-600 text-charcoal mb-4">
                    Santa Monica
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                    123th Street 45 W
                    <br />
                    Santa Monica, CA 90401
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="text-charcoal/80 flex gap-2">
                      <span className="text-sage">•</span>
                      <span>Quiet and private</span>
                    </li>
                    <li className="text-charcoal/80 flex gap-2">
                      <span className="text-sage">•</span>
                      <span>Naturally lit and comfortable</span>
                    </li>
                    <li className="text-charcoal/80 flex gap-2">
                      <span className="text-sage">•</span>
                      <span>Calm and grounding</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Format */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-sage/5 border border-sage/20 p-8 rounded-sm">
              <h3 className="font-playfair font-600 text-charcoal mb-4">
                In-Person Therapy
              </h3>
              <p className="text-charcoal/80">
                Available at our Santa Monica office. A carefully designed space
                where you can feel safe, respected, and heard.
              </p>
            </div>
            <div className="bg-sage/5 border border-sage/20 p-8 rounded-sm">
              <h3 className="font-playfair font-600 text-charcoal mb-4">
                Secure Telehealth
              </h3>
              <p className="text-charcoal/80">
                For clients located in California, secure telehealth sessions
                provide flexibility and continuity of care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SCHEDULE A CONSULTATION ========== */}
      <section id="contact" className="w-full py-20 md:py-32 px-6 bg-ivory">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-600 text-charcoal mb-6">
            Schedule a Consultation
          </h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
            Take the first step toward understanding yourself better. A
            consultation is an opportunity to connect, share what brought you
            here, and explore whether we might work well together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-sage text-ivory font-dm-sans font-500 hover:bg-dark-sage transition-colors">
              Contact Dr. Maya Reynolds
            </button>
            <button className="px-8 py-4 border-2 border-charcoal text-charcoal font-dm-sans font-500 hover:bg-charcoal hover:text-ivory transition-colors">
              Learn More
            </button>
          </div>
          <p className="mt-8 text-sm text-charcoal/60">
            Based in Santa Monica. Serving clients across California.
          </p>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="w-full py-12 px-6 bg-charcoal text-ivory border-t border-charcoal/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-playfair font-600 mb-2">
                Dr. Maya Reynolds, PsyD
              </h3>
              <p className="text-ivory/70 text-sm">
                Licensed Clinical Psychologist
              </p>
              <p className="text-ivory/70 text-sm mt-2">
                Santa Monica, California
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-playfair font-600 mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-ivory/70 hover:text-ivory transition-colors"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-playfair font-600 mb-4">Address</h4>
              <p className="text-ivory/70 text-sm leading-relaxed">
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>
              <p className="text-ivory/70 text-sm mt-4">
                In-person and telehealth available
              </p>
            </div>
          </div>

          <div className="border-t border-ivory/10 pt-8 text-center text-sm text-ivory/60">
            <p>
              © {new Date().getFullYear()} Dr. Maya Reynolds. All rights
              reserved.
            </p>
            <p className="mt-2 text-xs">
              This website is for informational purposes. Please consult with a
              healthcare provider for medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
