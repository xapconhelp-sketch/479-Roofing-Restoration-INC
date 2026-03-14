import React from 'react';
import { Home, Layers, ShieldCheck, Trash2, Droplets, FileText, Maximize2, MapPin, TriangleAlert, CheckCircle, ArrowRight, DollarSign } from 'lucide-react';
import './RoofReplacementPage.css';

const RoofReplacementPage = () => {
    return (
        <div className="replacement-page">
            {/* Hero Section */}
            <section className="replacement-hero">
                <div className="container hero-content">
                    <div className="replacement-badge">
                        <Home size={16} />
                        <span>Strategic Roof Replacement</span>
                    </div>
                    <h1 className="replacement-headline">
                        Strategic Roof Replacement<br />for Your Rogers Home.
                    </h1>
                    <p className="replacement-subheadline">
                        Understand the costs, leverage our transparency, and invest with confidence.
                        No surprises, just superior protection.
                    </p>
                    <button className="btn-hero-primary">
                        Get Your Itemized Estimate <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            {/* Standard Section (Visual Specs) */}
            <section className="standard-section">
                <div className="container standard-grid">
                    <div className="standard-image-wrapper">
                        <img
                            src="/roof_replacement_hero.png"
                            alt="Beautiful home with new roof"
                            className="standard-image"
                        />
                    </div>
                    <div className="standard-content">
                        <h2 className="standard-headline">A New Roof, A New Standard.</h2>
                        <ul className="pillars-list">
                            <li className="pillar-item">
                                <Trash2 size={24} className="pillar-icon" strokeWidth={2} />
                                <span>Complete Tear-off &amp; Assessment</span>
                            </li>
                            <li className="pillar-item">
                                <Layers size={24} className="pillar-icon" strokeWidth={2} />
                                <span>Premium Decking Inspection</span>
                            </li>
                            <li className="pillar-item">
                                <Droplets size={24} className="pillar-icon" strokeWidth={2} />
                                <span>Advanced Waterproofing System</span>
                            </li>
                            <li className="pillar-item">
                                <Home size={24} className="pillar-icon" strokeWidth={2} />
                                <span>Premium Impact-Resistant Materials</span>
                            </li>
                            <li className="pillar-item">
                                <CheckCircle size={24} className="pillar-icon" strokeWidth={2} />
                                <span>Immaculate Site Clean-up</span>
                            </li>
                        </ul>
                        <div className="cta-wrapper">
                            <button className="btn-standard">
                                Get My Free Replacement Estimate
                            </button>
                            <span className="warranty-badge">
                                <ShieldCheck size={16} />
                                Lifetime Workmanship Warranty Available
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost Factors Section */}
            <section className="cost-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Transparent Pricing. No Hidden Fees.</h2>
                        <p className="section-subtitle">
                            Understanding the cost of a new roof in Rogers shouldn&apos;t be a mystery.
                            We break down the variables so you can set the right budget.
                        </p>
                    </div>
                    <div className="cost-grid">
                        <div className="cost-card">
                            <div className="cost-icon-wrapper">
                                <Maximize2 size={24} />
                            </div>
                            <h3>Architectural Complexity</h3>
                            <p>Steep slopes, multiple angles, and unique details require precision labor. We assess your roof&apos;s specific geometry to quote accurately.</p>
                        </div>
                        <div className="cost-card">
                            <div className="cost-icon-wrapper">
                                <Layers size={24} />
                            </div>
                            <h3>Material Selection</h3>
                            <p>From cost-effective Asphalt Shingles to premium Slate and Metal. We guide you to the durable option that fits your investment goals.</p>
                        </div>
                        <div className="cost-card">
                            <div className="cost-icon-wrapper">
                                <FileText size={24} />
                            </div>
                            <h3>Full Code Compliance</h3>
                            <p>We handle all Rogers permits and inspections. Your project will adhere strictly to the Arkansas State Building Code, avoiding costly city delays.</p>
                        </div>
                        <div className="cost-card">
                            <div className="cost-icon-wrapper">
                                <MapPin size={24} />
                            </div>
                            <h3>Urban Logistics</h3>
                            <p>Uptown tight lot? Suburban estate? We master the logistics of staging, delivery, and debris removal to minimize disruption.</p>
                        </div>
                        <div className="cost-card">
                            <div className="cost-icon-wrapper">
                                <TriangleAlert size={24} />
                            </div>
                            <h3>Structural Integrity</h3>
                            <p>We inspect decking thoroughly. If we find hidden damage, we document it and repair it—ensuring your new roof sits on a solid foundation.</p>
                        </div>
                        <div className="cost-card" style={{ borderColor: '#27A844', backgroundColor: '#F0F9FF' }}>
                            <div className="cost-icon-wrapper">
                                <ShieldCheck size={24} />
                            </div>
                            <h3>The 479 Roofing Restoration Standard</h3>
                            <p>We never recommend unnecessary repairs. Our transparent approach builds trust by giving you a range of product options and financing plans.</p>
                        </div>
                    </div>
                    <div className="pricing-cta-container">
                        <button className="btn-pricing-cta">
                            Start My Itemized Estimate
                        </button>
                    </div>
                </div>
            </section>

            {/* Financing Section */}
            <section className="financing-section">
                <div className="container">
                    <div className="financing-banner">
                        <div className="financing-image-wrapper">
                            <img
                                src="/temporalremplazo.png"
                                alt="Modern home with new roof"
                                className="financing-image"
                            />
                        </div>
                        <div className="financing-content">
                            <div className="financing-icon-wrapper">
                                <DollarSign size={28} />
                            </div>
                            <h2 className="financing-headline">Roof Now. Pay Later.</h2>
                            <p className="financing-text">
                                Don't let budget constraints delay your home's protection. 479 Roofing Restoration offers flexible financing solutions with 0% interest options for qualified homeowners in Rogers.
                            </p>
                            <div className="cta-wrapper">
                                <button className="btn-standard">
                                    Explore Financing Options
                                </button>
                                <span className="financing-note">
                                    *Subject to credit approval. Terms and conditions apply.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="replacement-final-cta text-center" style={{ padding: '100px 0', backgroundColor: '#F8FAFC' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px', color: '#0f172a' }}>Ready to Invest in Your Home?</h2>
                    <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                        Join hundreds of satisfied Rogers homeowners who trust 479 Roofing Restoration for their replacement projects.
                    </p>
                    <button className="btn-hero-primary">
                        Schedule My Free Replacement Estimate <ArrowRight size={20} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default RoofReplacementPage;
