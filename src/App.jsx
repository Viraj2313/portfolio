import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CursorFollower from "./components/CursorFollower";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Resume from "./pages/Resume";
function App() {
  return (
    <>
      <Layout>
        <CursorFollower />
        <Navbar />
        <Home />
        <Projects />
        <Resume />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
