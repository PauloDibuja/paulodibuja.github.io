// Define el componente que acepta children
const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <section id="main-content" className="flex-grow flex flex-col items-center">
                <div id="content-web" className="flex flex-col items-center gap-4">
                {children}
                </div>
        </section>
    );
};

export default MainContent;