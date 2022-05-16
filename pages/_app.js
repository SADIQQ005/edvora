import '../styles/globals.css'
import Header from "../components/Header";
import Taps from "../components/Taps";
import { AppWrapper } from '../context/state';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <AppWrapper>
        <Header />
      <div className="bg-gray-800 min-h-screen">
        <div className="px-10 text-white">
          <Taps />
          <Component {...pageProps} />
        </div>
        </div>
      </AppWrapper>
    </>
  )
}

export default MyApp
