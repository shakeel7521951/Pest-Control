import React from 'react'
import Hero from '../components/about/Hero';
import Our_Mission from '../components/about/Our_Mission';
import Our_Team from '../components/about/Our_Team';
import Our_Resources from '../components/about/Our_Resources';
import Client_Review from '../components/about/Client_Review';
import Community_Impact from '../components/about/Community_Impact';

const about = () => {
  return (
    <div>
      <Hero />
      <Our_Mission />
      <Our_Team />
      <Our_Resources />
      <Client_Review />
      <Community_Impact />
    </div>
  )
}

export default about;