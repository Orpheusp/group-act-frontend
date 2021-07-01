import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { App } from './App';

export default {
  title: 'App',
  component: App,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className={'story-container'}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const app = () => {
  return <App />;
};
