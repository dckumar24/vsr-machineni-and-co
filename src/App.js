import './App.css';
import ImageCarousel from './Components/atoms/ImageCarousel';
import About from './Components/molecules/About/About';
import Details from './Components/molecules/Details/Details';
import Footer from './Components/molecules/Footer/Footer';
import Header from './Components/molecules/Header/Header';
import Testimonials from './Components/molecules/Testimonials/Testimonials';
import Layout from './Components/organisms/Layout/Layout';
const product = {
  name: 'Example Product',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  price: '$19.99',
  image: 'https://picsum.photos/id/238/800/400',
};

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
        <ImageCarousel/>
        <About/>
        <Testimonials/>
        <Details product={product}/>

       <Footer/>
       </Layout>
    </div>
  );
}

export default App;
