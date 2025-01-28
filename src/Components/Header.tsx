import { cx } from "cva";
import { Bell, ConcentrixBrand, EnvelopeSimple, UserCircle, ZeusBrand } from "../Icons";

export const Header = () => {
    return (
        <header className="bg-black w-full">
            <div
                className={cx([
                    "px-8 py-4 container",
                    "flex justify-between items-center",
                ])}
            >
                <ZeusBrand className="text-turquoise-400" />
                <div className="flex items-center gap-12">
                    <ConcentrixBrand />
                    <ul className="flex items-center gap-3">
                        <li>
                            <UserCircle />
                        </li>
                        <li>
                            <Bell />
                        </li>
                        <li>
                            <EnvelopeSimple />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
