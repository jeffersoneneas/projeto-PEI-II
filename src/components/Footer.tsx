import Image from "next/image";

import { ItemMenu } from "./itemMenu";

import logo from "@/assets/logo.png";
import twitter from "@/assets/twitter.png";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import telefone from "@/assets/telefone.png";
import { Container } from "./Container";

export function Footer() {
  return (
    <header className="relative items-center w-full h-32 bg-primary-orange">
      <Container>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-14">
            <Image src={logo} alt="logo" className="w-80" />
            <ul className="flex items-center gap-12">
              <li className="flex">
                <Image src={instagram} alt="" className="w-6 mr-2" />
                <ItemMenu name="Instagram" />
              </li>
              <li className="flex">
                <Image src={facebook} alt="" className="w-6 mr-2" />
                <ItemMenu name="Facebook" />
              </li>
              <li className="flex">
                <Image src={twitter} alt="" className="w-6 mr-2" />
                <ItemMenu name="Twitter" />
              </li>
              <li className="flex">
                <Image src={telefone} alt="" className="w-6 mr-2" />
                <ItemMenu name="Fale Conosco" />
              </li>
            </ul>
          </div>
          <div className="ml-5 ">
            <div className="text-center font-bold">Feito por:</div>
            <div className="text-center">Gustavo Steiner</div>
            <div className="text-center">Luiz Wellington</div>
            <div className="text-center">Jefferson Eneas da Silva</div>
            <div className="text-center">Carlos Henrrique</div>
          </div>
        </div>
      </Container>
    </header>
  );
}
