import { Container } from "./Container";
import Image from "next/image";
import seringa from "@/assets/syringe.svg";
import adocao from "@/assets/adocao.png";
import castracao from "@/assets/castracao.png";

export function SectionHero() {
  return (
    <section className="flex h-[783px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
      <div className=" max-w-[800px] mx-36">
        <h1 className="text-white text-8xl font-bold my-4">
          Bem-vindo ao nosso site de pets
        </h1>
        <p className="text-white text-2xl max-w-[408px] bg-transparent rounded-xl p-2">
          Aqui você encontrará todas as informações importantes para cuidar do
          seu animal de estimação, desde o calendário de vacinação até os locais
          de castração e adoção. Também é possível denunciar casos de
          maus-tratos.
        </p>
        <div className="flex-1 gap-4 text-white text-xl">
          <div>
            <h1 className="text-white text-6xl font-bold my-4">
              Nosso serviços:
            </h1>
            <button className="bg-white opacity-70 text-black font-bold hover:opacity-100 hover:text-gray-800 transition rounded-lg px-7 py-5 mr-2">
              <div className="flex text-1xl">
                <Image src={seringa} alt="" className="w-7 mr-2" />
                Vacinação
              </div>
            </button>
            <button className="bg-white opacity-70 text-black font-bold hover:border-gray-800 hover:opacity-100 hover:text-gray-800 transition rounded-lg px-7 py-5 mr-2">
              <div className="flex text-1xl">
                <Image src={adocao} alt="" className="w-7 mr-2" />
                Adoção
              </div>
            </button>
            <button className="bg-white opacity-70 text-black font-bold hover:border-gray-800 hover:opacity-100 hover:text-gray-800 transition rounded-lg px-7 py-5 mr-2">
              <div className="flex text-1xl">
                <Image src={castracao} alt="" className="w-7 mr-2" />
                Castração
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
