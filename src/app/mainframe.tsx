interface MainFrameProps{
    title: string;
    subtitle: string;
    showProfilePic: boolean;
}

const MainFrame: React.FC<MainFrameProps> = ({title, subtitle, showProfilePic}) => {
    return (
        <div className="flex flex-col bg-fondo_paulodibuja bg-fixed bg-repeat bg-cover justify-center items-center">
            {showProfilePic && (
                <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_kRK4tUiabIzcEvJ0G9lC00U7yUOXuYy1-aJ2SHV3SIhec=s900-c-k-c0x00ffffff-no-rj" // Ruta de la imagen de perfil
                id="profilepic" // Ajusta el tamaño y estilo según sea necesario
                />
            )}
            <h1 id="title">{title}</h1>
            {subtitle != "" && (<h2 id="subtitle">{subtitle}</h2>)}
        </div>
    )
}
export default MainFrame;

/*background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
*/