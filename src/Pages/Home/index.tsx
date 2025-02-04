import { useState } from "react";
import { Button, Modal } from "../../Components";
import { Check } from "../../Icons";
import { FormServiceEvaluation } from "./FormServiceEvaluation";

function Home() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleCloseModal = () => {
        setIsOpenModal((prev) => !prev);
    };
    const handleOpenModal = () => {
        setIsOpenModal((prev) => !prev);
    }
    return (
        <>
            <main className="w-full bg-white flex-1 h-screen">
                <Button className="ml-auto max-w-[8.438rem]" onClick={handleOpenModal}>
                    <Check />
                    Validar
                </Button>
            </main>
            <Modal.Root isOpen={isOpenModal} onClose={handleCloseModal}>
                <Modal.Content>
                    <FormServiceEvaluation onClose={handleCloseModal}/>
                </Modal.Content>
            </Modal.Root>
        </>
    );
}
export { Home as Component };
