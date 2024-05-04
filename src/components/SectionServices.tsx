import Image from "next/image";
import { Container } from "./Container";

import dog1 from "@/assets/dog1.jpg";
import dog2 from "@/assets/dog2.jpg";
import dog3 from "@/assets/dog3.jpg";
import dog4 from "@/assets/dog4.jpg";

export function SectionServices() {
  return (
    <section className="w-full h-[904px] flex bg- bg-no-repeat bg-center bg-cover bg-img_bg_adocao">
      <h1 className="absolute text-white text-5xl font-bold  left-[12%] mt-20">
        Encontre um companheiro para a vida: adote e faça a diferença.
      </h1>
      <Container>
        <div className=" text-center border border-black bg-gray-200 max-w-sm my-5 mx-3 rounded-xl">
          <div className="">
            <Image
              src={dog1}
              alt="cachorro caramelo"
              className="rounded-t-xl mb-3"
            />
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Robertinho</h1>
            <p>
              Robertinho, o cachorro alegre, busca um lar acolhedor e amoroso
              para compartilhar sua energia e vitalidade.
            </p>
          </div>
          <div>
            <button className="bg-gray-300 shadow-xl border border-black py-3 px-3 rounded-xl text-2xl font-bold my-5">
              Adotar
            </button>
          </div>
        </div>
        <div className=" text-center border border-black bg-gray-200 max-w-sm my-5 rounded-xl mx-3">
          <div className="">
            <Image
              src={dog2}
              alt="cachorro caramelo"
              className="rounded-t-xl mb-3"
            />
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Caramelo</h1>
            <p>
              Caramelo é uma cachorrinha filhote muito carinhosa e brincalhona.
              Ela procura um lar amoroso e responsável.
            </p>
          </div>
          <div>
            <button className="bg-gray-300 shadow-xl border border-black py-3 px-3 rounded-xl text-2xl font-bold my-5">
              Adotar
            </button>
          </div>
        </div>
        <div className=" text-center border border-black bg-gray-200 max-w-sm my-5 rounded-xl mx-3">
          <div className="">
            <Image
              src={dog3}
              alt="cachorro caramelo"
              className="rounded-t-xl mb-3"
            />
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Zeus</h1>
            <p>
              Zeus é um cãozinho jovem, cheio de afeto e energia. Ele anseia por
              um lar cheio de amor e comprometimento.
            </p>
          </div>
          <div>
            <button className="bg-gray-300 shadow-xl border border-black py-3 px-3 rounded-xl text-2xl font-bold my-5">
              Adotar
            </button>
          </div>
        </div>
        <div className=" text-center border border-black bg-gray-200 max-w-sm my-5 rounded-xl mx-3">
          <div className="">
            <Image
              src={dog4}
              alt="cachorro caramelo"
              className="rounded-t-xl mb-3"
            />
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Bolt</h1>
            <p>
              Bolt, o cachorrinho vibrante, busca um lar cheio de amor e
              dedicação para compartilhar sua energia contagiante.
            </p>
          </div>
          <div>
            <button className="bg-gray-300 shadow-xl border border-black py-3 px-3 rounded-xl text-2xl font-bold my-5">
              Adotar
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
