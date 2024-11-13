import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookingForm = ({ onReserve, reservedDates }) => {
  const [name, setName] = useState("");
  const [persons, setPersons] = useState(1);
  const [date, setDate] = useState("");
  const [warning, setWarning] = useState("");

  // Function to check if a date is reserved
  const isDateReserved = (date) => {
    // Format the date from the calendar to "YYYY-MM-DD"
    const formattedDate = date.toISOString().split("T")[0];

    return reservedDates.some((reservation) => {
      // Parse the reservation's date string and format it to "YYYY-MM-DD"
      const reservationDate = new Date(reservation.date)
        .toISOString()
        .split("T")[0];
      return formattedDate === reservationDate;
    });
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setDate(e.target.value);

    if (isDateReserved(selectedDate)) {
      setWarning("The selected date is already reserved.");
    } else {
      setWarning("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedDate = new Date(date);
    if (isDateReserved(selectedDate)) {
      setWarning("The selected date is already reserved.");
      return;
    }

    onReserve(name, persons, date);
    setName("");
    setPersons(1);
    setDate("");
    setWarning("");
  };

  useEffect(() => {}, [reservedDates]);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary via-white to-secondary shadow-lg rounded-xl">
      <h1 className="text-3xl font-extrabold text-backGround mb-6 text-center">
        Book Your Reservation
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-backGround font-semibold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-secondary/50"
          />
        </div>
        <div>
          <label
            htmlFor="persons"
            className="block text-backGround font-semibold mb-2"
          >
            Number of Persons:
          </label>
          <input
            type="number"
            id="persons"
            value={persons}
            onChange={(e) => setPersons(Number(e.target.value))}
            min="1"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-secondary/50"
          />
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-backGround font-semibold mb-2"
          >
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-secondary/50"
          />
        </div>
        {warning && <p className="text-red-600 font-semibold">{warning}</p>}
        <button
          type="submit"
          className="w-full py-3 bg-secondary text-backGround font-bold rounded-lg shadow-md hover:bg-yellow-300 transition-transform transform hover:scale-105"
        >
          Submit Reservation
        </button>
      </form>
      <div className="mt-8 !w-full">
        <h2 className="text-xl font-bold text-backGround mb-4 text-center">
          Reserved Dates
        </h2>
        <Calendar
          tileClassName={({ date }) => {
            const _isReserved = isDateReserved(date);

            if(_isReserved){
              return "!bg-red-800 !text-white font-semibold rounded-lg";
            }else{
              return "rounded-lg"
            }
          }}
          headerClassName="!mx-[2px]"
          className="rounded-lg shadow-lg border-none !w-full pointer-events-none"
        />
      </div>
    </div>
  );
};

export default BookingForm;
