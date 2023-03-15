import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
     <div className="content">
        <Header />

        {children}
        <Footer />
      </div>
  );
};

export default Layout;
