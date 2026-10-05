import { AgeLevel, AgeLevelMeta } from '../types/math';

export const AGE_LEVELS: AgeLevelMeta[] = [
  {
    id: '6',
    badge: '🧒 6 ANOS',
    label: '6 Anos',
    quote: '“Explica-me como se eu tivesse 6 anos.”',
    subtitle: 'Primeira Intuição · Histórias e Quotidiano',
    focusDescription:
      'Histórias visuais, objetos do dia a dia, jogos de observação e zero jargão matemático desnecessário.',
    pedagogicalGoal: 'Compreender a ideia fundamental por trás do conceito antes de qualquer símbolo.',
    simComplexityLabel: 'Simulador Visual Simplificado',
  },
  {
    id: '10',
    badge: '👦 10 ANOS',
    label: '10 Anos',
    quote: '“Explica-me como se eu tivesse 10 anos.”',
    subtitle: 'Descoberta de Padrões · Raciocínio Lógico',
    focusDescription:
      'Pequenas experiências, padrões numéricos, comparações concretas e primeiros gráficos intuitivos.',
    pedagogicalGoal: 'Ligar a intuição visual à lógica de causa e efeito e aos primeiros padrões.',
    simComplexityLabel: 'Simulador de Padrões e Experiência',
  },
  {
    id: '14',
    badge: '🧑 14 ANOS',
    label: '14 Anos',
    quote: '“Explica-me como se eu tivesse 14 anos.”',
    subtitle: 'Ponte para o Formal · Gráficos e Relações',
    focusDescription:
      'Símbolos matemáticos essenciais, leitura de gráficos, declives, tabelas e fórmulas com significado claro.',
    pedagogicalGoal: 'Construir a ponte segura entre a intuição concreta e a matemática do ensino secundário.',
    simComplexityLabel: 'Simulador Gráfico e Algébrico',
  },
  {
    id: '18',
    badge: '🎓 18 ANOS',
    label: '18 Anos',
    quote: '“Explica-me como se eu tivesse 18 anos.”',
    subtitle: 'Rigor do 12.º Ano · Domínio e Exame Nacional',
    focusDescription:
      'Definições rigorosas, propriedades, demonstrações, estratégias de resolução, erros frequentes e questões de Exame Nacional.',
    pedagogicalGoal: 'Dominar o programa oficial de Matemática A do 12.º ano com compreensão profunda e preparação para exame.',
    simComplexityLabel: 'Laboratório Analítico Completo',
  },
  {
    id: 'adulto',
    badge: '🧑 ADULTO',
    label: 'Adulto',
    quote: '“Explica-me como a um adulto.”',
    subtitle: 'Porque É Que Isto Existe? · Mundo Real',
    focusDescription:
      'Começa pelo problema real que o conceito resolve na ciência, economia, engenharia, medicina e tecnologia.',
    pedagogicalGoal: 'Perceber finalmente para que serve este conceito na vida real antes de formalizar a matemática.',
    simComplexityLabel: 'Simulador de Aplicação Prática',
  },
];

export const LEVEL_ORDER: AgeLevel[] = ['6', '10', '14', '18', 'adulto'];

export function getSimplerLevel(current: AgeLevel): AgeLevel | null {
  if (current === 'adulto') return '14';
  if (current === '18') return '14';
  if (current === '14') return '10';
  if (current === '10') return '6';
  return null;
}

export function getNextLevel(current: AgeLevel): AgeLevel | null {
  if (current === '6') return '10';
  if (current === '10') return '14';
  if (current === '14') return '18';
  if (current === '18') return 'adulto';
  return null;
}
