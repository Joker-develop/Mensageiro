"use client";

import { Boldonse } from "@/app/fonts/fonts";
import { useWindowSize } from "@/app/util/resize";
import setPropety from "@/app/util/useFunc";
import Footer from "@/components/commun/Footer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";


const Curso = () => {
  const [resize, update] = useState({
    height: 0,
    width: 0
  })

  /**
   * style={{"animation-play-state": "running"}}
   * style={{"animation-play-state": "running"}}
   * 
   * content: "";
    background: linear-gradient(to bottom,transparent,var(--fade-color) 70%);
    z-index: 1;
    width: calc(100% + var(--container-padding-x) * 2);
    left: calc(var(--container-padding-x) * -1);
    height: 400px;
    bottom: -32px;
    pointer-events: none;
    position: absolute;

   */

  const size = useWindowSize();
  useEffect(() => {
    const htmlDivOne: NodeListOf<Element> = document.querySelectorAll("div.cursoONe");
    const propety = {
      "--stack-flex": "initial",
      "--stack-direction": "row",
      "--stack-align": "stretch",
      "--stack-justify": "flex-start",
      "--stack-padding": "0px",
      "--stack-gap": "16px",
    }

    htmlDivOne.forEach( elem => {
      setPropety(elem as HTMLElement, propety);
    });
    
    update(() => ({height: size.height, width: size.width }))
  }, [size.height, size.width])
  return (
    <>
      <div className="flex flex-col w-full bg-gradient-left dark:bg-gradient-left-dark" style={{contain: "content"}}>
        <section className={cn("snap-start relative w-screen md:h-screen h-full", resize.height <= 450 ? "!h-full" : "")}>
          <div className="w-full md:w-[75%] h-full flex items-center justify-center md:flex-row flex-col gap-[30px] m-auto">
            <div className="md:max-w-[460px] md:w-full max-w-full w-[90%] h-full flex flex-col items-center justify-evenly gap-5">
              <div className="flex flex-col justify-center items-center pt-[90px]">
                <div className="flex flex-row items-center w-full h-5 gap-2">
                  <span className="block h-0.5 w-5 bg-red-500"></span>
                  <span className="font-bold text-[15px]">Curso prático de informática</span>
                </div>
                <span className={`text-4xl font-bold text-blue-950 mt-5 mb-12 leading-normal ${Boldonse.className}`}>
                  Técnico de Informatica de Gestão <strong className="text-[#007FFF] underline decoration-[#007FFF]"> TIG </strong>
                </span>
                <p>O curso de Informática Aplicada à Gestão  capacita os alunos a utilizar a tecnologia de forma estratégica na administração de empresas e organizações. Com um ensino dinâmico e prático, os estudantes aprendem a integrar ferramentas digitais aos processos de gestão, tornando-os mais ágeis e eficientes.</p>
              </div>
              <div className="stack_stack__iZkUS flex-wrap stack vercel_badges__QzAgf cursoONe" data-version="v1" aria-hidden="true">
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="purple">Base de Dados</span>
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="green">Rede de Computadores</span>
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="amber">Programação</span>
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="blue">Gestão Info</span>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="relative w-full h-full flex justify-center items-center">
                <Image width={1200} height={960} src="/imagens/infoExtra2.jpg"  alt="" className="absolute block w-[30%] left-0 top-[17%] rounded-[10px] object-cover"/>
                <Image width={1200} height={960} src="/imagens/info.jpg"  alt="" className="block w-[70%] object-cover"/>
                <Image width={1200} height={960} src="/imagens/infoExtra.jpeg"  alt="" className="absolute block w-[30%] h-[30%] right-[3%] bottom-[2.5%] rounded-[10px] object-cover"/>
              </div>
            </div>
          </div>
        </section>
        <section className={cn(`snap-start relative w-screen md:h-screen  h-full bg-white`, resize.height <= 450 ? "!h-full" : "")}>
          <div className="w-full md:w-[75%] h-full flex items-center justify-center md:flex-row-reverse flex-col gap-[30px] m-auto">
            <div className="md:max-w-[460px] md:w-full max-w-full w-[90%] h-full flex flex-col items-center justify-evenly gap-5">
              <div className="flex flex-col justify-center items-center pt-[90px]">
                <div className="flex flex-row items-center w-full h-5 gap-2">
                  <span className="block h-0.5 w-5 bg-red-500"></span>
                  <span className="font-bold text-[15px]">Curso de contabilidade</span>
                </div>
                <span className={`text-4xl font-bold text-blue-950 mt-5 mb-12 leading-normal ${Boldonse.className}`}>
                  Técnico de Contabilidade <strong className="text-[#4682B4] underline decoration-[#4682B4]"> TC </strong>
                </span>
                <p>O curso de Contabilidade  forma profissionais preparados para atuar na gestão financeira e contábil de empresas, auxiliando na tomada de decisões estratégicas e no cumprimento das obrigações fiscais. Com uma abordagem prática e alinhada às exigências do mercado, os alunos aprendem a organizar, analisar e interpretar informações financeiras.</p>
              </div>
              <div className="stack_stack__iZkUS stack flex-wrap vercel_badges__QzAgf cursoONe" data-version="v1" aria-hidden="true">
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="purple">Económia</span>
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="green">Contabilidade Financeira</span>
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="amber">Fiscalidade</span>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="relative w-full h-full flex justify-center items-center">
                <Image width={1200} height={960} src="/imagens/contabilidadeExtra2.png"  alt="" className="absolute block w-[30%] left-0 top-[17%] rounded-[10px] object-cover"/>
                <Image width={1200} height={960} src="/imagens/contabilidade2.jpg"  alt="" className="block w-[70%] object-cover"/>
                <Image width={1200} height={960} src="/imagens/contabilidadeExtra.png"  alt="" className="absolute block w-[40%] h-[30%] right-[3%] bottom-[23%] rounded-[10px] object-cover"/>
              </div>
            </div>
          </div>
        </section>
        <section className={cn("snap-start relative w-screen md:h-screen h-full", resize.height <= 450 ? "!h-full" : "")} >
          <div className="w-[100%] h-full flex items-center justify-center flex-row gap-[30px] m-auto cursContainer">
            <div className={cn("absolute md:max-w-[80%] max-w-full flex-col md:h-auto flex md:flex-row items-center justify-center gap-5 bg-[#000000b2] backdrop-blur-[5px] rounded-b-[0px] rounded-t-[10px] bottom-0 md:p-2.5 md:pl-[30px] md:pr-[30px] z-[5] h-full pt-[100px] pl-[15px] pr-[15px] pb-[0]", resize.height <= 450 ? "!max-w-full !h-full !flex-col !pt-[100px] !pl-[15px] !pr-[15px] !pb-[0]" : "")}>
              <div className="flex flex-col justify-center items-center p-2.5 pl-[30px] pr-[30px] text-white">
                <div className="flex flex-row items-center w-full h-5 gap-2">
                  <span className="block h-0.5 w-5 bg-red-500"></span>
                  <span className="font-bold text-[15px]">Curso de recursos humanos</span>
                </div>
                <span className={`text-4xl font-bold text-blue-950 mt-5 mb-6 leading-normal ${Boldonse.className}`}>
                  Técnico de Recursos Humanos <strong className=" text-pink-500 underline decoration-pink-500"> RH </strong>
                </span>
                <p>O curso de Recursos Humanos  capacita os alunos para atuar na gestão de pessoas, desenvolvendo estratégias para recrutamento, treinamento, motivação e bem-estar dos colaboradores dentro das organizações. Com uma abordagem prática e alinhada às demandas do mercado de trabalho, o curso prepara profissionais para otimizar o desempenho das empresas por meio da valorização do capital humano.</p>
              </div>
              <div className="stack_stack__iZkUS flex-wrap stack vercel_badges__QzAgf !flex-col cursoONe" data-version="v1" aria-hidden="true">
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="purple">Recursos Humanos</span>
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="green">Organização de Empresa</span>
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="amber">Empreededorismo</span>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="w-full h-full flex justify-center items-center">
                <Image width={1200} height={960} src="/imagens/rh.jpg"  alt="" className="block w-[100vh] h-screen object-cover"/>
              </div>
            </div>
          </div>
        </section>
        <section className={cn("snap-start relative w-screen md:h-screen bg-white h-full", resize.height <= 450 ? "!h-full" : "")}>
          <div className="w-[90%] md:w-[75%] h-full flex-col flex items-center justify-center md:flex-row gap-[30px] m-auto">
            <div className="md:max-w-[460px] max-w-full w-full h-full flex flex-col items-center justify-evenly gap-5">
              <div className="flex flex-col justify-center items-center pt-[90px]">
                <div className="flex flex-row items-center w-full h-5 gap-2">
                  <span className="block h-0.5 w-5 bg-red-500"></span>
                  <span className="font-bold text-[15px]">Curso de Construção Civil</span>
                </div>
                <span className={`text-4xl font-bold text-blue-950 mt-5 mb-12 leading-normal ${Boldonse.className}`}>
                  Técnico de Construção Civil <strong className="text-[#CC5500] underline decoration-[#CC5500]"> TCC </strong>
                </span>
                <p>O curso de Construção Civil  capacita os alunos para atuar no planejamento, execução e supervisão de obras, garantindo qualidade, segurança e eficiência nos projetos. Com uma abordagem prática e fundamentada nas normas técnicas, o curso prepara profissionais para atender às demandas do setor da construção, um dos mais importantes da economia.</p>
              </div>
              <div className="stack_stack__iZkUS flex-wrap stack vercel_badges__QzAgf cursoONe" data-version="v1" aria-hidden="true">
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="purple">Desenho </span>
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="green">Projectos Civil</span>
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="amber">Obras</span>
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="blue">Técnicas de Construção</span>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="relative w-full h-full flex justify-center items-center">
                <Image width={1200} height={960} src="/imagens/civilExtra2.jpg"  alt="" className="absolute block w-[30%] left-0 top-[17%] rounded-[10px] object-cover"/>
                <Image width={1200} height={960} src="/imagens/civil.jpg"  alt="" className="block w-[70%] object-cover"/>
                <Image width={1200} height={960} src="/imagens/civilExtra.jpeg"  alt="" className="absolute block w-[50%] h-auto right-[3%] bottom-[2.5%] rounded-[10px] object-cover"/>
              </div>
            </div>
          </div>
        </section>
        <section className={cn("snap-start relative w-screen md:h-screen h-full", resize.height <= 450 ? "!h-full" : "")}>
          <div className="md:w-[75%] w-[90%] flex-col h-full flex items-center justify-center md:flex-row-reverse gap-[30px] m-auto">
            <div className="md:max-w-[460px] max-w-full w-full h-full flex flex-col items-center justify-evenly gap-5">
              <div className="flex flex-col justify-center items-center pt-[90px]">
                <div className="flex flex-row items-center w-full h-5 gap-2">
                  <span className="block h-0.5 w-5 bg-red-500"></span>
                  <span className="font-bold text-[15px]">Curso de eletricidade</span>
                </div>
                <span className={`text-4xl font-bold text-blue-950 mt-5 mb-12 leading-normal ${Boldonse.className}`}>
                  Técnico de Eletricidade <strong className="text-[#FFFF00] underline decoration-[#FFFF00]"> TE </strong>
                </span>
                <p>O curso de Eletricidade  prepara os alunos para atuar na instalação, manutenção e reparo de sistemas elétricos residenciais, comerciais e industriais. Com uma abordagem prática e fundamentada em normas técnicas e de segurança, o curso capacita profissionais para atender às demandas do setor elétrico, garantindo eficiência e confiabilidade nas instalações.</p>
              </div>
              <div className="stack_stack__iZkUS flex-wrap stack vercel_badges__QzAgf cursoONe" data-version="v1" aria-hidden="true">
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="purple">Cambiamento</span>
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="green">Circuitos</span>
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="amber">Sistemas elétricos</span>
                <span className="templates_badge__Hhdm7 text-center w-[47%] md:w-[auto]" data-color="blue">Projectos de circuitos</span>
              </div>
            </div>
            <div className="relative w-full h-full">
              <div className="relative w-full h-full flex justify-center items-center">
                <Image width={1200} height={960} src="/imagens/metal.png"  alt="" className="absolute block w-full left-0 top-[0] object-cover"/>
                <Image width={1200} height={960} src="/imagens/eletricidade.jpg"  alt="" className="block w-[60%] rounded-[50%] z-[2] object-cover"/>
              </div>
            </div>
          </div>
        </section>
        <section className={cn("snap-start relative w-screen md:h-screen h-full", resize.height <= 450 ? "!h-full" : "")}>
          <div className={cn("w-full h-full flex-col relative flex items-center justify-center md:flex-row-reverse gap-[30px] m-auto bg-[#1D4D4F]", resize.height <= 450 ? "!flex-col" : "")}>
            <div className="w-full h-full absolute flex justify-center items-start align-bottom">
              <div className="w-[100%] h-full flex justify-center items-end gap-[5px]">
                <span className={`text-9xl font-extrabold text-[#153031] leading-normal ${Boldonse.className}`}>T</span>
                <span className={`text-9xl font-extrabold text-[#153031] leading-normal ${Boldonse.className}`}>G</span>
                <span className={`text-9xl font-extrabold text-[#153031] leading-normal ${Boldonse.className}`}>E</span>
              </div>
            </div>
            <div className={cn("w-full h-full md:absolute relative flex justify-center items-start align-bottom", resize.height <= 450 ? "!relative" : "")}>
              <span className={cn(`md:text-[7rem] text-[3.5rem] font-extrabold text-[#800000] mt-[100px] leading-normal ${Boldonse.className}`, resize.height <= 450 ? "!text-[3.5rem]" : "")}>TÉCNICO</span>
            </div>
            <div className={cn("w-full h-full relative flex flex-col md:justify-end md:items-start items-center justify-center gap-[50px] md:gap-0 align-bottom", resize.height <= 450 ? "!justify-center !items-center !gap-[50px]" : "")}>
              <div className={cn("relative md:absolute md:top-[50%] md:left-[50%] md:translate-[-50%] w-full flex flex-col items-center", resize.height <= 450 ? "!relative !top-0 !left-0 !translate-0 text-center" : "")}>
                <Image src="/imagens/ge3.png" alt="alguma" width={300} height={300}  className="w-[450px] h-[auto]"/>
                <span className="absolute top-[80%] left-[50%] translate-[-50%] block text-5xl text-white font-extrabold">Gestão Empresarial</span>
              </div>
              <div className={cn("md:absolute relative flex-col p-[0] h-[auto] w-[90%] md:w-full md:h-[100px] flex md:flex-row gap-[8px] justify-between items-center md:pr-[80px] md:pl-[80px] bottom-[30px]" , resize.height <= 450 ? "!relative !h-auto !flex-col !p-0 !w-[90%] " : "")}>
                <div className="w-full max-w-[320px]">
                  <p className="text-white">Formando líderes para um mundo corporativo em constate transformação</p>
                  <p className="text-white">Gestão estratégica, visão empreendedora</p>
                </div>
                <div className="w-full max-w-[320px]">
                  <p className="w-[fit-content] text-[#800000] border-[#800000] border-[1px] border-solid p-[5px] uppercase font-extrabold text-center">Liderar é inspirar. Gerir é transformar</p>
                </div>
                <div className="w-full max-w-[320px]">
                  <p className="text-white">Profissional de gestão: o cérebro por trás do sucesso empresarial</p>
                  <p className="text-white">Conhecimento que impulsiona negócios</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={cn("snap-start relative w-screen md:h-screen h-full", resize.height <= 450 ? "!h-full" : "")}>
          <div className="w-[100%] h-full relative flex items-center justify-between flex-col gap-[30px] m-auto bg-[#f2f2f2f2]">
            <div className="absolute opacity-[0.3] w-full h-full flex items-center justify-center ">
              <Image src={"/imagens/desenho3.png"} alt="photo background" width={1200} height={1200} className="w-full h-full" />
            </div>
            <div className="w-[300px] h-[fit-content] z-[5] mt-[75px] p-[20px] bg-white rounded-[10px] shadow-[5px_5px_20px_-6px_rgba(0,0,0,0.75)] flex justify-center items-end gap-[5px]">
                <span className={`text-7xl font-extrabold text-[#FFA500] leading-normal ${Boldonse.className}`}>T</span>
                <span className={`text-7xl font-extrabold text-[#FFA500] leading-normal ${Boldonse.className}`}>D</span>
                <span className={`text-7xl font-extrabold text-[#FFA500] leading-normal ${Boldonse.className}`}>P</span>
            </div>
            <div className={cn("md:absolute relative md:w-full md:max-w-[590px] max-w-[100%] w-[90%] md:top-[90px] md:left-[30px] pt-[10px] pl-[20px] pr-[20px] pb-[20px] bg-white rounded-[10px] shadow-[5px_5px_20px_-6px_rgba(0,0,0,0.75)] flex flex-col", resize.height <= 450 ? "!relative !max-w-full !top-0 !left-0 !w-[90%]" : "")}>
              <Image src={"/imagens/desenho2.png"} alt="photo left" width={900} height={900} className="w-[400px] h-[auto]" />
              <div className="bg-[#5E6A7191] pl-[10px] pr-[10px] pb-[1px] pt-[1px]">
                <p className="text-[#1C1C1C] leading-[1.3] ">O Curso de desenho projetista a juda o aluno aprender a desenhar e aprender a pensar com precisão, a base de toda grande contrução começa com um bom desenho técnico, formação s+olida para mentes criativas e mãos precisas. o curso de Desenho Projetista, o saber contrói caminhos</p>
              </div>
            </div>
            <div className={cn("absolute w-full md:max-w-[400px] max-w-[50%] right-[-18%] top-[29%] md:top-[50%] translate-y-[-50%] md:right-[60px] bg-white rounded-[10px] shadow-[5px_5px_20px_-6px_rgba(0,0,0,0.75)]", resize.height <= 450 ? "!top-[29%] !right-[-18%] !max-w-[50%]" : "")}>
              <Image src={"/imagens/desenho.png"} alt="photo right" width={700} height={700} className="w-full h-full" />
            </div>
            <div className={cn("md:w-[fit-content] w-[90%] max-md:!max-w-full p-[20px] mb-[20px] bg-white rounded-[10px] shadow-[5px_5px_20px_-6px_rgba(0,0,0,0.75)]", resize.height <= 450 ? "!max-w-full !w-[90%]" : "")} style={{maxWidth: "calc(100% - 450px)"}}>
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-[25px] text-[#162456] font-extrabold">Curso Técnico de Desenhador Projetista</h2>
                <hr className="block w-full h-[2] mt-[5px] bg-[#1C1C1C] mb-[5px] ml-[0] mr-[0]" />
                <p className="text-[#5E6A71] leading-[1.3]">Conhecimento, técnica a prática: os pilares de um projetista educar é formar profissionais que enxergam além da linha, cada linha aprendida é um passo rumo à contrução do futuro. Do aprendizado ao projeto: aqui formamos profissionais pronto para o mercado, onde há educação técnica de qualidade, há projetistas transformando o mundo</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
  
  export default Curso;