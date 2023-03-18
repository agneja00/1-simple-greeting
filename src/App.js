import './App.css';
import Container from './components/Container/Container.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Page from './components/Page/Page.jsx';

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
