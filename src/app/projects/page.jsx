import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
//import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';

function Projects() {
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
            { path: "/uses", label: "Uses" },
          ]}
        />
   <ProjectCard
   logo ={ '/ensign.png'}
    name= { 'Company'}
    content={'Students need to create pages built with Next.js and styled with TailwindCSS.'}
    link={'https://company.com">https://company.com</'}
  />
<ProjectCard
   logo ={ '/ensign.png'}
    name= { 'Company'}
    content={ 'Students need to create pages built with Next.js and styled with TailwindCSS.'}
    link={'https://company.com">https://company.com</'}
  />
  <ProjectCard
   logo ={ '/ensign.png'}
    name= { 'Company'}
    content={ 'Students need to create pages built with Next.js and styled with TailwindCSS.'}
    link={'https://company.com">https://company.com</'}
  />
  <ProjectCard
   logo ={ '/ensign.png'}
    name= { 'Company'}
    content={ 'Students need to create pages built with Next.js and styled with TailwindCSS.'}
    link={'https://company.com">https://company.com</'}
  />
  <ProjectCard
   logo ={ '/ensign.png'}
    name= { 'Company'}
    content={ 'Students need to create pages built with Next.js and styled with TailwindCSS.'}
    link={'https://company.com">https://company.com</'}
  />
  <ProjectCard
   logo ={ '/ensign.png'}
    name= { 'Company'}
    content={ 'Students need to create pages built with Next.js and styled with TailwindCSS.'}
    link={'https://company.com">https://company.com</'}
  />
      </div>

      <Footer links={links} />
    </div>
  );
}

export default Projects;
