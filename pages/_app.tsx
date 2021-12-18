import "../styles/globals.css";
import type { AppProps } from "next/app";
import "./index.scss";
import "../components/navBar.scss";
import "../components/home.scss";
import "../components/presentation/presentation.scss";
import "../components/presentation/presentationComponent.scss";
import "../components/steps/steps.scss";
import "../components/steps/stepComponent.scss";
import "../components/collaborators.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
