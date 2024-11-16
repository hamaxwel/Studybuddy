import React from 'react';
import './MeetTheTeamPage.css';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    description: 'John is the visionary behind the company, passionate about transforming the education sector.',
    photo: '/path/to/john-photo.jpg', 
  },
  {
    name: 'Jane Smith',
    role: 'Chief Technology Officer',
    description: 'Jane leads the tech development and brings innovative solutions to the table.',
    photo: '/path/to/jane-photo.jpg',
  },
  {
    name: 'Emma Brown',
    role: 'Marketing Director',
    description: 'Emma crafts strategies to reach and engage the right audience for our products.',
    photo: '/path/to/emma-photo.jpg',
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Developer',
    description: 'Michael ensures that our platform runs smoothly, focusing on both front-end and back-end development.',
    photo: '/path/to/michael-photo.jpg',
  },
];

const MeetTheTeamPage = () => {
  return (
    <div className="meet-the-team-page">
      <section className="header">
        <h1>Meet Our Team</h1>
        <p>Get to know the talented individuals driving our success.</p>
      </section>

      <section className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MeetTheTeamPage;
