import React, { lazy, Suspense } from 'react';

const LazyProperty = lazy(() => import('./Property'));

const Property = props => (
  <Suspense fallback={null}>
    <LazyProperty {...props} />
  </Suspense>
);

export default Property;
