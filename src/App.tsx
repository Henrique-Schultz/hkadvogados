import Divider from "./components/Divider";
import AreasDeAtuacao from "./components/sections/AreasDeAtuacao";
import EntreEmContato from "./components/sections/EntreEmContato";
import Header from "./components/Header";
import QuemSomos from "./components/sections/QuemSomos";
import Socios from "./components/sections/Socios";
import Video from "./components/Video";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col bg-[var(--dark-blue)] items-center justify-start font-jakarta">
      <Header />
      <Video />
      <QuemSomos />
      <Divider />
      <AreasDeAtuacao />
      <Socios />
      <EntreEmContato />
      <Footer />
    </div>
  );
}

export default App;
