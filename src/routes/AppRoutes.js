import React,  { lazy } from "react";

// Lazy load your components
const Home = lazy(() => import("../pages/HomePage"));
const About = lazy(() => import("../pages/AboutPage"));
const Contact = lazy(() => import("../pages/ContactPage"));
const BookingPage = lazy(() => import("../pages/BookingPage"));

export const AppRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/booking", element: <BookingPage /> },
];
