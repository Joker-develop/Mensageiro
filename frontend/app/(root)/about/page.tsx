"use client";


// import { Boldonse } from "@/app/fonts/fonts";
// import { useWindowSize } from "@/app/util/resize";
// import StackItems from "@/components/commun/StackItems";
// import StackSVG from "@/components/commun/StackSVG";
import setPropety from "@/app/util/useFunc";
import PageIsolate from "@/components/commun/PageIsolate";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/app/util/resize";

const About = () => {
  const [resize, update] = useState({
    height: 0,
    width: 0
  });

  const size = useWindowSize();
  useEffect(() => {
    const htmlDivOne: NodeListOf<Element> = document.querySelectorAll("div.customers_root__6St4m.one");
    const htmlDivTwo: NodeListOf<Element> = document.querySelectorAll("div.AboutOne");
    const htmlDivThree: NodeListOf<Element> = document.querySelectorAll("div.AboutTwo");
    const htmlDivFour: NodeListOf<Element> = document.querySelectorAll("div.AboutThree");
    const htmlDivFive: NodeListOf<Element> = document.querySelectorAll("div.AboutFour");
    const htmlDivSix: NodeListOf<Element> = document.querySelectorAll("div.AboutFive");
    const htmlDivSeven: NodeListOf<Element> = document.querySelectorAll("div.AboutSix");
    const htmlDivEight: NodeListOf<Element> = document.querySelectorAll("div.AboutSeven");
    const htmlDivNane: NodeListOf<Element> = document.querySelectorAll("div.AboutEight");
    const htmlDivTen: NodeListOf<Element> = document.querySelectorAll("div.AboutNane");
    // const htmlDivEleven: NodeListOf<Element> = document.querySelectorAll("div.AboutTen");
    const htmlDivTwelve: NodeListOf<Element> = document.querySelectorAll("div.AboutEleven");
    const htmlDivThreten: NodeListOf<Element> = document.querySelectorAll("div.AboutTwelve");
    const htmlDivFourthen: NodeListOf<Element> = document.querySelectorAll("div.AboutFourten");
    const propetyOne = {
      "--stack-flex": "initial", 
      "--stack-direction": "column", 
      "--stack-align": "center", 
      "--stack-justify": "flex-start", 
      "--stack-padding": "0px", 
      "--stack-gap": "0px",
    };
    const propetyTwo = {
      "--stack-flex": "initial",
      "--stack-direction": "row", 
      "--stack-align": "stretch",
      "--stack-justify": "flex-start",
      "--stack-padding": "0px",
      "--stack-gap": "32px"
    }
    const propetyThree = {
      "--stack-flex": "initial", 
      "--stack-direction": "column",
      "--stack-align": "stretch",
      "--stack-justify": "flex-start",
      "--stack-padding": "0px",
      "--stack-gap": "32px"
    }
    const propetyFour = {
      "--stack-flex": "1",
      "--stack-direction": "column",
      "--stack-align": "stretch",
      "--stack-justify": "flex-start",
      "--stack-padding": "0px",
      "--stack-gap": "0px"
    }

    const propetyFive = {
      "--stack-flex": "initial",
      "--stack-direction": "column", 
      "--stack-align": "stretch",
      "--stack-justify": "flex-start", 
      "--stack-padding": "0px", 
      "--stack-gap": "16px"
    }
    const propetySix = {
      "--stack-flex": "initial", 
      "--stack-direction": "row", 
      "--stack-align": "stretch", 
      "--stack-justify": "flex-start", 
      "--stack-padding": "0px", 
      "--stack-gap": "16px"
    }
    const propetySeven = {
      "--stack-flex": "initial", 
      "--sm-stack-direction": "column", 
      "--md-stack-direction": "row", 
      "--sm-stack-align": "center",
      "--md-stack-align": "baseline", 
      "--sm-stack-justify": "center", 
      "--lg-stack-justify": "flex-start", 
      "--stack-padding": "0px", 
      "--sm-stack-gap": "8px", 
      "--md-stack-gap": "16px", 
      "--lg-stack-gap": "16px", 
      "--xl-stack-gap": "16px"
    }

    const propetyEight = {
      "--stack-flex": "initial", 
      "--stack-direction": "column", 
      "--stack-align": "stretch",
      "--stack-justify": "flex-start", 
      "--stack-padding": "0px", 
      "--stack-gap": "8px;"
    }
    const propetyNane = {
      "--stack-flex": "initial", 
      "--stack-direction": "column", 
      "--stack-align": "stretch", 
      "--stack-justify": "flex-start", 
      "--stack-padding": "0px", 
      "--stack-gap": "0px"
    }
    const propetyTen = {
      "--stack-flex": "initial", 
      "--stack-direction": "row", 
      "--stack-align": "center", 
      "--stack-justify": "center", 
      "--stack-padding": "0px", 
      "--stack-gap": "0px",
    }

    // const propetyEleven = {
    //   "--stack-flex": "initial", 
    //   "--stack-direction": "row", 
    //   "--stack-align": "stretch", 
    //   "--stack-justify": "flex-start", 
    //   "--stack-padding": "0px", 
    //   "--stack-gap": "16px"
    // }

    const propetyTwelve = {
      "--stack-flex": "initial", 
      "--stack-direction": "column", 
      "--sm-stack-align": "center", 
      "--lg-stack-align": "baseline", 
      "--stack-justify": "flex-start", 
      "--stack-padding": "0px",
      "--stack-gap": "0px;"
    }
    const propetyThreten = {
      "--line-offset": "300px",
      "--stack-flex": "initial",
      "--sm-stack-direction": "column",
      "--lg-stack-direction": "row",
      "--stack-align": "stretch",
      "--stack-justify": "space-between",
      "--stack-padding": "0px",
      "--stack-gap": "0px;"
    }

    const propetyFourthen = {
      "--line-fade-stop": "75%"
    }
    
    htmlDivOne.forEach( elem => {
        setPropety(elem as HTMLElement, propetyOne);
    });
    htmlDivTwo.forEach( elem => {
      setPropety(elem as HTMLElement, propetyTwo);
    });
    htmlDivThree.forEach( elem => {
      setPropety(elem as HTMLElement, propetyThree);
    });
    htmlDivFour.forEach( elem => {
      setPropety(elem as HTMLElement, propetyFour);
    });
    htmlDivFive.forEach( elem => {
      setPropety(elem as HTMLElement, propetyFive);
    });
    htmlDivSix.forEach( elem => {
      setPropety(elem as HTMLElement, propetySix);
    });
    htmlDivSeven.forEach( elem => {
      setPropety(elem as HTMLElement, propetySeven);
    });
    htmlDivEight.forEach( elem => {
      setPropety(elem as HTMLElement, propetyEight);
    });
    htmlDivNane.forEach( elem => {
      setPropety(elem as HTMLElement, propetyNane);
    });
    htmlDivTen.forEach( elem => {
      setPropety(elem as HTMLElement, propetyTen);
    });
    // htmlDivEleven.forEach( elem => {
    //   setPropety(elem as HTMLElement, propetyEleven);
    // });
    htmlDivTwelve.forEach( elem => {
      setPropety(elem as HTMLElement, propetyTwelve);
    });
    htmlDivThreten.forEach( elem => {
      setPropety(elem as HTMLElement, propetyThreten);
    });
    htmlDivFourthen.forEach( elem => {
      setPropety(elem as HTMLElement, propetyFourthen);
    });

    update(() => ({height: size.height, width: size.width }));
  }, [size.height, size.width]);

  return (
      <div className="flex flex-col w-full bg-gradient-left dark:bg-gradient-left-dark" style={{contain: "content"}}>
        <section className={cn("relative w-screen md:h-screen h-full", resize.height <= 450 ? "!h-full" : "")}>
          <PageIsolate />
        </section>
        <section className={cn("container !max-w-full max-md:!h-full ", resize.height <= 450 ? "!h-full" : "")}>
          <div className={cn("card_wrapper max-md:w-full max-md:mt-[50px] ", resize.height <= 450 ? "w-full mt-[50px] mb-[30px] " : "")}>
            <div className="card">
              <div className={cn("card-image-with-svg-mask max-md:!w-[95%] max-md:m-auto max-md:!h-[131vh] flex flex-col justify-center items-start", resize.height <= 450 ? "!h-[160vh] !w-[98%] !m-auto " : "")}>
                <div className={cn("absolute w-[377px] max-md:right-0 max-md:left-0 max-md:m-auto max-md:top-[11%] flex flex-col pt-2.5 pr-5 pb-2.5 pl-5 gap-5 rounded-[20px] bg-[#17375c] top-[2%] right-[2.5%]", resize.height <= 450 ? "!w-[280px] !top-[3%]" : "")}>
                  <Image className="w-[50px] h-[50px]" alt="SWC Logo" loading="lazy" width={500} height={500} decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/vision.png" />
                  <p className="text-white leading-[1.5] text-[18px]">A <strong className="uppercase text-[#ff2800]">Visão</strong> da instituição sendo referência na educação, reconhecida pela excelência acadêmica, inovação pedagógica e formação integral dos alunos. Buscamos desenvolver cidadãos críticos, éticos e preparados para os desafios do futuro, contribuindo para uma sociedade mais justa e transformadora.</p>
                </div>
                <div className={cn("w-full p-5 rounded-[20px] max-md:max-w-[90%] max-md:left-0 max-md:right-0 max-md:m-auto max-md:top-[38%] max-md:rounded-br-[3.5rem] bg-[#17375c] absolute top-[5%] left-[.5%] max-w-[400px] z-10", resize.height <= 450 ? "!w-[305px] !top-[3%]" : "")}>
                  <Image className="w-[50px] h-[32px]" alt="SWC Logo" loading="lazy" width={500} height={500} decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/values.png" />
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-start text-[17px] text-white">Como instituição defendemos <strong className="uppercase text-[#ff2800]">valores</strong> como:</p>
                    <p className="text-start text-[17px] text-white"><strong className="underline">Excelência Acadêmica:</strong> Compromisso com um ensino de qualidade e inovador.</p>
                    <p className="text-start text-[17px] text-white"><strong className="underline">Ética e Respeito:</strong> Formação baseada em princípios morais e convivência harmoniosa.</p>
                    <p className="text-start text-[17px] text-white"><strong className="underline">Criatividade e Inovação:</strong> Estímulo à curiosidade e à busca por soluções criativas.</p>
                    <p className="text-start text-[17px] text-white"><strong className="underline">Responsabilidade Social:</strong> Educação voltada para o compromisso com a sociedade e o meio ambiente.</p>
                    <p className="text-start text-[17px] text-white"><strong className="underline">Autonomia e Protagonismo:</strong> Incentivo ao desenvolvimento de habilidades que tornem os alunos agentes do próprio aprendizado e do futuro.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="button top-center bg-[#ff2800]"><span className="text !text-white">Conceitos</span></div>
            <div className="button max-md:!w-[90%] max-md:!left-0 max-md:!right-0 max-md:!bottom-[1.5%] max-md:!m-auto max-md:!rounded-[1rem] max-md:!rounded-tl-[2.5rem]  bottom-right gap-5 bg-[#17375c]">
              <Image className="w-[50px] h-[50px]" alt="SWC Logo" loading="lazy" width={500} height={500} decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/mision.png" />
              <span className="text">A nossa <strong className="uppercase text-[#ff2800]">misão</strong> é empoderar indivíduos e transformar comunidades equilibrando excelência profissional e compromisso social.</span>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#e6e7e9] pt-[100px] pr-[80px] pl-[80px] pb-[50px] max-md:pt-[10%] max-md:pb-[10%] max-md:pl-[5%] max-md:pr-[5%] " style={{paddingBlock: "50px"}}>
          <h2 className="text-[20px] bg-[#17375c] text-white p-5 rounded-[10px] "><strong className="uppercase pt-[4px] pb-[4px] pr-[20px] pl-[20px] rounded-[5px] bg-[#ff2800]">Sobre o IMPPM</strong> <br/> Fundada em 2018, o instituto Potitécnico Privado Mensageiro é referência global em educação de técnicos médios na província do Huambo, combinando tradição acadêmica com inovação tecnológica. Com campus principal na sede da província do Huambo, oferecemos variadissimos cursos de formação de técnicos profissionais de graduação.</h2>
          <div className=" grid mt-[5rem] gap-[2rem]" style={{gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))"}}>
            <div className="">
              <div className="relative w-[inherit] h-[18rem] bg-black rounded-[20px] rounded-br-[0] overflow-hidden">
                <div className=" w-full h-full overflow-hidden bg-[#e6e7e9] border-1 border-solid border-[#808080]">
                  <div className="absolute inset-0">
                    <Image src={"/imagens/student.png"} className="w-full h-[288px] object-contain p-[5px]" alt="" width={900} height={900} />
                  </div>
                  <div className="absolute w-[6rem] h-[6rem] bg-[#e6e7e9] rounded-tl-[50%] border-t-1 border-solid right-[-0.375rem] bottom-[-0.375rem] before:absolute before:content-[''] before:top-[-1.25rem] before:right-[0.375rem] before:bg-transparent before:w-[1.25rem] before:h-[1.25rem] before:rounded-br-[1.25rem] before:shadow-[0.313rem_0.313rem_0_0.313rem_#e6e7e9] after:absolute after:content-[''] after:left-[-1.25rem] after:bottom-[0.375rem] after:bg-transparent after:w-[1.25rem] after:h-[1.25rem] after:rounded-br-[1.25rem] after:shadow-[0.313rem_0.313rem_0_0.313rem_#e6e7e9] before:border-r-1 before:border-solid after:border-r-1 after:border-solid border-[#808080]">
                    <div className="absolute flex justify-center items-center rounded-[50%] inset-[.625rem] font-extrabold bg-[#007FFF] text-white text-[18px]">2.000+</div>
                  </div>
                </div>
              </div>
              <div className="pt-[1rem] pl-[.5rem] pb-[1rem] pr-[.5rem]">
                <h3 className="capitalize font-extrabold text-[#007FFF] mb-[10px]">Alunos</h3>
                <p className="mb-[15px]">Possuimo um número bastante consideravél de alunos, não são apenas matriculados, são futuros Enginheiros informáticos, cívis, Contablistas, Gestor Empresariais, Gestor de Recursos Humanos, Eletricistas ...</p>
                <ul className="flex flex-wrap list-none justify-start items-center gap-[.5rem] mt-[10px] mr-0 mb-[10px] ml-0">
                  <li className="bg-[#007FFF] uppercase text-[13px] rounded-[8px] pr-[20px] pl-[20px] pb-[4px] pt-[4px] text-white font-extrabold">Técnico IG</li>
                  <li className="bg-[#4682B4] uppercase text-[13px] rounded-[8px] pr-[20px] pl-[20px] pb-[4px] pt-[4px] text-white font-extrabold">Técnico C</li>
                  <li className="bg-[#800000] uppercase text-[13px] rounded-[8px] pr-[20px] pl-[20px] pb-[4px] pt-[4px] text-white font-extrabold">Técnico GE</li>
                  <li className="bg-[#CC5500] uppercase text-[13px] rounded-[8px] pr-[20px] pl-[20px] pb-[4px] pt-[4px] text-white font-extrabold">Técnico CC</li>
                  <li className="bg-pink-500 uppercase text-[13px] rounded-[8px] pr-[20px] pl-[20px] pb-[4px] pt-[4px] text-white font-extrabold">Técnico RH</li>
                  <li className="bg-[#FFFF00] uppercase text-[13px] rounded-[8px] pr-[20px] pl-[20px] pb-[4px] pt-[4px] text-white font-extrabold">Técnico EL</li>
                  <li className="bg-[#FFA500] uppercase text-[13px] rounded-[8px] pr-[20px] pl-[20px] pb-[4px] pt-[4px] text-white font-extrabold">Técnico DP</li>
                </ul>
              </div>
            </div>
            {/* {<!--Funcionários -->} */}
            <div className="">
              <div className="relative w-[inherit] h-[18rem] bg-black rounded-[20px] rounded-br-[0] overflow-hidden">
                <div className=" w-full h-full overflow-hidden bg-[#e6e7e9] border-1 border-solid border-[#808080]">
                  <div className="absolute inset-0">
                    <Image src={"/imagens/job.png"} className="w-full h-[288px] object-contain p-[5px]" alt="" width={900} height={900} />
                  </div>
                  <div className="absolute w-[6rem] h-[6rem] bg-[#e6e7e9] rounded-tl-[50%] right-[-0.375rem] bottom-[-0.375rem] before:absolute before:content-[''] before:top-[-1.25rem] before:right-[0.375rem] before:bg-transparent before:w-[1.25rem] before:h-[1.25rem] before:rounded-br-[1.25rem] before:shadow-[0.313rem_0.313rem_0_0.313rem_#e6e7e9] after:absolute after:content-[''] after:left-[-1.25rem] after:bottom-[0.375rem] after:bg-transparent after:w-[1.25rem] after:h-[1.25rem] after:rounded-br-[1.25rem] after:shadow-[0.313rem_0.313rem_0_0.313rem_#e6e7e9] before:border-r-1 before:border-solid after:border-r-1 after:border-solid border-[#808080]">
                    <div className="absolute flex justify-center items-center rounded-[50%] inset-[.625rem] font-extrabold bg-[#0000CD] text-white text-[18px]">60%</div>
                  </div>
                </div>
              </div>
              <div className="pt-[1rem] pl-[.5rem] pb-[1rem] pr-[.5rem]">
                <h3 className="capitalize font-extrabold text-[#0000CD] mb-[10px]">Funcionários</h3>
                <p className="mb-[15px]">De docentes com vasta experiência, secretaria, área pedagogica, a jovens instrutores digitais, a insituição respira a diversidade de seus funcionários, cada um com uma peça vital no ecossistema educacional</p>
                <ul className="flex flex-wrap list-none justify-start items-center gap-[.5rem] mt-[10px] mr-0 mb-[10px] ml-0">
                  <li className="bg-[#8fbc8f] uppercase text-[13px] rounded-[8px] pr-[10px] pl-[10px] pb-[4px] pt-[4px] font-extrabold">P. Admistrativos</li>
                  <li className="bg-[#32CD32] uppercase text-[13px] rounded-[8px] pr-[10px] pl-[10px] pb-[4px] pt-[4px] font-extrabold">Professores</li>
                  <li className="bg-[#D3D3D3] uppercase text-[13px] rounded-[8px] pr-[10px] pl-[10px] pb-[4px] pt-[4px] font-extrabold">P. Limpeza</li>
                  <li className="bg-[#006494] uppercase text-[13px] rounded-[8px] pr-[10px] pl-[10px] pb-[4px] pt-[4px] font-extrabold">Segurança</li>
                </ul>
              </div>
            </div>
            {/* {<!--parceiros -->} */}
            <div className="">
              <div className="relative w-[inherit] h-[18rem] bg-black rounded-[20px] rounded-br-[0] overflow-hidden">
                <div className=" w-full h-full overflow-hidden bg-[#e6e7e9] border-1 border-solid border-[#808080]">
                  <div className="absolute inset-0">
                    <Image src={"/imagens/parceiro.png"} className="w-full h-[288px] object-contain p-[5px]" alt="" width={900} height={900} />
                  </div>
                  <div className="absolute w-[6rem] h-[6rem] bg-[#e6e7e9] rounded-tl-[50%] border-t-1 border-solid right-[-0.375rem] bottom-[-0.375rem] before:absolute before:content-[''] before:top-[-1.25rem] before:right-[0.375rem] before:bg-transparent before:w-[1.25rem] before:h-[1.25rem] before:rounded-br-[1.25rem] before:shadow-[0.313rem_0.313rem_0_0.313rem_#e6e7e9] after:absolute after:content-[''] after:left-[-1.25rem] after:bottom-[0.375rem] after:bg-transparent after:w-[1.25rem] after:h-[1.25rem] after:rounded-br-[1.25rem] after:shadow-[0.313rem_0.313rem_0_0.313rem_#e6e7e9] before:border-r-1 before:border-solid after:border-r-1 after:border-solid border-[#808080]">
                    <div className="absolute flex justify-center items-center rounded-[50%] inset-[.625rem] font-extrabold bg-purple-900 text-white text-[18px]">10+</div>
                  </div>
                </div>
              </div>
              <div className="pt-[1rem] pl-[.5rem] pb-[1rem] pr-[.5rem]">
                <h3 className="capitalize font-extrabold text-purple-900 mb-[10px]">Parcerias</h3>
                <p className="mb-[15px]">Projectos em conjunto com universidades e centros de pesquisa elevam a instituição, mostrando que o ensino técnico também é ciência aplicada para o desenvolvimento sócial.</p>
                <ul className="flex flex-wrap list-none justify-start items-center gap-[.5rem] mt-[10px] mr-0 mb-[10px] ml-0">
                  <li className="bg-pink-500 uppercase text-[13px] rounded-[8px] pr-[10px] pl-[10px] pb-[4px] pt-[4px] text-white font-extrabold ">IPAG</li>
                  <li className="bg-purple-600 uppercase text-[13px] rounded-[8px] pr-[10px] pl-[10px] pb-[4px] pt-[4px] text-white font-extrabold ">Instituto Médio do Catchiungo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={cn("relative w-screen md:h-screen bg-[#f8fafb] h-full", resize.height <= 450 ? "!h-full" : "")} >
          <div className="vercel_inner__i2Mr5">
            <div aria-hidden="true" className="intro_gridContainerLine__GHkon AboutFourten" data-fade="true" data-side="left" ></div>
            <div className="vercel_main___ZAyT">
              <div className="stack_stack__iZkUS stack vercel_title__kXJA2 AboutSix" data-version="v1" >
                <h2 className="gradient-text" data-main-heading="true">Juntaram-se a nossa causa</h2>
                <p data-main-paragraph="true">Os nossos estimados diretores</p>
              </div>
              <div className="stack_stack__iZkUS stack ga-[30px] vercel_content__awc0J intro_gridLineTop__WIuPu AboutTwelve" data-version="v1" >
                <div className="stack_stack__iZkUS stack vercel_meta__MtJGA AboutEleven" data-version="v1" >
                  <p className="vercel_subtitle__jIOec">Assumiram a instituição em seus primeiros anos, focando em organizar a estrutura administrativa e pedagógica, implementando processos, definindo currículos e estabelecendo as bases para o funcionamento eficiente</p>
                  <p className="vercel_subtitle__jIOec">Liderando a instituição em um período de crescimento, buscando expandir a oferta de cursos, aumentar o número de alunose, possivelmente, estabelecer parcerias com empresas e outras instituições</p>
                  
                </div>
                <div className="stack_stack__iZkUS stack !top-0 vercel_templates__DLxOb AboutNane" data-version="v1" aria-label="Three illustrative template cards are displayed at a rotated angle, offset on top on each other: Next.js Commerce, Image Gallery Starter, and Next.js Boilerplate.">
                  <div className="stack_stack__iZkUS stack templates_templateCard__ogq_Q AboutEight" data-version="v1" >
                    <Image alt="An all-in-one starter kit for high-performance ecommerce sites." loading="lazy" width="1200" height="960" decoding="async" data-nimg="1" className="templates_image__OUeIH !h-full bg-[#f8fafb] p-2.5" style={{color: "transparent"}} src="/imagens/avatar2.png" />
                    <div className="stack_stack__iZkUS stack templates_description__PAAfR AboutSeven" data-version="v1" >
                      <p>Arq. Nelson Casule</p>
                      <p>Diretor na instituição 2024,2025...</p>
                    </div>
                  </div>
                  <div className="stack_stack__iZkUS stack templates_templateCard__ogq_Q AboutEight" data-version="v1" >
                    <Image alt="An image gallery built on Next.js and Cloudinary." loading="lazy" width="1492" height="980" decoding="async" data-nimg="1" className="templates_image__OUeIH !h-full bg-[#f8fafb] p-2.5" style={{color: "transparent"}} src="/imagens/avatar.png" />
                    <div className="stack_stack__iZkUS stack templates_description__PAAfR AboutSeven" data-version="v1" >
                      <p>Dr. Cubano</p><p>Diretor na instituição 2024-2024</p>
                    </div>
                  </div>
                  <div className="stack_stack__iZkUS stack templates_templateCard__ogq_Q AboutEight" data-version="v1" >
                    <Image alt="A Next.js starter from create-next-app." loading="lazy" width="1905" height="1269" decoding="async" data-nimg="1" className="templates_image__OUeIH !h-full bg-[#f8fafb] p-2.5" style={{color: "transparent"}} src="/imagens/avatar3.png" />
                    <div className="stack_stack__iZkUS stack templates_description__PAAfR AboutSeven" data-version="v1" >
                      <p>Dr. Santos</p>
                      <p>Diretor na instituição 2020-2023</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* {className="snap-start w-screen stack_stack__iZkUS stack customers_root__6St4m items-center one" data-version="v1" style={{alignItems: "center !important"}}} */}
        <section className={cn("relative stack_stack__iZkUS stack customers_root__6St4m w-screen bg-[#f8fafb] h-full !items-center ", resize.height <= 450 ? "!h-full" : "")} data-version="v1" >
          <Image alt="" aria-hidden="true" data-divider="true" loading="lazy" width="800" height="110" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/divider.svg" className="max-sm:hidden"/>
          <Image alt="" aria-hidden="true" data-divider-mobile="true" loading="lazy" width="336" height="65" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/divider-mobile.svg" className="sm:hidden" />
          <h2 className="customers_title__0hAia gradient-text">As nossas instalações <span data-break="true"></span> estão pronta para o receber</h2>
          <div className="showcase-preview_root__4D7rp">
            <div className="stack_stack__iZkUS stack showcase-preview_gridDesktop__y7Cwi AboutOne sm:hidden" data-version="v1">
              <div className="stack_stack__iZkUS stack AboutTwo" data-version="v1" >
                <div className="showcase-preview_preview__HcSHu" style={{width: "388px", height: "316px"}} >
                  <Image alt="Screenshot of Audible's website" loading="lazy" width="388" height="316" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/img4.jpg" />
                  <div className="showcase-preview_title__jFvZn">
                    Estrutura outside right<hr/>
                    <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <div className="showcase-preview_preview__HcSHu" style={{width: "388px", height: "210px"}} >
                  <Image alt="Screenshot of Sonos's website" loading="lazy" width="388" height="210" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/img1.jpg" />
                  <div className="showcase-preview_title__jFvZn">
                    Estrutura inset full<hr/>
                    <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="stack_stack__iZkUS stack AboutThree" data-version="v1" >
                <div className="showcase-preview_preview__HcSHu" style={{width: "302px", height: "608px"}} >
                  <Image alt="Screenshot of Dice's website" loading="lazy" width="302" height="608" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/img3.jpg" />
                  <div className="showcase-preview_title__jFvZn">
                    Estrutura inset one<hr/>
                    <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="stack_stack__iZkUS stack AboutTwo" data-version="v1" >
                <div className="showcase-preview_preview__HcSHu" style={{width: "390px", height: "312px"}} >
                  <Image alt="Screenshot of Notion's website" loading="lazy" width="390" height="312" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/img6.jpg" />
                  <div className="showcase-preview_title__jFvZn">
                    Estrutura outside one<hr/>
                    <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <div className="stack_stack__iZkUS stack AboutOne" data-version="v1">
                  <div className="showcase-preview_preview__HcSHu" style={{width: "179px", height: "125px"}} >
                    <Image alt="Screenshot of Today's website" loading="lazy" width="179" height="125" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/img4.jpg" />
                    <div className="showcase-preview_title__jFvZn">
                      Estrutura outside right<hr/>
                      <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="showcase-preview_preview__HcSHu" style={{width: "179px", height: "125px"}} >
                    <Image alt="Screenshot of ProductHunt's website" loading="lazy" width="179" height="125" decoding="async" data-nimg="1" style={{color: "transparent"}}  src="/imagens/img3.jpg" />
                    <div className="showcase-preview_title__jFvZn">
                      Estrutura inset one<hr/>
                      <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stack_stack__iZkUS stack AboutTwo" data-version="v1">
                <div className="showcase-preview_preview__HcSHu" style={{width: "390px", height: "312px"}} >
                  <Image alt="Screenshot of Nike's website" loading="lazy" width="390" height="312" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/img5.jpg" />
                  <div className="showcase-preview_title__jFvZn">
                    Estrutura outside full<hr/>
                    <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <div className="showcase-preview_preview__HcSHu" style={{width: "390px", height: "312px"}} >
                  <Image alt="Screenshot of Washington Post's website" loading="lazy" width="390" height="312" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/img2.jpg" />
                  <div className="showcase-preview_title__jFvZn">
                    Estrutura inset two<hr/>
                    <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="stack_stack__iZkUS stack showcase-preview_gridMobile__1nPyt max-sm:hidden AboutFive" data-version="v1" >
              <div className="stack_stack__iZkUS stack AboutFour" data-version="v1" >
                <div className="showcase-preview_preview__HcSHu" style={{width: "240px", height: "150px"}} >
                  <Image alt="Screenshot of Sonos's website" loading="lazy" width="240" height="150" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/img1.jpg" />
                  <div className="showcase-preview_title__jFvZn">
                    Estrutura inset full<hr/>
                    <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <div className="showcase-preview_preview__HcSHu" style={{width: "240px", height: "200px"}} >
                  <Image alt="Screenshot of Audible's website" loading="lazy" width="240" height="200" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/img4.jpg" />
                  <div className="showcase-preview_title__jFvZn">
                    Estrutura outside right<hr/>
                    <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <div className="showcase-preview_preview__HcSHu" style={{width: "240px", height: "200px"}} >
                  <Image alt="Screenshot of Nike's website" loading="lazy" width="240" height="200" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/img5.jpg" />
                  <div className="showcase-preview_title__jFvZn">
                    Estrutura outside full<hr/>
                    <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="stack_stack__iZkUS stack AboutFour" data-version="v1" >
                <div className="showcase-preview_preview__HcSHu" style={{width: "240px", height: "200px"}} >
                  <Image alt="Screenshot of Notion's website" loading="lazy" width="240" height="200" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/img6.jpg" />
                  <div className="showcase-preview_title__jFvZn">
                    Estrutura outside one<hr/>
                    <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <div className="showcase-preview_preview__HcSHu" style={{width: "240px", height: "169px"}} >
                  <Image alt="Screenshot of ProductHunt's website" loading="lazy" width="240" height="169" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/img3.jpg" />
                  <div className="showcase-preview_title__jFvZn">
                    Estrutura inset one<hr/>
                    <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <div className="showcase-preview_preview__HcSHu" style={{width: "240px", height: "217px"}} >
                  <Image alt="Screenshot of Washington Post's website" loading="lazy" width="240" height="217" decoding="async" data-nimg="1" style={{color: "transparent"}} src="/imagens/img2.jpg" />
                  <div className="showcase-preview_title__jFvZn">
                    Estrutura inset two<hr/>
                    <svg className="text-[rgba(177, 177, 177)]" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "14px", height: "14px", color: "currentcolor"}} viewBox="0 0 16 16" width="16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="customers_subtitle__W6oUd">Ambiente de <strong>aprendizado dinâmcos</strong>, onde o <strong>fazer</strong> é a <strong>chave</strong> <span style={{display: "block"}}></span>para domínio das competências.</p>
        </section>
      </div>
    );
  }
  
  export default About;

  {/*<section className={cn("relative w-screen md:h-screen h-full", resize.height <= 450 ? "!h-full" : "")}>
          <div className="foundation_main___w4Uu">
            <h2 className="foundation_title__5Vz6y gradient-text" data-main-heading="true">
              Fundado com o intuito de <span data-break="true"></span> produzir e transmitir conhecimento
            </h2>
            <StackSVG />
            <StackItems />
          </div>
        </section>*/}