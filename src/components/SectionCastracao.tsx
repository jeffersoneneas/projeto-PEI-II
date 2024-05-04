import Image from "next/image";
import { Container } from "./Container";
import telefone from "@/assets/telefone.png";
import email from "@/assets/email.png";

export function SectionCastracao() {
  return (
    <section className="bg-img_bg_castracao  w-full h-[910px]  bg-no-repeat bg-center bg-cover">
      <h1 className="text-center text-4xl text-white font-bold mt-0 pt-3">
        PROGRAMA VITÓRIA DA CASTRAÇÃO ANIMAL
      </h1>
      <Container>
        <div className="bg-white w-full rounded-2xl opacity-90 text-gray-600 font-bold">
          <div className="font-bold m-5">
            <h1 className="text-2xl text-black">
              A primeira política pública permanente de controle populacional de
              cães e gatos do Espírito Santo
            </h1>
            <p className="my-1">
              O Programa Vitória da Castração Animal foi instituído pela
              Prefeitura de Vitória pelo{" "}
              <span className="bg-black text-white">
                Decreto Municipal nº 19.816/2021
              </span>{" "}
              e consiste em política pública permanente para controle
              populacional de cães e gatos, com diversas ações integradas.
            </p>
            <p className="my-1">
              Os serviços oferecidos pelo Programa englobam microchipagem,
              esterilização cirúrgica de cães e gatos, com realização de exames
              laboratoriais pré-operatórios, fornecimento de medicamentos e
              materiais utilizados durante os procedimentos cirúrgicos e
              pré-cirúrgicos, assim como a medicação pós-cirúrgica a ser
              entregue aos tutores.
            </p>
            <p className="my-1">
              Além dos serviços citados acima, o programa prevê o cadastro de
              tutores e registro dos animais para a futura construção do censo
              populacional de cães e gatos.
            </p>
            <p className="my-1">
              O programa também tem como diferencial o fluxo contínuo na
              prestação do serviço, se diferenciando dos antigos mutirões.
            </p>
            <p className="my-1">
              Com foco no reconhecimento da atuação dos protetores de animais no
              combate ao abandono e maus-tratos, estes formam um dos grupos
              prioritários. No entanto, todos os munícipes podem se cadastrar e
              terão acesso aos serviços conforme avanço das fases do Programa.
            </p>
            <h2 className="text-2xl text-black">
              Serviço prestado por empresas credenciadas
            </h2>
            <p className="my-1">
              A primeira fase do Programa é a do credenciamento de clínicas
              veterinárias interessadas na prestação dos serviços, conforme
              especificado no{" "}
              <span className="bg-black text-white">
                Edital de Credenciamento
              </span>
              .
            </p>
            <p className="my-1">
              A quantidade de serviços a ser realizada, por empresa credenciada,
              será definida de acordo com a demanda e o número de credenciados,
              observada a capacidade instalada de cada prestador de serviço.
            </p>
            <p className="my-1">
              As castrações, exames clínicos e laboratoriais e demais
              procedimentos ocorrerão nas dependências das empresas
              credenciados, devendo estas disporem de local adequado para a
              prestação dos serviços em Vitória ou nos municípios vizinhos: Vila
              Velha, Serra e Cariacica.
            </p>
            <p className="my-1">
              Para a execução do programa, as empresas contratadas ou
              conveniadas deverão atender às especificações contidas nas
              resoluções do Conselho Federal de Medicina Veterinária (CFMV)
              quanto aos equipamentos e materiais necessários.
            </p>
            <p className="my-1">
              Somente no primeiro ano do programa, está prevista a realização de
              três mil procedimentos de castração.
            </p>
            <div className="bg-gray-200 w-auto text-black mb-3 rounded-lg">
              <div className="flex justify-between bg-gray-300 p-2">
                <h1>BRAGANÇA SERVIÇOS VETERINÁRIOS LTDA</h1>

                <div className="flex">
                  <Image src={email} alt="" className="w-6 mr-2" />
                  bragancaveterinaria@gmail.com
                </div>

                <div className="flex">
                  <Image src={telefone} alt="" className="w-5 mr-2" />
                  (27)99746-1655
                </div>
              </div>

              <div className="p-2">
                <h1>Endereço:</h1>
                <p>
                  Av Coronel José Martins De Figueiredo, 92 - Maruípe. Vitoria -
                  ES. CEP:29043060.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 w-auto text-black rounded-lg">
              <div className="flex justify-between bg-gray-300 p-2">
                <h1>Clínica Veterinária Animales</h1>

                <div className="flex">
                  <Image src={email} alt="" className="w-6 mr-2" />
                  animalesvetadm@gmail.com
                </div>

                <div className="flex">
                  <Image src={telefone} alt="" className="w-5 mr-2" />
                  (27)98852-3224
                </div>
              </div>

              <div className="p-2">
                <h1>Endereço:</h1>
                <p>
                  Rua Major Nodge Ulisses De Oliveira, 667 - Itapuã. Vila Velha
                  - ES. CEP:29101770.
                </p>
              </div>
            </div>
            <small>
              <a
                target="_blank"
                href="https://bemestaranimal.vitoria.es.gov.br/castracao/como-funciona/"
              >
                <span className="text-lg">Disponivel em:</span>
                <span className="text-blue-600 ml-2">
                  https://bemestaranimal.vitoria.es.gov.br/castracao/como-funciona/
                </span>
              </a>
            </small>
          </div>
        </div>
      </Container>
    </section>
  );
}
