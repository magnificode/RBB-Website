import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import Businesses from '../templates/businesses';

const BusinessesRouter = () => (
  <Layout>
    <Router>
      <Businesses path="/businesses" />
      <Businesses path="/businesses/:page" />
    </Router>
  </Layout>
);

export default BusinessesRouter;
