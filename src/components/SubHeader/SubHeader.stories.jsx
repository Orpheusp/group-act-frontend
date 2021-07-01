import React from 'react';

import { SubHeader } from './SubHeader';

export default {
  title: 'SubHeader',
  component: SubHeader,
};

export const subHeader = () => {
  return <SubHeader text={'sub header test'} />;
};
