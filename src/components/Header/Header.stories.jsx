import React from 'react';

import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
};

export const header = () => {
  return <Header text={'test'} />;
};
