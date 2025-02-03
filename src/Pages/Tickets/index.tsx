import { useNavigate } from "react-router-dom";
import { Button, Field, Select } from "../../Components";
import { Files } from "../../Icons";

function Tickets() {
    const navigate = useNavigate()

    const listOptions = {
        subject: [
            "Alteração de ordem da biblioteca",
            "Alteração de termos para biblioteca",
            "Exclusão de termos para bibliotecas",
            "Falha na voz",
            "Inclusão de biblioteca ",
        ],
        urgency: ["SIM", "NÃO"],
        script: [
            "URA Informativa Estácio",
            "URA RECEPTIVA PF E PJ HOMOLOGACAO] Cartão Presente Carrefour",
            "0800 - Zeus Receptivo",
            "0800 Santander Receptivo",
        ],
        block: [
            "Em linha",
            "1 Fatura",
            "Com 2 ou mais faturas",
            "Sem interesse - Tim",
            "Envio SMS para Negativas",
        ],
        library: [
            "Afirmativas Identificação",
            "Pode",
            "Afirmativas genéricas",
            "Aguarde um momento",
            "Identificação locutor",
        ],
    } as const;
    return (
        <main className="w-full bg-white flex-1 mr-auto">
            <header className="w-full py-4 px-6 border-b border-r border-iron-200">
                <h2 className="text-xl font-semibold text-shuttle-gray-600">
                    Formulário
                </h2>
            </header>
            <form className="px-12 grid grid-cols-7 gap-x-6 gap-y-8 pt-4 pb-8">
                <Select.Root className="col-span-4">
                    <Select.Label>Assunto</Select.Label>
                    <Select.Select>
                        {listOptions.subject.map((el) => (
                            <Select.Option key={el}>{el}</Select.Option>
                        ))}
                    </Select.Select>
                </Select.Root>
                <Select.Root className="col-span-3 col-start-5">
                    <Select.Label>Sinalizar urgência máxima</Select.Label>
                    <Select.Select>
                        {listOptions.urgency.map((el) => (
                            <Select.Option key={el}>{el}</Select.Option>
                        ))}
                    </Select.Select>
                </Select.Root>
                <Field.Root className="col-span-7 row-start-2">
                    <Field.Label>Link</Field.Label>
                    <Field.Input />
                </Field.Root>
                <Select.Root className="col-span-2 row-start-3">
                    <Select.Label>Script</Select.Label>
                    <Select.Select>
                        {listOptions.script.map((el) => (
                            <Select.Option key={el}>{el}</Select.Option>
                        ))}
                    </Select.Select>
                </Select.Root>
                <Select.Root className="col-span-2 col-start-3 row-start-3">
                    <Select.Label>Bloco</Select.Label>
                    <Select.Select>
                        {listOptions.block.map((el) => (
                            <Select.Option key={el}>{el}</Select.Option>
                        ))}
                    </Select.Select>
                </Select.Root>
                <Select.Root className="col-span-2 col-start-5 row-start-3">
                    <Select.Label>Biblioteca</Select.Label>
                    <Select.Select>
                        {listOptions.block.map((el) => (
                            <Select.Option key={el}>{el}</Select.Option>
                        ))}
                    </Select.Select>
                </Select.Root>
                <Field.Root className="col-start-7 row-start-3">
                    <Field.Label>Componente</Field.Label>
                    <Field.Input />
                </Field.Root>
                <Field.Root className="col-span-7 row-start-4">
                    <Field.Label>Descrição do erro - Evidências</Field.Label>
                    <Field.Textarea />
                </Field.Root>
                <Field.Root className="col-span-7 row-start-5">
                    <Field.Label>Possível Solução</Field.Label>
                    <Field.Textarea />
                </Field.Root>
                <div className="flex items-center justify-between col-span-7 row-start-6">
                    <Button
                        appearance={"secondary"}
                        className="max-w-[7.625rem]"
                        type="button"
                        onClick={()=> navigate('/')}
                    >
                        Cancelar
                    </Button>
                    <Button appearance={"primary"} className="max-w-[9.813rem]">
                        <Files />
                        Adicionar
                    </Button>
                </div>
            </form>
        </main>
    );
}
export { Tickets as Component };
