# 📘 Calculadora de Mensalidade

## 📌 Introdução
A **Calculadora de Mensalidade** é uma ferramenta que permite ao aluno simular o valor final da sua mensalidade, considerando:

- Descontos oferecidos pela faculdade (Unieuro).  
- Bolsas do **Prouni**.  
- Financiamento pelo **FIES**.  

O sistema exibe os valores **sem desconto** e os valores **com benefícios aplicados**, respeitando a ordem de aplicação:

1. Primeiro aplica-se o desconto da **Unieuro**.  
2. Em seguida, aplica-se a bolsa **Prouni** (se houver).  
3. Por fim, calcula-se o financiamento **FIES** (se selecionado).  

---

## 🎯 Objetivo
Dar autonomia financeira ao estudante e reduzir a demanda de consultas no setor financeiro, fornecendo uma simulação clara e detalhada dos valores a serem pagos.

---

## 📌 Escopo
- Campo para inserir **valor bruto da mensalidade**.  
- Campo para inserir o **percentual de desconto da Unieuro (5% a 45%)**.  
- Campo para simular **bolsa Prouni (%)**.  
- Campo para simular **financiamento FIES (%)**.  
- Botão **"Calcular"**.  
- Tela de resultado detalhada exibindo:  
  - Valor bruto mensal/semestral.  
  - Valor com desconto da IES.  
  - Valor com bolsa Prouni aplicada.  
  - Valor da coparticipação FIES.  
- Recursos adicionais:  
  - Link para a **FAQ do FIES**.  
  - Links para os sites oficiais do **MEC** e da **Caixa Econômica Federal**.  
  - Opção para salvar o resultado em **PDF**.  

> ⚠️ Este sistema não possui login ou armazenamento de dados.  

---

## 👥 Usuário-Alvo
- Alunos da instituição.  
- Departamento Financeiro.  

---

## ⚙️ Requisitos Funcionais
- **RF01 – Inserir Dados Base**: Inserção do valor bruto da mensalidade e percentual de desconto da IES (5%–45%).  
- **RF02 – Simular Bolsa Prouni**: Inserção do percentual da bolsa (até 100%).  
- **RF03 – Simular Financiamento FIES**: Inserção do percentual de financiamento (até 100%).  
- **RF04 – Exibir Resultados Detalhados**: Mostrar valores mensais e semestrais em todas as etapas.  
- **RF05 – Recursos Adicionais**: Links úteis e opção de exportar resultado em PDF.  

---

## 🚀 Requisitos Não Funcionais
- **RNF01 – Usabilidade**: Interface clara e intuitiva.  
- **RNF02 – Responsividade**: Compatível com desktop e mobile.  
- **RNF03 – Desempenho**: Cálculos instantâneos.  
- **RNF04 – Disponibilidade**: 24/7.  
- **RNF05 – Manutenibilidade**: Código organizado e documentado.  

---

## 📏 Regras de Negócio
- **RN01 – Ordem dos descontos**: Sempre aplicar IES → Prouni → FIES.  
- **RN02 – Validação de inputs**: Valor final nunca pode ser negativo (mínimo R$0,00).  
- **RN03 – Bolsa ProUni 100%**: Valor final deve ser R$0,00.  
- **RN04 – Detalhamento do FIES**: Exibir valor financiado + valor da coparticipação.  

---

## 🖥️ Protótipo / Layout
### Estrutura da Interface
- **Seção 1: Entrada de Dados**  
  - Valor da Mensalidade Bruta.  
  - Desconto da IES (%).  
- **Seção 2: Simulações**  
  - Bolsa ProUni (%).  
  - Financiamento FIES (%).  
- **Seção 3: Resultados**  
  - Exibição detalhada de cada etapa do cálculo.  

---

## ✅ Critérios de Aceitação
- **CA01**: Resultados atualizados automaticamente a cada alteração válida.  
- **CA02**: Cálculo correto, respeitando a ordem dos descontos.  
- **CA03**: Interface clara em desktop e mobile.  
- **CA04**: Mensagens de erro para valores inválidos.  

---

## ⚠️ Riscos e Mitigações
- **Entrada incorreta de valores** → Validações implementadas.  
- **Má interpretação dos resultados** → Exibição detalhada de todas as etapas.  

---

## 📚 Glossário
- **Prouni**: Programa Universidade para Todos (bolsa parcial ou integral).  
- **FIES**: Fundo de Financiamento Estudantil (financia parte da mensalidade).  
- **Mensalidade Bruta**: Valor cheio sem descontos.  
- **Desconto IES**: Percentual de desconto da própria instituição (Unieuro).  

---

## 📄 Licença
Este projeto é apenas para fins educacionais e não possui vínculo oficial com MEC, Caixa ou programas governamentais.  
