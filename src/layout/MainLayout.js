import Header from "@/components/Header";
import Sidebar from "@/components/shared/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen grid lg:grid-cols-8 gap-4">
      <Sidebar />
      <div className="lg:col-span-7 px-4 h-full">
        <Header />
        <main className="bg-white p-4 rounded-xl h-[90vh] overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}
