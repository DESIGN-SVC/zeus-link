import { cx } from "cva";
import { Files } from "../../Icons";
import { ComponentPropsWithoutRef } from "react";

export const Nav = () => {
    const links = [
        "Dados",
        "Passos",
        "Integração",
        "Interações",
        "Avaliação",
    ] as const;
    return (
        <nav
            className={cx([
                "w-full px-6",
                "flex justify-between items-center gap-2.5",
                "border-b border-iron-200",
            ])}
        >
            <div
                className={cx([
                    "flex items-center gap-3",
                    "text-shuttle-gray-600 text-xl font-semibold",
                    "py-4",
                ])}
            >
                <Files width={32} height={32} />
                <span>#18770063523 - 11998120309</span>
            </div>
            <div>
                {links.map((el) => (
                    <LinksNav active={el === "Passos"} key={el}>
                        {el}
                    </LinksNav>
                ))}
            </div>
        </nav>
    );
};

type LinksNavProps = {
    active: boolean;
} & ComponentPropsWithoutRef<"button">;

const LinksNav = ({ active, ...props }: LinksNavProps) => (
    <button
        className={cx([
            "p-4 h-16",
            "text-shuttle-gray-600",
            "cursor-pointer",
            "border-b-2 border-transparent",
            {
                "!text-blue-lagoon-900 font-semibold !border-blue-lagoon-900 border-b-[3px]":
                    active,
            },
        ])}
        {...props}
    />
);

{
    <>
        <b>INFO: </b>Next_ids Mudo: - | Falha: 12 | Qualquer coisa: -
        <br />
        <b>INFO: </b>Tempos (Timeout: 30s | Silencio: 7s | Intervalo: 3s )
        <br />
        <b>INFO: </b>GRAVADO (AUDIO)
        <br />
        <b>TIMER: </b>[22.84113907814]: Record file
        <br />
        <b>TIMER: </b>[2.2040638923645]: Provider: speech-cpqd2-mrcp2 | Host:
        http://10.110.255.33:80/asr-server/rest/recognize/ | File:
        /tmp/asr/15270828573_16.wav
        <br />
        <b>INFO: </b>Verificando opções provider:speech-cpqd2-mrcp2 | Code:
        Status:000 Alternativas, dez (100%)
        <br />
        <b>INFO: </b>
        {`Convert: Texto [dez] => [dez]`}
        <br />
        <b>INFO: </b>[BI]Nível 1: Encontrado: Nota 10 | próximo:66
        <br />W<b>ARNING: </b>Trace não adicionado para componente: 16
        <br />
        <b>TIMER: </b>[0.0014898777008057]: Decision tests: 63
        <br />
        <b>INFO: </b>Provider:speech-cpqd2-mrcp2 | Caminho:1 | nextId:66
        <br />
        <b>INFO: </b>Valor setado para variavel : NOTA DEZ
        <br />
        <b>TIMER: </b>[2.50474560261]: COMPONENTE: Decision
        <br />
        <b>Timer 2.50</b>
        <br />
        <b>Componente Start</b>
        <br />
        <b>Biblioteca: </b>
        <span className="text-[#007CB4]">
            Nota 10 | Nota 10 Pesquisa - SAC SKY
        </span>
    </>;
}

<span className="text-[#007CB4]">Isso mesmo | Afirmativas - SAC SKY</span>;
