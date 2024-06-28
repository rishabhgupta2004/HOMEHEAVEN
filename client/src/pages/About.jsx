import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <div className="flex-grow py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-blue-900">About Home Heaven</h1>
        <div className="space-y-6 text-lg text-gray-800">
          <p>
            Welcome to Home Heaven, your trusted partner in real estate. We specialize in connecting buyers and sellers, offering a wide range of properties in the most desirable neighborhoods.
          </p>
          <p>
            At Home Heaven, we understand that buying or selling a home is more than just a transaction; it's about finding the perfect place to live and creating lasting memories. Our experienced team of agents is dedicated to providing personalized service, expert advice, and a deep understanding of the local market to help you achieve your real estate goals.
          </p>
          <p>
            Whether you're looking for a cozy apartment, a spacious family home, or an investment property, Home Heaven is here to guide you every step of the way. Our mission is to make your real estate journey as smooth and enjoyable as possible, ensuring that you find a home that fits your lifestyle and budget.
          </p>
        </div>
      </div>
      <footer className="bg-blue-200 text-center py-4 mt-8">
        <p className="text-gray-700">
          &copy; 2024 Home Heaven. Created by Rishabh Gupta and Deepanshi Shukla.
        </p>
      </footer>
    </div>
  );
}
