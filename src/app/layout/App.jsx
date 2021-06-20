import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import './styles.css';

function App() {
  return (
    <>
      <NavBar/>
      
      <Container class='main'>
        <EventDashboard/>
      </Container>
      
    </>
  );
}

export default App;
