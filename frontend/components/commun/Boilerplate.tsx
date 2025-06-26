import setPropety from "@/app/util/useFunc";
import Image from "next/image";
import { useEffect } from "react";


const Boilerplate = () => {

    useEffect(() => {
        const htmlDivOne: Element | null = document.querySelector("div.stack_stack__iZkUS.One");
        const htmlDivTwo: Element | null = document.querySelector("div.stack_stack__iZkUS.Two");
        const htmlDivThree: Element | null = document.querySelector("div.stack_stack__iZkUS.Three");
        const propetyOne = {
            "--stack-flex": "initial",
            "--stack-direction": "row", 
            "--stack-align": "center", 
            "--stack-justify": "center", 
            "--stack-padding": "0px", 
            "--stack-gap": "0px"
        };
        const propetyTwo = {
            "--stack-flex": "initial", 
            "--stack-direction": "column", 
            "--stack-align": "stretch", 
            "--stack-justify": "flex-start", 
            "--stack-padding": "0px", 
            "--stack-gap": "0px",
        }

        const propetyThree = {
            "--stack-flex": "initial", 
            "--stack-direction": "column", 
            "--stack-align": "stretch", 
            "--stack-justify": "flex-start", 
            "--stack-padding": "0px", 
            "--stack-gap": "8px",
        }
        
        setPropety(htmlDivOne as HTMLElement, propetyOne);
        setPropety(htmlDivTwo as HTMLElement, propetyTwo);
        setPropety(htmlDivThree as HTMLElement, propetyThree);

    })

  return (
    <div className="stack_stack__iZkUS stack vercel_templates__DLxOb One" data-version="v1" aria-label="Three illustrative template cards are displayed at a rotated angle, offset on top on each other: Next.js Commerce, Image Gallery Starter, and Next.js Boilerplate.">
        <div className="stack_stack__iZkUS stack templates_templateCard__ogq_Q Two" data-version="v1" >
            <Image alt="An all-in-one starter kit for high-performance ecommerce sites." loading="lazy" width="1200" height="960" decoding="async" data-nimg="1" className="templates_image__OUeIH" style={{color: "transparent"}} src="/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1733160175%2Fcommerce.png&amp;w=3840&amp;q=75" />
            <div className="stack_stack__iZkUS stack templates_description__PAAfR Three" data-version="v1">
            <p>Next.js Commerce</p><p>An all-in-one starter kit for high-performance ecommerce sites.</p>
            </div>
        </div>
    </div>
  )
}

export default Boilerplate;