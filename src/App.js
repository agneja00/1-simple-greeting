import './App.css';
import Container from './Components/Container';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Page from './Components/Page';

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Page />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
