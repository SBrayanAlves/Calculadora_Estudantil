## ⚙️ Requisitos Funcionais
- [ ] **RF01 – Inserir Dados Base**: Inserção do valor bruto da mensalidade e percentual de desconto da IES (5%–45%).  
- [ ]  **RF02 – Simular Bolsa Prouni**: Inserção do percentual da bolsa (até 100%).  
- [ ]  **RF03 – Simular Financiamento FIES**: Inserção do percentual de financiamento (até 100%).  
- [ ]  **RF04 – Exibir Resultados Detalhados**: Mostrar valores mensais e semestrais em todas as etapas.  
- [ ]  **RF05 – Recursos Adicionais**: Links úteis e opção de exportar resultado em PDF.  

---

## 🚀 Requisitos Não Funcionais
- [ ]  **RNF01 – Usabilidade**: Interface clara e intuitiva.  
- [ ]  **RNF02 – Responsividade**: Compatível com desktop e mobile.  
- [ ]  **RNF03 – Desempenho**: Cálculos instantâneos.  
- [ ]  **RNF04 – Disponibilidade**: 24/7.  
- [ ]  **RNF05 – Manutenibilidade**: Código organizado e documentado.  

---

## 📏 Regras de Negócio
- [ ]  **RN01 – Ordem dos descontos**: Sempre aplicar IES → Prouni → FIES.  
- [ ]  **RN02 – Validação de inputs**: Valor final nunca pode ser negativo (mínimo R$0,00).  
- [ ]  **RN03 – Bolsa ProUni 100%**: Valor final deve ser R$0,00.  
- [ ]  **RN04 – Detalhamento do FIES**: Exibir valor financiado + valor da coparticipação.  

---

## 🖥️ Protótipo / Layout
### Estrutura da Interface
- [ ]  **Seção 1: Entrada de Dados**  
  - [ ]  Valor da Mensalidade Bruta.  
  - [ ]  Desconto da IES (%).  
- [ ]  **Seção 2: Simulações**  
  - [ ]  Bolsa ProUni (%).  
  - [ ]  Financiamento FIES (%).  
- [ ]  **Seção 3: Resultados**  
  - [ ]  Exibição detalhada de cada etapa do cálculo.  

---

## ✅ Critérios de Aceitação
- [ ]  **CA01**: Resultados atualizados automaticamente a cada alteração válida.  
- [ ]  **CA02**: Cálculo correto, respeitando a ordem dos descontos.  
- [ ]  **CA03**: Interface clara em desktop e mobile.  
- [ ]  **CA04**: Mensagens de erro para valores inválidos.