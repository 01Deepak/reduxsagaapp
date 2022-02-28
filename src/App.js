import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import { CardParentDiv } from './Styles/UsersStyles';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function App() {


  return (
    <div>
      <Navbar />
      <CardParentDiv>
        <Users />
      </CardParentDiv>
    </div>
  );
}

export default App;
