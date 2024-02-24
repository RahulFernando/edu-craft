import Header from "./_components/header";
import SideNav from "./_components/side-nav";

export default function layout({ children }) {
  return (
    <div>
      <div className="sm:w-64 hidden sm:block fixed">
        <SideNav />
      </div>
      <div className="sm:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
}
