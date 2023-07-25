import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Component from '../Component';
import { getByTestId } from '@testing-library/react';

test('renders without crashing', () => {
    render(<Component />);
});

test('button click changes props', () => {
    const { getByTestId } = render(<Component />);
    const button = getByTestId('button');
    fireEvent.click(button);
    expect(button.textContent).toBe('Clicked');
});

test('button click changes state not props', () => {
    const { getByTestId } = render(<Component />);
    const button = getByTestId('button');
    fireEvent.click(button);
    const updatedButton = getByTestId('button');
    expect(updatedButton.textContent).toBe('Clicked');
});

test('button click updates the state correctly', () => {
    const { getByTestId } = render(<Component />);
    const button = getByTestId('button');
    fireEvent.click(button);
    const updatedButton = getByTestId('button');
    expect(updatedButton.textContent).toBe('Clicked');
    expect(button).not.toBe(updatedButton);
});