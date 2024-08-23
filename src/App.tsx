import React, { useState } from 'react';
import Header, { Paragraph } from './header.tsx';
import SeasonNavButton from './seasonnavbutton.tsx'; // Import the button component
import TableComponent from './seasonnavbutton.tsx'; // Import the table component
import './seasonnavbutton.css'; // Import the CSS for button styling

function App() {
  const [showTable, setShowTable] = useState(false);

  // Function to toggle the table visibility
  const handleButtonClick = () => {
    setShowTable(prevState => !prevState);
  };

  return (
    <div>
      <Header />
      <SeasonNavButton /> {/* This will now handle showing/hiding the table */}
      {showTable && <TableComponent />} {/* Conditionally render the table */}
     
    </div>
  );
}

export default App;
