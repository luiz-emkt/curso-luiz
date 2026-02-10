window.TRILHA_MODULES = [
  {
    id: "m1",
    title: "Módulo 1: Diagnóstico que vira decisão",
    desc: "Formular problema, hipótese e critério de sucesso. Menos opinião, mais decisão.",
    lessons: [
      {
        id: "m1l1",
        title: "Problem statement",
        sections: [
          {
            title: "Por que isso existe",
            text:
              "Porque “a LP tá ruim” e “o lead tá fraco” não vira decisão. Vira debate infinito. Um bom problem statement te dá uma frase que você sustenta sem apelar pra opinião."
          },
          {
            title: "O que você leva pro cliente/time",
            bullets: [
              "Quem está tentando fazer o quê",
              "Onde trava e como você sabe",
              "Qual o impacto em conversão, tempo, retrabalho ou receita"
            ]
          },
          {
            title: "Como aplicar no seu mundo",
            text:
              "Quando alguém te traz uma demanda, você não começa pela solução. Você começa por uma frase verificável."
          },
          {
            title: "Molde",
            quote:
              "Público X tenta fazer Y na etapa Z, mas falha por causa de W, o que gera impacto V. Evidência em: fonte."
          },
          {
            title: "Mini exemplo",
            text:
              "Leads da campanha tentam agendar pelo WhatsApp, mas travam porque não entendem o próximo passo e não recebem confirmação imediata. Isso aumenta o tempo de resposta e derruba agendamentos. Evidência: prints de conversas + queda de avanço no funil."
          },
          {
            title: "Feito quando",
            bullets: [
              "1 problem statement de 3 a 5 linhas",
              "1 evidência concreta",
              "1 métrica que você vai mexer"
            ]
          }
        ],
        links: [
          { label: "NN/g • Problem Statements", url: "https://www.nngroup.com/articles/problem-statements/" },
          { label: "CareerFoundry • Problem Statement", url: "https://careerfoundry.com/en/blog/ux-design/problem-statement-ux/" }
        ]
      },
      {
        id: "m1l2",
        title: "Priorização",
        sections: [
          {
            title: "Por que isso existe",
            text:
              "Você sempre vai ter 20 coisas “importantes” e só tempo pra 3. Priorizar bem é o que te tira do papel de resolvedor rápido e te coloca como dono do sistema."
          },
          {
            title: "Régua simples",
            bullets: [
              "Impacto (1–3): mexe em conversão, tempo, custo, retrabalho ou receita?",
              "Esforço (1–3): horas, dias ou semanas?",
              "Risco (1–3): chance de quebrar processo ou gerar efeito colateral?"
            ]
          },
          {
            title: "Como aplicar na prática",
            text:
              "Pegue o backlog real do cliente e ranqueie em 10 minutos. O objetivo é sair com um top 3 defendível, não acertar “matematicamente”."
          },
          {
            title: "Mini exemplo",
            text:
              "Mensagem de confirmação no WhatsApp após formulário: impacto alto, esforço baixo, risco baixo. Refazer a LP inteira: impacto potencial alto, esforço alto. Reestruturar CRM inteiro: impacto alto, esforço alto, risco alto."
          },
          {
            title: "Feito quando",
            bullets: [
              "Top 3 definido com justificativa curta",
              "Você consegue dizer por que o item 4 ficou pra depois sem enrolar"
            ]
          }
        ],
        links: [
          { label: "Buscar: priorização impacto esforço risco", url: "https://www.google.com/search?q=prioriza%C3%A7%C3%A3o+impacto+esfor%C3%A7o+risco+ux" }
        ]
      },
      {
        id: "m1l3",
        title: "Ficha de Problema",
        sections: [
          {
            title: "O que é",
            text:
              "Seu documento mestre. Um ticket premium que guia conversa, execução e prova. Não é relatório e não é burocracia."
          },
          {
            title: "Por que isso muda seu nível",
            text:
              "Porque você cria padrão repetível: diagnóstico, decisão, intervenção, prova. Menos retrabalho, mais autoridade."
          },
          {
            title: "Estrutura enxuta",
            bullets: [
              "Contexto",
              "Problem statement",
              "Evidências",
              "Hipótese",
              "Intervenção",
              "Métrica de sucesso",
              "Janela de avaliação",
              "Riscos e dependências",
              "Próximo passo"
            ]
          },
          {
            title: "Mini exemplo",
            text:
              "Hipótese: se reduzirmos atrito do formulário e colocarmos confirmação imediata no WhatsApp, a taxa de contato sobe e o tempo de 1ª resposta cai. Intervenção: ajuste no formulário, mensagem, automação simples e regra de SLA."
          },
          {
            title: "Feito quando",
            bullets: [
              "1 ficha preenchida para cliente real",
              "A ficha virou execução, não só documento",
              "Você sabe qual métrica vai provar o resultado"
            ]
          }
        ],
        links: []
      }
    ]
  },

  /* Módulos 2+ mantidos como estavam (note + links). Depois a gente escreve conteúdo interno igual ao M1. */
  {
    id: "m2",
    title: "Módulo 2: Jornada real + backstage (blueprint)",
    desc: "Mapear o que acontece de verdade. Handoffs, filas, exceções e responsabilidades.",
    lessons: [
      {
        id: "m2l1",
        title: "Service Blueprint",
        note: "Blueprint leve: frontstage + backstage + evidências + responsáveis.",
        links: [
          { label: "Miro • Service Blueprint", url: "https://miro.com/pt/modelos/service-blueprint/" },
          { label: "Blip • Service Blueprint", url: "https://www.blip.ai/blog/design/service-blueprint-como-ferramenta-para-potencializar-jornadas-de-servico/" }
        ]
      },
      {
        id: "m2l2",
        title: "Mapa da jornada",
        note: "Etapas, objetivos, dúvidas, fricções e momentos críticos.",
        links: [
          { label: "MJV • Jornada do usuário", url: "https://www.mjvinnovation.com/pt-br/blog/como-montar-o-mapa-da-jornada-do-usuario/" }
        ]
      },
      {
        id: "m2l3",
        title: "Entregável: blueprint captação → onboarding",
        note: "Inclua exceções: sem resposta, sem fit, duplicado, falha, urgência etc.",
        links: []
      }
    ]
  },
  {
    id: "m3",
    title: "Módulo 3: Métrica aplicada e instrumentação mínima",
    desc: "Escolher 2–4 métricas por etapa e provar impacto sem dashboard inútil.",
    lessons: [
      {
        id: "m3l1",
        title: "HEART Framework",
        note: "Traduza para seu mundo: tempo, erro, avanço, ativação, satisfação.",
        links: [
          { label: "HEART Framework", url: "https://www.heartframework.com/" },
          { label: "UXDesign BR • HEART", url: "https://brasil.uxdesign.cc/como-utilizar-o-framework-heart-para-melhorar-suas-m%C3%A9tricas-1bcee0d080ec" }
        ]
      },
      {
        id: "m3l2",
        title: "AARRR",
        note: "Aquisição, ativação e retenção vistas pelo lado operacional.",
        links: [
          { label: "G4 • Funil Pirata (AARRR)", url: "https://g4educacao.com/blog/funil-pirata-growth" }
        ]
      },
      {
        id: "m3l3",
        title: "Entregável: Placar do Funil",
        note: "Métrica, fórmula, fonte, frequência, dono e interpretação.",
        links: []
      }
    ]
  },
  {
    id: "m4",
    title: "Módulo 4: UI utilitária + heurísticas (auditoria)",
    desc: "Clareza, consistência e prevenção de erro. Heurísticas como justificativa.",
    lessons: [
      {
        id: "m4l1",
        title: "Heurísticas de Nielsen",
        note: "Checklist para achar fricção e priorizar correções.",
        links: [
          { label: "UDS • Heurísticas de Nielsen", url: "https://uds.com.br/blog/heuristicas-nielsen-guia-para-melhorar-usabilidade-interfaces/" },
          { label: "Alura • Heurísticas de Nielsen", url: "https://www.alura.com.br/artigos/10-heuristicas-de-nielsen-uma-formula-pra-evitar-erros-basicos-de-usabilidade" }
        ]
      },
      {
        id: "m4l2",
        title: "Hierarquia e tipografia",
        note: "Páginas mais claras e mais ‘caras’ com menos elementos.",
        links: [
          { label: "Medium • Hierarquia de fontes", url: "https://henriquefilho.medium.com/hierarquia-de-fontes-um-guia-b%C3%A1sico-para-criar-uma-interface-antes-de-abrir-o-figma-2c017c7df879" },
          { label: "UXDesign BR • Escala tipográfica", url: "https://brasil.uxdesign.cc/escala-tipogr%C3%A1fica-na-pr%C3%A1tica-1eb81cdee96f" }
        ]
      },
      {
        id: "m4l3",
        title: "Acessibilidade aplicada",
        note: "Contraste, foco, tamanho e navegação. O básico que eleva qualidade.",
        links: [
          { label: "W3C • WCAG 2.2 PT-BR", url: "https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" }
        ]
      }
    ]
  },
  {
    id: "m5",
    title: "Módulo 5: Pesquisa leve + teste de usabilidade",
    desc: "Evidência rápida para decidir. 5 pessoas, roteiro curto, síntese em 1 página.",
    lessons: [
      {
        id: "m5l1",
        title: "Roteiro de teste qualitativo",
        note: "Conduzir sem enviesar e sem virar entrevista infinita.",
        links: [
          { label: "Ladies That UX BR • Roteiro", url: "https://medium.com/ladies-that-ux-br/um-roteiro-para-testes-de-usabilidade-qualitativos-611d41c93434" }
        ]
      },
      {
        id: "m5l2",
        title: "Checklist de teste",
        note: "Um passo a passo operacional para rodar teste.",
        links: [
          { label: "Hotjar • Usabilidade (PT-BR)", url: "https://www.hotjar.com/pt-BR/teste-de-usabilidade/checklist-exemplos-de-testes/" }
        ]
      },
      {
        id: "m5l3",
        title: "Entregável: síntese 1 página",
        note: "Padrões → decisão → risco. Sem relatório longo.",
        links: []
      }
    ]
  },
  {
    id: "m6",
    title: "Módulo 6: Onboarding e ativação (primeiros 7 dias)",
    desc: "Marcos, mensagens, gatilhos e sinais de risco para reduzir suporte e aumentar ativação.",
    lessons: [
      {
        id: "m6l1",
        title: "Onboarding",
        note: "Como organizar primeiros passos e expectativa do cliente.",
        links: [
          { label: "RD Station • Onboarding de clientes", url: "https://www.rdstation.com/blog/marketing/onboarding-de-clientes/" }
        ]
      },
      {
        id: "m6l2",
        title: "Boas práticas de onboarding",
        note: "Pegue só o que for aplicável ao seu contexto.",
        links: [
          { label: "UserGuiding • Onboarding", url: "https://userguiding.com/pt-br/blog/melhores-praticas-de-user-onboarding" }
        ]
      },
      {
        id: "m6l3",
        title: "Entregável: onboarding 7 dias",
        note: "Marcos + mensagens + métricas, com feito bem claro.",
        links: []
      }
    ]
  },
  {
    id: "m7",
    title: "Bônus: Figma essencial",
    desc: "Prototipar e alinhar rápido. Componentes, estilos, auto layout e protótipo simples.",
    lessons: [
      {
        id: "m7l1",
        title: "Auto Layout",
        note: "O que mais destrava consistência e velocidade.",
        links: [
          { label: "Figma Help • Auto Layout", url: "https://help.figma.com/hc/pt-br/articles/360040451373-Guia-do-layout-autom%C3%A1tico" }
        ]
      },
      {
        id: "m7l2",
        title: "Componentes e estilos",
        note: "Pra parar de copiar e colar e começar a padronizar.",
        links: [
          { label: "Buscar: figma componentes estilos guia", url: "https://www.google.com/search?q=figma+componentes+estilos+guia" }
        ]
      }
    ]
  }
];
