import Achievements from "./components/Achievements/Achievements";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import Calender from "./components/Calender/Calender";
import Clients from "./components/Clients/Clients";
import Community from "./components/Community/Community";
import Customers from "./components/Customers/Customers";
import Demo from "./components/Demo/Demo";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Unlock from "./components/Unlock/Unlock";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <Clients />
        <Community />
        <Unlock />
        <Achievements />
        <Calender />
        <Customers />
        <Blog />
        <Demo />
      </main>
      <Footer />
    </>
  );
}

export default App;
