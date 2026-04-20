import ScrollProgress from "./scroll-progress";
import Image from "next/image";
import DevAuthBanner from "./dev-auth-banner";
import {
  BookOpen, Binoculars, AlertTriangle, Compass, GitBranch,
  Globe, Megaphone,
  ChevronRight, Target, CheckCircle2, Zap,
  CalendarCheck, Shield,
  Camera, Share2,
  ChefHat, GraduationCap, Award, Building2, UserCircle,
  Sparkles, Palette, TrendingUp, BarChart3,
  MessageCircle, Users, Layers, LayoutList, Contact, Link2, Heart,
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

/** @param {{ icon: import('lucide-react').LucideIcon, title?: string, subtitle?: string, children?: React.ReactNode, compact?: boolean }} props */
const IconCard = ({ icon: Icon, title, subtitle, children, compact }) => (
  <div className={`icon-card${compact ? " icon-card--compact" : ""}`}>
    <div className="icon-card__head">
      <span className="icon-card__icon-wrap" aria-hidden="true">
        <Icon className="icon-card__icon" />
      </span>
      <div className="icon-card__head-text">
        {title ? <h3 className="icon-card__title">{title}</h3> : null}
        {subtitle ? <p className="icon-card__subtitle">{subtitle}</p> : null}
      </div>
    </div>
    {children ? <div className="icon-card__body">{children}</div> : null}
  </div>
);

const CardGrid = ({ cols = 2, dense, children }) => (
  <div
    className={
      dense ? "card-grid card-grid--dense" : `card-grid card-grid--${cols}`
    }
  >
    {children}
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
          <Image src="/n.jpg" alt="Chef Jean Pierre Catering & School" width={120} height={40} className="topbar-logo" priority />
        </div>
        <nav className="slide-nav" aria-label="Slide navigation">
          {slides.map((label, idx) => (
            <a key={`${idx}-${label}`} href={`#slide-${idx + 1}`} className="slide-nav-item">
              {idx + 1}
            </a>
          ))}
        </nav>
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
          <SubHead>Clearer structure</SubHead>
          <CardGrid cols={2}>
            <IconCard icon={ChefHat} title="Chef Jean Pierre" subtitle="Face &amp; authority">
              <p>Becomes the face, voice, and authority people connect with first.</p>
            </IconCard>
            <IconCard icon={GraduationCap} title="Academy of Culinary Art" subtitle="Where action happens">
              <p>Becomes the place where people take action — programs, enrollment, and growth.</p>
            </IconCard>
          </CardGrid>
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
          <CardGrid cols={3}>
            <IconCard icon={Award} title="Chef Jean Pierre&apos;s credibility">
              <p>Real expertise and a compelling story — a strong foundation in a field full of visual, engaging content opportunities.</p>
            </IconCard>
            <IconCard icon={AlertTriangle} title="Current digital presence">
              <p>Lacks structure and alignment; the personal side is not fully utilized, making a consistent long-term presence harder to build.</p>
            </IconCard>
            <IconCard icon={TrendingUp} title="Opportunity for growth">
              <p>Positioning Chef Jean Pierre as the central figure strengthens the academy&apos;s foundation, creates a cohesive narrative, and elevates the brand to a more premium level.</p>
            </IconCard>
          </CardGrid>
          <Callout icon={Compass} label="Takeaway:">
            The opportunity is to lead with real credibility, tighten structure across channels, and make the Academy of Culinary Art feel like the natural next step — not a separate or weaker brand.
          </Callout>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 4: Brand & Platform Structure ── */}
        <section className="slide dark slide-footer-brand" id="slide-4">
          <S />
          <p className="slide-label">Slide 4 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><GitBranch />Brand &amp; Platform Structure</h2>
          <p>A big part of making this work is giving the brand the right structure from the beginning.</p>
          <SubHead>Two page identities per platform</SubHead>
          <CardGrid cols={2}>
            <IconCard icon={Camera} title="Instagram">
              <p><strong>Chef Jean Pierre</strong> · <strong>Academy of Culinary Art by Chef Jean Pierre</strong></p>
            </IconCard>
            <IconCard icon={Share2} title="Facebook">
              <p><strong>Chef Jean Pierre</strong> · <strong>Academy of Culinary Art by Chef Jean Pierre</strong></p>
            </IconCard>
          </CardGrid>
          <SubHead>Each page has its own role</SubHead>
          <CardGrid cols={2}>
            <IconCard icon={UserCircle} title="Chef Jean Pierre page">
              <p>Expertise, personality, experience, values, and presence — the person.</p>
            </IconCard>
            <IconCard icon={Building2} title="Academy page">
              <p>Programs, student life, testimonials, training, offers, and inquiries.</p>
            </IconCard>
          </CardGrid>
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
          <CardGrid cols={3}>
            <IconCard icon={ChefHat} title="The chef &amp; mentor">
              <p>Credible chef, mentor, and recognizable personality — reflecting 50+ years of experience.</p>
            </IconCard>
            <IconCard icon={Link2} title="Academy as extension">
              <p>Not just another school: a trusted place backed by someone people already know and respect.</p>
            </IconCard>
            <IconCard icon={Sparkles} title="Premium feel">
              <p>Visual identity, logo, and presentation align with Chef Jean Pierre&apos;s persona: premium, warm, confident, professional, and personal.</p>
            </IconCard>
          </CardGrid>
          <Callout icon={Target} label="Positioning:">
            When the chef and the academy read as one story — credible, personal, and premium — audiences understand why the Academy of Culinary Art is the right place to train and grow.
          </Callout>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 6: Meta-Focused Approach ── */}
        <section className="slide dark slide-footer-brand" id="slide-6">
          <S />
          <p className="slide-label">Slide 6 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><Globe />Meta-Focused Approach</h2>
          <p>For now, the focus should stay on Instagram and Facebook — where the brand has the best immediate opportunity to grow in the right way.</p>
          <CardGrid cols={2}>
            <IconCard icon={Camera} title="Instagram">
              <p>Visibility, reach, storytelling, and a strong chef-led content presence.</p>
            </IconCard>
            <IconCard icon={Share2} title="Facebook">
              <p>Credibility, wider audience access, local trust, and conversion support.</p>
            </IconCard>
          </CardGrid>
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
          <p>The first month is about setting the right base — clean structure, aligned branding, and clearly defined page directions before growth.</p>
          <SubHead>This phase focuses on</SubHead>
          <CardGrid dense>
            <IconCard icon={LayoutList} title="Pages" compact>
              <p>Set up or refine Chef Jean Pierre pages properly.</p>
            </IconCard>
            <IconCard icon={GitBranch} title="Academy alignment" compact>
              <p>Align academy pages with the new direction.</p>
            </IconCard>
            <IconCard icon={Palette} title="Branding &amp; logo" compact>
              <p>Improve branding and logo direction where needed.</p>
            </IconCard>
            <IconCard icon={Contact} title="Profiles" compact>
              <p>Refine bios, images, descriptions, highlights, and presentation.</p>
            </IconCard>
            <IconCard icon={Layers} title="Clarity" compact>
              <p>Remove confusion between the two identities.</p>
            </IconCard>
            <IconCard icon={MessageCircle} title="Voice &amp; feel" compact>
              <p>Define what each page talks about and how it should feel.</p>
            </IconCard>
            <IconCard icon={Sparkles} title="Visual direction" compact>
              <p>Stronger, more intentional visuals across both brands.</p>
            </IconCard>
          </CardGrid>
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
          <p>Once the foundation is in place, grow organically. For 2–3 months, build Chef Jean Pierre as the personality people notice, remember, and trust — through content, consistency, and presence.</p>
          <CardGrid cols={2}>
            <IconCard icon={Zap} title="Chef Jean Pierre — attention driver">
              <p>The main channel for familiarity and trust.</p>
            </IconCard>
            <IconCard icon={Users} title="Academy page — proof &amp; value">
              <p>Shows the real value of the school: environment, students, and opportunities.</p>
            </IconCard>
          </CardGrid>
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
          <p>Both pages should feel connected, but each has a distinct purpose: one builds connection; the other supports conversion.</p>
          <div className="support-grid">
            <div className="support-col support-col--icon-top">
              <p className="support-heading">
                <ChefHat aria-hidden="true" />
                Chef Jean Pierre (personal brand)
              </p>
              <ul>
                <Li icon={CheckCircle2}>Personal, authoritative, human content: chef insights, tips, behind-the-scenes, experiences, and teaching moments.</Li>
              </ul>
            </div>
            <div className="support-col support-col--icon-top">
              <p className="support-heading">
                <GraduationCap aria-hidden="true" />
                Academy of Culinary Art
              </p>
              <ul>
                <Li icon={CheckCircle2}>Course details, student experiences, class highlights, testimonials, and proof of outcomes.</Li>
              </ul>
            </div>
          </div>
          <Callout icon={BookOpen} label="In practice:">
            Two complementary voices, one journey: the chef page earns attention and trust; the academy page answers &quot;what&apos;s next?&quot; with programs, proof, and outcomes that turn interest into inquiries.
          </Callout>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 10: Credibility Strategy ── */}
        <section className="slide dark slide-footer-brand" id="slide-10">
          <S />
          <p className="slide-label">Slide 10 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><Shield />Credibility Strategy</h2>
          <CardGrid cols={2}>
            <IconCard icon={Award} title="Already real">
              <p>There is something real behind this brand — we present it better, we don&apos;t invent it.</p>
            </IconCard>
            <IconCard icon={CheckCircle2} title="Show more of">
              <p>Experience, learning environment, real students and process, discipline, and believable outcomes.</p>
            </IconCard>
          </CardGrid>
          <Callout icon={Target} label="Impact:">
            When that is shown consistently, the academy starts to feel stronger automatically. Building the personal brand does not sit separately from the business — it strengthens the business.
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
              <h3>
                <span className="strategy-num">1</span>
                Paid media timing
              </h3>
              <p>Use paid media only when pages are fully built, active, and credible. Traffic to underdeveloped pages is not effective.</p>
            </div>
            <div className="strategy-item">
              <h3>
                <span className="strategy-num">2</span>
                Content readiness
              </h3>
              <p>When the brand feels strong and has depth, paid campaigns work better — leverage the best-performing organic content.</p>
            </div>
            <div className="strategy-item">
              <h3>
                <span className="strategy-num">3</span>
                Scaling, not creating
              </h3>
              <p>Scale what already works — especially content that showcases authority, presence, and story — for a healthier long-term system.</p>
            </div>
          </div>
          <Callout icon={Zap} label="Principle:">
            Paid media should amplify what already works — not paper over a weak foundation. We invest in scaling Chef Jean Pierre&apos;s authority and the academy&apos;s proof once organic results show what truly resonates.
          </Callout>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 12: 3 Months Plan ── */}
        <section className="slide dark slide-footer-brand" id="slide-12">
          <S />
          <p className="slide-label">Slide 12 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><CalendarCheck />3 Months Plan</h2>
          <p>Treat the initial phase as proper setup and growth: shape the brand, set content direction, and prepare both pages to work together.</p>
          <CardGrid cols={3}>
            <IconCard icon={CalendarCheck} title="Month 1" subtitle="Foundation">
              <p>Foundation, setup, and alignment.</p>
            </IconCard>
            <IconCard icon={TrendingUp} title="Months 2–3" subtitle="Organic">
              <p>Organic growth, consistency, and brand positioning.</p>
            </IconCard>
            <IconCard icon={Megaphone} title="After Month 3" subtitle="Paid">
              <p>Begin paid campaigns based on what is already performing well.</p>
            </IconCard>
          </CardGrid>
          <Callout icon={CalendarCheck} label="Roadmap:">
            Month 1 locks in structure and clarity; months 2–3 build familiarity and trust organically; after that, paid spend follows the data — so budget reinforces content and messages that are already working.
          </Callout>
          <TwistSlideFooter />
        </section>

        {/* ── Slide 13: Review & Scaling ── */}
        <section className="slide dark slide-footer-brand" id="slide-13">
          <S />
          <p className="slide-label">Slide 13 / {TOTAL_SLIDES}</p>
          <h2 className="slide-title"><Binoculars />Review &amp; Scaling</h2>
          <p>After the first 3 months, review performance and where the strongest traction comes from.</p>
          <SubHead>We look at</SubHead>
          <CardGrid dense>
            <IconCard icon={BarChart3} title="Growth" compact>
              <p>How the pages are growing.</p>
            </IconCard>
            <IconCard icon={Heart} title="Content" compact>
              <p>What content connects best.</p>
            </IconCard>
            <IconCard icon={MessageCircle} title="Engagement" compact>
              <p>How people are engaging.</p>
            </IconCard>
            <IconCard icon={GraduationCap} title="Academy impact" compact>
              <p>How the academy benefits from the personal brand.</p>
            </IconCard>
            <IconCard icon={Zap} title="Readiness" compact>
              <p>Whether the system is ready for more aggressive scaling.</p>
            </IconCard>
          </CardGrid>
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
