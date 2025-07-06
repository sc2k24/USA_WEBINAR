import React from 'react';
import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@usawebinar.com", label: "Email" },
  ];

  return (
    <footer className="py-12 px-4 usa-gradient-bg border-t border-red-500/20">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <span className="text-3xl font-bold">
             <span className="text-slate-100">USA</span><span className="usa-text-gradient">Webinar</span>
          </span>
          <p className="text-slate-300 mt-2 text-sm">
            Your first step towards an American education.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-red-400 transition-colors duration-300"
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        <div className="text-sm text-slate-400 space-x-4 mb-6">
          <a href="#" className="hover:text-red-300 transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-red-300 transition-colors">Terms of Service</a>
          <span>|</span>
          <a href="mailto:contact@usawebinar.com" className="hover:text-red-300 transition-colors">Contact: contact@usawebinar.com</a>
        </div>
        
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} USAWebinar. All rights reserved. 
          This webinar is for informational purposes only and does not guarantee admission or visa.
        </p>
      </div>
    </footer>
  );
};

export default Footer;