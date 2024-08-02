import React from 'react';
import Layout from '@/Layouts/Layout';

function Home(props) {
  return <h1>Hello, React!</h1>;
}

Home.layout = page => <Layout title="Home">{page}</Layout>;

export default Home;