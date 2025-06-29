"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import setPropety from "../util/useFunc";
import { useWindowSize } from "../util/resize";
import { cn } from "@/lib/utils";

const Home = () => {
  const [resize, update] = useState({
      height: 0,
      width: 0
    })

  const size = useWindowSize();
  useEffect(() => {
    const 
      htmlDivOne: Element | null = document.querySelector("div.background-home"),
      propety = { "--cover": "141%" };

     setPropety(htmlDivOne as HTMLElement, propety);
     update(() => ({height: size.height, width: size.width }));
  },[size.height, size.width]);

  return (
    <div className="home_root__yKyeQ">
      <section className={cn("w-screen md:h-screen h-full flex flex-col max-md:gap-5", resize.height <= 450 ? "!h-full relative gap-5" : "")}>
        <div className="w-full h-full flex flex-col md:flex-row justify-center items-center" style={{height: "calc(100% - 60px)"}}>
          <div className="absolute w-full h-full">
            <Image src={"/imagens/bg4.png"} width={1200} height={1200} className={cn("w-full opacity-[0.2]", resize.height <= 450 ? " absolute top-0 bottom-0 !h-full" : "")} alt="" />
            <Image src={"/imagens/bg2.png"} width={500} height={500} className="absolute w-[300px] right-[90px] top-[70%] translate-y-[-50%] rotate-[-95deg] opacity-[0.2]" alt="" />
          </div>
          <div className=" w-full md:w-[40%] h-ful">
            <div className="w-full h-full flex justify-center items-center">
              <div className="background-home !w-full !h-[341px]"/>
            </div>
          </div>
          <div className={cn("w-[90%] md:w-[60%] h-full z-10", resize.height <= 450 ? "!pt-[100px]" : "")}>
            <div className={cn("max-w-full md:max-w-[60%] h-full flex flex-col justify-center items-center gap-[25px]", resize.height <= 450 ? "!max-w-[80%]" : "")}>
              <h2 className="text-[#ff2800] text-[2rem] font-extrabold leading-[1.2] ">Começar a sua graduação para o ensino médio nunca foi tão simples</h2>
              <span className="text-[#17375c] md:text-[1.5rem] text-[1.2rem] ">Vem para <strong>Instituto Médio Politecnico Privado Mensageiro <strong className="rounded-[10px] bg-[#17375c] text-white pt-[3px] pb-[3px] pl-[20px] pr-[20px]">IMPPM</strong></strong> e dê o ínicio na carreira escolhida de forma fácil</span>
              <div className="w-full flex max-md:flex-col items-center gap-[15px]">
                <Link href="/curso" className="rounded-[20px] cursor-pointer pt-[5px] pb-[5px] pl-[20px] pr-[20px] border-[1px] border-solid border-[#ff2800] text-[#ff2800] hover:font-extrabold hover:!text-[#ff2800] uppercase max-md:text-[1rem]"> explorar cursos</Link>
                <Link href="/about" className="rounded-[20px] cursor-pointer pt-[5px] pb-[5px] pl-[20px] pr-[20px] bg-[#ff2800] text-white hover:!text-white hover:font-extrabold uppercase max-md:text-[1rem]"> Sobre a instituição</Link>
              </div>
              <p className="text-[#17375c] font-extrabold text-[.8rem]">Possuímo uma mensalidade que cabe para todos os bolsos, para isso faça a adesão ao Programa do IMPPM de forma segura</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[60px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] m:p-0 md:h-[40px] bg-[#ff2800] flex justify-center items-center">
          <span className="text-white opacity-[.8] leading-[1.2]">O Instituto Médio Politécnico Privado Mensageiro do Huambo te espera, <strong className="text-white font-extrabold">Vem até nos!</strong></span>
        </div>
      </section>
    </div>

  );
}

export default Home;

