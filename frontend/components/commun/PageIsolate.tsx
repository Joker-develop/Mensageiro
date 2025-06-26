"use client";

import { Boldonse } from "@/app/fonts/fonts";
import setPropety from "@/app/util/useFunc";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react"


const PageIsolate = () => {

    useEffect(() => {
        const htmlDivOne: NodeListOf<Element> = document.querySelectorAll("isolateOne");
        const htmlDivTwo: NodeListOf<Element> = document.querySelectorAll("div.isolateTwo");
        const htmlDivThree: NodeListOf<Element> = document.querySelectorAll("div.isolateThree");
        const propety = {
            "-webkit-mask-image": "linear-gradient(to right, transparent, white 2rem, white calc(100% - 2rem), transparent)", 
            "mask-image": "linear-gradient(to right, transparent, white 2rem, white calc(100% - 2rem), transparent)",
        }
        const propetyOne = {
            "-webkit-mask-image": "linear-gradient(to right, transparent, white 2.75rem, white calc(100% - 2.75rem), transparent)", 
            "mask-image": "linear-gradient(to right, transparent, white 2.75rem, white calc(100% - 2.75rem), transparent)",
        }
        const propetyTwo = {
            
        }

        htmlDivOne.forEach( elem => {
            setPropety(elem as HTMLElement, propety);
        })
        htmlDivTwo.forEach( elem => {
            setPropety(elem as HTMLElement, propetyOne);
        })
        htmlDivThree.forEach( elem => {
            setPropety(elem as HTMLElement, propetyTwo);
        })
    })
  return (
    <div className="w-full h-full">
        <div id="components" className="relative h-full flex items-end pb-5 justify-center isolate overflow-hidden bg-gray-25 bg-gradient-to-b from-white/20 to-[125%] pt-[100px] ring-1 ring-gray-900/5" style={{boxShadow: "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"}}>
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-8 right-1/2 sm:top-5 aspect-[969/887] w-[969px]">
                    <picture>
                        <source srcSet="https://clerk.com//_next/static/media/circuit-lines@2xl.ee1ad3dd.webp" type="image/webp" />
                        <source srcSet="https://clerk.com//_next/static/media/circuit-lines@2xr.0351fb9a.png" type="image/png" />
                        <img alt="" width="1938" height="1774" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full" style={{color: "transparent"}} src="https://clerk.com//_next/static/media/circuit-lines@2xl.ee1ad3dd.webp" />
                    </picture>
                    <div className="absolute inset-0">
                        <canvas className="absolute inset-0 h-full w-full" style={{left: "calc(31.5rem)", top: "calc(1.5625rem)", width: "calc(25.1875rem)", height: "calc(22.6875rem)"}} aria-hidden="true" width="403" height="363"></canvas>
                        <svg width="0" height="0" aria-hidden="true">
                            <path d="M296 224V187.314C296 185.192 296.843 183.157 298.343 181.657L352.657 127.343C354.157 125.843 356.192 125 358.314 125H383"></path>
                        </svg>
                        <svg width="0" height="0" aria-hidden="true">
                            <path d="M294 226H209.314C207.192 226 205.157 226.843 203.657 228.343L86.8431 345.157C85.3428 346.657 83.308 347.5 81.1863 347.5H20"></path>
                        </svg>
                        <svg width="0" height="0" aria-hidden="true">
                            <path d="M54 290V133.657C54 132.596 54.4214 131.579 55.1716 130.828L89.8284 96.1716C90.5786 95.4214 91 94.404 91 93.3431V16"></path>
                        </svg>
                        <svg width="0" height="0" aria-hidden="true">
                            <path d="M287 89V70.5L314.157 43.3431C315.657 41.8429 316.5 39.808 316.5 37.6863V21"></path>
                        </svg>
                    </div>
                    <picture>
                        <source srcSet="https://clerk.com//_next/static/media/circuit-components@2xl.288e1b6c.webp" type="image/webp" />
                        <source srcSet="https://clerk.com//_next/static/media/circuit-components@2xr.175a3562.png" type="image/png" />
                        <img alt="" width="1938" height="1774" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full" style={{color: "transparent"}} src="https://clerk.com//_next/static/media/circuit-components@2xl.288e1b6c.webp" />
                    </picture>
                </div>
                <div className="absolute -top-8 right-1/2 origin-right -scale-x-100 sm:top-5 aspect-[969/887] w-[969px]">
                    <picture>
                        <source srcSet="https://clerk.com//_next/static/media/circuit-lines@2xl.ee1ad3dd.webp" type="image/webp" />
                        <source srcSet="https://clerk.com//_next/static/media/circuit-lines@2xr.0351fb9a.png" type="image/png" />
                        <img alt="" width="1938" height="1774" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full" style={{color: "transparent"}} src="https://clerk.com//_next/static/media/circuit-lines@2xl.ee1ad3dd.webp" />
                    </picture>
                    <div className="absolute inset-0">
                        <canvas className="absolute inset-0 h-full w-full" style={{left: "calc(31.5rem)", top: "calc(1.5625rem)", width: "calc(25.1875rem)", height: "calc(22.6875rem)"}} aria-hidden="true" width="403" height="363"></canvas>
                        <svg width="0" height="0" aria-hidden="true">
                            <path d="M296 224V187.314C296 185.192 296.843 183.157 298.343 181.657L352.657 127.343C354.157 125.843 356.192 125 358.314 125H383"></path>
                        </svg>
                        <svg width="0" height="0" aria-hidden="true">
                            <path d="M294 226H209.314C207.192 226 205.157 226.843 203.657 228.343L86.8431 345.157C85.3428 346.657 83.308 347.5 81.1863 347.5H20"></path>
                        </svg>
                        <svg width="0" height="0" aria-hidden="true">
                            <path d="M54 290V133.657C54 132.596 54.4214 131.579 55.1716 130.828L89.8284 96.1716C90.5786 95.4214 91 94.404 91 93.3431V16"></path>
                        </svg>
                        <svg width="0" height="0" aria-hidden="true">
                            <path d="M287 89V70.5L314.157 43.3431C315.657 41.8429 316.5 39.808 316.5 37.6863V21"></path>
                        </svg>
                    </div>
                    <picture>
                        <source srcSet="https://clerk.com//_next/static/media/circuit-components@2xl.288e1b6c.webp" type="image/webp" />
                        <source srcSet="https://clerk.com//_next/static/media/circuit-components@2xr.175a3562.png" type="image/png" />
                        <img alt="" width="1938" height="1774" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full" style={{color: "transparent"}} src="https://clerk.com//_next/static/media/circuit-components@2xl.288e1b6c.webp" />
                    </picture>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-[calc(-702/16*1rem)] top-0 -z-10 bg-[radial-gradient(154.86%_76.83%_at_50%_22.26%,theme(colors.gray.50/0.4)_8.98%,theme(colors.gray.50)_45.99%)]"></div>
            <svg viewBox="0 0 1068 1068" fill="none" className="absolute left-1/2 top-1/2 -z-10 ml-[calc(-1068/2/16*1rem)] mt-[calc(-1068/2/16*1rem)] w-[calc(1068/16*1rem)]" aria-hidden="true">
                <g opacity=".45">
                    <mask id="components-logomark" width="846" height="1068" x="0" y="0" fill="#000" maskUnits="userSpaceOnUse">
                        <path fill="#fff" d="M0 0h846v1068H0z"></path>
                        <path d="M701.525 534c0 91.99-74.676 166.563-166.792 166.563S367.941 625.99 367.941 534s74.676-166.562 166.792-166.562S701.525 442.01 701.525 534Z"></path>
                        <path d="M831.385 90.844c16.674 11.153 18.099 34.615 3.909 48.786l-121.89 121.722c-11.017 11.001-28.107 12.739-41.972 5.645-41.001-20.975-87.466-32.81-136.699-32.81-165.81 0-300.225 134.231-300.225 299.813 0 49.165 11.851 95.567 32.855 136.511 7.104 13.847 5.363 30.913-5.653 41.914L139.82 834.148c-14.19 14.171-37.684 12.748-48.853-3.903C34.142 745.525 1 643.628 1 534 1 239.632 239.96 1 534.733 1c109.778 0 211.816 33.097 296.652 89.844ZM835.286 928.37c14.191 14.171 12.766 37.632-3.908 48.785C746.542 1033.9 644.504 1067 534.725 1067c-109.778 0-211.816-33.1-296.653-89.844-16.674-11.153-18.098-34.615-3.908-48.786l121.89-121.723c11.016-11.001 28.106-12.739 41.972-5.645 41.001 20.976 87.466 32.811 136.699 32.811 49.234 0 95.699-11.835 136.7-32.811 13.865-7.094 30.955-5.356 41.972 5.645L835.286 928.37Z"></path>
                    </mask>
                    <path fill="#F1F3F6" d="M701.525 534c0 91.99-74.676 166.563-166.792 166.563S367.941 625.99 367.941 534s74.676-166.562 166.792-166.562S701.525 442.01 701.525 534Z"></path>
                    <path fill="#F1F3F6" d="M831.385 90.844c16.674 11.153 18.099 34.615 3.909 48.786l-121.89 121.722c-11.017 11.001-28.107 12.739-41.972 5.645-41.001-20.975-87.466-32.81-136.699-32.81-165.81 0-300.225 134.231-300.225 299.813 0 49.165 11.851 95.567 32.855 136.511 7.104 13.847 5.363 30.913-5.653 41.914L139.82 834.148c-14.19 14.171-37.684 12.748-48.853-3.903C34.142 745.525 1 643.628 1 534 1 239.632 239.96 1 534.733 1c109.778 0 211.816 33.097 296.652 89.844ZM835.286 928.37c14.191 14.171 12.766 37.632-3.908 48.785C746.542 1033.9 644.504 1067 534.725 1067c-109.778 0-211.816-33.1-296.653-89.844-16.674-11.153-18.098-34.615-3.908-48.786l121.89-121.723c11.016-11.001 28.106-12.739 41.972-5.645 41.001 20.976 87.466 32.811 136.699 32.811 49.234 0 95.699-11.835 136.7-32.811 13.865-7.094 30.955-5.356 41.972 5.645L835.286 928.37Z"></path>
                    <path fill="#2F3037" fillOpacity=".14" d="m267.363 670.511.89-.457-.89.457Zm-5.653 41.914.707.708-.707-.708Zm451.694-451.073-.707-.707.707.707Zm-41.972 5.645-.456.891.456-.891ZM139.82 834.148l-.706-.708.706.708Zm-48.853-3.903.83-.557-.83.557ZM835.294 139.63l.706.707-.706-.707Zm-3.909-48.786.556-.831-.556.83Zm-159.96 710.158-.456-.89.456.89Zm41.972 5.645-.707.708.707-.708Zm-357.343 0 .706.708-.706-.708Zm41.972-5.645.456-.89-.456.89ZM238.072 977.156l.556-.832-.556.832Zm-3.908-48.786-.706-.708.706.708Zm597.214 48.785.556.832-.556-.832Zm3.908-48.785.707-.708-.707.708ZM700.525 534c0 91.436-74.227 165.563-165.792 165.563v2c92.667 0 167.792-75.02 167.792-167.563h-2ZM534.733 699.563c-91.565 0-165.792-74.127-165.792-165.563h-2c0 92.543 75.125 167.563 167.792 167.563v-2ZM368.941 534c0-91.436 74.227-165.562 165.792-165.562v-2c-92.667 0-167.792 75.018-167.792 167.562h2Zm165.792-165.562c91.565 0 165.792 74.126 165.792 165.562h2c0-92.544-75.125-167.562-167.792-167.562v2Zm299.854-229.516-121.89 121.723 1.413 1.415L836 140.337l-1.413-1.415Zm-162.7 127.185c-41.138-21.046-87.759-32.92-137.154-32.92v2c49.071 0 95.38 11.796 136.243 32.701l.911-1.781Zm-137.154-32.92c-166.361 0-301.225 134.677-301.225 300.813h2c0-165.028 133.966-298.813 299.225-298.813v-2ZM233.508 534c0 49.328 11.89 95.885 32.965 136.967l1.78-.913c-20.934-40.806-32.745-87.051-32.745-136.054h-2Zm27.495 177.718L139.114 833.44l1.413 1.415 121.89-121.722-1.414-1.415ZM0 534c0 109.832 33.205 211.923 90.137 296.802l1.66-1.114C35.08 745.128 2 643.423 2 534H0ZM534.733 0C239.409 0 0 239.079 0 534h2C2 240.186 240.511 2 534.733 2V0Zm297.208 90.013C746.945 33.159 644.715 0 534.733 0v2c109.574 0 211.419 33.035 296.096 89.675l1.112-1.662ZM266.473 670.967c6.93 13.507 5.204 30.092-5.47 40.751l1.414 1.415c11.359-11.344 13.114-28.892 5.836-43.079l-1.78.913Zm446.224-410.322c-10.673 10.658-27.283 12.383-40.81 5.462l-.911 1.781c14.205 7.267 31.775 5.515 43.134-5.828l-1.413-1.415ZM139.114 833.44c-13.782 13.763-36.526 12.334-47.316-3.752l-1.661 1.114c11.547 17.216 35.79 18.633 50.39 4.053l-1.413-1.415ZM836 140.337c14.601-14.581 13.181-38.793-4.059-50.324l-1.112 1.662c16.109 10.775 17.538 33.486 3.758 47.247l1.413 1.415ZM534.725 1068c109.983 0 212.213-33.16 297.209-90.013l-1.112-1.663C746.145 1032.96 644.3 1066 534.725 1066v2Zm-297.209-90.013C322.512 1034.84 424.743 1068 534.725 1068v-2c-109.574 0-211.42-33.04-296.097-89.676l-1.112 1.663Zm-2.645-48.91L356.76 807.355l-1.413-1.415-121.889 121.722 1.413 1.415Zm162.7-127.185c41.138 21.047 87.759 32.921 137.154 32.921v-2c-49.071 0-95.381-11.796-136.243-32.701l-.911 1.78Zm137.154 32.921c49.396 0 96.017-11.874 137.155-32.921l-.911-1.78c-40.863 20.905-87.172 32.701-136.244 32.701v2Zm177.965-27.458 121.89 121.722 1.413-1.415-121.89-121.722-1.413 1.415Zm-40.81-5.463c13.527-6.92 30.137-5.196 40.81 5.463l1.413-1.415c-11.359-11.344-28.929-13.095-43.134-5.828l.911 1.78Zm-315.12 5.463c10.674-10.659 27.283-12.383 40.811-5.463l.911-1.78c-14.205-7.267-31.776-5.516-43.135 5.828l1.413 1.415ZM238.628 976.324c-16.108-10.774-17.537-33.485-3.757-47.247l-1.413-1.415c-14.601 14.581-13.181 38.793 4.058 50.325l1.112-1.663Zm593.306 1.663c17.24-11.532 18.66-35.744 4.059-50.325l-1.413 1.415c13.78 13.761 12.351 36.472-3.758 47.247l1.112 1.663Z" mask="url(#components-logomark)"></path>
                </g>
            </svg>
            <div className="mx-auto w-full h-full flex flex-col max-md:gap-[30px] items-center justify-between px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
                <div className="mx-auto max-w-4xl w-full gap-5 flex flex-col max-md:items-center md:flex-row justify-center">
                    <div className="max-w-[30%] flex justify-center items-center">
                        <Image src="/imagens/logo.png" alt="" width={300} height={300} className ={"w-[120px] h-[120px] rounded-[50%] "}/>
                    </div>
                    <div className="max-w-[70%] w-full flex flex-col justify-center items-center md:items-start">
                        <h2 className={`uppercase text-[1rem] max-md:text-center ${Boldonse.className}`}>instituto médio politénico privado mensageiro</h2>
                        <h2 className={`uppercase text-[.875rem] ${Boldonse.className}`}>= imppm huambo =</h2>
                        <span data-br="«Rb4b3rn5enb»" data-brr="1" className="text-balance text-[.875rem] underline">&quot;O espaço do conhecimento&quot;</span>
                    </div>
                </div>
                <div className="flex items-center flex-col text-center">
                    <h1 className="mx-auto max-w-full md:max-w-4xl text-balance text-3xl/9 font-bold tracking-tight text-gray-950 sm:text-5.5xl md:text-6xl">
                        <span data-br="«Rb4b3rn5enb»" data-brr="1" style={{display: "inline-block", verticalAlign: "top", textDecoration: "inherit", textWrap: "balance"}}>A plataforma de gerenciamento de pubicações de usuários mais abrangente</span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base/6 text-gray-600 sm:text-lg">Precisa saber sobre a instituição e acontecimentos recentes? IMPP Publications é uma combinação completo de interfaces gerais, APIs flexíveis e painéis de administração para autenticar e gerenciar os seus post e de outros usuários.</p>
                    <div className="mt-8 flex items-center justify-center gap-x-6 gap-y-3 max-sm:flex-col">
                        <Link href="/publications" className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] pt-2.5 pr-5 pb-2.5 pl-5 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm px-3 py-[0.1875rem] ring-1 bg-[#ff2800] text-white ring-[#ff2800] max-md:text-[1rem] hover:font-extrabold cursor-pointer" target="">Fazer uma Publicações</Link>
                        <button type="button" tabIndex={0} aria-expanded="false" id="react-aria-«R2r4b3rn5enbH1»" className="flex items-center gap-3 rounded-3xl py-0.5 pl-0.5 pr-2.5" data-rac="">
                            <span className="relative grid size-[1.625rem] place-items-center rounded-full from-black before:absolute before:inset-0 before:animate-[spin_5s_linear_infinite] before:rounded-full before:bg-gradient-to-b after:absolute after:inset-0.5 after:rounded-full after:bg-white">
                                <svg viewBox="0 0 9 8" className="z-10 h-2 w-[0.5625rem] fill-[#131316] stroke-[#131316]"><path d="M8 4L1 1V7L8 4Z" strokeWidth="2" strokeLinejoin="round"></path></svg>
                            </span>
                            <Link href="/curso" className="text-sm/5 font-medium">Acerca dos <span className="ml-1.5 text-2xs font-book text-gray-600 max-md:text-[1rem] hover:font-extrabold cursor-pointer"> cursos no IMPPM</span></Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageIsolate