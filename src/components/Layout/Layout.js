import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};
