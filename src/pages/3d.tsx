import * as React from 'react';
import LayoutWithoutHeader from '../components/layout-without-header';
import { lazy } from 'react';
import * as THREE from 'three';

const ThreeCanvas = lazy(() => import('../components/three-canvas'));

const ThreePage = () => {
  return (
    <>
      <LayoutWithoutHeader pageTitle="3D"></LayoutWithoutHeader>
      <React.Suspense fallback={null}>
        <ThreeCanvas />
      </React.Suspense>
    </>
  );
};

export default ThreePage;
