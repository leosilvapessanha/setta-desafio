import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../../../src/pages/Home';

jest.mock('@react-navigation/native');

describe('Test of pages/home', () => {
  it('should be able to render the home page', async () => {
    const { getByTestId } = await render(<Home />);
    const element = getByTestId('homePageReturn');
    expect(element).toBeTruthy();
  });

  it('should be able to show that all the FlatList ins filled', async () => {
    const { getByTestId } = await render(<Home />);
    const element = getByTestId('characters');
    expect(element).not.toBeNull();
  });
});
