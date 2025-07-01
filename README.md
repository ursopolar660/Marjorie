# Landing Page Filhos Seguros - Versão Estática

Esta é a versão estática da landing page "Filhos Seguros" da Marjorie Fonseca, convertida de React para HTML, CSS e JavaScript puro para facilitar a manutenção.

## Arquivos Inclusos

- `index.html` - Arquivo HTML principal com toda a estrutura da página
- `styles.css` - Arquivo CSS com todos os estilos e responsividade
- `script.js` - Arquivo JavaScript com todas as funcionalidades interativas
- `logo_marjorie_fonseca.png` - Logo da Marjorie Fonseca
- `README.md` - Este arquivo de documentação
- `IMG_8078.jpg` - Imagem Marjorie
- `IMG_7426.jpg` - Imagem Marjorie

## Funcionalidades

✅ **Layout Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
✅ **Modal Interativo** - Formulário de captura de leads com validação
✅ **Navegação Suave** - Scroll suave entre seções
✅ **Ícones Lucide** - Ícones modernos carregados via CDN
✅ **Formulário Funcional** - Validação de campos e feedback visual
✅ **SEO Otimizado** - Meta tags e estrutura semântica
✅ **Performance** - Código otimizado e carregamento rápido

## Como Usar

1. **Hospedagem Simples**: Faça upload de todos os arquivos para qualquer servidor web
2. **Teste Local**: Abra o arquivo `index.html` diretamente no navegador
3. **GitHub Pages**: Faça upload para um repositório e ative o GitHub Pages
4. **Netlify/Vercel**: Arraste a pasta para o painel de deploy

## Estrutura da Página

- **Header** - Logo e navegação
- **Hero Section** - Título principal e CTAs
- **About Section** - Informações sobre Marjorie Fonseca
- **Urgency Section** - Estatísticas e urgência
- **Course Section** - Informações sobre o curso
- **Book Section** - Livro da autora
- **CTA Section** - Call-to-action principal
- **Contact Section** - Informações de contato
- **Footer** - Rodapé com informações

## Personalização

### Cores
As cores principais estão definidas no CSS e podem ser facilmente alteradas:
- Cor principal: `#9333ea` (roxo)
- Cor de hover: `#7c3aed`
- Backgrounds: gradientes de roxo claro

### Conteúdo
Todo o conteúdo está no arquivo `index.html` e pode ser editado diretamente.

### Funcionalidades JavaScript
As funcionalidades estão organizadas no `script.js`:
- `openModal()` - Abre o modal de captura
- `closeModal()` - Fecha o modal
- `submitForm()` - Processa o envio do formulário
- Tracking de eventos (Google Analytics, Facebook Pixel)

## Integrações Recomendadas

### Formulário de Captura
Para conectar o formulário a um serviço de email marketing:

1. **Mailchimp**: Substitua a função `submitForm()` por uma chamada à API do Mailchimp
2. **ConvertKit**: Integre com a API do ConvertKit
3. **RD Station**: Use a API do RD Station para captura de leads

### Analytics
O código já está preparado para:
- Google Analytics (gtag)
- Facebook Pixel (fbq)
- Tracking personalizado

### Exemplo de integração com Mailchimp:
```javascript
async function submitForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        email_address: formData.get('email'),
        status: 'subscribed',
        merge_fields: {
            FNAME: formData.get('name')
        }
    };
    
    // Enviar para Mailchimp API
    // ... código de integração
}
```

## Otimizações Implementadas

- **CSS Minificado** - Estilos otimizados para performance
- **JavaScript Modular** - Código organizado e reutilizável
- **Lazy Loading** - Preparado para carregamento sob demanda
- **Preload de Recursos** - Recursos críticos carregados primeiro
- **Scroll Suave** - Navegação fluida entre seções

## Compatibilidade

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## Suporte

Esta versão estática foi criada pela **Equipe Madagascar** e mantém todas as funcionalidades da versão React original, com a vantagem de ser mais fácil de manter e hospedar.

Para dúvidas ou modificações, consulte os comentários no código ou entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido por Alex - Equipe Madagascar**  
*Versão estática criada em 27/06/2025*

