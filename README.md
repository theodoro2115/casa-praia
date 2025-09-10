# Landing Page - Casa de Temporada em Itanhaém

## Descrição
Landing page completa e responsiva para uma casa de temporada localizada em Itanhaém, SP. A página inclui informações detalhadas sobre a propriedade, galeria de fotos, informações sobre praias próximas, calendário interativo e sistema de contato via WhatsApp.

## Características da Casa
- **Endereço:** Av. São Paulo, 1215 - Cibratel II, Itanhaém - SP
- **Capacidade:** Até 10 pessoas
- **Valor:** R$ 250,00 por diária
- **Acomodações:** 2 quartos (sendo 1 suíte), 1 banheiro, sala, cozinha americana
- **Extras:** Área de churrasqueira com utensílios, TV e internet

## Funcionalidades da Landing Page

### 1. Header com Navegação
- Menu de navegação fixo com links para todas as seções
- Design responsivo que se adapta a dispositivos móveis

### 2. Seção Hero
- Apresentação principal com informações básicas
- Animações temáticas de praia (ondas, guarda-sol, prancha de surf)
- Cards informativos com localização, capacidade e preço

### 3. Seção Sobre a Casa
- Descrição detalhada da propriedade
- Cards com características principais (quartos, banheiro, sala, cozinha, churrasqueira, TV/internet)
- Animações de entrada quando os elementos ficam visíveis

### 4. Galeria de Fotos
- Carrossel interativo com as 4 fotos fornecidas
- Navegação por botões (anterior/próximo) e dots
- Auto-play automático a cada 5 segundos
- Legendas descritivas para cada foto

### 5. Seção Praias de Itanhaém
- Informações sobre 6 praias próximas à casa
- Distâncias aproximadas de cada praia
- Descrições detalhadas das características de cada praia:
  - Praia do Cibratel (mesmo bairro)
  - Praia dos Sonhos (3 km)
  - Praia dos Pescadores (4 km)
  - Praia das Conchas (5 km)
  - Praia do Suarão (6 km)
  - Praia da Saudade (7 km)

### 6. Calendário de Disponibilidade
- Calendário interativo mostrando disponibilidade
- Navegação entre meses
- Legenda com cores:
  - Verde: Disponível
  - Vermelho: Ocupado
  - Azul: Selecionado pelo usuário
- Sistema de administração com senha (senha: admin123)
- Persistência de dados usando localStorage

### 7. Seção de Contato
- Informações de endereço e valor
- Dois botões de WhatsApp:
  - WhatsApp da Norma
  - WhatsApp do Valdivio
- Mensagens automáticas incluindo datas selecionadas no calendário

### 8. Animações e Efeitos
- Ondas animadas na seção hero
- Guarda-sol flutuante
- Prancha de surf com movimento
- Animações de entrada para cards
- Efeitos hover em botões e elementos interativos

## Tecnologias Utilizadas
- **HTML5:** Estrutura semântica e acessível
- **CSS3:** Estilos modernos com flexbox, grid e animações
- **JavaScript:** Funcionalidades interativas e persistência de dados
- **Font Awesome:** Ícones profissionais
- **Design Responsivo:** Compatível com desktop, tablet e mobile

## Como Usar

### Para Visitantes:
1. Navegue pelas seções usando o menu superior
2. Visualize as fotos no carrossel
3. Consulte informações sobre as praias próximas
4. Selecione datas no calendário (clique nas datas verdes)
5. Use os botões do WhatsApp para entrar em contato

### Para Administradores:
1. Clique no ícone de engrenagem no calendário
2. Digite a senha: `admin123`
3. Clique nas datas para alterar disponibilidade
4. Salve as alterações

## Estrutura de Arquivos
```
casa-itanhaem-landing/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── images/             # Pasta com fotos da casa
│   ├── WhatsAppImage2025-09-07at13.18.19(3).jpeg
│   ├── WhatsAppImage2025-09-07at13.18.19(1).jpeg
│   ├── WhatsAppImage2025-09-07at13.18.19.jpeg
│   └── WhatsAppImage2025-09-07at13.18.19(2).jpeg
└── README.md           # Este arquivo
```

## Personalização

### Alterar Números do WhatsApp:
Edite os links nos botões do WhatsApp no arquivo `index.html`:
```html
<a href="https://wa.me/5513999999999?text=..." class="whatsapp-btn norma">
<a href="https://wa.me/5513888888888?text=..." class="whatsapp-btn valdivio">
```

### Alterar Senha de Administração:
No arquivo `script.js`, linha 138:
```javascript
const correctPassword = 'admin123'; // Altere aqui
```

### Adicionar/Remover Fotos:
1. Adicione as imagens na pasta `images/`
2. Edite a seção de galeria no `index.html`
3. Atualize o JavaScript se necessário

## Compatibilidade
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Dispositivos móveis (iOS Safari, Chrome Mobile)

## Suporte
Para dúvidas ou personalizações, entre em contato através dos números de WhatsApp fornecidos na página.

