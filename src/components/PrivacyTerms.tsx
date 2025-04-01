
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PrivacyTerms = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <Button 
          variant="ghost" 
          className="mb-8 flex items-center text-primary hover:bg-accent/50"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
        
        <h1 className="text-3xl font-bold text-primary mb-8">Política de Privacidade e Termos de Uso</h1>
        
        <div className="space-y-8 text-secondary/80">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">1. Introdução</h2>
            <p className="mb-4">
              Bem-vindo à nossa Política de Privacidade. Este documento explica como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nossa página web e serviços relacionados.
            </p>
            <p>
              Ao utilizar nossos serviços, você concorda com a coleta e uso de informações de acordo com esta política. Seus dados pessoais serão utilizados apenas para os fins descritos neste documento e não serão compartilhados com terceiros sem seu consentimento explícito, exceto conforme descrito nesta política.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">2. Coleta de Dados</h2>
            <p className="mb-4">
              Podemos coletar informações pessoais que você nos fornece diretamente, como:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Informações de contato (nome, e-mail, telefone, etc.)</li>
              <li>Informações de mensagens enviadas através de formulários ou WhatsApp</li>
              <li>Informações sobre seu dispositivo e navegador ao visitar nosso site</li>
            </ul>
            <p>
              Também podemos coletar automaticamente certas informações quando você visita nosso site, incluindo seu endereço IP, tipo de navegador, páginas visitadas e tempo gasto em cada página.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">3. Uso de Dados</h2>
            <p className="mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Processar e responder às suas solicitações e comunicações</li>
              <li>Enviar informações sobre nossos serviços, atualizações ou promoções (com seu consentimento)</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Proteger a segurança e integridade de nossos serviços</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">4. Proteção de Dados</h2>
            <p className="mb-4">
              Implementamos medidas de segurança apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
            </p>
            <p>
              Mantemos seus dados apenas pelo tempo necessário para os fins para os quais foram coletados, a menos que um período de retenção mais longo seja exigido por lei.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">5. Seus Direitos</h2>
            <p className="mb-4">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Direito de acesso aos seus dados pessoais</li>
              <li>Direito de correção de dados incompletos, inexatos ou desatualizados</li>
              <li>Direito de eliminação dos dados tratados com seu consentimento</li>
              <li>Direito de portabilidade dos dados</li>
              <li>Direito de informação sobre uso compartilhado de dados</li>
              <li>Direito de revogação do consentimento</li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato conosco através dos canais indicados na seção "Contato".
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">6. Cookies e Tecnologias Semelhantes</h2>
            <p className="mb-4">
              Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, entender como você interage com nosso conteúdo e oferecer funcionalidades personalizadas.
            </p>
            <p>
              Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">7. Alterações na Política de Privacidade</h2>
            <p>
              Podemos atualizar nossa Política de Privacidade de tempos em tempos. Recomendamos que você revise esta página periodicamente para se manter informado sobre quaisquer mudanças. As alterações entram em vigor imediatamente após serem publicadas nesta página.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">8. Contato</h2>
            <p>
              Se você tiver dúvidas ou preocupações sobre nossa Política de Privacidade ou práticas de dados, entre em contato através do WhatsApp (51) 98550-3161.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">9. Direitos Reservados</h2>
            <p>
              © 2024 - Todos os direitos reservados. Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é de propriedade exclusiva e está protegido por leis de direitos autorais nacionais e internacionais. A reprodução não autorizada do conteúdo constitui violação das leis de propriedade intelectual.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyTerms;
