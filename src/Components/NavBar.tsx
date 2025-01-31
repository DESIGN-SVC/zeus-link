import { useLocation } from "react-router-dom";
import { Links } from ".";
import {
    AppWindows,
    CardHolder,
    ChatDots,
    Files,
    Gear,
    Microphone,
    NoteBook,
    PhoneCall,
    Receipt,
    Squares,
    ThreeStructure,
    UserCircle,
} from "../Icons";

export const NavBar = () => {
    const { pathname } = useLocation();

    const getPath = pathname.toLocaleLowerCase()
    console.log(pathname.toLocaleLowerCase())
    const links = [
        {
            text: "Bibliotecas",
            icon: <NoteBook />,
            path: "/",
        },
        {
            text: "Blocos",
            icon: <Squares />,
            path: "/",
        },
        {
            text: "Clientes",
            icon: <UserCircle width={20} height={20} />,
            path: "/",
        },
        {
            text: "Interações",
            icon: <ThreeStructure />,
            path: "/",
        },
        {
            text: "Itens da biblioteca",
            icon: <CardHolder />,
            path: "/",
        },
        {
            text: "Ligações",
            icon: <PhoneCall />,
            path: "/ligacoes",
        },
        {
            text: "Ocorrências",
            icon: <ChatDots />,
            path: "/",
        },
        {
            text: "Locutores",
            icon: <Microphone />,
            path: "/",
        },
        {
            text: "Scripts",
            icon: <Files />,
            path: "/",
        },
        {
            text: "Tickets",
            icon: <Receipt />,
            path: "/tickets",
        },
        {
            text: "Relatórios",
            icon: <AppWindows />,
            path: "/",
        },

        {
            text: "Configurações",
            icon: <Gear />,
            path: "/",
        },
    ] as const;

    return (
        <nav className="bg-black">
            <ul className="py-4 px-3 flex flex-col">
                {links.map(({ text, icon, path }) => (
                    <li key={text}>
                        <Links.Root to={path} active={path === getPath}>
                            <Links.Icon>{icon}</Links.Icon>
                            <Links.Text>{text}</Links.Text>
                        </Links.Root>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
