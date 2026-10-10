import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Map from './components/map';
export default function App(){return <div className="min-h-screen bg-[#fbfaf7]"><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/menu" element={<Menu/>}/><Route path="/contact" element={<Contact/>}/></Routes> <Map/> <Footer/><WhatsAppButton/></div>}
