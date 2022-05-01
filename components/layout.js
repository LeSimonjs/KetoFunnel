
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      

      <main className="flex-1 lg:container mx-auto ">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
