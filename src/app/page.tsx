import { FaHome } from "react-icons/fa";
import Hero from "../../components/Hero";
import { FloatingNav } from "../../components/ui/FloatingNav";
import Grid from "../../components/Grid";


export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center mx-auto flex-col overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />}
        ]}/>
        <Hero />
        {/* <Grid /> */}
      </div>
    </main>
  );
}
