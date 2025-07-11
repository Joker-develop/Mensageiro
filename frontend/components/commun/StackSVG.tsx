import setPropety from "@/app/util/useFunc";
import Image from "next/image";
import { useEffect } from "react";

const StackSVG = () => {

    useEffect(() => {
        const htmlDivOne: Element | null = document.querySelector("div.foundation_illustration__zb0I_.One");
        const htmlDivTwo: Element | null = document.querySelector("div.foundation_cpu__ciXpm.Two");
        const propetyOne = {
            "--stack-flex": "initial",
            "--stack-direction": "column", 
            "--stack-align": "center",
            "--stack-justify": "center",
            "--stack-padding": "0px",
            "--stack-gap": "0px"
        };
        const propetyTwo = {
            "--stack-flex": "initial",
            "--stack-direction": "column",
            "--stack-align": "center",
            "--stack-justify": "center",
            "--stack-padding": "0px",
            "--stack-gap": "0px"
        }
        
        setPropety(htmlDivOne as HTMLElement, propetyOne);
        setPropety(htmlDivTwo as HTMLElement, propetyTwo);
    
        })

    return(
        <div className="stack_stack__iZkUS stack foundation_illustration__zb0I_ One" data-version="v1">
            <svg fill="none" height="264" role="img" viewBox="0 0 891 264" width="891" data-lines="true" aria-label="A bunch of connecting lines that form into the CPU, with the text Powered By on top of the the CPU. Gradient lines are animating along the drawn lines, dissolving into the CPU in the center.">
                <path d="M388 96L388 68C388 65.7909 386.209 64 384 64L310 64" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                <path d="M349 150L73 150C70.7909 150 69 151.791 69 154L69 174" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                <g>
                    <path d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                    <path d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264" stroke="url(#orange-pulse-1)" strokeWidth="2"></path>
                </g>
                <g>
                    <path d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                    <path d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264" stroke="url(#blue-pulse-1)" strokeLinecap="round" strokeWidth="2"></path>
                </g>
                <g>
                    <path d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                    <path d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264" stroke="url(#pink-pulse-2)" strokeLinecap="round" strokeWidth="2"></path>
                </g>
                <g>
                    <path d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                    <path d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264" stroke="url(#blue-pulse-2)" strokeLinecap="round" strokeWidth="2"></path>
                </g>
                <path d="M412 96L412 0" stroke="url(#paint0_linear_341_27683)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                <g>
                    <path d="M412 263.5L412 184" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{transform: "scale(-1)", transformOrigin: "412px 223.75px 0px"}} pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" transform-origin="412px 223.75px"></path>
                    <path d="M412 263.5L412 184" stroke="url(#pink-pulse-1)" strokeLinecap="round" strokeWidth="2"></path>
                </g>
                <g>
                    <path d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                    <path d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264" stroke="url(#orange-pulse-2)" strokeWidth="2"></path>
                </g>
                <path d="M436 96L436 0" stroke="url(#paint1_linear_341_27683)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                <path d="M436 214L436 184" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{transform: "scale(-1)", transformOrigin: "436px 199px 0px"}} pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" transform-origin="436px 199px"></path>
                <path d="M460 96L460 64" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                <path d="M460 239L460 184" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{transform: "scale(-1)", transformOrigin: "460px 211.5px 0px"}} pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" transform-origin="460px 211.5px"></path>
                <path d="M484 96L484 24C484 21.7909 485.791 20 488 20L554 20" stroke="url(#paint2_linear_341_27683)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                <path d="M484 184L484 210C484 212.209 485.791 214 488 214L560 214" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                <path d="M508 184L508 193C508 195.209 509.791 197 512 197L560 197" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                <circle cx="460" cy="64" fill="var(--geist-background)" r="4" opacity="1"></circle>
                <circle cx="460" cy="64" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1"></circle>
                <circle cx="308" cy="64" fill="var(--geist-background)" r="4" opacity="1"></circle>
                <circle cx="308" cy="64" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1"></circle>
                <circle cx="69" cy="173" fill="var(--geist-background)" r="4" opacity="1"></circle>
                <circle cx="69" cy="173" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1"></circle>
                <circle cx="436" cy="214" fill="var(--geist-background)" r="4" opacity="1"></circle>
                <circle cx="436" cy="214" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1"></circle>
                <circle cx="460" cy="240" fill="var(--geist-background)" r="4" opacity="1"></circle>
                <circle cx="460" cy="240" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1"></circle>
                <circle cx="560" cy="214" fill="var(--geist-background)" r="4" opacity="1"></circle>
                <circle cx="560" cy="214" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1"></circle>
                <circle cx="560" cy="197" fill="var(--geist-background)" r="4" opacity="1"></circle>
                <circle cx="560" cy="197" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1"></circle>
                <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_341_27683" x1="412.5" x2="412.5" y1="-3.27835e-08" y2="96">
                        <stop stopOpacity="0"></stop>
                        <stop offset="1"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_341_27683" x1="436.5" x2="436.5" y1="-3.27835e-08" y2="96">
                        <stop stopOpacity="0"></stop>
                        <stop offset="1"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_341_27683" x1="554" x2="484" y1="20" y2="96">
                        <stop stopOpacity="0"></stop>
                        <stop offset="1"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="blue-pulse-1" x1="198.6776324387465" y1="233.51546092118951" x2="180.4319490887865" y2="312.3680311564749">
                        <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
                        <stop offset="0.05" stopColor="#2EB9DF"></stop>
                        <stop offset="1" stopColor="#2EB9DF" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="blue-pulse-2" x1="400" y1="83" x2="350" y2="133.75">
                        <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
                        <stop offset="0.05" stopColor="#2EB9DF"></stop>
                        <stop offset="1" stopColor="#2EB9DF" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="pink-pulse-1" x1="400" y1="83" x2="350" y2="133.75">
                        <stop stopColor="#FF4A81" stopOpacity="0"></stop>
                        <stop offset="0.030" stopColor="#FF4A81"></stop>
                        <stop offset="0.27" stopColor="#DF6CF6"></stop>
                        <stop offset="1" stopColor="#0196FF" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="pink-pulse-2" x1="475" y1="120" x2="488" y2="150">
                        <stop stopColor="#FF4A81" stopOpacity="0"></stop>
                        <stop offset="0.0564843" stopColor="#FF4A81"></stop>
                        <stop offset="0.4616" stopColor="#DF6CF6"></stop>
                        <stop offset="1" stopColor="#0196FF" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="orange-pulse-1" x1="610.5625725938589" y1="205.37858399620745" x2="629.366262731317" y2="261.5311377096805">
                        <stop stopColor="#FF7432" stopOpacity="0"></stop>
                        <stop offset="0.0550784" stopColor="#FF7432"></stop>
                        <stop offset="0.373284" stopColor="#F7CC4B"></stop>
                        <stop offset="1" stopColor="#F7CC4B" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="orange-pulse-2" x1="821.3975637161639" y1="268.51348401454743" x2="829.6022179914871" y2="418.6678988841595">
                        <stop stopColor="#FF7432" stopOpacity="0"></stop>
                        <stop offset="0.0531089" stopColor="#FF7432"></stop>
                        <stop offset="0.415114" stopColor="#F7CC4B"></stop>
                        <stop offset="1" stopColor="#F7CC4B" stopOpacity="0"></stop>
                    </linearGradient>
                </defs>
            </svg>
            <Image alt="" aria-hidden="true" loading="lazy" width="400" height="312" decoding="async" data-nimg="1" className="foundation_mobileLines__3hBQx" style={{color: "transparent"}} src="/icons/mobile-lines.svg" />
            
            <div className="stack_stack__iZkUS stack foundation_cpu__ciXpm Two" data-version="v1" aria-hidden="true" >
                <div data-cpu-shine="true"></div>
                <div data-connectors="true" data-side="left">
                    <span data-connector="true"></span>
                    <span data-connector="true"></span>
                </div>
                <div data-connectors="true" data-side="top">
                    <span data-connector="true"></span>
                    <span data-connector="true"></span>
                    <span data-connector="true"></span>
                    <span data-connector="true"></span>
                    <span data-connector="true"></span>
                    <span data-connector="true"></span>
                </div>
                <span data-text="true">Conceitos</span>
                <div data-connectors="true" data-side="bottom">
                    <span data-connector="true"></span>
                    <span data-connector="true"></span>
                    <span data-connector="true"></span>
                    <span data-connector="true"></span>
                    <span data-connector="true"></span>
                    <span data-connector="true"></span>
                </div>
                <div data-connectors="true" data-side="right">
                    <span data-connector="true"></span>
                    <span data-connector="true"></span>
                </div>
            </div>
        </div>
    )
}

export default StackSVG;