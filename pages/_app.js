import NavBar from "../components/Navbar";
import "../styles/globals.css";
import { wrapper, store } from "../redux/store/index";
import { Provider } from "react-redux";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
// export default wrapper.withRedux(MyApp);
