import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    {/* Left Block: Information */}
                    <div className="footer-info">
                        {/* Branding */}
                        <div className="footer-column branding-column">
                            <h3 className="footer-heading">479 Roofing Restoration</h3>
                            <p className="footer-description">
                                Premier roofing solutions in Arkansas.
                                Committed to quality, integrity, and your home's protection.
                            </p>

                            {/* OKLAHOMA BADGE */}
                            <div className="oklahoma-badge">
                                <MapPin size={18} className="badge-icon" />
                                <span>Now Serving Oklahoma</span>
                            </div>

                            <div className="social-icons">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    {/* TikTok Icon (Lucide might not have it, using SVG) */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-column links-column">
                            <h3 className="footer-heading">Quick Links</h3>
                            <ul className="footer-links">
                                <li><a href="/">Home</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#process">Our Process</a></li>
                                <li><a href="#testimonials">Reviews</a></li>
                            </ul>
                        </div>

                    </div>

                    {/* Right Block: Maps & Contact */}
                    <div className="footer-right-block">
                        {/* Maps */}
                        <div className="footer-map">
                        <div className="map-container primary-map">
                            <iframe
                                src="https://www.google.com/maps?q=1303+W+Sunset+Dr,Rogers,AR+72756&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="479 Roofing Restoration Rogers AR Location"
                            ></iframe>
                        </div>
                        <div className="map-container secondary-map">
                            <iframe
                                src="https://www.google.com/maps?q=Oklahoma+City,OK+73122&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="479 Roofing Restoration Oklahoma City Location"
                            ></iframe>
                            <div className="map-badge">Now in OK!</div>
                        </div>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="footer-column contact-column">
                            <h3 className="footer-heading centered-heading">Contact</h3>
                            <ul className="contact-list horizontal-list">
                                <li>
                                    <a href="https://maps.google.com/?q=Rogers+AR+72756" target="_blank" rel="noopener noreferrer" className="contact-link">
                                        <MapPin size={18} className="contact-icon" />
                                        <span>Rogers, AR 72756</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://maps.google.com/?q=Oklahoma+City+OK+73122" target="_blank" rel="noopener noreferrer" className="contact-link">
                                        <MapPin size={18} className="contact-icon ok-icon" />
                                        <span>Oklahoma City, OK 73122</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:4792783764" className="contact-link">
                                        <Phone size={18} className="contact-icon" />
                                        <span>(479) 278-3764</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:479roofing@gmail.com" className="contact-link">
                                        <Mail size={18} className="contact-icon" />
                                        <span>479roofing@gmail.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} 479 Roofing Restoration. All rights reserved. | Licensed & Insured in AR.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
