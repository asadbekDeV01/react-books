import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div id="body">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
