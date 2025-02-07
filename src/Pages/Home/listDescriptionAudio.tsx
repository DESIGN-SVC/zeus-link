export const listDescriptionAudio = [
    {
        type: "Start",
        code: 1,
        time: "0.07s",
        description: <>playback:Teclado 3 segundos </>,
        descriptionNoDecision: {
            info: "Ligação atendida.",
            timer: "[0.0734069347]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 101,
        time: "3.98s",
        description: <>playback:/audios/andre_v2/32/teclado_3_segundos </>,
        descriptionNoDecision: {
            info: "PLAY AUDIO:playback:/audios/andre_v2/32/teclas_3_segundo_v3",
            timer: "[1.7652130127]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 101,
        time: "3.98s",
        description: (
            <>stream_file:/audios/andre_v2/32/4_qual_o_motivo_da_ligacao </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO:stream_file:/audios/andre_v2/32/4_qual_o_motivo_da_ligacao",
            timer: "[0.0203669071]:",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 34,
        time: "7.24s",
        description: (
            <>
                <span className="text-[#151DDD]">Mudança de endereço¹</span>(ASR
                0.29s CPqD-20 97.00%){" "}
            </>
        ),
        blockDecision: 3,
        requestDecision: "Sondagem",
        descriptionDecision: (
            <>
                <b>INFO:</b> Next_ids (Mudo: 96 | Falha: - | Qualquer coisa: 36
                <br />
                <b>INFO:</b>
                Tempos (Timeout: 10s | Silencio: 5s | Intervalo: 2.5s )
                <br />
                <b>INFO:</b>
                GRAVADO (AUDIO) <br /> <b>TIMER: </b> [10.007333993912]: Record
                file <br />
                <b>TIMER: </b>
                [4.2324531078339]: Provider: speech-google-mrcp2 | Host: | File:
                /tmp/asr/15270828573_34.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-google-mrcp2 |
                Code: Status:000 Alternativas, mudança de endereço (97%)
                <br />
                <b>INFO:</b> Falou qualquer coisa.
                <br />
                <b>WARNING: </b> Trace não adicionado para componente: 34
                <br />
                <b>TIMER: </b> [0.0041100978851318]: Decision tests: 36{" "}
                <b>INFO:</b>
                Provider:speech-google-mrcp2 | Caminho:3 | nextId:36
                <br />
                <b>INFO:</b> Valor setado para variavel : MUDANÇA DE ENDEREÇO
                <br />
                <b>TIMER: [14.2449510098]: COMPONENTE: </b>
                Decision <br />
                <b>Timer 7.24 </b> <br />
                <b>Componente Start</b> <br />
                <b> BIBLIOTECA: </b>{" "}
                <span className="text-[#007CB4]">
                    Mudança de endereço | MUDANÇA DE ENDEREÇO
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 3,
        time: "0.21s",
        description: <>Ligação atendida. </>,
        descriptionNoDecision: {
            info: "Ligação atendida.",
            timer: "[0.0002939701]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 3,
        time: "3.87s",
        description: (
            <>playback: entendi você quer fazer a mudança de endereço certo </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO:playback:/audios/andre_v2/32/848_entendi_voce_quer_fazer_a_mudanca_de_endereco_certo",
            timer: "[3.8654918671]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 1739,
        time: "3.1s",
        description: (
            <>
                <span className="text-[#151DDD]">Certo¹</span>(ASR 0.29s CPqD-20
                95.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Sondagem",
        descriptionDecision: (
            <>
                <b>INFO:</b> Next_ids (Mudo: 1747 | Falha: 1740 | Qualquer
                coisa: -
                <br />
                <b>INFO:</b>
                Tempos (Timeout: 10s | Silencio: 5s | Intervalo: 1s )
                <br />
                <b>INFO:</b>
                GRAVADO (AUDIO)
                <br />
                <b>TIMER: [10.001497030258]: </b>
                Record file
                <br />
                <b>TIMER: [1.1643099784851]: </b> Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_1739.wav
                <br />
                <b>INFO:</b>
                Verificando opções provider:speech-cpqd2-mrcp2 | Code:
                Status:000 Alternativas, certo (95%)
                <br />
                <b>WARNING: </b> Trace não adicionado para componente: 1739
                <br />
                <b>INFO: [BI]Nível 1: </b> Encontrado: certo | próximo: 1739
                <br />
                <b>TIMER: [0.040588140487671]: </b> Decision tests: 896
                <br />
                <b>INFO:</b>
                Provider:speech-cpqd2-mrcp2 | Caminho:4 | nextId:1740 <br />
                <b>TIMER: [11.2071018219]: COMPONENTE:</b>
                Decision
                <br />
                <b>Timer 7.24 </b> <br />
                <b>Componente Start</b> <br />
                <b> BIBLIOTECA: </b>{" "}
                <span className="text-[#007CB4]">
                    Certo| Afirmativas Genéricas
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 3,
        time: "2.64s",
        description: <>playback:867 ok vou verificar o seu cadastro aqui </>,
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/867_ok_vou_verificar_o_seu_cadastro_aqui_",
            timer: "[2.6379470825]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 1690,
        time: "3.98s",
        description: (
            <>
                playback:868 para agendar a visita do técnico no novo endereço
                você precisa escolher uma das opções de visita{" "}
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/868_pra_agenda_a_visita_do_tecnico_no_novo_endereco_pra_incluso",
            timer: "[11.4416151047]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 1690,
        time: "11.44s",
        description: (
            <>
                playback:868A vou te passar as duas opções de visita técnica que
                temos disponíveis.{" "}
            </>
        ),
        descriptionNoDecision: {
            info: "Esperando 0.1 segundo(s)",
            timer: "[27.3903758526]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 1692,
        time: "27.39s",
        description: (
            <>
                playback:868B você prefere a visita avulsa de 99,90 ou o serviço
                de assistência técnica de 21 reais por mês?{" "}
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/868b_voce_prefere_a_visita_avulsa_de_99,90_ou_o_servico_de_assistencia_21_reais_por_mes",
            timer: "[8.4070100784]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 78,
        time: "4.26s",
        description: (
            <>
                <span className="text-[#151DDD]">A de 21³ </span>(ASR 0.19s
                CPqD-20 89.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO:</b>
                Tempos (Timeout: 30s | Silencio: 7s | Intervalo: 1s)
                <br />
                <b>INFO:</b>
                GRAVADO (AUDIO)
                <br />
                <b>TIMER[15.19529914856]: </b>
                Record file
                <br />
                <b>TIMER[2.2040300369263]: </b> Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_78.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, de vinte e um (89%)
                <br />
                <b>INFO:</b> {`Convert: Texto [de vinte e um] => [DE UM VINTE]`}
                <br />
                <b>INFO:</b> [BI]Nível 3: Encontrado: vinte um | próximo:728
                <br />
                <b>WARNING: </b> Trace não adicionado para componente: 78
                <br />
                <b>TIMER[0.039443016052246]: </b>Decision tests: 640
                <br />
                <b>INFO:</b> Provider:speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:728
                <br />
                <b>TIMER[4.2697480488]: COMPONENTE: </b> Decision
                <br />
                <b> Timer 4.26</b>
                <br />
                <b>Componente Start </b>
                <br />
                <b> BIBLIOTECA: </b>{" "}
                <span className="text-[#007CB4]">
                    Vinte um |Assistência técnica premium - SAC SKY - Abertura
                    de OS
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 258,
        time: "19.23s",
        description: <>playback:907 Vamos la confirmando entao...</>,
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/907_vamos_la_confirmando_entao",
            timer: "[19.2284440994]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 266,
        time: "2.48s",
        description: (
            <>
                <span className="text-[#151DDD]">Correto¹ </span>(ASR 0.20s
                CPqD-20 100.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO: </b>
                Next_ids (Mudo: 1360 | Falha: 1367 | Qualquer coisa: -)
                <br />
                <b>INFO:</b>
                Tempos (Timeout: 30s | Silencio: 7s | Intervalo: 1s)
                <br />
                <b>INFO:</b>
                GRAVADO (AUDIO)
                <br />
                <b>TIMER[7.7374711036682]:</b> Record file
                <br />
                <b>TIMER[0.74112010002136]: </b> Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_266.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, correto (100%)
                <br />
                <b>INFO: Convert:</b>
                {`Texto [correto] => [CORRETO]`}
                <br />
                <b>INFO: </b>[ASR]Nível 1: Encontrado: correto | próximo:279
                <br />
                <b>WARNING:</b>
                Trace não adicionado para componente: 266
                <br />
                <b>TIMER[0.0026021003723145]:</b> Decision tests: 101
                <br />
                <b>INFO: </b> Provider:speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:279
                <br />
                <b>TIMER[2.4819970131]: COMPONENTE:</b>
                Decision
                <br />
                <b>Timer 2.48</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca: </b>
                <span className="text-[#007CB4]">
                    Correto| Afirmativas - SAC SKY
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 279,
        time: "5.68s",
        description: (
            <>
                playback:914 otimo o servico foi incluso agora vamos seguir com
                o agendamento da sua visita tecnica .
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/914_otimo_o_servico_foi_incluso_agora_vamos_seguir_com_o_agendamento_da_sua_visita_tecnica",
            timer: "[5.6767671108]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 3,
        time: "10.37s",
        description: (
            <>
                playback:138 Pra sua segurança, preciso confirmar alguns
                dados...
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/138_pra_sua_seguranca_preciso_confirmar_alguns_dados",
            timer: "[10.3742079735]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 621,
        time: "3.42s",
        description: (
            <>
                <span className="text-[#151DDD]">Ok¹</span>(ASR 0.23s CPqD-20
                98.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO:</b> Next_ids (Mudo: 70 | Falha: 63 | Qualquer coisa: -)
                <br />
                <b>INFO:</b> Tempos (Timeout: 20s | Silencio: 7s | Intervalo:
                3s)
                <br />
                <b>INFO:</b> GRAVADO (AUDIO)
                <br />
                <b>TIMER[20.001184940338]:</b> Record file
                <br />
                <b>TIMER[2.363373041153]: </b> Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_621.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, Ok (98%)
                <br />
                <b>INFO:</b> {`Convert: Texto [Ok] => [Ok]`}
                <br />
                <b>INFO:</b> [BI] Nível 1: Encontrado: Ok | próximo:200
                <br />
                <b>WARNING: </b> Trace não adicionado para componente: 621
                <br />
                <b>TIMER[0.055281162261963]: </b> Decision tests: 950
                <br />
                <b>INFO:</b> Provider:speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:200
                <br />
                <b>TIMER[22.4205281734]: </b> COMPONENTE: Decision
                <br />
                <b>Timer 3.42</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca: </b>{" "}
                <span className="text-[#007CB4]">
                    {`Ok – Afirmativas genéricas`}
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 23,
        time: "2.41s",
        description: <>playback:190 Voce ta perto do seu equipamento Sky</>,
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/190_voce_ta_perto_do_seu_equipamento_sky",
            timer: "[2.4081969261]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 621,
        time: "3.42s",
        description: (
            <>
                <span className="text-[#151DDD]">
                    Eita não não não estou perto.¹
                </span>
                (ASR 0.23s CPqD-20 92.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO:</b> Next_ids (Mudo: 70 | Falha: 63 | Qualquer coisa:
                -)z
                <br />
                <b>INFO:</b> Tempos (Timeout: 20s | Silencio: 7s | Intervalo:
                3s)
                <br />
                <b>INFO:</b> GRAVADO (AUDIO)
                <br />
                <b>TIMER[20.001184940338]:</b> Record file
                <br />
                <b>TIMER[2.363373041153]:</b> Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_621.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas,eita não não não estou perto (92%)
                <br />
                <b>INFO:</b>
                {`Convert: Texto [Eita não não não estou perto.] => [Eita não não não estou perto.]`}
                <br />
                <b>INFO:</b> [BI] Nível 3: Encontrado: não estou perto |
                próximo:200
                <br />
                <b>WARNING:</b> Trace não adicionado para componente: 621
                <br />
                <b>TIMER[0.055281162261963]:</b> Decision tests: 950
                <br />
                <b>INFO:</b> Provider:speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:200
                <br />
                <b>TIMER[22.4205281734]:</b> COMPONENTE: Decision
                <br />
                <b> Timer 3.42</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca:</b>
                <span className="text-[#007CB4]">
                    Não estou perto |Não próximo a equipamento - SAC SKY -
                    Problemas com equipamento
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 197,
        time: "2.63s",
        description: <>playback:149 Entao vamo tenta confirma outro dado </>,
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/149_entao_vamo_tenta_confirma_outro_dado",
            timer: "[2.6283290386]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 197,
        time: "2.63s",
        description: (
            <>
                playback:150 playback:250 Preciso que me fale o numero do RG do
                titular da assinatura{" "}
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/250_preciso_que_me_fale_o_numero_do_rg_do_titular_da_assinatura",
            timer: "[4.2245628834]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 464,
        time: "10.23s",
        description: (
            <>
                <span className="text-[#151DDD]">
                    É quarenta e um quinhentos e noventa e oito cento e
                    cinquenta e sete dígito oito¹ X “É 41 598 157 dígito 8”
                </span>
                (ASR 0.20s CPqD-20 76.89%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO:</b> Next_ids (Mudo: 486 | Falha: - | Qualquer coisa:
                604)
                <br />
                <b>INFO:</b> Tempos (Timeout: 15s | Silencio: 7s | Intervalo:
                3s)
                <br />
                <b>INFO:</b> GRAVADO (AUDIO)
                <br />
                <b>TIMER[15.000730991364]:</b> Record file
                <br />
                <b>TIMER[4.2101950645447]:</b> Provider: speech-google-mrcp2 |
                Host: | File: /tmp/asr/15270828573_464.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-google-mrcp2 |
                Code: Status:000 Alternativas, é 41 598 157 digito 8 (77%)
                <br />
                <b>INFO:</b> Falou qualquer coisa.
                <br />
                <b>WARNING:</b> Trace não adicionado para compontente: 464
                <br />
                <b>TIMER[0.014188051223755]:</b> Decision tests: 146
                <br />
                <b>INFO:</b> Provider:speech-google-mrcp2 | Caminho:3 |
                nextId:604
                <br />
                <b>INFO:</b> Valor setado para variável: É 41 598 157 DIGITO 8
                <br />
                <b>TIMER[10.2360448933]: COMPONENTE:</b> Decision
                <br />
                <b>Timer 10.23</b>
                <br />
                <b>Componente Start</b>
            </>
        ),
    },
    {
        type: "Play",
        code: 489,
        time: "2.16s",
        description: <>playback:148 Confirmado Vamo continua</>,
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/148_confirmado_vamo_continua",
            timer: "[2.1616349220]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 549,
        time: "10.78s",
        description: (
            <>
                playback:1A Vo precisa de alguns dados sobre o novo endereco
                playback:2A O CEP cadastrado aqui no sistema e o playback:2B Vai
                continua o mesmo
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/1a_vo_precisa_de_alguns_dados_sobre_o_novo_endereco",
            timer: "[10.7776880264]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 571,
        time: "2.12s",
        description: (
            <>
                <span className="text-[#151DDD]">Não mudei de casa.³</span>
                (ASR 0.20s CPqD-20 100.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO:</b> Tempos (Timeout: 10s | Silencio: 5s | Intervalo:
                1s)
                <br />
                <b>INFO:</b> GRAVADO (AUDIO)
                <br />
                <b>TIMER[10.001488924026]:</b> Record file
                <br />
                <b>TIMER[1.0854477882385]:</b> Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_571.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, Não mudei de casa (100%)
                <br />
                <b>INFO:</b>{" "}
                {`Convert: Texto [não mudei de casa] => [MUDEI DE CASA]`}
                <br />
                <b>INFO:</b> [BI]Nível 3: Encontrado: não | próximo:1385
                <br />
                <b>WARNING:</b> Trace não adicionado para componente: 571
                <br />
                <b>TIMER[0.030124187469482]:</b> Decision tests: 654
                <br />
                <b>INFO:</b> Provider:speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:1385
                <br />
                <b>TIMER[2.1278808212]:</b> COMPONENTE: Decision
                <br />
                <b>Timer 2.12</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca:</b>{" "}
                <span className="text-[#007CB4]">Não | Não</span>
            </>
        ),
    },
    {
        type: "Play",
        code: 609,
        time: "5.79s",
        description: (
            <>
                playback:12A Certo, então vou precisar que me passe todos os
                dados do novo endereço...
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/12a_certo_entao_vou_precisar_que_me_passe_todos_os_dados_do_novo_endereco",
            timer: "[5.7929430008]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 3,
        time: "4.2s",
        description: <>playback:281 Me fale apenas o estado do novo endereço</>,
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/12a_me_fale_apenas_o_estado_do_novo_endereço",
            timer: "[4.27485908374]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 4,
        time: "3.13s",
        description: (
            <>
                <span className="text-[#151DDD]">São Paulo¹ </span>
                (ASR 0.20s CPqD-20 95.20%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO:</b> Next_ids (Mudo: 624 | Falha: 635 | Qualquer coisa:
                -)
                <br />
                <b>INFO:</b> Tempos (Timeout: 10s | Silencio: 5s | Intervalo:
                3s)
                <br />
                <b>INFO:</b> GRAVADO (AUDIO)
                <br />
                <b>TIMER[3.001408815384]:</b> Record file
                <br />
                <b>TIMER[2.2040231227875]:</b> Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_611.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, São Paulo (95%)
                <br />
                <b>WARNING:</b> Trace não adicionado para componente: 611
                <br />
                <b>TIMER[0.093894004821777]:</b> Decision tests: 1300
                <br />
                <b>INFO:</b> Provider:speech-cpqd2-mrcp2 | Caminho:4 |
                nextId:635
                <br />
                <b>TIMER[8.13000991344]:</b> COMPONENTE: Decision
                <br />
                <b>Timer 3.13</b>
                <br />
                <b>Componente Start</b>
            </>
        ),
    },
    {
        type: "Play",
        code: 740,
        time: "5.14s",
        description: (
            <>
                playback:38A So pra confirmar playback:38B O ESTADO que me disse
                e /tts/pt-br_m_cpqddouglas_sao_paulo.wav playback:38C Isso mesmo{" "}
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/38a_so_pra_confirmar",
            timer: "[2.9507210255]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 853,
        time: "5.8s",
        description: (
            <>
                <span className="text-[#151DDD]">Correto esse mesmo² </span>
                (ASR 0.20s CPqD-20 94.29%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO:</b> Next_ids (Mudo: 775 | Falha: 815 | Qualquer coisa:
                -)
                <br />
                <b>INFO:</b> Tempos (Timeout: 15s | Silencio: 7s | Intervalo:
                2s)
                <br />
                <b>INFO:</b> GRAVADO (AUDIO)
                <br />
                <b>TIMER[9.9201350212097]:</b> Record file
                <br />
                <b>TIMER[0.87918496131897]:</b> Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_774.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, correto esse mesmo (94%)
                <br />
                <b>INFO:</b>{" "}
                {`Convert: Texto [correto esse mesmo] => [CORRETO ESSO MESMO]`}
                <br />
                <b>INFO:</b> [BI]Nível 3: Encontrado: esse mesmo | próximo:820
                <br />
                <b>WARNING:</b> Trace não adicionado para componente: 774
                <br />
                <b>TIMER[0.017699003219604]:</b> Decision tests: 875
                <br />
                <b>INFO:</b> Provider:speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:820
                <br />
                <b>TIMER 5.817912101</b>
                <br />
                <b>Timer 5.8</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Bibloteca:</b>
                <span className="text-[#007CB4]">
                    Isso mesmo |Afirmativas - SAC SKY
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 820,
        time: "2.94s",
        description: (
            <>playback:45a me fale so o nome da cidade do seu novo endereco</>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/45a_me_fale_so_o_nome_da_cidade_do_seu_novo_endereco",
            timer: "[2.9394659996]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 853,
        time: "4.7s",
        description: (
            <>
                <span className="text-[#151DDD]">São José dos campos¹</span>
                (ASR 0.20s CPqD-20 100.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO:</b> Next_ids (Mudo: 821 | Falha: 859 | Qualquer coisa:
                856)
                <br />
                <b>INFO:</b> Tempos (Timeout: 15s | Silencio: 7s | Intervalo:
                2s)
                <br />
                <b>INFO:</b> GRAVADO (AUDIO)
                <br />
                <b>TIMER[5.1963031291962]:</b> Record file
                <br />
                <b>TIMER[0.47913098335266]:</b> Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_853.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, são josé dos campos (100%)
                <br />
                <b>INFO:</b> Falou qualquer coisa.
                <br />
                <b>WARNING:</b> Trace não adicionado para componente: 853
                <br />
                <b>TIMER[0.021250009536743]:</b> Decision tests: 350
                <br />
                <b>INFO:</b> Provider:speech-cpqd2-mrcp2 | Caminho:3 |
                nextId:856
                <br />
                <b>INFO:</b> Valor setado para variável: SÃO JOSÉ DOS CAMPOS
                <br />
                <b>TIMER[4.6975560188]:</b> COMPONENTE: Decision
                <br />
                <b>Timer 4.7</b>
                <br />
                <b>Componente Start</b>
            </>
        ),
    },
    {
        type: "Play",
        code: 935,
        time: "4.03s",
        description: (
            <>
                playback:55A A cidade que me disse e
                /tts/pt-br_m_cpqddouglas_sao_jose_dos_campos.wav playback:295A
                Ta certo{" "}
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO:playback:/audios/andre_v2/32/55a_a_cidade_que_me_disse_ehere:TypePlayCOLLECTION",
            timer: "[4.1007995605469E-5]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 952,
        time: "5.16s",
        description: (
            <>
                <span className="text-[#151DDD]">
                    Esta certo é isso mesmo.³{" "}
                </span>
                (ASR 0.20s CPqD-20 91.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO:</b> Next_ids Mudo: 949 | Falha: 969 | Qualquer coisa: -
                <br />
                <b>INFO:</b> Tempos (Timeout: 15s | Silencio: 7s | Intervalo: 2s
                )
                <br />
                <b>INFO:</b> GRAVADO (AUDIO)
                <br />
                <b>TIMER[4.778450012207]:</b> Record file
                <br />
                <b>TIMER[0.34492301940918]: Provider:</b> speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_952.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, Está certo é isso mesmo (91%)
                <br />
                <b>INFO:</b>{" "}
                {`Convert: Texto [dá certo é isso mesmo] => [ESTÁ CERTO É ISSO MESMO]`}
                <b>INFO:</b> [BI]Nível 3: Encontrado: isso mesmo | próximo:132
                <br />
                <b>WARNING:</b> Trace não adicionado para componente: 952
                <br />
                <b>TIMER[0.034844160079956]:</b> Decision tests: 898
                <br />
                <b>INFO:</b> Provider:speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:132
                <br />
                <b>TIMER[4.1589469910]: COMPONENTE:</b> Decision
                <br />
                <b>Timer 4.16</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca:</b>
                <span className="text-[#007CB4]">
                    Isso mesmo | Afirmativas - SAC SKY
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 935,
        time: "4.03s",
        description: <>playback:317 E qual e o bairro</>,
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/317_e_qual_e_o_bairro",
            timer: "[1.5075380802]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 134,
        time: "3.13s",
        description: (
            <>
                <span className="text-[#151DDD]">Parangaba¹</span>
                (ASR 0.20s CPqD-20 97.38%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO:</b> Next_ids (Mudo: 135 | Falha: - | Qualquer coisa:
                458)
                <br />
                <b>INFO:</b> Tempos (Timeout: 10s | Silencio: 5s | Intervalo: 2s
                )
                <br />
                <b>INFO:</b> GRAVADO (AUDIO)
                <br />
                <b>TIMER: [5.4067080020905]:</b> Record file
                <br />
                <b>TIMER: [0.4630401134491]:</b> Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_134.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, parangaba (97%)
                <br />
                <b>INFO:</b> Falou qualquer coisa.
                <br />
                <b>WARNING:</b> Trace não adicionado para componente: 134
                <br />
                <b>TIMER: [0.026344060897827]:</b> Decision tests: 596
                <br />
                <b>TIMER: [2.2083909511566]:</b> Provider: speech-google-mrcp2 |
                Host: | File: /tmp/asr/15270828573_134.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-google-mrcp2 |
                Code: Status:000 Alternativas, Parangaba (97%)
                <br />
                <b>INFO:</b> Falou qualquer coisa.
                <br />
                <b>WARNING:</b> Trace não adicionado para componente: 134
                <br />
                <b>TIMER: [0.0257568359375]:</b> Decision tests: 1192
                <br />
                <b>INFO:</b> Provider:speech-google-mrcp2 | Caminho:3 |
                nextId:458
                <br />
                <b>INFO:</b> Valor setado para variável: PARANGABA
                <br />
                <b>TIMER: [3.1313929558]: COMPONENTE:</b> Decision
                <br />
                <b>Timer 3.13</b>
                <br />
                <b>Componente Start</b>
            </>
        ),
    },
    {
        type: "Play",
        code: 935,
        time: "4.03s",
        description: (
            <>
                playback:60A O bairro que me passou e
                /tts/pt-br_m_cpqddouglas_parangaba.wav playback:295A Ta certo
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/60a_o_bairro_que_me_passou_ehere:TypePlayCOLLECTION",
            timer: "[0.33427500724792]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 1050,
        time: "3.76s",
        description: (
            <>
                <span className="text-[#151DDD]">Está certo esse mesmo²</span>
                (ASR 0.20s CPqD-20 89.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO: </b> Tempos (Timeout: 10s | Silencio: 5s | Intervalo:
                1s)
                <br />
                <b>INFO: </b> GRAVADO (AUDIO)
                <br />
                <b>TIMER: [3.4181549549103]: </b> Record file
                <br />
                <b>TIMER: [0.31276893615723]: </b> Provider: speech-cpqd2-mrcp2
                | Host: http://10.110.255.33:80/asr-server/rest/recognize/ |
                File: /tmp/asr/15270828573_1050.wav
                <br />
                <b>INFO: </b> Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, Está certo esse mesmo (89%)
                <br />
                <b>INFO: </b>{" "}
                {`Convert: Texto [caçar tudo isso mesmo] => [ESTÁ CERTO ESSE MESMO]`}
                <br />
                <b>INFO: </b> [BI] Nível 2: Encontrado: Esse mesmo | próximo:174
                <br />
                <b>WARNING: </b> Trace não adicionado para componente: 1050
                <br />
                <b> TIMER: [0.025382041931152]:</b> Decision tests: 912
                <br />
                <b>INFO: </b> Provider: speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:174
                <br />
                <b>TIMER: [3.7569789886]: </b> COMPONENTE: Decision
                <br />
                <b>Timer 3.76</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca: </b>
                <span className="text-[#007CB4]">
                    Isso mesmo | Afirmativas - SAC SKY
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 174,
        time: "2.1 s",
        description: <>playback:65a agora me fale apenas o nome da rua</>,
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/65a_agora_me_fale_apenas_o_nome_da_rua",
            timer: "[2.0992569923]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 174,
        time: "5.96s",
        description: (
            <div className="flex items-center gap-1">
                <span className="text-[#151DDD]">
                    ✗ Sebastião messias da silva.¹ <br /> ✓ Sebastião Messias da
                    Silva.¹
                </span>
                <span>
                    (ASR 0.20s CPqD-20 91.00%)
                    <br />
                    (ASR 0.20s Google 97.00%)
                </span>
            </div>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO:</b> Next_ids (Mudo: 176 | Falha: - | Qualquer coisa:
                460)
                <br />
                <b>INFO:</b> Tempos (Timeout: 10s | Silencio: 5s | Intervalo: 1s
                )
                <br />
                <b>INFO:</b> GRAVADO (AUDIO)
                <br />
                <b>TIMER:</b> [10.001626014709]: Record file
                <br />
                <b>TIMER:</b> [2.2032270431519]: Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_175.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, sebastião messias da silva (91%)
                <br />
                <b>INFO:</b> Falou qualquer coisa.
                <br />
                <b>WARNING:</b> Trace não adicionado para componente: 175
                <br />
                <b>TIMER:</b> [0.040627956390381]: Decision tests: 596
                <br />
                <b>TIMER:</b> [2.6824471950531]: Provider: speech-google-mrcp2 |
                Host: | File: /tmp/asr/15270828573_175.wav
                <br />
                <b>INFO:</b> Verificando opções provider:speech-google-mrcp2 |
                Code: Status:000 Alternativas, Sebastião Messias da Silva (97%)
                <br />
                <b>INFO:</b> Falou qualquer coisa.
                <br />
                <b>WARNING:</b> Trace não adicionado para componente: 175
                <br />
                <b>TIMER:</b> [0.029133796691895]: Decision tests: 1192
                <br />
                <b>INFO:</b> Provider:speech-google-mrcp2 | Caminho:3 |
                nextId:460
                <br />
                <b>INFO:</b> Valor setado para variável : SEBASTIÃO MESSIAS DA
                SILVA
                <br />
                <b>TIMER:</b> [5.9581620693]: COMPONENTE: Decision
                <br />
                <b>Timer 5.96</b>
                <br />
                <b>Componente Start</b>
            </>
        ),
    },
    {
        type: "Play",
        code: 1081,
        time: "5.4s",
        description: (
            <>
                playback:67A O nome da rua que informou foi
                /tts/pt-br_m_cpqddouglas_sebastiao_messias_da_silva.wav
                playback:295A Ta certo{" "}
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/67a_o_nome_da_rua_que_informou_foihere:TypePlayCOLLECTION",
            timer: "[0.61549210548401]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 1142,
        time: "3.37s",
        description: (
            <>
                <span className="text-[#151DDD]">Está certo esse mesmo.¹</span>
                (ASR 0.20s CPqD-20 100.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO: </b>Next_ids (Mudo: 1139 | Falha: 1150 | Qualquer
                coisa: -
                <br />
                <b>INFO: </b>Tempos (Timeout: 10s | Silencio: 5s | Intervalo: 1s
                )
                <br />
                <b>INFO: </b>GRAVADO (AUDIO)
                <br />
                <b>TIMER: </b>[3.0192639827728]: Record file
                <br />
                <b>TIMER: </b>[0.31464886665344]: Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_1142.wav
                <br />
                <b>INFO: </b>Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, Está certo esse mesmo (100%)
                <br />
                <b>INFO: </b>
                {`Convert: Texto [tá certo isso mesmo] => [ESTÁ CERTO ESSO MESMO]`}
                <br />
                <b>INFO: </b>[BI]Nível 3: Encontrado: isso mesmo | próximo:432
                <br />
                <b>WARNING: </b>Trace não adicionado para componente: 1142
                <br />
                <b>TIMER: </b>[0.030548095703125]: Decision tests: 880
                <br />
                <b>INFO: </b>Provider:speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:432
                <br />
                <b>TIMER: </b>[3.3652520180]: COMPONENTE: Decision
                <br />
                <b>Timer 3.37</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca: </b>
                <span className="text-[#007CB4]">
                    Esse mesmo | Afirmativas - SAC SKY
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 432,
        time: "6.82s",
        description: (
            <>
                playback:341 So um momento que vo verifica esse endereco
                playback:Teclado 3 segundos
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/341_so_um_momento_que_vo_verifica_esse_endereco",
            timer: "[6.8195238113]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 216,
        time: "3.69s",
        description: (
            <>
                playback:72a agora preciso que me fale apenas o numero do seu
                novo endereco
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/72a_agora_preciso_que_me_fale_apenas_o_numero_do_seu_novo_endereco",
            timer: "[3.6949498653]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 216,
        time: "4.91s",
        description: (
            <>
                <span className="text-[#151DDD]">Número é 49.¹</span>
                (ASR 0.20s Google 95.00% 88.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO: </b>Next_ids (Mudo: 246 | Falha: - | Qualquer coisa:
                463
                <br />
                <b>INFO: </b>Tempos (Timeout: 10s | Silencio: 5s | Intervalo: 1s
                )
                <br />
                <b>INFO: </b>GRAVADO (AUDIO)
                <br />
                <b>TIMER: </b>[5.6719679832458]: Record file
                <br />
                <b>TIMER: </b>[2.2062709331512]: Provider: speech-google-mrcp2 |
                Host: | File: /tmp/asr/15270828573_232.wav
                <br />
                <b>INFO: </b>Verificando opções provider:speech-google-mrcp2 |
                Code: Status:000 Alternativas, número é 49 (95%)
                <br />
                <b>INFO: </b>Falou qualquer coisa.
                <br />
                <b>WARNING: </b>Trace não adicionado para compontente: 232
                <br />
                <b>TIMER: </b>[0.02680492401123]: Decision tests: 624
                <br />
                <b>INFO: </b>Provider:speech-google-mrcp2 | Caminho:3 |
                nextId:463
                <br />
                <b>INFO: </b>Valor setado para variável : NÚMERO É 49
                <br />
                <b>TIMER: </b>[4.9058010578]: COMPONENTE: Decision
                <br />
                <b>Timer 4.91</b>
                <br />
                <b>Componente Start</b>
            </>
        ),
    },
    {
        type: "Play",
        code: 681,
        time: "6.12s",
        description: (
            <>
                playback:73A So pra confirma o numero do seu novo endereco e
                playback:295A Ta certo
            </>
        ),
        descriptionNoDecision: {
            info: ": PLAY AUDIO: playback:/audios/andre_v2/32/73a_so_pra_confirma_o_numero_do_seu_novo_endereco_ehere:TypePlayCHANNEL_V1",
            timer: "[6.1204738617]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 680,
        time: "3.92s",
        description: (
            <>
                <span className="text-[#151DDD]">Está certo isso mesmo.³ </span>
                (ASR 0.20s CPqD-20 91.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO: </b>Next_ids (Mudo: 682 | Falha: 1273 | Qualquer coisa:
                -
                <br />
                <b>INFO: </b>Tempos (Timeout: 10s | Silencio: 5s | Intervalo: 1s
                )
                <br />
                <b>INFO: </b>GRAVADO (AUDIO)
                <br />
                <b>TIMER:</b> [3.5684869289398]: Record file
                <br />
                <b>TIMER:</b> [0.32715606689453]: Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_680.wav
                <br />
                <b>INFO: </b>Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, Está certo isso mesmo (91%)
                <br />
                <b>INFO: </b>
                {`Convert: Texto [Está certo isso mesmo] => [ESTÁ CERTO ISSO MESMO]`}
                <br />
                <b>INFO: </b>[BI]Nível 3: Encontrado: isso mesmo | próximo:270
                <br />
                <b>WARNING: </b>Trace não adicionado para componente: 680
                <br />
                <b>TIMER:</b> [0.022043943405151]: Decision tests: 655
                <br />
                <b>INFO: </b>Provider:speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:270
                <br />
                <b>TIMER:</b> [3.9183681011]: COMPONENTE: Decision
                <br />
                <b>Timer 3.92</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca:</b>{" "}
                <span className="text-[#007CB4]">
                    Isso mesmo | Afirmativas - SAC SKY
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 270,
        time: "1.69s",
        description: <>playback:357 E casa ou apartamento</>,
        descriptionNoDecision: {
            info: ": PLAY AUDIO: playback:/audios/andre_v2/32/357_e_casa_ou_apartamento",
            timer: "[6.1204738617]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 271,
        time: "3.12s",
        description: (
            <>
                <span className="text-[#151DDD]">Casa¹ </span>
                (ASR 0.20s CPqD-20 100.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO: </b>Next_ids (Mudo: 285 | Falha: 292 | Qualquer coisa:
                -)
                <br />
                <b>INFO: </b>Tempos (Timeout: 10s | Silencio: 5s | Intervalo:
                1s)
                <br />
                <b>INFO: </b>GRAVADO (AUDIO)
                <br />
                <b>TIMER: </b>[4.7372789382935]: Record file
                <br />
                <b>TIMER: </b>[0.38192200660706]: Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_271.wav
                <br />
                <b>INFO: </b>Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, casa (100%)
                <br />
                <b>INFO: </b>
                {`Convert: Texto [casa] => [CASA]`}
                <br />
                <b>INFO: </b>[ASR]Nível 1: Encontrado: casa | próximo:338
                <br />
                <b>WARNING: </b>Trace não adicionado para componente: 271
                <br />
                <b>TIMER: </b>[0.00095796585083008]: Decision tests: 36
                <br />
                <b>INFO: </b>Provider:speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:338
                <br />
                <b>INFO: </b>Valor setado para variável: CASA
                <br />
                <b>TIMER: </b>[2.1208999157]: COMPONENTE: Decision
                <br />
                <b>Timer 2.12</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca:</b>
                <span className="text-[#007CB4]">
                    Casa| Casa - Abertura de OS SKY
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 351,
        time: "5.27s",
        description: (
            <>
                playback:379 para ajudar o técnico a encontrar mais rápido o seu
                endereço me fale um ponto de referencia.
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/379Para_ajudar_a_encontrar_mais_rapido_o_seu_endereco_me_fale_um_ponto_de_referencia",
            timer: "[5.2714960575]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 352,
        time: "7.9s",
        description: (
            <>
                <span className="text-[#151DDD]">
                    Um ponto de referencia é borracharia do sinval¹{" "}
                </span>
                (ASR 0.20s CPqD-20 95.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO: </b>Next_ids Mudo: 357 | Falha: - | Qualquer coisa: 360
                <br />
                <b>INFO: </b>Tempos (Timeout: 10s | Silencio: 5s | Intervalo: 1s
                )
                <br />
                <b>INFO: </b>GRAVADO (AUDIO)
                <br />
                <b>TIMER: </b>[10.000982999802]: Record file
                <br />
                <b>TIMER: </b>[0.96228098869324]: Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_352.wav
                <br />
                <b>INFO: </b>Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, borracharia do sinval (95%)
                <br />
                <b>INFO: </b>Falou qualquer coisa.
                <br />
                <b>WARNING: </b>Trace não adicionado para componente: 352
                <br />
                <b>TIMER: </b>[0.022235155105591]: Decision tests: 314
                <br />
                <b>INFO: </b>Provider:speech-cpqd2-mrcp2 | Caminho:3 |
                nextId:360
                <br />
                <b>INFO: </b>Valor setado para variável: BORRACHARIA DO sinval
                <br />
                <b>TIMER: </b>[7.9863119125]: COMPONENTE: Decision
                <br />
                <b>Timer 7.9</b>
                <br />
                <b>Componente Start</b>
            </>
        ),
    },
    {
        type: "Play",
        code: 360,
        time: "1.56s",
        description: <>playback:497 legal anotei aqui</>,
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/497_legal_anotei_aqui",
            timer: "[1.5577759743]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 361,
        time: "11.72s",
        description: (
            <>
                playback:85B Vamo confirma O endereco pra reinstalacao e
                /tts/pt-br_m_cpqddouglas_sebastiao_messias_da_silva.wav
                playback:85C Numero playback:85D Na cidade
                /tts/pt-br_m_cpqddouglas_sao_jose_dos_campos.wav
                /tts/pt-br_m_cpqddouglas_sao_paulo.wav playback:33B e isso mesmo
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/85b_vamo_confirma_o_endereco_pra_reinstalacao_ehere:TypePlayCOLLECTION",
            timer: "[3.0040740966797E-5]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 362,
        time: "3.76s",
        description: (
            <>
                <span className="text-[#151DDD]">Isso mesmo certinho.³</span>
                (ASR 0.20s CPqD-20 99.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO: </b>Next_ids Mudo: 391 | Falha: 384 | Qualquer coisa: -
                <br />
                <b>INFO: </b>Tempos (Timeout: 10s | Silencio: 5s | Intervalo: 1s
                )
                <br />
                <b>INFO: </b>GRAVADO (AUDIO)
                <br />
                <b>TIMER: </b>[3.4576849937439]: Record file
                <br />
                <b>TIMER: </b>[0.28192400932312]: Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_362.wav
                <br />
                <b>INFO: </b>Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, isso mesmo certinho (99%)
                <br />
                <b>INFO: </b>
                {`Convert: Texto [isso mesmo certinho] => [ISSO MESMO CERTINHO]`}
                <br />
                <b>INFO: </b>[BI]Nível 3: Encontrado: isso mesmo | próximo:1295
                <br />
                <b>WARNING: </b>Trace não adicionado para componente: 362
                <br />
                <b>TIMER: </b>[0.024478912353516]: Decision tests: 975
                <br />
                <b>INFO: </b>Provider:speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:1295
                <br />
                <b>TIMER: </b>[3.7647600174]: COMPONENTE: Decision
                <br />
                <b>Timer 3.76</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca:</b>{" "}
                <span className="text-[#007CB4]">
                    Isso mesmo | Afirmativas - SAC SKY
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 1301,
        time: "5.98s",
        description: <>playback:Teclado 3 segundos</>,
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/teclado_3_segundos",
            timer: "[3.9817619324]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 130,
        time: "8.86s",
        description: (
            <>
                playback:514 Vejo que você tá ligando de um celular diferente...
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/514_vejo_que_você_ta_ligando_de_um_celular_diferente",
            timer: "[8.8632249832]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 132,
        time: "3.76s",
        description: (
            <>
                <span className="text-[#151DDD]">Pode usar sim correto³ </span>
                (ASR 0.20s CPqD-20 99.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO: </b>Next_ids (Mudo: 975 | Falha: 979 | Qualquer coisa:
                -)
                <br />
                <b>INFO: </b>Tempos (Timeout: 30s | Silencio: 10s | Intervalo:
                1.5s)
                <br />
                <b>INFO: </b>GRAVADO (AUDIO)
                <br />
                <b>TIMER: </b>[14.131458044052]: Record file
                <br />
                <b>TIMER: </b>[2.2056050300598]: Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_132.wav
                <br />
                <b>INFO: </b>Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, pode usar sim correto (99%)
                <br />
                <b>INFO: </b>
                {`Convert: Texto [pode usar sim correto] => [PODE USAR SIM CORRETO]`}
                <br />
                <b>INFO: </b>[BI]Nível 3: Encontrado: sim correto | próximo:611
                <br />
                <b>WARNING: </b>Trace não adicionado para componente: 132
                <br />
                <b>TIMER: </b>[0.025434970855713]: Decision tests: 675
                <br />
                <b>INFO: </b>Provider:speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:611
                <br />
                <b>TIMER: </b>[3.7634009361]: COMPONENTE: Decision
                <br />
                <b>Timer 3.76</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca: </b>
                <span className="text-[#007CB4]">
                    Sim correto| Afirmativas genéricas
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 176,
        time: "12.04s",
        description: (
            <>
                playback:537 olha a data mais proxima que tenho disponivel e
                /audios/andre_v2/datas_dia/0108.wav
                /audios/andre_v2/32/dia_e_horario/terca_feira_manha.wav
                playback:537 f realmente nao temos antes disso fica bom pra voce
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/537_olha_a_data_mais_proxima_que_tenho_disponivel_e",
            timer: "[12.0426628590]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 362,
        time: "3.76s",
        description: (
            <>
                <span className="text-[#151DDD]">Fica sim esta otimo.³</span>
                (ASR 0.20s CPqD-20 98.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Mudança de endereço",
        descriptionDecision: (
            <>
                <b>INFO: </b>Next_ids Mudo: 725 | Falha: - | Qualquer coisa: 876
                <br />
                <b>INFO: </b>Tempos (Timeout: 10s | Silencio: 7s | Intervalo: 3s
                )
                <br />
                <b>INFO: </b>GRAVADO (AUDIO)
                <br />
                <b>TIMER: </b>[10.001183986664]: Record file
                <br />
                <b>TIMER: </b>[0.82183194160461]: Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_685.wav
                <br />
                <b>INFO: </b>Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, Fica sim está ótimo (98%)
                <br />
                <b>INFO: </b>
                {`Convert: Texto [Fica sim esta otimo] => [Fica sim esta otimo]`}
                <br />
                <b>INFO: </b>[BI]Nível 3: Encontrado: sim ótimo | próximo:694
                <br />
                <b>WARNING: </b>Trace não adicionado para componente: 685
                <br />
                <b>TIMER: </b>[0.01895809173584]: Decision tests: 445
                <br />
                <b>INFO: </b>Provider:speech-cpqd2-mrcp2 | Caminho:1 |
                nextId:694
                <br />
                <b>INFO: </b>Valor setado para variável : Fica sim esta otimo
                <br />
                <b>TIMER: </b>[3.7628311348]: COMPONENTE: Decision
                <br />
                <b>Timer 3.76</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca: </b>
                <span className="text-[#007CB4]">
                    Sim ótimo | Afirmativas - SAC SKY
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 2675,
        time: "3.12s",
        description: (
            <>
                playback:559 so um instante que estou agendando a visita tecnica
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/559_so_um_instante_que_estou_agendando_a_visita_tecnica",
            timer: "[3.1185741425]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 2692,
        time: "8.44s",
        description: <>playback: teclado 3 segundos</>,
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/teclas_3_segundo_v3",
            timer: "[3.2166929245]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 2722,
        time: "21.84s",
        description: (
            <>
                playback:565 confirmando entao a sua visita tecnica ficou
                marcada pra /audios/andre_v2/datas_dia/0108.wav
                /audios/andre_v2/32/dia_e_horario/terca_feira_manha.wav
                playback:568E E importante ter alguem maior de 18 anos no local
                para acompanhar a visita playback:Teclado 3 segundos
                playback:Teclado 3 segundos
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/565_confirmando_entao_a_sua_visita_tecnica_ficou_marcada_pra TypePlayCOLLECTION",
            timer: "[21.8382000923]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 2724,
        time: "6.21s",
        description: (
            <>playback:569A Já finalizamos aqui a sua solicitação...</>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/569a_ja_finalizamos_aqui_a_sua_solicitacao",
            timer: "[6.2065711021]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 2723,
        time: "7.05s",
        description: (
            <>
                playback:569 E o técnico poderá resolver todos os problemas da
                sua instalação...
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/569_e_o_tecnico_podera_resolver_todos_os_problemas_da_sua_instalacao",
            timer: "[7.0474109650]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 2692,
        time: "3.22s",
        description: <>playback:teclas 3 segundo v3</>,
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/teclado_3_segundos",
            timer: "[3.9820110798]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 2720,
        time: "37.6s",
        description: (
            <>
                playback:566 agora, para te dar mais segurança, por favor, anote
                e confirme o número da ordem de serviço
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/566_agora_para_te_dar_mais_seguranca_o_numero_e",
            timer: "[37.6042518616]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 2614,
        time: "16.87s",
        description: (
            <>
                playback:Atenção só deixe que o técnico entre em sua residência
                após confirmar o número...
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/Atencao_so_deixe_que_o_tecnico_entre_em_sua_residencia_apos_confirmar_o_numero",
            timer: "[16.8665790558]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 3,
        time: "3.7s",
        description: (
            <>
                playback:1 entao e isso voce conseguiu ajuda com o que precisava
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/1_entao_e_isso_voce_conseguiu_ajuda_com_o_que_precisava",
            timer: "[3.7016730309]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 4,
        time: "3.35s",
        description: (
            <>
                <span className="text-[#151DDD]">Ok obrigada.¹ </span>
                (ASR 0.20s CPqD-20 100.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Pesquisa de satisfação",
        descriptionDecision: (
            <>
                <b>INFO: </b>Next_ids Mudo: - | Falha: 5 | Qualquer coisa: -
                <br />
                <b>INFO: </b>Tempos (Timeout: 30s | Silencio: 7s | Intervalo: 3s
                )
                <br />
                <b>INFO: </b>GRAVADO (AUDIO)
                <br />
                <b>TIMER: </b>[28.863819122314]: Record file
                <br />
                <b>TIMER: </b>[2.4767279624939]: Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_4.wav
                <br />
                <b>INFO: </b>Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, ok obrigada (100%)
                <br />
                <b>INFO: </b>
                {`Convert: Texto [ok obrigada] => [OK OBRIGADA]`}
                <br />
                <b>INFO: </b>[BI]Nível 1: Encontrado: ok_obrigada | próximo:9
                <br />
                <b>WARNING:</b> Trace não adicionado para componente: 4
                <br />
                <b>TIMER: </b>[0.017213821411133]: Decision tests: 433
                <br />
                <b>INFO: </b>Provider:speech-cpqd2-mrcp2 | Caminho:1 | nextId:9
                <br />
                <b>TIMER: </b>[3.3593080044]: COMPONENTE: Decision
                <br />
                <b>Timer 3.35</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca: </b>
                <span className="text-[#007CB4]">
                    Ok obrigada | Afirmativas genéricas
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 3,
        time: "3.7s",
        description: <>playback:que bom fico feliz em pode ti ajuda</>,
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/que_bom_fico_feliz_em_pode_ti_ajuda",
            timer: "[2.1603679657]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 11,
        time: "8.3s",
        description: (
            <>playback:4 Agora de 1 a 10 onde 1 a 6 e ruim da pra SKY</>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/4_agora_de_1_a_10_onde_1_a_6_e_ruim_da_pra_sky",
            timer: "[8.3339850903]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 16,
        time: "3.35s",
        description: (
            <>
                <span className="text-[#151DDD]">Nota 10.¹ </span>
                (ASR 0.20s CPqD-20 98.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Pesquisa de satisfação",
        descriptionDecision: (
            <>
                <b>INFO: </b>Next_ids Mudo: - | Falha: 5 | Qualquer coisa: -
                <br />
                <b>INFO: </b>Tempos (Timeout: 30s | Silencio: 7s | Intervalo: 3s
                )
                <br />
                <b>INFO: </b>GRAVADO (AUDIO)
                <br />
                <b>TIMER: </b>[28.863819122314]: Record file
                <br />
                <b>TIMER: </b>[2.4767279624939]: Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_4.wav
                <br />
                <b>INFO: </b>Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, Nota 10 (98.00%)
                <br />
                <b>INFO: </b>
                {`Convert: Texto [Nota 10 (98.00%)] => [Nota 10 (98.00%)]`}
                <br />
                <b>INFO: </b>[BI]Nível 1: Encontrado: ok_obrigada | próximo:9
                <br />
                <b>WARNING: </b>Trace não adicionado para componente: 4
                <br />
                <b>TIMER: </b>[0.017213821411133]: Decision tests: 433
                <br />
                <b>INFO: </b>Provider:speech-cpqd2-mrcp2 | Caminho:1 | nextId:9
                <br />
                <b>TIMER: </b>[3.3593080044]: COMPONENTE: Decision
                <br />
                <b>Timer 3.35</b>
                <br />
                <b>Componente Start</b>
                <br />
                <b>Biblioteca: </b>
                <span className="text-[#007CB4]">
                    Nota 10 | Nota 10 Pesquisa – SAC SKY
                </span>
            </>
        ),
    },
    {
        type: "Play",
        code: 223,
        time: "7.2s",
        description: (
            <>
                playback:17 Beleza anotei aqui Agora de 1 a 10 playback:16 que
                nota pro meu atendimento
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO: playback:/audios/andre_v2/32/17_beleza_anotei_aqui",
            timer: "[7.2134041786]",
            component: "Start",
        },
    },
    {
        type: "Decision",
        code: 27,
        time: " 2.50s",
        description: (
            <>
                <span className="text-[#151DDD]">10¹ </span>
                (ASR 0.20s CPqD-20 100.00%)
            </>
        ),
        blockDecision: 3,
        requestDecision: "Pesquisa de satisfação",
        descriptionDecision: (
            <>
                <b>INFO: </b>Next_ids Mudo: - | Falha: 12 | Qualquer coisa: -
                <br />
                <b>INFO: </b>Tempos (Timeout: 30s | Silencio: 7s | Intervalo: 3s
                )
                <br />
                <b>INFO: </b>GRAVADO (AUDIO)
                <br />
                <b>TIMER: </b>[22.84113907814]: Record file
                <br />
                <b>TIMER: </b>[2.2040638923645]: Provider: speech-cpqd2-mrcp2 |
                Host: http://10.110.255.33:80/asr-server/rest/recognize/ | File:
                /tmp/asr/15270828573_16.wav
                <br />
                <b>INFO: </b>Verificando opções provider:speech-cpqd2-mrcp2 |
                Code: Status:000 Alternativas, dez (100%)
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
            </>
        ),
    },
    {
        type: "Play",
        code: 111,
        time: "3.6s",
        description: (
            <>
                playback:15A que bom que gostou do meu atendimento! Fico feliz em poder te ajudar. Então é isso, anotei tudo aqui.
            </>
        ),
        descriptionNoDecision: {
            info: "PLAY AUDIO:playback:/audios/andre_v2/32/15a_que_bom_que_gostou_do_meu_atendimento_fico_feliz_em_poder_te_ajudar",
            timer: "[3.6233839989]",
            component: "Start",
        },
    },
    {
        type: "Play",
        code: 33,
        time: "10.1s",
        description: (
            <>
                playback:15 muito obrigado pelas informações. Ah, não se esqueça de baixar o nosso aplicativo. A SKY agradece o seu contato e até logo.
            </>
        ),
        descriptionNoDecision: {
            info: "INFO: PLAY AUDIO:playback:/audios/andre_v2/32/15_entao_e_isso_ate_logo",
            timer: "[10.1380031109]",
            component: "Start",
        },
    },
    {
        type: "End",
        code: 34,
        time: "0.00s",
        description: (
            <>
                Desligado.Desligou e gerou a ocorrência: 3282
            </>
        ),
        descriptionNoDecision: {
            info: "Desligado. Desligou e gerou a ocorrência: 3282",
            timer: "[0.0009710789]",
            component: "Start",
        },
    },
];
