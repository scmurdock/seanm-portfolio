import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
//import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';

function Uses() {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Uses",
      url: "/uses",
    },
  ];


  return (
    <div>
      <div>
        <Navbar
          options={[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/Uses", label: "Uses" },
          ]}
          />

      </div>
      <div></div>
      <Footer links={links} />
    </div>
  );

}

export default Uses;
