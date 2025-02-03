import {
    Outlet,
    ScrollRestoration,
    useLocation,
    useNavigate,
} from "react-router-dom";
import { Header, Loading, NavBar, SubHeader } from "../Components";
import { Suspense, useEffect } from "react";

export function RootLayout() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (pathname === "/") {
            navigate("/ligacoes");
        }
    }, [pathname]);

    return (
        <div className="relative flex min-h-dvh flex-col">
            <Header />
            <SubHeader
                title={pathname === "/ligacoes" ? "Ligações" : "Tickets"}
                description={
                    pathname === "/ligacoes"
                        ? "Informações gerais da ligação"
                        : "Formulário de cadastro de tickets"
                }
                breadcrumbs={
                    pathname === "/ligacoes"
                        ? ["Home", "Ligações"]
                        : ["Home", "Ligações", "Ticket"]
                }
            />
            <Suspense fallback={<Loading />} />
            <div className=" bg-[linear-gradient(90deg,rgba(0,0,0,1)_20%,rgba(255,255,255,1)_20%)] flex flex-1">
                <div className="grid grid-cols-[222px_1fr] container flex-1">
                    <NavBar />
                    <Outlet />
                </div>
            </div>
            <ScrollRestoration />
        </div>
    );
}

export { RootLayout as Component };
