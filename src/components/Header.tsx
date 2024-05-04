import Image from "next/image";

import { ItemMenu } from "./itemMenu";

import logo from "@/assets/logo.png";
import IconUser from "@/assets/icon-user.svg";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="relative flex items-center w-full h-32 bg-primary-orange">
      <Container>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex items-center gap-14">
            <Image src={logo} alt="logo" className="w-80" />
            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name="Adoção" />
              </li>
              <li>
                <ItemMenu name="Castração" />
              </li>
              <li>
                <ItemMenu name="Vacinação" />
              </li>
              <li>
                <ItemMenu name="Sobre" />
              </li>
              <li className="bg-transparent border border-red-500 hover:border-red-700 rounded-xl font-bold p-2 text-red-500 hover:text-red-700 transition cursor-pointer">
                Denuncie
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </Container>
    </header>
  );
}
