import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-20 flex flex-col">
          <div className="flex-1 p-8">
            {children}
          </div>
        </main>
        <footer className="bg-white border-t border-gray-200 py-5 px-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 University of Southeastern Philippines. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
