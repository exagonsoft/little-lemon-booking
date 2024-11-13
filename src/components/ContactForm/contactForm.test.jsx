import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extra matchers
import ContactForm from './ContactForm'; // Adjust the path to your component

describe('ContactForm Component', () => {
  test('renders the form fields correctly', () => {
    render(<ContactForm />);

    // Check if the form fields are rendered
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  test('shows validation error when fields are empty and submit is clicked', () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button', { name: /Send Message/i });
    fireEvent.click(submitButton);

    // Check for validation errors (customize error messages as per your implementation)
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Subject is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Message is required/i)).toBeInTheDocument();
  });

  test('accepts input and submits correctly when valid', () => {
    render(<ContactForm />);

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Subject:/i), { target: { value: 'Inquiry' } });
    fireEvent.change(screen.getByLabelText(/Message:/i), { target: { value: 'This is a test message.' } });

    const submitButton = screen.getByRole('button', { name: /Send Message/i });
    fireEvent.click(submitButton);

    // Check that validation errors do not appear
    expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();

    // Optionally, check if a success message appears after form submission
    expect(screen.getByText(/Your message has been sent successfully!/i)).toBeInTheDocument();
  });
});
