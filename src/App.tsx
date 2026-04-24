import EntreEmContato from "./components/sections/EntreEmContato";
import Header from "./components/sections/Header";
import QuemSomos from "./components/sections/QuemSomos";
import Video from "./components/Video";

function App() {
  return (
    <div className="flex flex-col bg-[var(--dark-blue)] items-center justify-start font-jakarta">
      <Header />
      {/* <EntreEmContato /> */}
      <Video />
      <QuemSomos />
      <div className="w-full p-4 gap-4 flex items-center justify-center bg-gray-800">
        <div className="flex w-16 h-16 bg-[var(--dark-blue)]"></div>
        <div className="flex w-16 h-16 bg-[var(--grey)]"></div>
        <div className="flex w-16 h-16 bg-[var(--light-grey)]"></div>
        <div className="flex w-16 h-16 bg-[var(--white)]"></div>
        <div className="flex w-16 h-16 bg-[var(--cream)]"></div>
        <div className="flex w-16 h-16 bg-[var(--gold)]"></div>
        <div className="flex w-16 h-16 bg-[var(--shadow)]"></div>
      </div>
    </div>
  );
}

export default App;
