import MainHeader from "./mainHeader/MainHeader";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <MainHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
