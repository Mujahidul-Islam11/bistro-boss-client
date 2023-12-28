import React, { useState } from 'react';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    feedback: '',
    rating: '1',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle form submission, such as sending data to a server.
    // For simplicity, this example does not include server-side handling.
    alert('Survey submitted successfully!');
  };

  return (
    <form
      className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-10"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-6">Survey A</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Your Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="age" className="block text-sm font-semibold mb-2">
          Your Age:
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="feedback" className="block text-sm font-semibold mb-2">
          Feedback:
        </label>
        <textarea
          id="feedback"
          name="feedback"
          rows="4"
          value={formData.feedback}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="rating" className="block text-sm font-semibold mb-2">
          Rate your experience (1-5):
        </label>
        <select
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Average</option>
          <option value="4">4 - Good</option>
          <option value="5">5 - Excellent</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default SurveyForm;
