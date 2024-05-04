import { Container } from "./Container";

import ImgTEL from "@/assets/call-outline.svg";

import Image from "next/image";

export function SectionDenuncie() {
  return (
    <section className="w-full h-[804px] bg-img_bg_denuncie bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 max-w-[500px] items-center justify-center mt-28">
          <h1 className="text-white text-7xl font-bold my-4">
            Denuncie maus tratos
          </h1>
          <p className="text-white text-xl max-w-[408px] mb-8">
            É vedado a qualquer pessoa infligir sofrimento desnecessário a um
            animal, seja por ação ou omissão, incluindo negligência, abuso
            físico, emocional ou privação de cuidados essenciais à sua saúde e
            bem-estar.
          </p>
          <div className="flex gap-4 mb-24 text-white ">
            <button className="bg-transparent  border font-bold text-3xl border-white hover:border-gray-500 hover:text-gray-500 transition rounded-lg px-10 py-5">
              <h1 className="text-5xl">Denuncie</h1>
              <p className="flex items-center justify-center relative mr-5">
                <i>
                  <Image src={ImgTEL} alt="telefone" className="h-8 w-10" />
                </i>
                Ligue 156
              </p>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
