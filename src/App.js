import Tech from "./components/Tech";
import Header from "./components/Header";
import Content from "./components/Content";

const style = {
wrapper: `h-screen w-screen max-h-screen h-min-screen bg-gradient-to-r from-indigo-500 to-black`,
}

function App() {
  return (
   <div className={style.wrapper}>
     <Header />
     <Content />       
     <Tech />
   </div>
  );
}

export default App;
