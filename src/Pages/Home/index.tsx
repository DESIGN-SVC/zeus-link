import { useState } from "react";
import { Button, Modal } from "../../Components";
import { Check } from "../../Icons";
import { FormServiceEvaluation } from "./FormServiceEvaluation";
import { Nav } from "./Nav";
import { InfAudio } from "./InfAudio";
import { Card } from "./Card";
import { listDescriptionAudio } from "./listDescriptionAudio";
import { useNavigate } from "react-router-dom";
import { cx } from "cva";
import { Audio } from "./Audio";

function Home() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const navigate = useNavigate();

    const handleCloseModal = () => {
        setIsOpenModal((prev) => !prev);
    };
    const handleOpenModal = () => {
        setIsOpenModal((prev) => !prev);
    };

    return (
        <>
            <main className="bg-white pb-6">
                <Nav />
                <InfAudio />
                <section
                    className={cx([
                        "px-6 flex flex-col gap-3 relative",
                        "after:h-full after:w-0.5 after:bg-iron-200 ",
                        'after:absolute after:left-9.5 after:top-10',
                        'overflow-hidden'
                    ])}
                >
                    {listDescriptionAudio.map(
                        (
                            {
                                type,
                                code,
                                time,
                                description,
                                descriptionNoDecision,
                                blockDecision,
                                requestDecision,
                                descriptionDecision,
                            },
                            index
                        ) => (
                            <Card.Root key={code + index * Math.random()}>
                                <Card.Content>
                                    <Card.Header
                                        type={
                                            type.toUpperCase() as
                                                | "PLAY"
                                                | "DECISION"
                                                | "START"
                                        }
                                        code={code}
                                        time={time}
                                        blockDecision={blockDecision}
                                        requestDecision={requestDecision}
                                        onPlus={() => navigate("/tickets")}
                                        onPlay={()=>console.log('click audio')}
                                    />
                                    <Card.Description>
                                        {description}
                                    </Card.Description>
                                    <Card.Debug
                                        descriptionNoDecision={
                                            descriptionNoDecision
                                        }
                                        type={
                                            type.toUpperCase() as
                                                | "PLAY"
                                                | "DECISION"
                                                | "START"
                                        }
                                        descriptionDecision={
                                            descriptionDecision
                                        }
                                    />
                                </Card.Content>
                            </Card.Root>
                        )
                    )}
                </section>
                <Button
                    className="ml-auto max-w-[8.438rem] mt-3 mr-6"
                    onClick={handleOpenModal}
                    appearance={"primary"}
                >
                    <Check />
                    Validar
                </Button>
            </main>
            <Modal.Root isOpen={isOpenModal} onClose={handleCloseModal}>
                <Modal.Content>
                    <FormServiceEvaluation onClose={handleCloseModal} />
                </Modal.Content>
            </Modal.Root>
            <Audio />
        </>
    );
}

export { Home as Component };
