import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm'; // Adjust the path to your component

describe('BookingForm Component', () => {
  const mockOnReserve = jest.fn();
  const reservedDates = [
    { name: 'John Doe', persons: 2, date: '2024-11-15T00:00:00' },
    { name: 'Jane Smith', persons: 4, date: '2024-11-20T00:00:00' },
  ];

  test('renders the form fields correctly', () => {
    render(<BookingForm onReserve={mockOnReserve} reservedDates={reservedDates} />);

    // Check if the form fields are rendered
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Persons:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit Reservation/i })).toBeInTheDocument();
  });

  test('displays a warning if a reserved date is selected', () => {
    render(<BookingForm onReserve={mockOnReserve} reservedDates={reservedDates} />);

    const dateInput = screen.getByLabelText(/Date:/i);
    fireEvent.change(dateInput, { target: { value: '2024-11-15' } });

    expect(screen.getByText(/The selected date is already reserved./i)).toBeInTheDocument();
  });

  test('submits form data correctly when a valid date is chosen', () => {
    render(<BookingForm onReserve={mockOnReserve} reservedDates={reservedDates} />);

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'Alice Johnson' } });
    fireEvent.change(screen.getByLabelText(/Number of Persons:/i), { target: { value: 3 } });
    fireEvent.change(screen.getByLabelText(/Date:/i), { target: { value: '2024-11-18' } });

    const submitButton = screen.getByRole('button', { name: /Submit Reservation/i });
    fireEvent.click(submitButton);

    // Check that the warning is not displayed
    expect(screen.queryByText(/The selected date is already reserved./i)).not.toBeInTheDocument();

    // Check if the onReserve function was called with the correct data
    expect(mockOnReserve).toHaveBeenCalledWith('Alice Johnson', 3, '2024-11-18');
  });

  test('does not submit form if a reserved date is chosen', () => {
    render(<BookingForm onReserve={mockOnReserve} reservedDates={reservedDates} />);

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'Alice Johnson' } });
    fireEvent.change(screen.getByLabelText(/Number of Persons:/i), { target: { value: 3 } });
    fireEvent.change(screen.getByLabelText(/Date:/i), { target: { value: '2024-11-15' } });

    const submitButton = screen.getByRole('button', { name: /Submit Reservation/i });
    fireEvent.click(submitButton);

    // Check that the warning is displayed and the onReserve function was not called
    expect(screen.getByText(/The selected date is already reserved./i)).toBeInTheDocument();
    expect(mockOnReserve).not.toHaveBeenCalled();
  });
});
