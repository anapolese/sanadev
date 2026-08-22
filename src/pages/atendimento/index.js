import { PageContainer } from '../../components/Container';
import EscaldaPes from '../../assets/images/Escalda_pes.png';
import { PageSplitAtendimento } from '../../components/PageSplitAtendimento';

export const Atendimento = () => {
  const title = "Espaço de Atendimento";
  const subtitle = "Refúgio sensorial de bem estar.";
  const firstText ="A decoração, cores, velas, perfumes e texturas dos tecidos transportam você para um oásis aconchegante de calma e presença."
  const sndText ="O cuidado começa quando você se escolhe. Reserve seu ritual de bem-estar e tenha o seu momento de reconexão:"
  const thirdText ="Rua Luciana de Abreu, 356, sala 403, Moinhos de Vento - Porto Alegre/RS"

  return (
    <PageContainer id="atendimento">
      <PageSplitAtendimento
        title={title}
        imgSrc={EscaldaPes}
        subtitle={subtitle}
        imgAlt="Imagem de um escalda pés."
        paragraph1={firstText}
        paragraph2={sndText}
        paragraph3={thirdText}
      />
    </PageContainer>
  );
};

export default Atendimento;
