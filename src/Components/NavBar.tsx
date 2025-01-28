import { Carent } from "../Icons";

type NavBarPops = {
    title: string;
    description: string;
};

export const NavBar = ({ description, title }: NavBarPops) => {
    return (
        <nav className="w-full bg-big-stone-950">
            <div className="container px-6 py-4 flex items-center justify-between gap-20">
                <h6 className="text-gray-300">Menu principal</h6>
                <div className="flex items-center justify-between pl-6 flex-1">
                    <div className="flex items-center gap-3 justify-center">
                        <h3 className="text-white font-semibold text-2xl">
                            {title}
                        </h3>
                        <p className="text-loblolly-300">{description}</p>
                    </div>
                    <ul className="flex items-center gap-3">
                        <li className="text-loblolly-300 flex gap-2.5">
                            <span>Home</span>
                        </li>
                        <li className="text-loblolly-300 flex items-center gap-2.5">
                        <Carent />
                            <span>Ticket</span>
                        </li>
                        <li className="text-iron-200 flex items-center gap-2.5 font-semibold">
                            <Carent />
                            <span>Home</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
