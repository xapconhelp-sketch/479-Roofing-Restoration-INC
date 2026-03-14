import React, { useEffect } from 'react';
import { BadgeCheck, FileSearch, PhoneCall, Users, FileText, AlertTriangle, Hammer, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import './InsuranceClaimPage.css';

const InsuranceClaimPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="insurance-page">
            {/* Hero Section */}
            <section className="insurance-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content relative z-10">
                    <div className="insurance-badge">
                        <BadgeCheck size={16} />
                        <span>Professional Claims Assistance</span>
                    </div>
                    <h1 className="insurance-headline">Simplify Your Insurance Claim</h1>
                    <p className="insurance-subheadline">
                        Navigating property damage claims can be complex. We guide you through our proven 7-step process to ensure fair coverage and a high-quality restoration.
                    </p>
                </div>
            </section>

            {/* 7-Step Process Content */}
            <section className="process-content-section">
                <div className="container">

                    <div className="steps-container">
                        
                        {/* Step 1 */}
                        <div className="step-card">
                            <div className="step-number text-green-600">01</div>
                            <div className="step-content">
                                <h3 className="flex items-center gap-3 text-2xl font-bold mb-4 text-gray-900">
                                    <FileSearch className="text-green-600" />
                                    The Roof Health Inspection (Post-Storm)
                                </h3>
                                <p className="mb-4 text-gray-700">Before calling your insurance, you need to know if there is actually damage that justifies a claim.</p>
                                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                                    <li><strong>Hail:</strong> We look for "bruises" or dents in the shingles that break the granule layer, exposing the asphalt to the sun.</li>
                                    <li><strong>Wind:</strong> We look for lifted, detached, or "creased" shingles, where the adhesive seal has broken.</li>
                                </ul>
                                <div className="action-box">
                                    <p className="action-box-text"><strong>479 Roofing Action:</strong> We document this with high-resolution photos and damage maps so you have solid evidence before opening the case.</p>
                                </div>
                                {/* Image Step 1 */}
                                <div className="step-image-container">
                                    <img src="/Inspeccion.jpg" alt="Roof Inspection Documented" className="step-image" />
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="step-card">
                            <div className="step-number text-green-600">02</div>
                            <div className="step-content">
                                <h3 className="flex items-center gap-3 text-2xl font-bold mb-4 text-gray-900">
                                    <PhoneCall className="text-green-600" />
                                    Filing the Claim
                                </h3>
                                <p className="mb-4 text-gray-700">Once we confirm the damage, you as the homeowner must contact your insurance company.</p>
                                <div className="action-box">
                                    <p className="action-box-text"><strong>479 Roofing Tip:</strong> Provide the exact date of the storm. We will help you identify it using certified meteorological reports.</p>
                                </div>
                                <p className="text-gray-700"><strong>Claim Number:</strong> You will be assigned a number that will be the "ID" of your project going forward.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="step-card">
                            <div className="step-number text-green-600">03</div>
                            <div className="step-content">
                                <h3 className="flex items-center gap-3 text-2xl font-bold mb-4 text-gray-900">
                                    <Users className="text-green-600" />
                                    The Adjuster Meeting
                                </h3>
                                <p className="mb-4 text-gray-700">The insurance company will send an adjuster to evaluate the damage. This is the most important step.</p>
                                <div className="space-y-4 mb-4">
                                    <p className="text-gray-700"><strong>Our Role:</strong> 479 Roofing will be present there. We speak the same technical "language" as the adjuster. We make sure they don't overlook details like the drip edge, starter shingles, or compliance with local codes.</p>
                                    <p className="text-gray-700"><strong>Code Defense:</strong> If you are in Arkansas, we will remind the adjuster that, according to code R908.3.1.1, a full replacement must meet new construction standards.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="step-card">
                            <div className="step-number text-green-600">04</div>
                            <div className="step-content">
                                <h3 className="flex items-center gap-3 text-2xl font-bold mb-4 text-gray-900">
                                    <FileText className="text-green-600" />
                                    Estimate Review (Xactimate)
                                </h3>
                                <p className="mb-4 text-gray-700">The insurance company will send you a document called a "Scope of Loss".</p>
                                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                                    <li><strong>Technical Analysis:</strong> We review that every line is fair. If they omitted ridge caps or the ice & water shield required by code R905.2.8.2, we prepare a Supplement.</li>
                                    <li><strong>Supplements:</strong> This is the process where we ask the insurance company to add items necessary for construction that were not initially included.</li>
                                </ul>
                                {/* Image Step 4 */}
                                <div className="step-image-container">
                                    <img src="/insurance.png" alt="Insurance Estimate" className="step-image" />
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="step-card highlight-card">
                            <div className="step-number text-red-500">05</div>
                            <div className="step-content">
                                <h3 className="flex items-center gap-3 text-2xl font-bold mb-4 text-red-700">
                                    <AlertTriangle className="text-red-600" />
                                    THE DEDUCTIBLE (Non-Negotiable Point)
                                </h3>
                                <p className="mb-4 text-gray-800 font-medium">It is vital that we speak honestly about this: The homeowner is legally responsible for paying their deductible.</p>
                                <div className="space-y-4 text-gray-700">
                                    <p><strong>The Law:</strong> In most states, including Arkansas and Kansas, it is illegal (and considered insurance fraud) for a contractor to "absorb", "forgive", or "pay" the client's deductible through inflated invoices or fake rebates.</p>
                                    <p><strong>Transparency:</strong> 479 Roofing operates under the highest ethical standards. Your deductible is your only investment in a new roof that could be worth $15,000 or $30,000. We take care of maximizing every penny the insurance pays, but the deductible is your part of the contract.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="step-card">
                            <div className="step-number text-green-600">06</div>
                            <div className="step-content">
                                <h3 className="flex items-center gap-3 text-2xl font-bold mb-4 text-gray-900">
                                    <Hammer className="text-green-600" />
                                    Production and Replacement
                                </h3>
                                <p className="mb-4 text-gray-700">With the approved budget, we proceed with the installation.</p>
                                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                                    <li><strong>Tear-off:</strong> We remove everything down to the wood to inspect the condition of the decking.</li>
                                    <li><strong>Code-Compliant Installation:</strong> We install new underlayment according to R905.1.1 and drip edges according to R905.2.8.5 to ensure your roof is legal and durable.</li>
                                </ul>
                                {/* Image Step 6 */}
                                <div className="step-image-container">
                                    <img src="/fondo.png" alt="Roof Production Flow" className="step-image" />
                                </div>
                            </div>
                        </div>

                        {/* Step 7 */}
                        <div className="step-card">
                            <div className="step-number text-green-600">07</div>
                            <div className="step-content">
                                <h3 className="flex items-center gap-3 text-2xl font-bold mb-4 text-gray-900">
                                    <ShieldCheck className="text-green-600" />
                                    Closure and Release of Funds
                                </h3>
                                <div className="space-y-4 text-gray-700">
                                    <p><strong>Depreciation:</strong> Upon completion, we send a final invoice and a Certificate of Completion. This notifies the insurance that the work is done and they can release the second check (the held depreciation).</p>
                                    <p><strong>Warranty:</strong> We deliver your 479 Roofing workmanship warranties and the manufacturer's warranties.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default InsuranceClaimPage;
