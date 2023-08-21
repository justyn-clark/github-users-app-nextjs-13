import React from 'react';
import UserList from '../UserList';

describe('<UserList />', () => {
  it('renders', () => {
    cy.mount(<UserList users={[]} />);
  });
});
