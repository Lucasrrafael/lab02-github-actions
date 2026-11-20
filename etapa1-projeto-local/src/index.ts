// Projeto simples da Etapa 1: calcula a média e a situação de cada aluno.
type Aluno = { nome: string; notas: number[] };

const turma: Aluno[] = [
  { nome: "Ana", notas: [8.5, 9.0, 7.5] },
  { nome: "Bruno", notas: [6.0, 5.5, 7.0] },
  { nome: "Carla", notas: [4.0, 6.5, 3.0] },
];

function media(notas: number[]): number {
  return notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
}

function situacao(m: number): string {
  if (m >= 7) return "Aprovado";
  if (m >= 5) return "Recuperação";
  return "Reprovado";
}

console.log("Boletim da turma - Web Academy CI/CD");
for (const aluno of turma) {
  const m = media(aluno.notas);
  console.log(`${aluno.nome.padEnd(6)} média ${m.toFixed(2)}  ${situacao(m)}`);
}
console.log(`Executado com Node.js ${process.version} em ${process.platform}`);
