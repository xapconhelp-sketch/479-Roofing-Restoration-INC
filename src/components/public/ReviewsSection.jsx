import React from 'react';
import { Star } from 'lucide-react';
import './ReviewsSection.css';

// Mock Data simulating Google Places API response
const reviews = [
    {
        author_name: "Ranfery Arreola",
        profile_photo_url: null,
        rating: 5,
        relative_time_description: "Hace un mes",
        text: "Chicos altamente capacitados vinieron a mi casa y me informaron sobre los daños causados por la tormenta en mi casa y lograron que el seguro lo aprobara por completo. Recomiendo ampliamente 479 Roofing Restoration.",
        google_url: "https://maps.app.goo.gl/VQGk3q9XwpwGyYVcA"
    },
    {
        author_name: "Yoni Perez",
        profile_photo_url: null,
        rating: 5,
        relative_time_description: "Hace un mes",
        text: "479roofing&restoration Yonatan monjaras y Saul Martínez hicieron un gran trabajo en mi opinión los recomiendo en el estado de Arkansas 👍…",
        google_url: "https://maps.app.goo.gl/VQGk3q9XwpwGyYVcA"
    },
    {
        author_name: "Devin Talberg",
        profile_photo_url: null,
        rating: 5,
        relative_time_description: "Hace un año",
        text: "Una gran empresa con la que trabajar. Estos chicos saben lo que hacen. Muy profesionales. Asegurados, con licencia. ¡Y un equipo rapidísimo!",
        google_url: "https://maps.app.goo.gl/VQGk3q9XwpwGyYVcA"
    },
    {
        author_name: "Tony Martinez",
        profile_photo_url: null,
        rating: 5,
        relative_time_description: "Hace 11 meses",
        text: "Excelente trabajo muy profesionales gracias",
        google_url: "https://maps.app.goo.gl/VQGk3q9XwpwGyYVcA"
    }
];

const ReviewsSection = () => {
    return (
        <section className="reviews-section section-padding bg-white" id="testimonials">
            <div className="container">
                <div className="reviews-header text-center mb-16">
                    <div className="google-badge">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="google-logo" />
                        <span className="review-count">Excellent 4.8</span>
                        <div className="stars-row">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill={i < 4.8 ? "#F4B400" : "#E0E0E0"} stroke="none" />
                            ))}
                        </div>
                    </div>
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-subtitle">Real feedback from verified homeowners in Arkansas.</p>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="review-header">
                                <div className="reviewer-avatar">
                                    {review.profile_photo_url && !review.profile_photo_url.includes('...') ? (
                                        <img src={review.profile_photo_url} alt={review.author_name} />
                                    ) : (
                                        <div className="avatar-placeholder">
                                            {review.author_name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className="reviewer-info">
                                    <h4 className="reviewer-name">{review.author_name}</h4>
                                    <span className="review-date">{review.relative_time_description}</span>
                                </div>
                                <div className="google-icon-small">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="G" />
                                </div>
                            </div>

                            <div className="review-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        fill={i < review.rating ? "#F4B400" : "#E0E0E0"}
                                        stroke="none"
                                    />
                                ))}
                            </div>

                            <div className="review-body">
                                <p>"{review.text}"</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="reviews-cta text-center mt-12 flex flex-col items-center gap-4">
                    <a href="https://g.page/r/CWnSM1jvNOvKEAI/review" className="btn-google-reviews" target="_blank" rel="noopener noreferrer">
                        Write a Review on Google
                    </a>
                    <a href="https://maps.app.goo.gl/VQGk3q9XwpwGyYVcA" className="text-slate-600 hover:text-slate-900 font-medium underline" target="_blank" rel="noopener noreferrer">
                        See all 16 reviews on Google Maps
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
