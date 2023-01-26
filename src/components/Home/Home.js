import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>
        Welcome to the Library Catalog! Please select a book from the{' '}
        <Link to="/books">CATALOG</Link>
      </h2>
    </div>
  );
}
