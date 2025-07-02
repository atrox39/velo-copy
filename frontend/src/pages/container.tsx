import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { usePageStore } from '../store/page.store';
import DashboardPage from './dashboard.page';
import InboxPage from './inbox.page';

export default function ContainerPage() {
  const location = usePageStore((state) => state.location);
  return (
    <BrowserRouter>
      <Routes location={location}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/inbox" element={<InboxPage />} />
      </Routes>
    </BrowserRouter>
  );
}
