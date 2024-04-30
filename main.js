class Estudante {
    constructor(nome, email, RA, curso, disciplinas) {
      this.nome = nome;
      this.email = email;
      this.RA = RA;
      this.curso = curso;
      this.disciplinas = disciplinas;
    }
  
    primeiraDisciplina() {
        return this.disciplinas[0];
    }
  
    ultimaDisciplina() {
        const ultimaDisciplina = this.disciplinas.length - 1
        return ultimaDisciplina;
    }
  }
  
  const estudante1 = new Estudante(
    "João",
    "joao@email.com",
    "123456",
    "Engenharia",
    ["Matemática", "Física", "Química"]
  );
  
  const estudante2 = new Estudante(
    "Maria",
    "maria@email.com",
    "654321",
    "Medicina",
    ["Anatomia", "Fisiologia", "Bioquímica"]
  );
  
  console.log("Estudante 1:");
  console.log("Nome:", estudante1.nome);
  console.log("Email:", estudante1.email);
  console.log("RA:", estudante1.RA);
  console.log("Curso:", estudante1.curso);
  console.log("Primeira Disciplina:", estudante1.primeiraDisciplina());
  console.log("Última Disciplina:", estudante1.ultimaDisciplina());
  
  console.log("Estudante 2:");
  console.log("Nome:", estudante2.nome);
  console.log("Email:", estudante2.email);
  console.log("RA:", estudante2.RA);
  console.log("Curso:", estudante2.curso);
  console.log("Primeira Disciplina:", estudante2.primeiraDisciplina());
  console.log("Última Disciplina:", estudante2.ultimaDisciplina());
  