import React from "react";
import MetaTags from "../components/ui/MetaTags";
import { profile1, profile2, profile3, usImage } from "../assets/images";

const AboutPage = () => {
  return (
    <main className="max-w-5xl mx-auto">
      <MetaTags
        title="What is Little Lemon"
        description="Welcome to Little Lemon, where each dish is crafted with love and
          authentic flavors. From fresh, vibrant salads to hearty main courses,
          our menu celebrates the best of Mediterranean cuisine. Join us for a
          taste that feels like home, but with a twist that keeps you coming
          back."
        imageUrl="%PUBLIC_URL%/hero-splash.png"
      />
      <div className="min-h-screen bg-backGround text-primary p-8">
        {/* Hero Image Section */}
        <div className=" mb-8 !h-[40vh]">
          <img
            src={usImage}
            alt="Little Lemon Restaurant"
            className="w-full h-full rounded-xl shadow-lg"
          />
        </div>

        <div className=" bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-4xl font-bold text-center text-backGround mb-8">
            About Little Lemon
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nestled in the heart of the city, Little Lemon Restaurant started
              as a small family-owned eatery with a big dream: to bring fresh,
              vibrant Mediterranean flavors to our community. From humble
              beginnings, we’ve grown into a beloved local spot known for our
              signature dishes, warm ambiance, and exceptional service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Little Lemon, our mission is simple: to create dishes that
              combine the highest quality local ingredients with traditional
              Mediterranean recipes. We believe in sustainable sourcing,
              supporting local farmers, and providing our guests with a true
              farm-to-table experience. Whether you’re here for a quick lunch or
              a leisurely dinner, our focus is always on fresh, delicious, and
              healthy cuisine.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 rounded-lg p-4 text-center shadow-md">
                <img
                  src={profile1}
                  alt="Team member"
                  className="w-24 h-24 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-lg font-bold text-backGround">
                  Chef Marco Rossi
                </h3>
                <p className="text-gray-600">Head Chef & Culinary Director</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center shadow-md">
                <img
                  src={profile2}
                  alt="Team member"
                  className="w-24 h-24 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-lg font-bold text-backGround">
                  Sophia Alvarez
                </h3>
                <p className="text-gray-600">Manager & Hospitality Lead</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center shadow-md">
                <img
                  src={profile3}
                  alt="Team member"
                  className="w-24 h-24 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-lg font-bold text-backGround">Liam Chen</h3>
                <p className="text-gray-600">
                  Pastry Chef & Dessert Specialist
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
