import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import { CardParentDiv } from './Styles/UsersStyles';
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
