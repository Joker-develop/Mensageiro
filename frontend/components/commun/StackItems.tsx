// import Image from "next/image";
import StackCard from "./StackCard";
import { useEffect } from "react";
import setPropety from "@/app/util/useFunc";
import Image from "next/image";


const StackItems = () => {

  useEffect(() => {
    const htmlDivOne: Element | null = document.querySelector("div.foundation_cards__jLR6D.One");
    const propety = {
      "--stack-flex": "initial",
      "--sm-stack-direction": "column",
      "--lg-stack-direction": "row",
      "--stack-align": "center",
      "--stack-justify": "center",
      "--stack-padding": "0px",
      "--sm-stack-gap": "16px",
      "--md-stack-gap": "16px",
      "--lg-stack-gap": "32px",
      "--xl-stack-gap": "32px",
    }

    setPropety(htmlDivOne as HTMLElement, propety);
  })

  return (
    <div className="stack_stack__iZkUS stack foundation_cards__jLR6D One">
      <StackCard 
        svg={
          <Image className="w-[50px]" alt="SWC Logo" loading="lazy" width="92" height="32" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/vision.png" />
        }
        title="Visão"
        describe="Ser uma instituição de referência em educação, reconhecida pela excelência acadêmica, inovação pedagógica e formação integral dos alunos. Buscamos desenvolver cidadãos críticos, éticos e preparados para os desafios do futuro, contribuindo para uma sociedade mais justa e transformadora."
      />
      <StackCard 
        svg={
          <Image className="w-[50px]" alt="SWC Logo" loading="lazy" width="92" height="32" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/values.png" />
        }
        title="Valores"
        describe="Excelência Acadêmica: Compromisso com um ensino de qualidade e inovador."
        describeTwo="Ética e Respeito: Formação baseada em princípios morais e convivência harmoniosa."
        describeThree="Criatividade e Inovação: Estímulo à curiosidade e à busca por soluções criativas."
        describeFour="Responsabilidade Social: Educação voltada para o compromisso com a sociedade e o meio ambiente."
        describeFive="Autonomia e Protagonismo: Incentivo ao desenvolvimento de habilidades que tornem os alunos agentes do próprio aprendizado e do futuro."
      />

      <StackCard 
        svg={
          <Image className="w-[50px]" alt="SWC Logo" loading="lazy" width="92" height="32" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/mision.png" />
        }
        title="Misão"
        describe="The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions."
      />
    </div> 
  )
}

export default StackItems;