import React from 'react';
import { ShieldAlert, Camera, Briefcase, Phone, ArrowRight, Umbrella } from 'lucide-react';
import './StormRestoration.css';

const StormRestorationPage = () => {
    return (
        <div className="storm-page">
            {/* Hero Section */}
            <section className="storm-hero">
                <div className="container hero-content">
                    <div className="emergency-badge-float">
                        <ShieldAlert size={16} />
                        <span>24/7 Emergency Service</span>
                    </div>

                    <h1 className="storm-headline">Storm Damage in Rogers?<br />We’re Your Local First Response.</h1>
                    <p className="storm-subheadline">
                        From emergency tarping to full insurance claim representation, 479 Roofing Restoration protects Northwest Arkansas homes when severe weather strikes. Don't panic, call the local experts.
                    </p>

                    <div className="hero-actions">
                        <button className="btn-storm-primary">
                            Start My Claim Assessment <ArrowRight size={20} />
                        </button>
                        <a href="tel:+17045848280" className="btn-storm-secondary">
                            <Phone size={20} className="phone-icon-vibrate" />
                            Call Now: (704) 584-8280
                        </a>
                    </div>
                </div>
            </section>

            {/* Insurance Claim Roadmap */}
            <section className="roadmap-section">
                <div className="container">
                    <h2 className="section-title-dark">The Insurance Claim Roadmap</h2>
                    <p className="section-subtitle-dark">We speak the adjuster's language so you don't have to.</p>

                    <div className="roadmap-grid">
                        {/* Card 1: Emergency Mitigation */}
                        <div className="roadmap-card">
                            <div className="card-icon-wrapper">
                                <Umbrella size={32} />
                            </div>
                            <h3>Emergency Mitigation</h3>
                            <p>Immediate dispatch for tarping and temporary waterproofing to stop further damage instantly.</p>
                        </div>

                        {/* Card 2: Evidence Collection */}
                        <div className="roadmap-card">
                            <div className="card-icon-wrapper">
                                <Camera size={32} />
                            </div>
                            <h3>Evidence Collection</h3>
                            <p>Comprehensive forensic documentation including drone imagery to present irrefutable proof to your insurer.</p>
                        </div>

                        {/* Card 3: Adjuster Meeting */}
                        <div className="roadmap-card">
                            <div className="card-icon-wrapper">
                                <Briefcase size={32} />
                            </div>
                            <h3>Adjuster Meeting</h3>
                            <p>We meet on your roof with the insurance adjuster to advocate for every shingle and ensure fair coverage.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Strip (Insurance Carriers) */}
            <section className="partners-strip">
                <div className="container">
                    <p className="partners-label">We Work With All Major Insurance Carriers</p>
                    <div className="partners-logos-text">
                        <span>STATE FARM</span>
                        <div className="separator">●</div>
                        <span>ALLSTATE</span>
                        <div className="separator">●</div>
                        <span>LIBERTY MUTUAL</span>
                        <div className="separator">●</div>
                        <span>GEICO</span>
                        <div className="separator">●</div>
                        <span>USA A</span>
                        <div className="separator">●</div>
                        <span>FARMERS</span>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="storm-final-cta">
                <div className="container text-center">
                    <h2 className="final-cta-title">Don't Wait for the Next Storm to Hit.</h2>
                    <p className="final-cta-subtitle">
                        Get a professional assessment today and ensure your home is ready for whatever Northwest Arkansas weather brings.
                    </p>
                    <button className="btn-storm-primary">
                        Get My Free Assessment <ArrowRight size={20} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default StormRestorationPage;
