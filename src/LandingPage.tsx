import {
  ArrowDown,
  ArrowRight,
  Boxes,
  Brackets,
  Check,
  ChevronRight,
  CircleDot,
  Cpu,
  Fingerprint,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  Orbit,
  Radio,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Waypoints,
  Zap,
} from 'lucide-react'
import type { CSSProperties } from 'react'
import { MotionImage } from './components/MotionImage'
import { Reveal } from './components/Reveal'
import { ActionLink, SectionTag, SiteChrome } from './components/SiteChrome'

const facts = [
  { value: '$50–60B', label: 'StaxBound-estimated addressable opportunity' },
  { value: 'Ready', label: 'Core platform and initial portfolio built' },
  { value: 'Pending', label: 'Patent-status technology' },
  { value: '6–18 mo.', label: 'Potential preferred early-partner terms' },
]

const readiness = [
  ['Core platform', 'Ready'],
  ['Initial portfolio', 'Ready'],
  ['Product engine', 'Ready'],
  ['Partner API', 'Configure'],
  ['Certification', 'Partner-specific'],
  ['Market rollout', 'Align'],
]

const launchSteps = [
  {
    number: '01',
    title: 'Partner briefing',
    body: 'Validate strategic fit, audience potential, and the category thesis with the right decision-makers.',
  },
  {
    number: '02',
    title: 'Commercial alignment',
    body: 'Define operator reach, priority markets, launch commitments, and early-partner economics.',
  },
  {
    number: '03',
    title: 'Technical scoping',
    body: 'Map APIs, responsibilities, certification requirements, controls, and the deployment environment.',
  },
  {
    number: '04',
    title: 'Implementation + QA',
    body: 'Complete the partner-specific API work, testing, validation, and applicable approval path.',
  },
  {
    number: '05',
    title: 'Launch + scale',
    body: 'Move from first operator activation into a disciplined network and multi-market rollout.',
  },
]

const faqs = [
  {
    question: 'What is StaxBound?',
    answer: 'StaxBound is a B2B gaming studio bringing a new vertical to iGaming aggregators and casino operators. We are building a category proposition—not another interchangeable title for an already crowded content grid.',
  },
  {
    question: 'What exactly is the new vertical?',
    answer: 'We intentionally do not publish the underlying product mechanism. Qualified aggregators, operators, and platform partners can receive a confidential briefing after an initial fit conversation and, where appropriate, confidentiality arrangements.',
  },
  {
    question: 'Is the software finished?',
    answer: 'The core platform and initial portfolio are built. Partner-specific API implementation, testing, certification, jurisdictional approvals, and launch work remain dependent on the selected aggregator or operator environment.',
  },
  {
    question: 'Who can partner with StaxBound?',
    answer: 'We are prioritizing established aggregators and casino operators with credible distribution, compatible infrastructure, and the ability to operate in approved jurisdictions. Platform partners with a clear route to market are also welcome to start a conversation.',
  },
  {
    question: 'How do the early-partner terms work?',
    answer: 'A limited cohort of qualifying early aggregator partners may receive preferred commercial terms for 6–18 months. Exact economics and duration depend principally on contracted operator reach, implementation scope, timing, territory, and final agreement.',
  },
  {
    question: 'What does the $50–60B figure represent?',
    answer: 'It is StaxBound’s internal estimate of the underserved addressable opportunity. It is not a forecast of StaxBound revenue, partner revenue, market share, adoption, or guaranteed financial performance.',
  },
  {
    question: 'Will StaxBound guarantee new users or revenue?',
    answer: 'No. The vertical is designed to support audience expansion and incremental revenue potential, but outcomes depend on distribution, market conditions, execution, regulation, player response, and other factors.',
  },
  {
    question: 'How quickly can integration be completed?',
    answer: 'Timing is established after technical scoping. It depends on API architecture, documentation, partner resources, QA, certification, compliance, and jurisdictional approvals. The remaining work is integration—not invention—but every launch deserves a credible plan.',
  },
  {
    question: 'Is the technology patented?',
    answer: 'The technology is patent pending. That means patent applications have been filed; it does not mean a patent has been granted, guarantee that one will issue, or define the ultimate scope of any rights.',
  },
  {
    question: 'What is the next step?',
    answer: 'Submit the partner form with your company, role, distribution footprint, and target markets. We will evaluate fit and, for qualified inquiries, arrange a focused partner conversation.',
  },
]

export function LandingPage() {
  return (
    <SiteChrome>
      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-media" aria-hidden="true">
            <img src="./images/staxbound-portal.webp" alt="" width={1672} height={941} fetchPriority="high" />
            <div className="hero-media-overlay" />
          </div>

          <div className="hero-axis" aria-hidden="true"><span /></div>

          <div className="shell hero-shell">
            <Reveal className="hero-announcement">
              <span className="status-dot" />
              Founding aggregator conversations now open
              <a href="./contact.html">Explore access <ArrowRight size={14} /></a>
            </Reveal>

            <div className="hero-layout">
              <div className="hero-copy">
                <Reveal delay={70}>
                  <p className="eyebrow">A new iGaming vertical is ready to move</p>
                </Reveal>
                <Reveal delay={130}>
                  <h1>The category your competitors <em>haven’t launched.</em></h1>
                </Reveal>
                <Reveal delay={210}>
                  <p className="hero-lede">
                    StaxBound gives aggregators and operators an integration-ready path into a
                    <strong> company-estimated $50–60B opportunity</strong>—built to reach new audiences
                    and create incremental revenue potential.
                  </p>
                </Reveal>
                <Reveal className="hero-actions" delay={280}>
                  <ActionLink href="./contact.html">Request a partner briefing</ActionLink>
                  <ActionLink href="#opportunity" variant="secondary">Enter the opportunity</ActionLink>
                </Reveal>
                <Reveal delay={340}>
                  <p className="hero-note">For qualified aggregators, operators, and strategic platform partners.</p>
                </Reveal>
              </div>

              <Reveal className="hero-visual" delay={240}>
                <div className="cinema-frame hero-motion-frame">
                  <MotionImage
                    animatedSrc="./images/staxbound-portal.gif"
                    animatedWebpSrc="./images/staxbound-portal-motion.webp"
                    stillSrc="./images/staxbound-portal-poster.webp"
                    alt="A luminous portal introducing a new StaxBound gaming vertical"
                    eager
                  />
                  <span>NEW CATEGORY / 01</span>
                </div>
                <div className="hero-visual-stats">
                  <span><strong>$50–60B</strong><small>company estimate</small></span>
                  <span><strong>Built</strong><small>core platform</small></span>
                  <span><strong>Patent</strong><small>pending</small></span>
                </div>
              </Reveal>
            </div>

            <a className="scroll-cue" href="#facts">
              <span>Enter the vertical</span>
              <ArrowDown size={17} />
            </a>
          </div>
        </section>

        <section className="fact-rail" id="facts" aria-label="StaxBound key facts">
          <div className="shell fact-grid">
            {facts.map((fact, index) => (
              <Reveal className="fact" delay={index * 70} key={fact.value + fact.label}>
                <span className="fact-index">0{index + 1}</span>
                <strong>{fact.value}</strong>
                <p>{fact.label}</p>
              </Reveal>
            ))}
          </div>
          <p className="shell fact-disclaimer">Figures and terms are StaxBound statements and estimates. Preferred-term eligibility and duration depend on reach, diligence, availability, and final agreement.</p>
        </section>

        <section className="section manifesto" id="opportunity">
          <div className="shell editorial-grid">
            <Reveal><SectionTag index="01">The premise</SectionTag></Reveal>
            <Reveal className="editorial-heading" delay={80}>
              <p className="kicker">The market is bigger than the menu.</p>
              <h2>iGaming has spent years competing over variations of the <span>same familiar offer.</span></h2>
            </Reveal>
            <Reveal className="editorial-body" delay={150}>
              <p>StaxBound opens a different lane: a new vertical built around demand that today’s casino portfolio does not meaningfully serve.</p>
              <p>Not a reskin. Not a feature. Not another logo in an endless lobby. A new reason for a new audience to enter.</p>
              <a className="inline-arrow" href="#market-gap">See the white space <ArrowRight size={17} /></a>
            </Reveal>
          </div>
        </section>

        <section className="statement-band">
          <div className="statement-track" aria-hidden="true">
            <span>NOT ANOTHER TITLE</span><i>•</i><span>A NEW VERTICAL</span><i>•</i><span>NOT ANOTHER TITLE</span><i>•</i><span>A NEW VERTICAL</span>
          </div>
          <div className="shell statement-content">
            <Reveal>
              <p>Not another title.</p>
              <h2>A new reason to enter.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p>When familiar lobbies speak to familiar audiences, category-level difference becomes the growth story.</p>
            </Reveal>
          </div>
        </section>

        <section className="section market-gap" id="market-gap">
          <div className="shell">
            <Reveal><SectionTag index="02">The market gap</SectionTag></Reveal>
            <div className="market-layout">
              <Reveal className="market-copy" delay={70}>
                <p className="eyebrow">A massive opportunity hiding in plain sight</p>
                <h2>The current lobby ends. Demand doesn’t.</h2>
                <p>StaxBound sees a substantial audience and commercial opportunity sitting adjacent to conventional iGaming—largely underrepresented in existing portfolios and ready for a purpose-built entry point.</p>
              </Reveal>
              <Reveal className="market-visual" delay={150}>
                <div className="market-labels"><span>Today’s portfolio</span><span>Unclaimed vertical</span></div>
                <div className="market-bars" aria-hidden="true">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <i key={index} style={{ '--bar-height': `${22 + index * 7}%` } as CSSProperties} />
                  ))}
                  <b><span>StaxBound</span></b>
                </div>
                <p>Most providers add another horizontal layer. StaxBound opens a new axis.</p>
              </Reveal>
            </div>
            <Reveal className="cinema-frame cinema-vertical" delay={180}>
              <MotionImage animatedSrc="./images/staxbound-vertical.gif" animatedWebpSrc="./images/staxbound-vertical-motion.webp" stillSrc="./images/staxbound-vertical-poster.webp" alt="Abstract luminous vertical emerging from a field of dark platforms" />
              <span>THE UNCLAIMED AXIS / 02</span>
            </Reveal>
          </div>
        </section>

        <section className="section opportunity-number">
          <div className="shell">
            <Reveal><SectionTag index="03">The scale</SectionTag></Reveal>
            <Reveal className="cinema-frame cinema-vault" delay={60}>
              <MotionImage animatedSrc="./images/staxbound-vault.gif" animatedWebpSrc="./images/staxbound-vault-motion.webp" stillSrc="./images/staxbound-vault-poster.webp" alt="Abstract illuminated opportunity vault opening in a dark landscape" />
              <span>UNTAPPED OPPORTUNITY / 03</span>
            </Reveal>
            <Reveal className="number-lockup" delay={80}>
              <span className="number-prefix">$</span>
              <strong>50–60</strong>
              <span className="number-suffix">B</span>
            </Reveal>
            <div className="opportunity-caption">
              <Reveal>
                <h2>An underserved addressable opportunity—by StaxBound’s estimate.</h2>
              </Reveal>
              <Reveal delay={100}>
                <p>This is an internal estimate of total addressable opportunity, not projected revenue or a guarantee of adoption or financial performance. The ambition is enormous. The execution will be disciplined.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section growth-engine">
          <div className="shell">
            <Reveal><SectionTag index="04">The growth engine</SectionTag></Reveal>
            <Reveal className="center-heading">
              <p className="eyebrow">One vertical. Two growth levers.</p>
              <h2>Expand who enters. Expand what the lobby can earn.</h2>
            </Reveal>
            <Reveal className="cinema-frame cinema-growth" delay={70}>
              <MotionImage animatedSrc="./images/staxbound-growth.gif" animatedWebpSrc="./images/staxbound-growth-motion.webp" stillSrc="./images/staxbound-growth-poster.webp" alt="Two luminous energy streams joining into a new vertical growth engine" />
              <span>TWO GROWTH LEVERS / 04</span>
            </Reveal>
            <div className="growth-diagram">
              <Reveal className="growth-card growth-card-a" delay={80}>
                <div className="icon-box"><Users /></div>
                <span>01 / Audience</span>
                <h3>Reach new players</h3>
                <p>Broaden the operator proposition with a category designed to speak beyond the audience converting today.</p>
              </Reveal>
              <div className="growth-connector" aria-hidden="true"><span /><Zap size={22} /><span /></div>
              <Reveal className="growth-card growth-card-b" delay={150}>
                <div className="icon-box"><Gauge /></div>
                <span>02 / Revenue</span>
                <h3>Open incremental potential</h3>
                <p>Add a differentiated gaming lane alongside the existing portfolio—rather than reshuffling attention inside it.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section split-story acquisition-section">
          <div className="shell split-story-grid">
            <Reveal className="split-index"><span>05</span><Users /></Reveal>
            <Reveal className="split-title" delay={60}>
              <p className="eyebrow">Audience expansion</p>
              <h2>Give new players a reason to show up.</h2>
            </Reveal>
            <Reveal className="split-body" delay={130}>
              <p>A familiar lobby speaks to a familiar audience. StaxBound is designed to widen that conversation and help operators pursue consumers their current offer may not reach.</p>
              <p className="pull-quote">The strongest launches don’t just redistribute activity. They create another reason to arrive.</p>
            </Reveal>
          </div>
        </section>

        <section className="section split-story revenue-section">
          <div className="shell split-story-grid">
            <Reveal className="split-index"><span>06</span><Orbit /></Reveal>
            <Reveal className="split-title" delay={60}>
              <p className="eyebrow">Portfolio expansion</p>
              <h2>Create a lane that did not exist yesterday.</h2>
            </Reveal>
            <Reveal className="split-body" delay={130}>
              <p>StaxBound is designed to complement the established casino ecosystem with a distinct commercial proposition—not simply add another item to a crowded content feed.</p>
              <div className="mini-metric"><span>Existing portfolio</span><ArrowRight /><strong>Expanded category</strong></div>
            </Reveal>
          </div>
        </section>

        <section className="signal-section differentiation-section">
          <div className="shell signal-grid">
            <Reveal><SectionTag index="07">The difference</SectionTag></Reveal>
            <Reveal className="signal-headline" delay={60}>
              <h2>When every lobby looks alike, <span>difference becomes the product.</span></h2>
            </Reveal>
            <Reveal className="signal-copy" delay={130}>
              <p>Operators do not need more sameness. Aggregators do not need another interchangeable feed. They need a proposition commercial teams can put at the center of a serious growth conversation.</p>
              <ActionLink href="./contact.html" variant="dark">Start that conversation</ActionLink>
            </Reveal>
          </div>
        </section>

        <section className="section ambition-section">
          <div className="shell ambition-grid">
            <Reveal className="ambition-orbit" aria-hidden="true">
              <div><span>Scale</span><strong>∞</strong><small>Category ambition</small></div>
            </Reveal>
            <Reveal className="ambition-copy" delay={90}>
              <SectionTag index="08">The ambition</SectionTag>
              <p className="eyebrow">This is not niche-sized thinking.</p>
              <h2>A $50–60B company-estimated opportunity deserves a category-sized response.</h2>
              <p>A purpose-built vertical. A partner-ready route to market. An opening cohort with enough reach to make early movement matter.</p>
            </Reveal>
          </div>
        </section>

        <section className="section readiness-section" id="platform">
          <div className="shell">
            <Reveal><SectionTag index="09">The platform</SectionTag></Reveal>
            <div className="readiness-grid">
              <Reveal className="readiness-copy">
                <p className="eyebrow">Built before the hype</p>
                <h2>The product is real. The next work is partnership.</h2>
                <p>The core StaxBound platform and initial portfolio are built and ready for partner integration. This is not a concept deck waiting for an engineering team.</p>
                <ActionLink href="./contact.html" variant="secondary">Start technical scoping</ActionLink>
              </Reveal>
              <Reveal className="readiness-console" delay={120}>
                <div className="console-top"><span>STAXBOUND / READINESS</span><i /><i /><i /></div>
                {readiness.map(([label, status], index) => (
                  <div className="console-row" key={label}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{label}</strong>
                    <em className={status === 'Ready' ? 'ready' : ''}>{status}</em>
                  </div>
                ))}
                <div className="console-command"><span>›</span> awaiting_partner<span className="console-cursor" /></div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section execution-section">
          <div className="shell execution-grid">
            <Reveal className="execution-number">10</Reveal>
            <Reveal className="execution-heading" delay={60}>
              <p className="eyebrow">Integration, not invention</p>
              <h2>You are not funding a future promise.</h2>
            </Reveal>
            <Reveal className="execution-copy" delay={120}>
              <p>We begin with a functioning platform, align it to the partner environment, complete the required API implementation and validation, and prepare a credible release path.</p>
              <ul className="check-list">
                <li><Check /> Core system built</li>
                <li><CircleDot /> Partner-specific API alignment next</li>
                <li><CircleDot /> Partner QA, certification, and approvals follow</li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section moat-section">
          <div className="moat-media" aria-hidden="true">
            <img src="./images/staxbound-core.webp" alt="" width={1536} height={1024} loading="lazy" decoding="async" />
          </div>
          <div className="shell moat-content">
            <Reveal><SectionTag index="11">The foundation</SectionTag></Reveal>
            <div className="moat-layout">
              <Reveal className="moat-card" delay={90}>
                <Fingerprint size={32} />
                <p className="eyebrow">Patent-pending technology</p>
                <h2>A differentiated core—kept deliberately out of public view.</h2>
                <p>The technology behind StaxBound includes patent-pending elements. The open web gets the opportunity. Qualified partners get the product and technical diligence.</p>
                <small>Patent pending indicates filed applications; it does not mean a patent has been granted or guarantee that one will issue.</small>
              </Reveal>
              <Reveal className="cinema-frame moat-motion-frame" delay={150}>
                <MotionImage animatedSrc="./images/staxbound-core.gif" animatedWebpSrc="./images/staxbound-core-motion.webp" stillSrc="./images/staxbound-core-poster.webp" alt="A luminous protected core representing StaxBound's patent-pending foundation" />
                <span>DIFFERENTIATED CORE / 05</span>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section confidentiality-section">
          <div className="shell confidentiality-grid">
            <Reveal className="lock-visual">
              <div className="lock-rings" aria-hidden="true"><i /><i /><i /><LockKeyhole /></div>
            </Reveal>
            <Reveal className="confidentiality-copy" delay={100}>
              <SectionTag index="12">The advantage</SectionTag>
              <p className="eyebrow">The opportunity is public. The playbook is not.</p>
              <h2>We’ll tell the market why it matters. We’ll show qualified partners how it works.</h2>
              <p>The detail that creates the advantage belongs in a focused partner conversation—not on an open webpage.</p>
              <ActionLink href="./contact.html">Request a partner briefing</ActionLink>
            </Reveal>
          </div>
        </section>

        <section className="section aggregator-section" id="partners">
          <div className="shell">
            <Reveal><SectionTag index="13">For aggregators</SectionTag></Reveal>
            <div className="partner-lead-grid">
              <Reveal>
                <p className="eyebrow">Become the gateway</p>
                <h2>Bring a new vertical through one relationship.</h2>
              </Reveal>
              <Reveal delay={100}>
                <p>StaxBound gives aggregators a differentiated category conversation across an operator network. The broader the credible route to launch, the stronger the basis for an early commercial discussion.</p>
              </Reveal>
            </div>
            <Reveal className="cinema-frame cinema-aggregator" delay={120}>
              <MotionImage animatedSrc="./images/staxbound-aggregator.gif" animatedWebpSrc="./images/staxbound-aggregator-motion.webp" stillSrc="./images/staxbound-aggregator-poster.webp" alt="A luminous central integration branching into a broad network of operator gateways" />
              <span>NETWORK DISTRIBUTION / 06</span>
            </Reveal>
            <div className="benefit-grid">
              {[
                [Network, 'Differentiate the feed', 'Bring operators a category proposition—not another interchangeable supplier.'],
                [Target, 'Create a growth story', 'Lead with new-audience and incremental-revenue potential in operator conversations.'],
                [Sparkles, 'Move into preferred economics', 'Qualifying early participants may secure an opening commercial window.'],
                [Waypoints, 'Scale through reach', 'Turn credible operator distribution into a stronger launch-partner conversation.'],
              ].map(([Icon, title, body], index) => {
                const BenefitIcon = Icon as typeof Network
                return (
                  <Reveal className="benefit-card" delay={index * 70} key={String(title)}>
                    <BenefitIcon />
                    <span>0{index + 1}</span>
                    <h3>{String(title)}</h3>
                    <p>{String(body)}</p>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section operator-section">
          <div className="shell operator-grid">
            <Reveal className="operator-copy">
              <SectionTag index="14">For operators</SectionTag>
              <p className="eyebrow">Be early in your market</p>
              <h2>Independent operators don’t need permission to lead.</h2>
              <p>Speak with StaxBound about a direct launch path, subject to platform compatibility, jurisdiction, licensing, technical approval, and commercial agreement.</p>
              <ActionLink href="./contact.html" variant="secondary">Discuss an operator launch</ActionLink>
            </Reveal>
            <Reveal className="operator-visual" delay={120}>
              <div className="operator-node primary-node"><span>StaxBound</span></div>
              {['Platform', 'Operator', 'Audience', 'Growth'].map((label, index) => (
                <div className={`operator-node node-${index + 1}`} key={label}><span>{label}</span></div>
              ))}
              <svg viewBox="0 0 600 500" aria-hidden="true">
                <path d="M300 250 C220 120 110 130 80 80" />
                <path d="M300 250 C390 130 500 130 530 80" />
                <path d="M300 250 C200 350 110 350 70 420" />
                <path d="M300 250 C400 360 510 350 540 425" />
              </svg>
            </Reveal>
          </div>
        </section>

        <section className="early-section">
          <div className="shell early-layout">
            <Reveal className="early-badge"><span>15</span><Radio /></Reveal>
            <Reveal className="early-main" delay={70}>
              <p className="eyebrow">The founding window</p>
              <h2>The first wave gets the first-mover deal.</h2>
              <p>A limited cohort of qualifying early aggregator partners may receive preferred commercial terms for an initial <strong>6–18-month period.</strong></p>
            </Reveal>
            <Reveal className="early-aside" delay={140}>
              <span>THE PRINCIPLE</span>
              <p>Earlier, broader operator reach can support stronger economics.</p>
              <ActionLink href="./contact.html" variant="dark">Request early access</ActionLink>
            </Reveal>
          </div>
        </section>

        <section className="section terms-section">
          <div className="shell">
            <Reveal><SectionTag index="16">How the window works</SectionTag></Reveal>
            <div className="terms-heading">
              <Reveal><h2>Reach creates leverage.</h2></Reveal>
              <Reveal delay={100}><p>The preferred-term period reflects the number and reach of casino operators an aggregator can credibly activate. A focused network may support a shorter period; broader distribution may support a longer one.</p></Reveal>
            </div>
            <Reveal className="term-rail" delay={140}>
              <div className="term-line"><span /><i /><i /><i /><i /><i /><i /><b /></div>
              <div className="term-label term-start"><strong>6</strong><span>months</span><small>Focused reach</small></div>
              <div className="term-label term-mid"><strong>12</strong><span>months</span><small>Expanding reach</small></div>
              <div className="term-label term-end"><strong>18</strong><span>months</span><small>Broad reach</small></div>
            </Reveal>
            <p className="terms-note">Eligibility, economics, duration, qualifying operators, milestones, territory, and implementation scope are subject to diligence, availability, and a signed definitive agreement.</p>
          </div>
        </section>

        <section className="section honest-scarcity">
          <div className="shell honest-grid">
            <Reveal className="scarcity-mark"><Brackets /></Reveal>
            <Reveal className="scarcity-heading">
              <SectionTag index="17">Real scarcity</SectionTag>
              <h2>No fake countdown. No theatrical timer.</h2>
            </Reveal>
            <Reveal className="scarcity-copy" delay={100}>
              <p>The early-partner program is designed for the opening cohort of qualifying aggregator relationships. When that cohort is formed, the opening window closes.</p>
              <a className="inline-arrow" href="./contact.html">Enter the early-partner conversation <ArrowRight size={17} /></a>
            </Reveal>
          </div>
        </section>

        <section className="section first-mover-section">
          <div className="shell first-mover-grid">
            <Reveal className="vertical-word" aria-hidden="true">FIRST</Reveal>
            <Reveal className="first-mover-content" delay={80}>
              <SectionTag index="18">The timing</SectionTag>
              <p className="eyebrow">Category leadership is claimed before consensus.</p>
              <h2>The most valuable position is rarely available after everyone agrees.</h2>
              <p>Early partners gain time to learn, position, distribute, and build recognition before the category becomes conventional.</p>
            </Reveal>
          </div>
        </section>

        <section className="section multiplier-section">
          <div className="shell multiplier-layout">
            <Reveal className="multiplier-copy">
              <SectionTag index="19">The multiplier</SectionTag>
              <p className="eyebrow">One integration. A network of doors.</p>
              <h2>Aggregation turns technical alignment into commercial reach.</h2>
              <p>An aggregator relationship can create a route toward multiple operator conversations, subject to each operator’s commercial, technical, legal, and regulatory requirements.</p>
            </Reveal>
            <Reveal className="network-map" delay={130} aria-label="One StaxBound integration connecting through an aggregator to multiple operators">
              <div className="network-core"><span>SB</span></div>
              <div className="network-hub"><span>Aggregator</span></div>
              {[1, 2, 3, 4, 5].map((node) => <div className={`network-leaf leaf-${node}`} key={node}><span>OP {String(node).padStart(2, '0')}</span></div>)}
              <svg viewBox="0 0 700 520" aria-hidden="true">
                <path className="network-path main-path" d="M115 260 C210 260 225 260 320 260" />
                <path d="M410 260 C480 260 480 70 580 70" />
                <path d="M410 260 C500 260 500 160 630 160" />
                <path d="M410 260 C500 260 520 260 650 260" />
                <path d="M410 260 C500 260 500 360 630 360" />
                <path d="M410 260 C480 260 480 450 580 450" />
              </svg>
            </Reveal>
          </div>
        </section>

        <section className="section integration-section" id="integration">
          <div className="shell">
            <Reveal><SectionTag index="20">The path to market</SectionTag></Reveal>
            <Reveal className="integration-heading">
              <p className="eyebrow">From first conversation to launch path</p>
              <h2>Five serious steps. Zero theater.</h2>
            </Reveal>
            <div className="step-list">
              {launchSteps.map((step, index) => (
                <Reveal className="step-row" delay={index * 60} key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <ChevronRight aria-hidden="true" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section api-section">
          <div className="shell api-grid">
            <Reveal className="api-code" aria-hidden="true">
              <div className="code-window">
                <div className="code-top"><i /><i /><i /><span>partner.integration</span></div>
                <pre><code><span>01</span> discover(partner)<br/><span>02</span> align(api + markets)<br/><span>03</span> validate(product)<br/><span>04</span> certify(requirements)<br/><span>05</span> launch(network)<br/><b>→</b> scale(opportunity)</code></pre>
              </div>
            </Reveal>
            <Reveal className="api-copy" delay={100}>
              <SectionTag index="21">The integration</SectionTag>
              <p className="eyebrow">Your API. Our launch-ready platform.</p>
              <h2>Focused engineering. Partner-specific validation.</h2>
              <p>Integration timing is scoped per partner based on API specifications, documentation, QA, certification, compliance, resources, and deployment requirements.</p>
              <p className="accent-copy">The remaining path is knowable—and we’re ready to map it.</p>
            </Reveal>
          </div>
        </section>

        <section className="section rigor-section">
          <div className="shell">
            <Reveal><SectionTag index="22">Commercial rigor</SectionTag></Reveal>
            <Reveal className="rigor-heading"><h2>Big ambition. Disciplined execution.</h2></Reveal>
            <div className="rigor-grid">
              {[
                [ShieldCheck, 'Clear diligence', 'Validate fit, infrastructure, markets, and responsibilities before commitments are made.'],
                [Boxes, 'Defined scope', 'Turn platform readiness into a practical integration plan with explicit owners and gates.'],
                [Globe2, 'Market-by-market', 'Respect applicable licensing, certification, technical, privacy, and jurisdictional requirements.'],
                [Gauge, 'Measured rollout', 'Build a launch plan designed to learn, prove fit, and scale responsibly through the network.'],
              ].map(([Icon, title, body], index) => {
                const RigorIcon = Icon as typeof ShieldCheck
                return <Reveal className="rigor-card" delay={index * 70} key={String(title)}><RigorIcon/><h3>{String(title)}</h3><p>{String(body)}</p></Reveal>
              })}
            </div>
          </div>
        </section>

        <section className="section responsibility-section">
          <div className="shell responsibility-grid">
            <Reveal className="responsibility-icon"><ShieldCheck /></Reveal>
            <Reveal className="responsibility-heading">
              <SectionTag index="23">Responsible rollout</SectionTag>
              <h2>Growth and responsibility move together.</h2>
            </Reveal>
            <Reveal className="responsibility-copy" delay={90}>
              <p>Every deployment must comply with applicable law, licensing conditions, technical standards, age restrictions, responsible-gaming requirements, privacy obligations, and partner controls.</p>
              <p>Availability, features, and launch timing may vary by market. Each party remains responsible for its own regulatory obligations.</p>
            </Reveal>
          </div>
        </section>

        <section className="section profile-section">
          <div className="shell">
            <Reveal><SectionTag index="24">The fit</SectionTag></Reveal>
            <Reveal className="profile-heading"><p className="eyebrow">Who should be in this conversation?</p><h2>Partners with reach. Operators with ambition.</h2></Reveal>
            <div className="profile-grid">
              {[
                ['Aggregator', 'Meaningful operator distribution', 'Turn one product relationship into a differentiated network proposition.', Network],
                ['Multi-brand group', 'Multiple launch surfaces', 'Create a coordinated category rollout across brands, audiences, and markets.', Layers3],
                ['Independent operator', 'The appetite to lead early', 'Explore a direct path to differentiated inventory in an approved market.', Target],
              ].map(([title, eyebrow, body, Icon], index) => {
                const ProfileIcon = Icon as typeof Network
                return (
                  <Reveal className="profile-card" delay={index * 80} key={String(title)}>
                    <span>0{index + 1}</span><ProfileIcon/><small>{String(eyebrow)}</small><h3>{String(title)}</h3><p>{String(body)}</p><a href="./contact.html">Tell us about your reach <ArrowRight size={16}/></a>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-layout">
            <Reveal className="faq-intro">
              <SectionTag index="25">The questions</SectionTag>
              <p className="eyebrow">Straight answers for serious partners</p>
              <h2>What you need to know before the briefing.</h2>
              <p>The category mechanics stay confidential. The partnership basics don’t.</p>
              <ActionLink href="./contact.html" variant="secondary">Ask something else</ActionLink>
            </Reveal>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <Reveal delay={index * 35} key={faq.question}>
                  <details>
                    <summary><span>{String(index + 1).padStart(2, '0')}</span>{faq.question}<i /></summary>
                    <p>{faq.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="final-section">
          <div className="final-media" aria-hidden="true">
            <img src="./images/staxbound-network.webp" alt="" width={1916} height={821} loading="lazy" decoding="async" />
            <div className="final-overlay" />
          </div>
          <div className="shell final-content">
            <Reveal><SectionTag index="26">The decision</SectionTag></Reveal>
            <div className="final-lead-grid">
              <Reveal delay={70}>
                <p className="eyebrow">The vertical is ready.</p>
                <h2>Who brings it to market <em>first?</em></h2>
              </Reveal>
              <Reveal className="cinema-frame final-motion-frame" delay={120}>
                <MotionImage animatedSrc="./images/staxbound-network.gif" animatedWebpSrc="./images/staxbound-network-motion.webp" stillSrc="./images/staxbound-network-poster.webp" alt="A luminous network of operator gateways connected through one integration" />
                <span>DISTRIBUTION AT SCALE / 07</span>
              </Reveal>
            </div>
            <Reveal className="final-proof" delay={130}>
              <span><CircleDot /> $50–60B company-estimated opportunity</span>
              <span><CircleDot /> Core platform built</span>
              <span><CircleDot /> Patent pending</span>
              <span><CircleDot /> Preferred opening window</span>
            </Reveal>
            <Reveal className="final-actions" delay={190}>
              <ActionLink href="./contact.html">Request a partner briefing</ActionLink>
              <a className="direct-email" href="mailto:Harpula.T@gmail.com">or email Harpula.T@gmail.com <ArrowRight size={16}/></a>
            </Reveal>
          </div>
        </section>

        <div className="mobile-cta">
          <a href="./contact.html">Request partner access <ArrowRight size={17} /></a>
        </div>
      </main>
    </SiteChrome>
  )
}
