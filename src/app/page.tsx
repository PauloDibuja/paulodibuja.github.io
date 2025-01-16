import Image from "next/image";
import Link from "next/link";
import NavList from "./navlist";
import Footer from "./footer";
import MainFrame from "./mainframe";
import MainContent from "./maincontent";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavList></NavList>
      <MainFrame title={"PauloDibuja"} showProfilePic={true} subtitle="Desarrollador de videojuegos indie y creador de contenido" />
      <MainContent>
        <section>
          <h2>¡Bienvenidos!</h2>
          <p>Soy Paulo, un apasionado desarrollador de videojuegos y creador de contenido. En este sitio, comparto mis proyectos, tutoriales y recursos sobre el emocionante mundo del desarrollo de videojuegos.</p>
          <h2>¿Qué Hago?</h2>
          <ul>
            <li><strong>Desarrollo de Videojuegos</strong>: Exploro herramientas como Unity y Godot para crear juegos atractivos.</li>
            <li><strong>Contenido Educativo</strong>: Ofrezco tutoriales y consejos para ayudar a otros a comenzar en el desarrollo de videojuegos.</li>
            <li><strong>Proyectos</strong>: Visita mi <a href="https://paulodibuja.itch.io">perfil en itch.io</a> para jugar mis creaciones y descubrir nuevas experiencias.</li>
          </ul>
          <h2>Conéctate</h2>
          <p>Únete a mi comunidad siguiendo mis redes sociales y suscribiéndote a mi <a href="https://www.youtube.com/c/PauloDibuja">canal de YouTube</a> para obtener más contenido. ¡Gracias por tu apoyo y disfruta de tu visita!</p>
        </section>
      </MainContent>
      <Footer></Footer>
    </div>
  );
}
// https://yt3.googleusercontent.com/ytc/AIdro_kRK4tUiabIzcEvJ0G9lC00U7yUOXuYy1-aJ2SHV3SIhec=s900-c-k-c0x00ffffff-no-rj">

