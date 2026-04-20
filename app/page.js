import ScrollProgress from "./scroll-progress";
import Image from "next/image";
import DevAuthBanner from "./dev-auth-banner";
import {
  BookOpen, Binoculars, AlertTriangle, Compass, GitBranch,
  Globe, Megaphone,
  ChevronRight, Target, CheckCircle2, Zap,
  CalendarCheck, Shield,
} from "lucide-react";

const S = () => <span className="corner-strip" aria-hidden="true" />;

const Li = ({ icon: Icon = ChevronRight, children }) => (
  <li>
    <Icon className="li-icon" aria-hidden="true" />
    <span>{children}</span>
  </li>
);

const SubHead = ({ children }) => (
  <p className="sub-head">{children}</p>
);

const Callout = ({ icon: Icon = Target, label, children }) => (
  <div className="callout">
    <p className="callout-label">
      <Icon className="callout-icon" aria-hidden="true" />
      <strong>{label}</strong>
    </p>
    <p className="callout-body">{children}</p>
  </div>
);

const TwistSlideFooter = () => (
  <div className="slide-brand-footer">
    <Image src="/l.png" alt="Twist Digital" width={200} height={56} className="slide-brand-footer__logo" />
  </div>
);

const TOTAL_SLIDES = 14;

export default function HomePage() {
  const slides = [
    "Cover",
    "What We Plan",
    "Current Situation",
    "Brand & Platform Structure",
    "Brand Positioning Direction",
    "Meta-Focused Approach",
    "Phase 1: Foundation",
    "Phase 2: Organic Growth",
    "Content Strategy",
    "Credibility Strategy",
    "Phase 3: Paid Media",
    "3 Months Plan",
    "Review & Scaling",
    "Thank You",
  ];

  return (
    <>
      <ScrollProgress />
      <header className="topbar">
        <div className="topbar-left">
          <Image src="/c.png" alt="Chef Jean Pierre Catering & School" width={120} height={40} className="topbar-logo" priority />
        </div>
        <nav className="slide-nav" aria-label="Slide navigation">
          {slides.map((label, idx) => (
            <a key={`${idx}-${label}`} href={`#slide-${idx + 1}`} className="slide-nav-item">
              {idx + 1}
            </a>
          ))}
        </nav>
        {/* <PrintButton /> */}
      </header>
      <DevAuthBanner />

      <main className="deck">

        {/* ── Slide 1: Cover ── */}
        <section className="slide cover dark no-corner" id="slide-1">
          <div className="cover-bg-shape" aria-hidden="true" />
          <div className="cover-bg-shape cover-bg-shape--2" aria-hidden="true" />
          <div className="cover-bg-shape cover-bg-shape--3" aria-hidden="true" />
          <h1>Marketing Proposal – Chef Jean Pierre Catering &amp; School</h1>
          <h2>Prepared for: Chef Jean Pierre</h2>
          <div className="prepared-by-row">
            <span className="prepared-by">Prepared by:</span>
            <Image src="/l.png" alt="Twist Digital" width={220} height={62} className="cover-logo" priority />
          </div>
        </section>

        {/* ── Slide 2: What We Plan ── */}
        <section className="slide dark slide-footer-brand" id="slide-2">
          <S />
          <p className="slide-label">Slide 2 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><Compass />What We Plan</h2>
          <p>What we want to do here is very simple.</p>
          <p>Instead of trying to make the academy carry everything on its own, we build Chef Jean Pierre as the main brand people connect with first. Then, we use that trust, attention, and recognition to bring people into the Academy of Culinary Art.</p>
          <SubHead>So rather than pushing only one page or one identity, we create a much clearer structure:</SubHead>
          <ul>
            <Li icon={CheckCircle2}>Chef Jean Pierre becomes the face, voice, and authority</Li>
            <Li icon={CheckCircle2}>Academy of Culinary Art becomes the place where people take action</Li>
          </ul>
          <Callout icon={Target} label="Direction:">
            This gives the whole brand more direction. People connect with a person first. Once that connection is built, it becomes much easier to drive interest, trust, and eventually sales into the academy.
          </Callout>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 3: Current Situation ── */}
        <section className="slide dark slide-footer-brand" id="slide-3">
          <S />
          <p className="slide-label">Slide 3 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><Binoculars />Current Situation</h2>
          <ul>
            <Li icon={CheckCircle2}><strong>Chef Jean Pierre&apos;s credibility:</strong> With real expertise and a compelling story, Chef Jean Pierre has a strong foundation in the culinary world, which is full of visual and engaging content opportunities.</Li>
            <Li icon={AlertTriangle}><strong>Current digital presence:</strong> The current digital presence lacks structure and alignment, with the personal side of Chef Jean Pierre not being fully utilized, making it harder to build a consistent long-term presence.</Li>
            <Li icon={Target}><strong>Opportunity for growth:</strong> By positioning Chef Jean Pierre as the central figure, we can strengthen the academy&apos;s foundation, create a cohesive narrative, and elevate the brand to a more premium level.</Li>
          </ul>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 4: Brand & Platform Structure ── */}
        <section className="slide dark slide-footer-brand" id="slide-4">
          <S />
          <p className="slide-label">Slide 4 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><GitBranch />Brand &amp; Platform Structure</h2>
          <p>A big part of making this work is giving the brand the right structure from the beginning.</p>
          <SubHead>The direction we recommend is to maintain two distinct page identities on each platform:</SubHead>
          <ul>
            <Li><strong>Instagram</strong> — Chef Jean Pierre; Academy of Culinary Art by Chef Jean Pierre</Li>
            <Li><strong>Facebook</strong> — Chef Jean Pierre; Academy of Culinary Art by Chef Jean Pierre</Li>
          </ul>
          <SubHead>Each page should have its own role.</SubHead>
          <ul>
            <Li>The <strong>Chef Jean Pierre</strong> page should focus on the person — expertise, personality, experience, values, and presence.</Li>
            <Li>The <strong>Academy</strong> page should focus on programs, student life, testimonials, training, offers, and inquiries.</Li>
          </ul>
          <Callout icon={Target} label="Outcome:">
            The personal brand creates attention and trust, while the academy turns that attention into business.
          </Callout>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 5: Brand Positioning Direction ── */}
        <section className="slide dark slide-footer-brand" id="slide-5">
          <S />
          <p className="slide-label">Slide 5 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><Target />Brand Positioning Direction</h2>
          <ul>
            <Li>Chef Jean Pierre should be seen as a credible chef, mentor, and recognizable personality in the culinary world, reflecting his 50+ years of experience.</Li>
            <Li>The academy should be an extension of Chef Jean Pierre&apos;s credibility, not just another school. It should be a trusted place backed by someone people already know and respect.</Li>
            <Li>The branding, including visual identity, logo, and overall presentation, must align with Chef Jean Pierre&apos;s persona. The brand should feel premium, warm, confident, professional, and personal.</Li>
          </ul>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 6: Meta-Focused Approach ── */}
        <section className="slide dark slide-footer-brand" id="slide-6">
          <S />
          <p className="slide-label">Slide 6 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><Globe />Meta-Focused Approach</h2>
          <p>For now, the focus should stay on Instagram and Facebook.</p>
          <p>That is where the brand has the best immediate opportunity to grow in the right way.</p>
          <ul>
            <Li icon={CheckCircle2}><strong>Instagram</strong> will be important for visibility, reach, storytelling, and building a strong chef-led content presence.</Li>
            <Li icon={CheckCircle2}><strong>Facebook</strong> will be important for credibility, wider audience access, local trust, and conversion support.</Li>
          </ul>
          <SubHead>At this stage, the goal is not to spread the brand too wide.</SubHead>
          <Callout icon={Target} label="Focus:">
            The goal is to make these two platforms work properly first, with clarity and consistency.
          </Callout>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 7: Phase 1: Foundation (Month 1) ── */}
        <section className="slide dark slide-footer-brand" id="slide-7">
          <S />
          <p className="slide-label">Slide 7 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><CalendarCheck />Phase 1: Foundation (Month 1)</h2>
          <p>The first month should be about setting the right base.</p>
          <p>Before thinking about growth, we need to make sure the structure is clean, the branding is aligned, and both page directions are clearly defined.</p>
          <SubHead>This phase would focus on:</SubHead>
          <ul>
            <Li>Setting up or refining the Chef Jean Pierre pages properly</Li>
            <Li>Aligning the current academy pages with the new direction</Li>
            <Li>Improving the branding and logo direction where needed</Li>
            <Li>Refining bios, profile images, descriptions, highlights, and page presentation</Li>
            <Li>Cleaning up any confusion between the two identities</Li>
            <Li>Defining what each page will talk about and how each one should feel</Li>
            <Li>Creating a stronger and more intentional visual direction across both brands</Li>
          </ul>
          <Callout icon={CheckCircle2} label="Summary:">
            This month is really about preparing the brand properly.
          </Callout>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 8: Phase 2: Organic Growth (Months 2–3) ── */}
        <section className="slide dark slide-footer-brand" id="slide-8">
          <S />
          <p className="slide-label">Slide 8 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><CalendarCheck />Phase 2: Organic Growth (Months 2–3)</h2>
          <p>Once the foundation is in place, the next step is to grow it organically.</p>
          <p>For the first 2 to 3 months, the focus should be on building Chef Jean Pierre as the main personality people start noticing, remembering, and trusting.</p>
          <SubHead>So during this stage, we focus on building familiarity through content, consistency, and presence.</SubHead>
          <ul>
            <Li>The <strong>Chef Jean Pierre</strong> page becomes the main attention driver.</Li>
            <Li>The <strong>academy page</strong> supports that by showing the real value of the school, its environment, its students, and its opportunities.</Li>
          </ul>
          <Callout icon={Target} label="Why:">
            This gives us time to build trust the right way before introducing paid promotion.
          </Callout>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 9: Content Strategy ── */}
        <section className="slide dark slide-footer-brand" id="slide-9">
          <S />
          <p className="slide-label">Slide 9 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><BookOpen />Content Strategy</h2>
          <p>Both pages should feel connected, but each should have its own distinct purpose. One page should build connections, while the other focuses on conversion.</p>
          <SubHead>Chef Jean Pierre (personal brand)</SubHead>
          <ul>
            <Li>Content should be personal, authoritative, and human. This includes chef insights, practical tips, behind-the-scenes moments, personal experiences, and teaching moments that help people understand who he is.</Li>
          </ul>
          <SubHead>Academy of Culinary Art</SubHead>
          <ul>
            <Li>Content should focus on the academy&apos;s offerings, like course details, student experiences, class highlights, testimonials, and proof of outcomes.</Li>
          </ul>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 10: Credibility Strategy ── */}
        <section className="slide dark slide-footer-brand" id="slide-10">
          <S />
          <p className="slide-label">Slide 10 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><Shield />Credibility Strategy</h2>
          <p>One of the strongest parts of this brand is that there is already something real behind it.</p>
          <p>This is not a brand that needs to invent credibility. It needs to present it better.</p>
          <SubHead>So bring more of that forward:</SubHead>
          <ul>
            <Li>Chef Jean Pierre&apos;s experience, the quality of the learning environment, the real students, the real process, the discipline behind the work, and the outcomes people can believe in.</Li>
          </ul>
          <Callout icon={Target} label="Impact:">
            When that is shown consistently, the academy starts to feel stronger automatically. That is why building the personal brand matters so much here. It does not sit separately from the business. It strengthens the business.
          </Callout>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 11: Phase 3: Paid Media (After Month 3) ── */}
        <section className="slide dark slide-footer-brand" id="slide-11">
          <S />
          <p className="slide-label">Slide 11 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><Megaphone />Phase 3: Paid Media (After Month 3)</h2>
          <div className="strategy-grid strategy-grid--3col">
            <div className="strategy-item">
              <h3><span className="strategy-num">1</span>Paid media timing</h3>
              <p>Paid media should only be used once the pages are fully built, active, and credible. Driving traffic to underdeveloped pages is not effective.</p>
            </div>
            <div className="strategy-item">
              <h3><span className="strategy-num">2</span>Content readiness</h3>
              <p>Once the brand feels strong, active, and has enough content depth, paid campaigns can be much more effective. At this point, we can leverage the best-performing organic content.</p>
            </div>
            <div className="strategy-item">
              <h3><span className="strategy-num">3</span>Scaling, not creating</h3>
              <p>Paid media should focus on scaling what&apos;s already working, particularly content that showcases Chef Jean Pierre&apos;s authority, presence, and story, creating a healthier long-term marketing system.</p>
            </div>
          </div>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 12: 3 Months Plan ── */}
        <section className="slide dark slide-footer-brand" id="slide-12">
          <S />
          <p className="slide-label">Slide 12 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><CalendarCheck />3 Months Plan</h2>
          <p>The initial phase should be approached as a proper setup and growth.</p>
          <p>This is where we shape the brand correctly, establish the content direction, and prepare both pages to work together the way they should.</p>
          <SubHead>The flow would look like this:</SubHead>
          <ul>
            <Li><strong>Month 1</strong> — foundation, setup, alignment</Li>
            <Li><strong>Months 2–3</strong> — organic growth, consistency, brand positioning</Li>
            <Li><strong>After Month 3</strong> — begin paid campaigns based on what is already performing well</Li>
          </ul>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 13: Review & Scaling ── */}
        <section className="slide dark slide-footer-brand" id="slide-13">
          <S />
          <p className="slide-label">Slide 13 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><Binoculars />Review &amp; Scaling</h2>
          <p>After the first 3 months, we review how the brand is performing and where the strongest traction is coming from.</p>
          <SubHead>We look at:</SubHead>
          <ul>
            <Li>How the pages are growing</Li>
            <Li>What kind of content is connecting best</Li>
            <Li>How people are engaging</Li>
            <Li>How the academy is benefiting from the personal brand</Li>
            <Li>Whether the system is ready for more aggressive scaling</Li>
          </ul>
          <Callout icon={Zap} label="Next:">
            From there, we refine the direction, strengthen what is already working, and build the next stage of growth in a more targeted way.
          </Callout>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 14: Thank You ── */}
        <section className="slide thankyou dark no-corner" id="slide-14">
          <div className="cover-bg-shape" aria-hidden="true" />
          <div className="cover-bg-shape cover-bg-shape--2" aria-hidden="true" />
          <div className="cover-bg-shape cover-bg-shape--3" aria-hidden="true" />
          <p className="thankyou-label">Twist Digital</p>
          <h1 className="thankyou-heading">Thank You</h1>
          <p className="thankyou-sub">
            It is about building Chef Jean Pierre into the main brand people trust, and using that trust to grow the Academy of Culinary Art.
          </p>
          <div className="thankyou-divider" aria-hidden="true" />
          <p className="thankyou-contact">
            We look forward to working with Chef Jean Pierre and the Academy of Culinary Art. For any questions, reach out to us anytime.
          </p>
          <Image src="/l.png" alt="Twist Digital" width={200} height={56} className="thankyou-logo" />
        </section>

      </main>

      <a href="#slide-1" className="to-top" aria-label="Scroll to top">↑</a>
    </>
  );
}
