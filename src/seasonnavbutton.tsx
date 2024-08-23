import React, { useState } from 'react';
import './seasonnavbutton.css'; // Import the CSS for button styling

// Define the table component inside SeasonNavButton
const TableComponent: React.FC = () => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Team </th>
          <th>Position </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Manchester City,</td>
          <td> 1</td>
          <td></td>
          
        </tr>
        <td>Arsenal,</td>
          <td> 2</td>
          <td></td>
        <tr>
          <td>Liverpool </td>
          <td>3</td>
          <td></td>
        </tr>
        <td>Aston Villa,</td>
          <td> 4</td>
          <td></td>
          <tr></tr>
          <td>Totenham,</td>
          <td> 5</td>
          <td></td>
          <tr>
          <td>Chelsea</td>
          <td>6</td>
          <td></td>
        </tr>
        <tr>
          <td>Newcastle </td>
          <td>7</td>
          <td></td>
        </tr>
        <tr>
          <td>Manchester united</td>
          <td>8</td>
          <td></td>
        </tr>
        <tr>
          <td>West Ham United </td>
          <td>9</td>
          <td></td>
        </tr>
        <tr>
          <td>Crystal Palace  </td>
          <td>10</td>
          <td></td>
        </tr>
        <tr>
          <td>Brighton and Hove Albion </td>
          <td>11</td>
          <td></td>
        </tr>
        <tr>
          <td>AFC Bournemouth </td>
          <td>12</td>
          <td></td>
        </tr>
        <tr>
          <td>Fulham </td>
          <td>13</td>
          <td></td>
        </tr>
        <tr>
          <td>Wolverhampton Wanderers </td>
          <td>14</td>
          <td></td>
        </tr>
        <tr>
          <td>Everton </td>
          <td>15</td>
          <td></td>
        </tr>
        <tr>
          <td>Brentford</td>
          <td>16</td>
          <td></td>
        </tr>
        <tr>
          <td>Nottingham Forest </td>
          <td>17</td>
          <td></td>
        </tr>
        <tr>
          <td>Luton Town </td>
          <td>18</td>
          <td></td>
        </tr>
        <tr>
          <td>Burnley </td>
          <td>19</td>
          <td></td>
        </tr>
        <tr>
          <td>Sheffield United </td>
          <td>20</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

// Define the button component
const SeasonNavButton: React.FC = () => {
  const [showTable, setShowTable] = useState<boolean>(false);

  // Function to toggle table visibility
  const handleButtonClick = () => {
    setShowTable(prevState => !prevState);
  };

  return (
    <div>
      <button className='season-button' onClick={handleButtonClick}>
        2023/24 Season
      </button>
      {showTable && <TableComponent />} {/* Conditionally render the table */}
    </div>
  );


  
}


export default SeasonNavButton;
