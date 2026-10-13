import {
  ArrowRight,
  Building2,
  Check,
  Clock3,
  Globe2,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { MotionImage } from './components/MotionImage'
import { Reveal } from './components/Reveal'
import { ActionLink, SectionTag, SiteChrome } from './components/SiteChrome'

type SubmitState = 'idle' | 'submitting' | 'sent' | 'fallback' | 'error'

function formatInquiry(data: Record<string, FormDataEntryValue>) {
  const labels: Record<string, string> = {
    name: 'Name',
    email: 'Work email',
    company: 'Company',
    role: 'Role / title',
    partnerType: 'Partner type',
    markets: 'Primary markets',
    operatorReach: 'Operator reach',
    timing: 'Target timing',
    nda: 'Interested in confidentiality arrangements',
    updates: 'Product and partnership updates',
    message: 'Message',
  }

  return Object.entries(data)
    .filter(([key, value]) => key !== 'website' && value)
    .map(([key, value]) => `${labels[key] ?? key}: ${String(value)}`)
    .join('\n')
}

export function ContactPage() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (formData.get('website')) return

    const payload = Object.fromEntries(formData.entries())
    setSubmitState('submitting')

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!response.ok) throw new Error(`Form endpoint returned ${response.status}`)
        form.reset()
        setSubmitState('sent')
        return
      } catch {
        setSubmitState('error')
        return
      }
    }

    const subject = encodeURIComponent(`StaxBound partner inquiry — ${String(payload.company || payload.name || 'New partner')}`)
    const body = encodeURIComponent(formatInquiry(payload))
    setSubmitState('fallback')
    window.location.href = `mailto:Harpula.T@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <SiteChrome contact>
      <main id="main-content" className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-media" aria-hidden="true">
            <MotionImage animatedSrc="./images/staxbound-network.gif" stillSrc="./images/staxbound-network.webp" alt="" eager />
            <div />
          </div>
          <div className="shell contact-hero-content">
            <Reveal>
              <a className="back-link" href="./index.html"><ArrowRight size={15} /> Back to the opportunity</a>
              <p className="eyebrow">Partner access / Now open</p>
              <h1>Let’s bring a new vertical <em>to market.</em></h1>
              <p>Whether you aggregate content across an operator network or run an independent casino, tell us where you operate, who you reach, and what your launch path looks like.</p>
            </Reveal>
            <Reveal className="contact-hero-aside" delay={120}>
              <span className="status-dot" />
              <strong>Qualified partner briefings</strong>
              <p>Confidential product diligence can follow under a mutually executed NDA.</p>
            </Reveal>
          </div>
        </section>

        <section className="contact-facts">
          <div className="shell contact-fact-grid">
            {[
              [Network, 'Aggregator', 'Operator distribution and platform reach'],
              [Building2, 'Casino operator', 'Direct launch potential where required approvals are in place'],
              [Globe2, 'Platform partner', 'Technical fit and a credible route to market'],
              [Sparkles, 'Founding cohort', 'Potential preferred terms for early partners'],
            ].map(([Icon, title, body], index) => {
              const FactIcon = Icon as typeof Network
              return (
                <Reveal className="contact-fact" delay={index * 60} key={String(title)}>
                  <FactIcon /><span>0{index + 1}</span><h2>{String(title)}</h2><p>{String(body)}</p>
                </Reveal>
              )
            })}
          </div>
        </section>

        <section className="section contact-form-section">
          <div className="shell contact-layout">
            <Reveal className="contact-intro">
              <SectionTag index="01">Start the conversation</SectionTag>
              <p className="eyebrow">Tell us about your reach</p>
              <h2>Serious opportunity starts with useful context.</h2>
              <p>Give us enough information to evaluate fit and route your inquiry into the right commercial and technical conversation.</p>

              <div className="contact-direct">
                <span>Prefer email?</span>
                <a href="mailto:Harpula.T@gmail.com"><Mail size={18} /> Harpula.T@gmail.com</a>
              </div>

              <div className="contact-expectations">
                <div><Clock3 /><span><strong>Focused response</strong><small>Qualified inquiries move into a direct partner conversation.</small></span></div>
                <div><ShieldCheck /><span><strong>Business use only</strong><small>No player support, wagering, or consumer account inquiries.</small></span></div>
              </div>
            </Reveal>

            <Reveal className="form-panel" delay={100}>
              {submitState === 'sent' ? (
                <div className="form-success" role="status">
                  <div><Check /></div>
                  <p className="eyebrow">Inquiry received</p>
                  <h2>We have your details.</h2>
                  <p>If there is a potential fit, StaxBound will follow up to arrange the next conversation.</p>
                  <ActionLink href="./index.html" variant="secondary">Return to StaxBound</ActionLink>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-heading">
                    <span>PARTNER INQUIRY / 001</span>
                    <i className="form-status">Accepting inquiries</i>
                  </div>

                  <div className="form-grid">
                    <label>
                      <span>First and last name *</span>
                      <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
                    </label>
                    <label>
                      <span>Work email *</span>
                      <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
                    </label>
                    <label>
                      <span>Company *</span>
                      <input name="company" type="text" autoComplete="organization" required placeholder="Company name" />
                    </label>
                    <label>
                      <span>Role / title *</span>
                      <input name="role" type="text" autoComplete="organization-title" required placeholder="Your role" />
                    </label>
                    <label>
                      <span>Partner type *</span>
                      <select name="partnerType" required defaultValue="">
                        <option value="" disabled>Select one</option>
                        <option>Aggregator</option>
                        <option>Casino operator</option>
                        <option>Platform provider</option>
                        <option>Strategic partner</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label>
                      <span>Operators represented *</span>
                      <select name="operatorReach" required defaultValue="">
                        <option value="" disabled>Select reach</option>
                        <option>1</option>
                        <option>2–5</option>
                        <option>6–15</option>
                        <option>16+</option>
                        <option>Not applicable</option>
                      </select>
                    </label>
                    <label className="field-wide">
                      <span>Primary markets or jurisdictions *</span>
                      <input name="markets" type="text" required placeholder="e.g. UK, Ontario, multiple regulated markets" />
                    </label>
                    <label className="field-wide">
                      <span>Target launch timing</span>
                      <select name="timing" defaultValue="">
                        <option value="" disabled>Select your target</option>
                        <option>As soon as technically ready</option>
                        <option>Within 3–6 months</option>
                        <option>Within 6–12 months</option>
                        <option>Exploratory / planning</option>
                      </select>
                    </label>
                    <label className="field-wide">
                      <span>What should we know? *</span>
                      <textarea name="message" required rows={6} placeholder="Tell us about your distribution, operator network, current platform, priority markets, and what a strong launch could look like." />
                    </label>
                    <label className="honeypot" aria-hidden="true">
                      <span>Website</span>
                      <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <div className="checkbox-stack">
                    <label className="checkbox-row">
                      <input type="checkbox" name="nda" value="Yes" />
                      <span>I would like to discuss confidentiality arrangements.</span>
                    </label>
                    <label className="checkbox-row">
                      <input type="checkbox" name="updates" value="Yes" />
                      <span>I’d like occasional StaxBound product and partnership updates. I can unsubscribe at any time.</span>
                    </label>
                    <label className="checkbox-row required-check">
                      <input type="checkbox" name="consent" value="Accepted" required />
                      <span>I understand StaxBound will process this information to evaluate and respond to my business inquiry. *</span>
                    </label>
                  </div>

                  <button className="submit-button" type="submit" disabled={submitState === 'submitting'}>
                    <span>{submitState === 'submitting' ? 'Sending inquiry…' : 'Request a partner briefing'}</span>
                    <ArrowRight size={19} />
                  </button>

                  {submitState === 'fallback' && (
                    <p className="form-message" role="status">Your email application is opening with the inquiry addressed to Harpula.T@gmail.com. Review it and press send to complete your request.</p>
                  )}
                  {submitState === 'error' && (
                    <p className="form-message form-error" role="alert">The form endpoint could not be reached. Please email <a href="mailto:Harpula.T@gmail.com">Harpula.T@gmail.com</a> directly.</p>
                  )}

                  <p className="form-legal">Do not submit confidential or proprietary information through this form. Submission does not create a partnership, exclusivity, confidentiality obligation, or other agreement.</p>
                </form>
              )}
            </Reveal>
          </div>
        </section>

        <section className="section what-next-section">
          <div className="shell">
            <Reveal><SectionTag index="02">What happens next</SectionTag></Reveal>
            <Reveal className="what-next-heading"><h2>A direct path from fit to diligence.</h2></Reveal>
            <div className="what-next-grid">
              {[
                ['01', 'Fit review', 'We review your company, footprint, platform role, and intended path to market.'],
                ['02', 'Partner conversation', 'Qualified inquiries move into a focused commercial and product discussion.'],
                ['03', 'Confidential diligence', 'Where appropriate, we align confidentiality and examine the product and technical model.'],
                ['04', 'Launch scoping', 'We map commercial terms, API work, markets, controls, validation, and rollout.'],
              ].map(([number, title, body], index) => (
                <Reveal className="what-next-card" delay={index * 70} key={number}>
                  <span>{number}</span><h3>{title}</h3><p>{body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-close">
          <div className="shell contact-close-grid">
            <Reveal>
              <p className="eyebrow">One category. One opening cohort.</p>
              <h2>The strongest first move is a conversation.</h2>
            </Reveal>
            <Reveal delay={100}>
              <p>A company-estimated $50–60B opportunity. A built core platform. Patent-pending technology. A limited path to early-partner economics.</p>
              <a href="mailto:Harpula.T@gmail.com">Harpula.T@gmail.com <ArrowRight size={18} /></a>
            </Reveal>
          </div>
        </section>

        <section className="privacy-note" id="privacy">
          <div className="shell">
            <strong>Inquiry privacy note</strong>
            <p>Information submitted through this page is intended solely to evaluate and respond to a StaxBound business inquiry. Do not include confidential, proprietary, player, or wagering information. For deletion or correction requests, contact <a href="mailto:Harpula.T@gmail.com">Harpula.T@gmail.com</a>. Formal privacy terms should be reviewed with legal counsel before public launch.</p>
          </div>
        </section>
      </main>
    </SiteChrome>
  )
}
