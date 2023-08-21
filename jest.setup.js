import React from 'react';
import '@testing-library/jest-dom';
import 'jest-canvas-mock';

function MockImage(props) {
  const { priority, ...restProps } = props;

  if (priority) {
    restProps.priority = 'true';
  }

  return React.createElement('img', restProps);
}

jest.mock('next/image', () => MockImage);

global.fetch = require('jest-fetch-mock');
