"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Zap, Sparkles, TrendingUp, MessageSquare, Award, CreditCard, Crown, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="plain"
      cardStyle="glass-flat"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal 
          brandName="AIFlow"
          button={{ text: "Get Started", href: "contact" }}
          className="border-b border-current border-opacity-10"
        />
      </div>

      {/* Hero */}
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Intelligent Automation for Modern Teams"
          description="Harness the power of AI to streamline workflows, reduce manual work, and accelerate growth. Built for teams that demand precision and speed."
          tag="AI-Powered"
          tagIcon={Zap}
          buttons={[
            { text: "Start Free Trial", href: "pricing" },
            { text: "View Demo", href: "about" }
          ]}
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062642441-zh5hg4ct.jpg", imageAlt: "AI machine learning dashboard" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062643123-sqjufo4r.png", imageAlt: "Neural networks visualization" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062643923-0fmw06ft.jpg", imageAlt: "AI technology data processing" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062645157-74lxnufe.jpg", imageAlt: "Machine learning automation" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062645954-v0dmzmvm.jpg", imageAlt: "AI automation workplace" }
          ]
          className="min-h-screen"
          titleClassName="text-5xl lg:text-6xl font-bold tracking-tight"
          descriptionClassName="text-lg lg:text-xl max-w-2xl"
        />
      </div>

      {/* Features */}
      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Powerful Features Built for Scale"
          description="Everything you need to transform your workflow with advanced AI capabilities designed for enterprise teams."
          tag="Core Features"
          tagIcon={Sparkles}
          features={[
            {
              id: 1,
              title: "Intelligent Processing",
              description: "Advanced AI algorithms process data in real-time, learning from patterns to deliver increasingly accurate results and insights for your business decisions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062646862-rqrcwaah.jpg"
            },
            {
              id: 2,
              title: "Workflow Automation",
              description: "Eliminate repetitive tasks by automating complex workflows. Save hours daily while reducing human error and increasing team productivity across departments.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062647662-2kuo6yve.jpg"
            },
            {
              id: 3,
              title: "Predictive Analytics",
              description: "Anticipate market trends and customer behavior with machine learning models. Make data-driven decisions before competition and stay ahead of market changes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062648324-h8tz1nv7.jpg"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg max-w-2xl"
        />
      </div>

      {/* Metrics */}
      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Trusted by Industry Leaders"
          description="Join thousands of companies accelerating their growth with our AI platform"
          tag="Impact"
          tagIcon={TrendingUp}
          metrics={[
            { id: "1", value: "98%", description: "Accuracy Rate" },
            { id: "2", value: "10M+", description: "Processes Daily" },
            { id: "3", value: "50K+", description: "Active Users" },
            { id: "4", value: "4.9/5", description: "Customer Rating" }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg max-w-2xl"
        />
      </div>

      {/* Testimonials */}
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Customers Say"
          description="Hear from teams transforming their operations with AIFlow"
          tag="Social Proof"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "VP of Operations",
              company: "TechCorp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062649098-mbvo4of6.jpg",
              imageAlt: "Sarah Chen headshot"
            },
            {
              id: "2",
              name: "Marcus Johnson",
              role: "CEO",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062649554-bfga4rn5.jpg",
              imageAlt: "Marcus Johnson headshot"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Product Manager",
              company: "Future Systems",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062650634-ycm9vzfd.jpg",
              imageAlt: "Elena Rodriguez headshot"
            },
            {
              id: "4",
              name: "David Park",
              role: "Engineering Lead",
              company: "Digital Innovations",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062651197-nzqiuvhy.jpg",
              imageAlt: "David Park headshot"
            }
          ]}
          textboxLayout="default"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg max-w-2xl"
        />
      </div>

      {/* Social Proof */}
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="Join enterprise teams using AIFlow to accelerate their business"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062652484-jzgz71lp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062653064-x27lt7j7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062653537-qty2lxtr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062654251-y2i0nztk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062654767-kd08a8dg.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062655414-foj2mf3s.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062656165-g8a1m4e2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062656943-258ezsc1.jpg"
          ]
          textboxLayout="default"
          speed={40}
          showCard={true}
        />
      </div>

      {/* Pricing */}
      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your team. Always scale as you grow."
          tag="Pricing"
          tagIcon={CreditCard}
          plans={[
            {
              id: "starter",
              badge: "Getting Started",
              badgeIcon: Zap,
              price: "$29/mo",
              subtitle: "Perfect for individuals and small teams",
              features: [
                "Up to 5 team members",
                "5,000 monthly processes",
                "Basic analytics dashboard",
                "Email support",
                "API access"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$99/mo",
              subtitle: "Ideal for growing teams and departments",
              features: [
                "Up to 25 team members",
                "50,000 monthly processes",
                "Advanced analytics & reporting",
                "Priority support",
                "Custom workflows",
                "API & webhooks"
              ]
            },
            {
              id: "enterprise",
              badge: "For Scale",
              badgeIcon: Crown,
              price: "Custom",
              subtitle: "Enterprise-grade solution with dedicated support",
              features: [
                "Unlimited team members",
                "Unlimited monthly processes",
                "Full analytics suite",
                "24/7 dedicated support",
                "Custom integrations",
                "SLA guarantee",
                "On-premise option"
              ]
            }
          ]
          animationType="slide-up"
          textboxLayout="default"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg max-w-2xl"
        />
      </div>

      {/* FAQ */}
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about AIFlow and how it works"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How long does it take to set up AIFlow?",
              content: "Most teams get started in under 30 minutes. We provide step-by-step onboarding, pre-built templates, and dedicated setup support to ensure a smooth integration with your existing workflows."
            },
            {
              id: "2",
              title: "What data security measures are in place?",
              content: "We use enterprise-grade encryption, comply with GDPR and SOC 2 standards, and offer optional on-premise deployment. All data is automatically backed up and encrypted both in transit and at rest."
            },
            {
              id: "3",
              title: "Can I integrate AIFlow with my existing tools?",
              content: "Yes. AIFlow integrates with 500+ popular business applications through native connectors and our REST API. Our team can also build custom integrations for enterprise customers."
            },
            {
              id: "4",
              title: "What kind of support do you provide?",
              content: "We offer email support for all plans, priority support for Professional tier, and 24/7 dedicated support for Enterprise customers. Plus, extensive documentation and video tutorials."
            },
            {
              id: "5",
              title: "Is there a free trial available?",
              content: "Absolutely. All plans come with a 14-day free trial, no credit card required. Full access to all features so you can test AIFlow with your actual workflows."
            },
            {
              id: "6",
              title: "How does billing work? Can I change plans anytime?",
              content: "Billing is monthly or annual. You can upgrade or downgrade anytime. Unused credits are rolled over, and we prorate charges when you make changes mid-month."
            }
          ]
          textboxLayout="default"
          animationType="smooth"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg max-w-2xl"
        />
      </div>

      {/* Contact */}
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get Started Today"
          description="Join thousands of teams accelerating growth with AIFlow. Reach out to our team for a personalized demo or to answer any questions."
          inputs={[
            { name: "name", type: "text", placeholder: "Your name", required: true },
            { name: "email", type: "email", placeholder: "Work email", required: true },
            { name: "company", type: "text", placeholder: "Company name", required: true },
            { name: "role", type: "text", placeholder: "Your role", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your use case and goals",
            rows: 5,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062651917-b7hbfb11.jpg"
          imageAlt="Modern office workspace collaboration"
          mediaPosition="right"
          buttonText="Get Started"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg"
        />
      </div>

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="AIFlow"
          columns={[
            {
              items: [
                { label: "Product", href: "#" },
                { label: "Features", href: "#" },
                { label: "Pricing", href: "pricing" },
                { label: "Security", href: "#" }
              ]
            },
            {
              items: [
                { label: "Company", href: "#" },
                { label: "About", href: "about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              items: [
                { label: "Resources", href: "#" },
                { label: "Documentation", href: "#" },
                { label: "API Docs", href: "#" },
                { label: "Support", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Legal", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]
        />
      </div>
    </ThemeProvider>
  );
}