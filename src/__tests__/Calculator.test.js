import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

it('Renders component correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('perform calculator operations', () => {
  test('should display clicked number on calculator display', () => {
    render(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('2'));
    // @ts-ignore
    expect(screen.getByRole('textbox').value).toBe('2');
  });
});
