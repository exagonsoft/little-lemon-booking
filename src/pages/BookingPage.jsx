import React, { useState } from "react";
import MetaTags from "../components/ui/MetaTags";
import BookingForm from "../components/BookingForm/BookingForm";
import { reservationsList } from "../data/reservations";
import { usImage } from "../assets/images";

const BookingPage = () => {
  const [reservations, setReservations] = useState(reservationsList);

  const handleReserve = (name, persons, date) => {
    const newReservation = { name, persons, date };

    setReservations((prevReservations) => [
      ...prevReservations,
      newReservation,
    ]);
    console.log(reservations);
  };

  return (
    <main className="max-w-5xl mx-auto p-8">
      <MetaTags
        title="Get your reservation Today!"
        description="Welcome to Little Lemon, where each dish is crafted with love and
          authentic flavors. From fresh, vibrant salads to hearty main courses,
          our menu celebrates the best of Mediterranean cuisine. Join us for a
          taste that feels like home, but with a twist that keeps you coming
          back."
        imageUrl="%PUBLIC_URL%/hero-splash.png"
      />
      <div className=" mb-8 !h-[40vh]">
        <img
          src={usImage}
          alt="Little Lemon Restaurant"
          className="w-full h-full rounded-xl shadow-lg"
        />
      </div>
      <BookingForm reservedDates={reservations} onReserve={handleReserve} />
    </main>
  );
};

export default BookingPage;
