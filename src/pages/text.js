import React from 'react';

const MyForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý khi form được submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Tên:</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;