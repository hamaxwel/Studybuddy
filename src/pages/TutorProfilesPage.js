import React, { useState } from 'react';
import './TutorProfilesPage.css';

const TutorProfilesPage = () => {
  // List of tutors with their details
  const tutors = [
    {
      id: 1,
      name: 'John Doe',
      bio: 'A passionate educator with over 10 years of experience teaching mathematics and science. Committed to helping students reach their full potential.',
      qualifications: ['M.Sc. in Mathematics', 'Certified Science Teacher', '10+ Years Experience'],
      subjects: ['Math', 'Physics', 'Chemistry'],
      rating: 4.5,
      reviews: [
        { student: 'Alice', comment: 'Great teacher, explains concepts clearly!' },
        { student: 'Bob', comment: 'Very patient and knowledgeable.' },
        { student: 'Charlie', comment: 'Helped me improve my grades significantly.' }
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOrOwY43A2IXz1v0yLjmHVWj0d2_YMm_6eA&s' 
    },
    {
      id: 2,
      name: 'Jane Smith',
      bio: 'Specializing in languages, Jane brings 15 years of teaching experience and a unique approach to learning.',
      qualifications: ['B.A. in English Literature', 'TESOL Certification', '15+ Years Experience'],
      subjects: ['English', 'Spanish', 'French'],
      rating: 4.7,
      reviews: [
        { student: 'David', comment: 'A fantastic teacher who makes learning fun!' },
        { student: 'Emma', comment: 'Her lessons are engaging and well-structured.' }
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOrOwY43A2IXz1v0yLjmHVWj0d2_YMm_6eA&s' 
    },
    {
      id: 3,
      name: 'Samuel Green',
      bio: 'An experienced coding instructor who helps students build real-world projects with Python and JavaScript.',
      qualifications: ['B.S. in Computer Science', 'Certified Web Developer', '8+ Years Experience'],
      subjects: ['Programming', 'Web Development', 'Python'],
      rating: 4.8,
      reviews: [
        { student: 'Michael', comment: 'Samuel is an excellent tutor. His explanations are easy to follow!' },
        { student: 'Sarah', comment: 'I learned a lot from his programming tutorials.' }
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOrOwY43A2IXz1v0yLjmHVWj0d2_YMm_6eA&s' 
    }
  ];

  return (
    <div className="teacher-profile-page">
      <header className="profile-header">
        <h1>Meet Our Tutors</h1>
        <p>Browse through our expert tutors and find the right fit for you!</p>
      </header>

      <div className="tutor-list">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="tutor-profile">
            <img src={tutor.image} alt={tutor.name} className="tutor-image" />
            <div className="tutor-info">
              <h2>{tutor.name}</h2>
              <p className="bio">{tutor.bio}</p>
              <div className="qualifications">
                <h3>Qualifications:</h3>
                <ul>
                  {tutor.qualifications.map((qual, index) => (
                    <li key={index}>{qual}</li>
                  ))}
                </ul>
              </div>
              <div className="subjects">
                <h3>Subjects Taught:</h3>
                <ul>
                  {tutor.subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
              </div>

              <div className="rating">
                <h3>Rating</h3>
                <div className="star-rating">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`star ${index < tutor.rating ? 'filled' : ''}`}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <p>Average Rating: {tutor.rating} / 5</p>
              </div>

              <div className="reviews">
                <h3>Reviews</h3>
                <ul>
                  {tutor.reviews.map((review, index) => (
                    <li key={index}>
                      <strong>{review.student}:</strong> {review.comment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorProfilesPage;
