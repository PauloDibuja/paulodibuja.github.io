import Link from "next/link"
import NavList from "../navlist"
import Footer from "../footer"
import MainFrame from "../mainframe"
import MainContent from "../maincontent"
export default function Bio() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavList></NavList>
            <MainFrame title={"¿Quién es PauloDibuja?"} showProfilePic={false} subtitle=""/>
            <MainContent>
                <img src='images\paulo_foto.jpg' className="w-32 md:w-64 p-4 rounded-full" alt="PauloDibuja" />
                    <div className="max-w-2xl text-center">
                        <p>
                            Mi nombre es Paulo Lara, conocido en internet por "PauloDibuja" y soy un estudiante que crea videojuegos y contenido para redes sociales, particularmente{' '}
                            <a href="https://www.youtube.com/c/PauloDibuja" className="text-blue-500 hover:underline">YouTube</a>.
                        </p>
                        <p>
                            Nací el 12 de agosto de 2003, en la ciudad de Talca, Chile. Desde pequeño, me ha gustado la música y sigue siendo uno de mis grandes hobbies. Mientras estudiaba en el colegio, me empecé a interesar en el desarrollo de videojuegos y la informática y empecé a hacer vídeos en YouTube. Actualmente estoy estudiando Ingeniería Civil Informática.
                        </p>
                        <h2>Características</h2>
                        <ul className="list-disc list-inside">
                            <li>Personalidad (MBTI): INTP</li>
                            <li>Orientación Sexual: Bisexual</li>
                        </ul>
                    </div>
            </MainContent>

            <Footer></Footer>
        </div>
    )
}