import * as React from 'react';
import LayoutWithoutHeader from '../components/layout-without-header';
import { lazy } from 'react';

const ThreeCanvas = lazy(() => import('../components/three-canvas'));

const ThreePage = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <LayoutWithoutHeader pageTitle="3D"></LayoutWithoutHeader>
      {!isMounted ? null : (
        <React.Suspense fallback={null}>
          <ThreeCanvas />
        </React.Suspense>
      )}
    </>
  );
};

export default ThreePage;
