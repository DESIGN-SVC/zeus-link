import { useId } from "react";
import { Button, CheckBox, Field, Select } from "../../Components";
import { Check, X } from "../../Icons";

type FormServiceEvaluationProps = {
    onClose: () => void;
};

export const FormServiceEvaluation = ({
    onClose,
}: FormServiceEvaluationProps) => {
    const idCheckBox = useId();
    const listCheckbox = [
        {
            label: "Fluxo correto?",
            id: idCheckBox,
        },
        {
            label: "Ordem das bibliotecas corretas?",
            id: idCheckBox,
        },
        {
            label: "Dados corretos?",
            id: idCheckBox,
        },
        {
            label: "Cliente fala junto com AD?",
            id: idCheckBox,
        },
        {
            label: "Cliente fala rápido?",
            id: idCheckBox,
        },
    ] as const;
    return (
        <>
            <header className="flex items-center justify-between mb-8">
                <h6 className="text-iron-950 font-semibold text-xl">
                    Avaliação do atendimento
                </h6>
                <button
                    className="text-loblolly-600 cursor-pointer"
                    onClick={onClose}
                >
                    <X />
                </button>
            </header>
            <form className="grid grid-cols-3 gap-x-6 gap-y-8">
                <Select.Root>
                    <Select.Label>Volume</Select.Label>
                    <Select.Select>
                        <Select.Option></Select.Option>
                    </Select.Select>
                </Select.Root>
                <Select.Root>
                    <Select.Label>Ruído</Select.Label>
                    <Select.Select>
                        <Select.Option></Select.Option>
                    </Select.Select>
                </Select.Root>
                <Select.Root>
                    <Select.Label>Picotes</Select.Label>
                    <Select.Select>
                        <Select.Option></Select.Option>
                    </Select.Select>
                </Select.Root>
                <Select.Root>
                    <Select.Label>Transcrições incorretas</Select.Label>
                    <Select.Select>
                        <Select.Option></Select.Option>
                    </Select.Select>
                </Select.Root>
                <Select.Root>
                    <Select.Label>Falso mudo</Select.Label>
                    <Select.Select>
                        <Select.Option></Select.Option>
                    </Select.Select>
                </Select.Root>
                <Select.Root>
                    <Select.Label>Interações incoerentes</Select.Label>
                    <Select.Select>
                        <Select.Option></Select.Option>
                    </Select.Select>
                </Select.Root>
                <div className="grid grid-cols-[11.938rem_1fr] gap-x-12 gap-y-3 w-full col-span-3">
                    {listCheckbox.map(({ id, label }, index) => (
                        <CheckBox.Root key={id + index}>
                            <CheckBox.Checkbox id={id + index} />
                            <CheckBox.Label htmlFor={id + index}>
                                {label}
                            </CheckBox.Label>
                        </CheckBox.Root>
                    ))}
                </div>
                <Field.Root className="col-span-3 row-start-4">
                    <Field.Label>Motivo da falha (opcional)</Field.Label>
                    <Field.Textarea />
                </Field.Root>
                <Button
                    type="button"
                    onClick={onClose}
                    className="col-start-3 row-start-5 ml-auto max-w-[8.438rem] "
                >
                    <Check />
                    Validar
                </Button>
            </form>
        </>
    );
};
