import React from 'react';
import './TestimonialPage.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Student',
    testimonial: 'StudyBuddy has transformed my learning experience! The tutors are amazing and I can learn at my own pace.',
    photo: '/path/to/sarah-photo.jpg', // Replace with actual image paths
  },
  {
    name: 'Michael Davis',
    role: 'Parent',
    testimonial: 'I couldn’t be happier with the quality of tutors. My son’s grades have improved significantly.',
    photo: '/path/to/michael-photo.jpg',
  },
  {
    name: 'Emily Clark',
    role: 'Teacher',
    testimonial: 'StudyBuddy is an essential resource for any student looking to improve their understanding of subjects.',
    photo: '/path/to/emily-photo.jpg',
  },
  {
    name: 'David Lee',
    role: 'Freelancer',
    testimonial: 'I love how flexible StudyBuddy’s scheduling is. It’s made my learning journey so much easier.',
    photo: '/path/to/david-photo.jpg',
  },
];

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">
      <section className="header">
        <h1>What Our Users Say</h1>
        <p>Read some of the inspiring stories from our community.</p>
      </section>

      <section className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
            <blockquote className="testimonial-text">
              <p>"{testimonial.testimonial}"</p>
            </blockquote>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TestimonialsPage;
