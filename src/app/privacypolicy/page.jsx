// app/privacy-policy/page.jsx
"use client";

// export const metadata = {
//   title: "Privacy Policy - SkillzRevo Academy",
//   description: "Privacy Policy for SkillzRevo Solutions Pvt. Ltd. — how we collect, use, and protect your personal data.",
//   robots: "follow, index",
//   alternates: { canonical: "https://academy.skillzrevo.com/privacy-policy/" },
// };

import Link from "next/link";

const LAST_UPDATED = "January 2025";

export default function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>

      {/* Hero strip */}
      <div style={{ background: "linear-gradient(135deg, #1d8fff, #1642d6)", padding: "64px 24px 48px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ color: "#c4b5fd", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>
            SkillzRevo Solutions Pvt. Ltd.
          </p>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
            Privacy Policy
          </h1>
          <p style={{ color: "#ddd6fe", fontSize: 14, margin: 0, fontWeight: 600 }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Quick nav */}
        <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "20px 24px", marginBottom: 40 }}>
          <p style={{ fontSize: 13, fontWeight: 800, color: "#374151", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>
            Contents
          </p>
          <ol style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 6 }}>
            {[
              "Introduction",
              "Information We Collect",
              "How We Use Your Information",
              "Data Sharing",
              "Data Security",
              "Your Rights",
              "Additional Provisions for K–12 Programs",
              "Third-Party Links",
              "Policy Updates",
              "Contact Us",
            ].map((item, i) => (
              <li key={i}>
                <a href={`#section-${i + 1}`}
                  style={{ color: "#1d8fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}
                  onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                  onMouseLeave={(e) => e.target.style.textDecoration = "none"}>
                  {item}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* ── SECTION 1 ── */}
        <Section id="section-1" number="1" title="Introduction">
          <P>
            At SkillzRevo Solutions Pvt. Ltd. ("we," "our," "us"), we are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use our website, applications, and services.
          </P>
          <Highlight color="#ede9fe" border="#1d8fff">
            For K–12 programs, we take additional measures to protect children's data and ensure parental control.
          </Highlight>
        </Section>

        {/* ── SECTION 2 ── */}
        <Section id="section-2" number="2" title="Information We Collect">
          <SubHeading>a. Personal Information</SubHeading>
          <P>We collect information such as:</P>
          <BulletList items={[
            "Name (student/parent)",
            "Email address",
            "Phone number",
            "Billing details",
            "Educational details (course, grade, preferences)",
          ]} />

          <SubHeading>b. Usage Data</SubHeading>
          <BulletList items={["IP address", "Browser type", "Pages visited", "Time spent on platform"]} />

          <SubHeading>c. Cookies & Tracking</SubHeading>
          <P>We use cookies and similar technologies to improve user experience and analyze usage.</P>
        </Section>

        {/* ── SECTION 3 ── */}
        <Section id="section-3" number="3" title="How We Use Your Information">
          <P>We use your data to:</P>
          <BulletList items={[
            "Deliver courses and services",
            "Process payments",
            "Provide updates and communication",
            "Improve platform and user experience",
            "Ensure safety and prevent misuse",
          ]} />
        </Section>

        {/* ── SECTION 4 ── */}
        <Section id="section-4" number="4" title="Data Sharing">
          <P>
            We do not sell your data. We may share data only:
          </P>
          <BulletList items={[
            "With trusted service providers (payment, hosting, analytics)",
            "When required by law",
            "During business transfers",
          ]} />
        </Section>

        {/* ── SECTION 5 ── */}
        <Section id="section-5" number="5" title="Data Security">
          <P>
            We use industry-standard security measures including encryption, secure servers, and access controls to protect your data. However, no system is 100% secure and we cannot guarantee absolute security.
          </P>
        </Section>

        {/* ── SECTION 6 ── */}
        <Section id="section-6" number="6" title="Your Rights">
          <P>You have the right to:</P>
          <BulletList items={[
            "Access or update your personal data",
            "Request deletion of your data",
            "Opt-out of marketing communications",
          ]} />
        </Section>

        {/* ── SECTION 7 ── */}
        <Section id="section-7" number="7" title="Additional Provisions for K–12 Programs">
          <Highlight color="#fef9c3" border="#b45309">
            These provisions apply specifically to users enrolled in SkillzRevo Academy Junior (K–12) programs.
          </Highlight>

          <SubHeading>a. Parental Consent</SubHeading>
          <P>Users under 18 may access services only with parental or guardian consent. Parents are responsible for reviewing these terms on behalf of their children.</P>

          <SubHeading>b. Limited Data Collection</SubHeading>
          <P>We collect only the minimum data necessary for educational purposes from minors. We do not collect sensitive personal information beyond what is required to deliver the service.</P>

          <SubHeading>c. Parental Rights</SubHeading>
          <P>Parents and guardians have the right to:</P>
          <BulletList items={[
            "Access their child's data",
            "Request correction or deletion of child data",
            "Withdraw consent at any time",
          ]} />

          <SubHeading>d. Child Data Protection</SubHeading>
          <BulletList items={[
            "We do not sell children's personal data",
            "We do not serve targeted advertising to minors",
            "Child data is stored securely and accessed only by authorised staff",
          ]} />
        </Section>

        {/* ── SECTION 8 ── */}
        <Section id="section-8" number="8" title="Third-Party Links">
          <P>
            Our platform may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.
          </P>
        </Section>

        {/* ── SECTION 9 ── */}
        <Section id="section-9" number="9" title="Policy Updates">
          <P>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "last updated" date. Continued use of the platform after updates constitutes acceptance of the revised policy.
          </P>
        </Section>

        {/* ── SECTION 10 ── */}
        <Section id="section-10" number="10" title="Contact Us">
          <P>If you have any questions or concerns about this Privacy Policy, please contact us:</P>
          <div style={{ background: "#f3f4f6", borderRadius: 10, padding: "16px 20px", marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
            <ContactRow icon="📧" label="Email" value="info@skillzrevo.com" href="mailto:info@skillzrevo.com" />
            <ContactRow icon="🌐" label="Website" value="skillzrevo.com" href="https://skillzrevo.com" />
          </div>
        </Section>

        {/* Related links */}
        {/* <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid #e5e7eb" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 14 }}>
            Related Policies
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { label: "Terms & Conditions", href: "/TermsandConditions" },
              { label: "Refund & Cancellation Policy", href: "/cancellation-refund-policy" },
              { label: "Online Safety Policy", href: "/online-safety-policy" },
            ].map(({ label, href }) => (
              <Link key={label} href={href}
                style={{
                  display: "inline-block", padding: "8px 16px", borderRadius: 8,
                  border: "1px solid #e5e7eb", background: "#fff",
                  color: "#1d8fff", fontSize: 13, fontWeight: 700, textDecoration: "none",
                }}>
                {label} →
              </Link>
            ))}
          </div>
        </div> */}

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────── */
function Section({ id, number, title, children }) {
  return (
    <div id={id} style={{ marginBottom: 44 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <span style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 32, height: 32, borderRadius: 8, flexShrink: 0,
          background: "#1d8fff", color: "#fff", fontSize: 13, fontWeight: 800,
        }}>
          {number}
        </span>
        <h2 style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)", fontWeight: 800, color: "#111827", margin: 0 }}>
          {title}
        </h2>
      </div>
      <div style={{ paddingLeft: 44 }}>
        {children}
      </div>
      <div style={{ height: 1, background: "#f3f4f6", marginTop: 36 }} />
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <p style={{ fontSize: 14, fontWeight: 800, color: "#374151", margin: "18px 0 8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
      {children}
    </p>
  );
}

function P({ children }) {
  return (
    <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.75, margin: "0 0 10px" }}>
      {children}
    </p>
  );
}

function BulletList({ items }) {
  return (
    <ul style={{ margin: "4px 0 12px", paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "#4b5563", lineHeight: 1.6 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1d8fff", flexShrink: 0, marginTop: 9 }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Highlight({ children, color = "#ede9fe", border = "#1d8fff" }) {
  return (
    <div style={{
      background: color, borderLeft: `3px solid ${border}`,
      borderRadius: "0 8px 8px 0", padding: "12px 16px", marginBottom: 14,
    }}>
      <p style={{ fontSize: 14, color: "#374151", fontWeight: 700, margin: 0, lineHeight: 1.65 }}>
        {children}
      </p>
    </div>
  );
}

function ContactRow({ icon, label, value, href }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontSize: 16 }}>{icon}</span>
      <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 700, minWidth: 60 }}>{label}:</span>
      <a href={href} style={{ fontSize: 14, color: "#1d8fff", fontWeight: 700, textDecoration: "none" }}>
        {value}
      </a>
    </div>
  );
}