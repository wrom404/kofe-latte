import Header from "@/components/ui-components/Header";
import Featured from "./Featured";
import Menu from "./Menu";
import Home from "./Home";

const Page = () => {
  return (
    // <div className="relative home min-h-screen bg-gradient-to-b from-(--primary-color) to-(--secondary-color)">
    <div className="relative home min-h-screen bg-(--primary-color)">
      <Header />
      <Home />
      <Featured />
      <Menu />
    </div>
  );
};

export default Page;
