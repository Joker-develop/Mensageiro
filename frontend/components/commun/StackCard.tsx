import setPropety from "@/app/util/useFunc";
import { JSX, useEffect } from "react";

interface ItemsHooksType {
    svg: JSX.Element; 
    title: string;
    describe: string;
    describeOne?: string;
    describeTwo?: string;
    describeThree?: string;
    describeFour?: string;
    describeFive?: string;
}

const StackCard: React.FC <ItemsHooksType >= ({svg, title, describe, describeFive, describeFour, describeThree, describeTwo, describeOne}) => {

    useEffect(() => {
        const htmlDivOne: NodeListOf<Element> = document.querySelectorAll("div.stack_stack__iZkUS.oneOne");
        const htmlDivTwo: NodeListOf<Element> = document.querySelectorAll("div.stack_stack__iZkUS.twoTwo");
        const htmlSpanThree: NodeListOf<Element> = document.querySelectorAll("span.stack_stack__iZkUS.one");
        const propetyOne = {
            "--stack-flex": "initial", 
            "--stack-direction": "column", 
            "--stack-align": "stretch", 
            "--stack-justify": "flex-start", 
            "--stack-padding": "0px", 
            "--stack-gap": "0px",
        };
        const propetyTwo = {
            "--stack-flex": "initial", 
            "--stack-direction": "column", 
            "--stack-align": "stretch", 
            "--stack-justify": "flex-start", 
            "--stack-padding": "0px", 
            "--stack-gap": "4px",
        }

        const propetyThree = {
            "--stack-flex": "initial", 
                "--stack-direction": "row", 
                "--stack-align": "center", 
                "--stack-justify": "flex-start", 
                "--stack-padding": "0px", 
                "--stack-gap": "4px",
        }
        
        htmlDivOne.forEach( elem => {
            setPropety(elem as HTMLElement, propetyOne);
        });
        htmlDivTwo.forEach( elem => {
            setPropety(elem as HTMLElement, propetyTwo);
        });
        htmlSpanThree.forEach( elem => {
            setPropety(elem as HTMLElement, propetyThree);
        })
        

    })

  return (
    <div className="stack_stack__iZkUS stack foundation_card__v7VKB oneOne border-[1px] border-purple-900" data-version="v1" style={{boxShadow: "0 1px 0 1px #fb7e06ba, 0 4px 6px #0a05df6e, inset 0 0 0 6px var(--accents-1)"}}>
        <div data-icon="true">
            {svg}
        </div>
        <div className="stack_stack__iZkUS stack twoTwo" data-version="v1" >
            <span className="stack_stack__iZkUS stack one" data-version="v1" data-title="true">
                <span>{title}</span>
                <svg data-testid="geist-icon" height="16" strokeLinejoin="round" style={{width: "16px", height: "16px", color: "hsla(0,0%,56%,1)"}} viewBox="0 0 16 16" width="16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path>
                </svg>
            </span>
            <span data-subtitle="true">{describe}</span>
            { describeOne !== undefined && <span data-subtitle="true">{describeOne}</span>}
            { describeTwo !== undefined && <span data-subtitle="true">{describeTwo}</span>}
            { describeThree !== undefined && <span data-subtitle="true">{describeThree}</span>}
            { describeFour !== undefined && <span data-subtitle="true">{describeFour}</span>}
            { describeFive !== undefined && <span data-subtitle="true">{describeFive}</span>}
        </div>
    </div>
  )
}

export default StackCard;