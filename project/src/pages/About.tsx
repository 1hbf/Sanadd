import React from 'react';
import TeamMember from '../components/about/TeamMember';
import ValueCard from '../components/about/ValueCard';
import { teamMembers } from '../data/team';
import { values } from '../data/values';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Vision & Mission Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">About Sanad</h1>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-blue-100">
                  To become a leader in managing emergency health cases through innovation
                  and artificial intelligence.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-blue-100">
                  To provide smart digital solutions to enhance medical response and
                  resource distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
                Icon={value.Icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;