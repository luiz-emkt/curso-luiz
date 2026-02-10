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
          { title: "Por que isso existe", text: "Porque “a LP tá ruim” e “o lead tá fraco” não vira decisão. Vira debate infinito. Um bom problem statement te dá uma frase que você sustenta sem apelar pra opinião." },
          { title: "O que você leva pro cliente/time", bullets: ["Quem está tentando fazer o quê", "Onde trava e como você sabe", "Qual o impacto em conversão, tempo, retrabalho ou receita"] },
          { title: "Como aplicar no seu mundo", text: "Quando alguém te traz uma demanda, você não começa pela solução. Você começa por uma frase verificável." },
          { title: "Molde", quote: "Público X tenta fazer Y na etapa Z, mas falha por causa de W, o que gera impacto V. Evidência em: fonte." },
          { title: "Mini exemplo", text: "Leads da campanha tentam agendar pelo WhatsApp, mas travam porque não entendem o próximo passo e não recebem confirmação imediata. Isso aumenta o tempo de resposta e derruba agendamentos. Evidência: prints de conversas + queda de avanço no funil." },
          { title: "Feito quando", bullets: ["1 problem statement de 3 a 5 linhas", "1 evidência concreta", "1 métrica que você vai mexer"] }
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
          { title: "Por que isso existe", text: "Você sempre vai ter 20 coisas “importantes” e só tempo pra 3. Priorizar bem é o que te tira do papel de resolvedor rápido e te coloca como dono do sistema." },
          { title: "Régua simples", bullets: ["Impacto (1–3): mexe em conversão, tempo, custo, retrabalho ou receita?", "Esforço (1–3): horas, dias ou semanas?", "Risco (1–3): chance de quebrar processo ou gerar efeito colateral?"] },
          { title: "Como aplicar na prática", text: "Pegue o backlog real do cliente e ranqueie em 10 minutos. O objetivo é sair com um top 3 defendível, não acertar “matematicamente”." },
          { title: "Mini exemplo", text: "Mensagem de confirmação no WhatsApp após formulário: impacto alto, esforço baixo, risco baixo. Refazer a LP inteira: impacto potencial alto, esforço alto. Reestruturar CRM inteiro: impacto alto, esforço alto, risco alto." },
          { title: "Feito quando", bullets: ["Top 3 definido com justificativa curta", "Você consegue dizer por que o item 4 ficou pra depois sem enrolar"] }
        ],
        links: [
          { label: "Buscar: priorização impacto esforço risco", url: "https://www.google.com/search?q=prioriza%C3%A7%C3%A3o+impacto+esfor%C3%A7o+risco+ux" }
        ]
      },
      {
        id: "m1l3",
        title: "Ficha de Problema",
        sections: [
          { title: "O que é", text: "Seu documento mestre. Um ticket premium que guia conversa, execução e prova. Não é relatório e não é burocracia." },
          { title: "Por que isso muda seu nível", text: "Porque você cria padrão repetível: diagnóstico, decisão, intervenção, prova. Menos retrabalho, mais autoridade." },
          { title: "Estrutura enxuta", bullets: ["Contexto", "Problem statement", "Evidências", "Hipótese", "Intervenção", "Métrica de sucesso", "Janela de avaliação", "Riscos e dependências", "Próximo passo"] },
          { title: "Mini exemplo", text: "Hipótese: se reduzirmos atrito do formulário e colocarmos confirmação imediata no WhatsApp, a taxa de contato sobe e o tempo de 1ª resposta cai. Intervenção: ajuste no formulário, mensagem, automação simples e regra de SLA." },
          { title: "Feito quando", bullets: ["1 ficha preenchida para cliente real", "A ficha virou execução, não só documento", "Você sabe qual métrica vai provar o resultado"] }
        ],
        links: []
      }
    ]
  },

  {
    id: "m2",
    title: "Módulo 2: Jornada real + backstage",
    desc: "Mapear o que acontece de verdade. Handoffs, filas, exceções e responsabilidades.",
    lessons: [
      {
        id: "m2l1",
        title: "Service Blueprint",
        sections: [
          { title: "Por que isso existe", text: "Porque a fricção quase nunca está só na tela. Está no que acontece entre áreas, filas, regras e exceções. Blueprint te dá uma visão operável do serviço." },
          { title: "O que você precisa capturar", bullets: ["Frontstage: o que o cliente vê e faz", "Backstage: o que o time faz pra isso acontecer", "Evidências: mensagens, e-mails, telas, confirmações", "Responsáveis: quem assume cada passo", "Exceções: sem resposta, duplicado, sem fit, urgência, falha"] },
          { title: "Como fazer rápido", bullets: ["Escolha uma jornada (captação → onboarding)", "Liste 6–10 passos reais", "Marque onde entra fila/handoff", "Anote 3 exceções que mais doem", "Saia com 3 mudanças pequenas que destravam o fluxo"] },
          { title: "Feito quando", bullets: ["Você tem um blueprint com 6–10 passos", "Tem pelo menos 3 exceções mapeadas", "Tem um top 3 de ajustes com impacto esperado"] }
        ],
        links: [
          { label: "Miro • Service Blueprint", url: "https://miro.com/pt/modelos/service-blueprint/" },
          { label: "Blip • Service Blueprint", url: "https://www.blip.ai/blog/design/service-blueprint-como-ferramenta-para-potencializar-jornadas-de-servico/" }
        ]
      },
      {
        id: "m2l2",
        title: "Mapa da jornada",
        sections: [
          { title: "Por que isso existe", text: "Pra você parar de discutir “tática” e começar a discutir a sequência real de decisão do cliente. Jornada te mostra onde a pessoa perde confiança e abandona." },
          { title: "Como montar sem romantizar", bullets: ["Etapas (o que acontece)", "Objetivo do cliente em cada etapa", "Dúvidas e medos mais comuns", "Fricções e pontos de abandono", "O que o time faz hoje (de verdade)"] },
          { title: "Mini exemplo", text: "Na etapa de atendimento, a dúvida não é só preço. É “vale a pena falar com você agora?” Se a mensagem inicial não dá direção, você perde o lead antes de vender." },
          { title: "Feito quando", bullets: ["Você tem 5–7 etapas", "Tem 3 fricções principais com evidência", "Consegue ligar fricção a uma métrica"] }
        ],
        links: [
          { label: "MJV • Jornada do usuário", url: "https://www.mjvinnovation.com/pt-br/blog/como-montar-o-mapa-da-jornada-do-usuario/" }
        ]
      },
      {
        id: "m2l3",
        title: "Entregável: blueprint captação → onboarding",
        sections: [
          { title: "O que entregar", text: "Um mapa simples que o cliente entende e que vira execução. Não precisa ser bonito. Precisa bater com a realidade." },
          { title: "Checklist do entregável", bullets: ["6–10 passos do fluxo real", "Quem é dono de cada passo", "Quais mensagens/telas confirmam o andamento", "3 exceções críticas e como tratar", "Top 3 mudanças (rápidas) + top 1 mudança estrutural (se existir)"] },
          { title: "Feito quando", bullets: ["O cliente consegue apontar “é isso mesmo”", "O time consegue virar tickets a partir dele", "Você sabe onde medir o antes/depois"] }
        ],
        links: []
      }
    ]
  },

  {
    id: "m3",
    title: "Módulo 3: Métrica e instrumentação",
    desc: "Escolher 2–4 métricas por etapa e provar impacto sem dashboard inútil.",
    lessons: [
      {
        id: "m3l1",
        title: "HEART",
        sections: [
          { title: "Por que isso existe", text: "Pra você medir experiência com cara de negócio. HEART te ajuda a não cair no erro de medir só cliques ou só satisfação." },
          { title: "Tradução pro seu funil", bullets: ["Happiness: percepção, reclamações, NPS (se tiver)", "Engagement: uso real do fluxo, respostas, avanços", "Adoption: entrada em etapas-chave (agendamento, matrícula, proposta)", "Retention: volta, follow-up, reativação", "Task success: tempo, erro, abandono, conclusão"] },
          { title: "Como aplicar", text: "Escolha 2–4 métricas que você consegue coletar sem dor e que mudam decisão (ex.: tempo de 1ª resposta, taxa de contato, taxa de avanço, conversão de LP)." },
          { title: "Feito quando", bullets: ["Você definiu 2–4 métricas por etapa", "Você sabe onde capturar cada uma", "Você tem uma janela de comparação (ex.: 14 dias)"] }
        ],
        links: [
          { label: "HEART Framework", url: "https://www.heartframework.com/" },
          { label: "UXDesign BR • HEART", url: "https://brasil.uxdesign.cc/como-utilizar-o-framework-heart-para-melhorar-suas-m%C3%A9tricas-1bcee0d080ec" }
        ]
      },
      {
        id: "m3l2",
        title: "AARRR",
        sections: [
          { title: "Por que isso existe", text: "Porque dá uma linguagem simples pra organizar a jornada e discutir gargalos sem confusão." },
          { title: "Como usar", bullets: ["Acquisition: de onde vem o lead", "Activation: primeiro valor (agendou, respondeu, completou)", "Revenue: pagou, fechou, assinou", "Retention: voltou, continuou, manteve", "Referral: indicou (se fizer sentido)"] },
          { title: "Mini exemplo", text: "Seu problema pode não ser “lead ruim”, mas “ativação fraca”: a pessoa até chega, mas não dá o primeiro passo por falta de direção." },
          { title: "Feito quando", bullets: ["Você encaixou sua jornada em AARRR", "Você sabe qual estágio mais vaza", "Você tem 1 intervenção por estágio crítico"] }
        ],
        links: [
          { label: "G4 • Funil Pirata (AARRR)", url: "https://g4educacao.com/blog/funil-pirata-growth" }
        ]
      },
      {
        id: "m3l3",
        title: "Placar do Funil",
        sections: [
          { title: "O que é", text: "Uma página que responde: onde está vazando, por quê, e o que você vai fazer. Sem dashboard pelo dashboard." },
          { title: "Campos que importam", bullets: ["Métrica e fórmula", "Fonte (site/CRM/WhatsApp)", "Frequência (diário/semanal)", "Baseline", "Meta/threshold", "Dono da ação"] },
          { title: "Feito quando", bullets: ["Você tem um placar simples", "Ele direciona uma decisão real", "Você consegue explicar o número em 30 segundos"] }
        ],
        links: []
      }
    ]
  },

  {
    id: "m4",
    title: "Módulo 4: UI utilitária e heurísticas",
    desc: "Clareza, consistência e prevenção de erro. Heurísticas como justificativa.",
    lessons: [
      {
        id: "m4l1",
        title: "Heurísticas de Nielsen",
        sections: [
          { title: "Por que isso existe", text: "Pra você auditar interface e comunicação sem virar “gosto pessoal”. Heurística é checklist de fricção com nome." },
          { title: "Como usar do jeito certo", bullets: ["Ache o problema", "Dê nome (princípio violado)", "Descreva o impacto", "Sugira correção testável"] },
          { title: "Feito quando", bullets: ["Você listou 7–10 fricções", "Cada fricção tem impacto + recomendação", "Você priorizou top 3 com critério"] }
        ],
        links: [
          { label: "UDS • Heurísticas de Nielsen", url: "https://uds.com.br/blog/heuristicas-nielsen-guia-para-melhorar-usabilidade-interfaces/" },
          { label: "Alura • Heurísticas de Nielsen", url: "https://www.alura.com.br/artigos/10-heuristicas-de-nielsen-uma-formula-pra-evitar-erros-basicos-de-usabilidade" }
        ]
      },
      {
        id: "m4l2",
        title: "Hierarquia e tipografia",
        sections: [
          { title: "Por que isso existe", text: "Porque a maioria dos sites perde conversão por falta de direção, não por falta de informação. Hierarquia resolve isso." },
          { title: "Checklist rápido", bullets: ["1 ação principal por seção", "Título diz o que é e pra quem", "Texto curto e escaneável", "Espaçamento consistente", "Botões com rótulo direto (verbo + benefício)"] },
          { title: "Feito quando", bullets: ["Você ajustou 1 seção crítica", "A leitura ficou mais óbvia sem aumentar texto", "Você consegue defender cada mudança por clareza"] }
        ],
        links: [
          { label: "Medium • Hierarquia de fontes", url: "https://henriquefilho.medium.com/hierarquia-de-fontes-um-guia-b%C3%A1sico-para-criar-uma-interface-antes-de-abrir-o-figma-2c017c7df879" },
          { label: "UXDesign BR • Escala tipográfica", url: "https://brasil.uxdesign.cc/escala-tipogr%C3%A1fica-na-pr%C3%A1tica-1eb81cdee96f" }
        ]
      },
      {
        id: "m4l3",
        title: "Acessibilidade aplicada",
        sections: [
          { title: "Por que isso existe", text: "Porque acessibilidade melhora qualidade geral: menos erro, mais clareza, mais conversão. E evita decisões ruins de UI." },
          { title: "Cinco checks que pegam 80% do problema", bullets: ["Contraste ok", "Fonte legível", "Foco visível (teclado)", "Botões com rótulo claro", "Formulário com feedback de erro"] },
          { title: "Feito quando", bullets: ["Você passou os 5 checks numa página crítica", "Corrigiu pelo menos 2 problemas", "Não piorou a experiência no mobile"] }
        ],
        links: [
          { label: "W3C • WCAG 2.2 PT-BR", url: "https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" }
        ]
      }
    ]
  },

  {
    id: "m5",
    title: "Módulo 5: Pesquisa leve e teste",
    desc: "Evidência rápida para decidir. Roteiro curto e síntese em 1 página.",
    lessons: [
      {
        id: "m5l1",
        title: "Roteiro de teste",
        sections: [
          { title: "Por que isso existe", text: "Pra parar de discutir suposição. Cinco pessoas já mostram padrão de fricção em tarefa." },
          { title: "Roteiro simples", bullets: ["Contexto (2 min)", "Tarefa (10 min): peça pra pessoa fazer X", "Perguntas curtas: o que você esperava? o que te travou?", "Encerramento: o que melhoraria primeiro?"] },
          { title: "Feito quando", bullets: ["Você rodou 3–5 testes rápidos", "Anotou fricções por etapa", "Saiu com top 3 ajustes"] }
        ],
        links: [
          { label: "Ladies That UX BR • Roteiro", url: "https://medium.com/ladies-that-ux-br/um-roteiro-para-testes-de-usabilidade-qualitativos-611d41c93434" }
        ]
      },
      {
        id: "m5l2",
        title: "Checklist de teste",
        sections: [
          { title: "Antes", bullets: ["Defina a tarefa (1 frase)", "Prepare ambiente e link", "Grave tela (se puder)", "Combine tempo e objetivo"] },
          { title: "Durante", bullets: ["Não ensine", "Pergunte o que a pessoa pensou", "Marque onde travou e por quê"] },
          { title: "Depois", bullets: ["Agrupe travas parecidas", "Converta em recomendações", "Priorize top 3"] },
          { title: "Feito quando", bullets: ["Você tem padrões claros (não opiniões soltas)", "Tem recomendações executáveis", "Consegue ligar travas a uma métrica"] }
        ],
        links: [
          { label: "Hotjar • Usabilidade (PT-BR)", url: "https://www.hotjar.com/pt-BR/teste-de-usabilidade/checklist-exemplos-de-testes/" }
        ]
      },
      {
        id: "m5l3",
        title: "Síntese em 1 página",
        sections: [
          { title: "Estrutura que funciona", bullets: ["O que testamos", "Principais travas (3–5)", "Decisões e mudanças (top 3)", "Riscos/hipóteses", "Métrica para validar"] },
          { title: "Feito quando", bullets: ["Cabe em 1 página", "Vira ticket de execução", "Você consegue apresentar em 5 minutos"] }
        ],
        links: []
      }
    ]
  },

  {
    id: "m6",
    title: "Módulo 6: Onboarding e ativação",
    desc: "Marcos, mensagens e sinais de risco para reduzir suporte e aumentar ativação.",
    lessons: [
      {
        id: "m6l1",
        title: "Onboarding",
        sections: [
          { title: "Por que isso existe", text: "Porque o dinheiro entra na venda, mas a confiança se confirma no onboarding. Se os primeiros dias são confusos, você paga em churn e suporte." },
          { title: "O que você quer garantir", bullets: ["Próximo passo óbvio", "Primeiro valor rápido", "Expectativa alinhada", "Canal de suporte claro"] },
          { title: "Feito quando", bullets: ["Você definiu 3 marcos do onboarding", "Tem mensagens/ações pra cada marco", "Tem sinal de risco e reação"] }
        ],
        links: [
          { label: "RD Station • Onboarding de clientes", url: "https://www.rdstation.com/blog/marketing/onboarding-de-clientes/" }
        ]
      },
      {
        id: "m6l2",
        title: "Boas práticas de onboarding",
        sections: [
          { title: "Como usar esse conteúdo", text: "Não copie tudo. Pegue os padrões que combinam com sua operação e transforme em checklist + gatilhos." },
          { title: "Evite", bullets: ["Textão sem ação", "Muitos passos antes do primeiro valor", "Ambiguidade de prazo e expectativa"] },
          { title: "Feito quando", bullets: ["Você escolheu 2–3 práticas pra aplicar", "Você escreveu o fluxo em marcos", "Você consegue medir ativação"] }
        ],
        links: [
          { label: "UserGuiding • Onboarding", url: "https://userguiding.com/pt-br/blog/melhores-praticas-de-user-onboarding" }
        ]
      },
      {
        id: "m6l3",
        title: "Onboarding 7 dias",
        sections: [
          { title: "Estrutura mínima", bullets: ["Dia 0: confirmação + próximo passo", "Dia 1–2: primeiro valor", "Dia 3–5: progresso e ajuste", "Dia 6–7: reforço + redução de dúvida"] },
          { title: "Feito quando", bullets: ["Você tem marcos + mensagens", "Sabe qual métrica define ativação", "Tem plano de reação pra risco"] }
        ],
        links: []
      }
    ]
  },

  {
    id: "m7",
    title: "Bônus: Figma essencial",
    desc: "Prototipar e alinhar rápido. Componentes, estilos e auto layout.",
    lessons: [
      {
        id: "m7l1",
        title: "Auto Layout",
        sections: [
          { title: "Por que isso existe", text: "Pra você parar de ajustar pixel na mão e começar a montar layouts consistentes e rápidos." },
          { title: "O que dominar", bullets: ["Spacing e padding", "Hug / Fill", "Auto layout aninhado"] },
          { title: "Feito quando", bullets: ["Você montou 1 seção de página com auto layout", "Conseguiu adaptar pro mobile sem refazer tudo"] }
        ],
        links: [
          { label: "Figma Help • Auto Layout", url: "https://help.figma.com/hc/pt-br/articles/360040451373-Guia-do-layout-autom%C3%A1tico" }
        ]
      },
      {
        id: "m7l2",
        title: "Componentes e estilos",
        sections: [
          { title: "Por que isso existe", text: "Porque consistência vira velocidade. Componentes evitam retrabalho e deixam padrão claro pro time." },
          { title: "Regras simples", bullets: ["Um botão = um componente", "Texto e cor via estilos", "Nomeação clara (Button/Primary, Button/Secondary)"] },
          { title: "Feito quando", bullets: ["Você criou 3 componentes básicos", "Aplicou estilos de texto e cor", "Conseguiu reaproveitar em 2 telas"] }
        ],
        links: [
          { label: "Buscar: figma componentes estilos guia", url: "https://www.google.com/search?q=figma+componentes+estilos+guia" }
        ]
      }
    ]
  }
];
