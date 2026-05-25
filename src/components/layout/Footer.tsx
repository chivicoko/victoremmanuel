import { Github, Linkedin, MessageCircle, Twitter } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  { icon: Github, href: 'https://github.com/chivicoko', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/codesvictor/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/codes_victor_/', label: 'Twitter' },
  { icon: MessageCircle, href: 'https://wa.me/+2348028845693', label: 'WhatsApp' },
]

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-12 border-t border-[rgba(255,255,255,0.07)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <Link href="#" className="font-display text-xl font-extrabold tracking-tight text-foreground">
              VO<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1.5">
              © {currentYear} Victor Okoye. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="social-link"
              >
                <social.icon className="w-[15px] h-[15px]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}