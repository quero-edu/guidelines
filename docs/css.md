# CSS Guidelines

Compilado para as boas práticas de desenvolvimento usando dentro da Quero.

## BEM

Nós adotamos o [BEM][1] como base para o nosso workflow. Basicamente BEM é um conjunto de regras para nomeação de classes no CSS. O nome BEM é um acrônimo para Block, Element, Modifier; para nomear uma classe de acordo com o BEM, é preciso seguir o padrão `.block__element--modifier`, no qual o `--modifier` e o `__element` não são obrigatórios.

```css
/* Good */
.page-header {}
.page-header__logo {}
.page-header__buttons {}
.page-header__buttons--for-menu {}

/* Bad */
.page-header {}
.header-logo {}
.buttons {}
.menu-buttons {}
```

### Porque isso é importante?

Padroniza a forma como o código é escrito, o auxiliando no entendimento do código, pois assim, é possível supor em qual bloco está sendo aplicado, através do `.bloco`. E, caso exista, é possível saber o elemento do bloco que faz o uso da classe, por conta do `__elemento`, e com base no `--modificador`, o qual indicaria a funcionalidade daquela classe. 

Além do pontos citados anteriormente, obtemos os benefícios da modularidade, onde estilos de um bloco nunca terão a dependência de estilos de outro, e do reuso, pois as classes são criadas de modo que fiquem o mais independentes/genéricas possíveis, facilitanto a reutilização em outras partes do projeto. [Veja mais na docs do BEM.][1]

 **Exemplo:**
O form de uma página possui um estilo para quando o input está habilitado e outro para desabilitado.

```css
.page-form__input--enabled {}
.page-form__input--disabled {}
```

> ### **Obs.:** Para casos onde o modificador identifica se o estilo é aplicado em uma versão `desktop` e outra para `mobile`, dê preferência para o uso de ***media queries***.
>
> Costuma-se fazer uma distinção entre mobile e desktop usando o a variável `$screen-desktop` na *media query*. **Exemplo:**
> ```css
> .page-header {
>    /* estilos mobile */
>    @media(min-width: $screen-desktop) {
>      /*
>        estilo aplicado para telas que tenham 
>        um tamanho maior ou igual a $screen-desktop
>      */
>    }
> }

## Ordenação de propriedades

Todas as propriedades dentro de uma classe devem estar ordenadas alfabeticamente.

```css
/* Good */
.page-header {
  align-items: center;
  display: flex;
  width: 100%;
}

/* Bad */
.page-header {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(45deg);

  width: 100%;

  display: flex;
  align-items: center;
}
```

### Porque isso é importante?

De modo geral, não há ganhos em performance, mas é importante para garantir uma boa leitura do código e, como consequência, facilitar a manutenção do mesmo.

[1]: http://getbem.com/introduction/

## Guidelines

### Especificidade regra

Mantenha a especificidade da regra a mais baixa que conseguir.

```scss
/* BAD */
.bloco__elemento {
  ...
  &.bloco__elemento--modificador {
    ...
  }
  & .bloco__outro-elemento {
    ...
  }
  & .bloco__mais-outro-elemento {
    ...
  }
}

/* GOOD */
.bloco__elemento {
  ...
}

.bloco__elemento--modificador {
  ...
}

.bloco__outro-elemento {
  ...
}

.bloco__mais-outro-elemento {
  ...
}
```

Isso faz a especificidade do CSS crescer desnecessariamente, deixando o código não escalável
E o próprio BEM cria uma relação clara e tem o propósito de deixar a especificidade o menor possível

### Composição

É muito comum ver a composição de classes BEM com Sass da seguinte forma:

```scss
.accordion {
  &__element {
    color: white;
  }
  &--modifier {
    background-color: red;
  }
}
```

No entanto isso está fora do nosso styleguide. Alguns dos motivos são:
- Hoje já temos uma base de código grande fora desse formato;
- Esse formato pode dificultar a manutenção para devs com menos familiaridade no front-end;
- Pela forma como é feita essa composição, é comum acabar aumentando a especificidade
 erroneamente.

A forma indicada a se fazer nesse caso seria:

```scss
.accordion {}

.accordion__element {
  color: white;
}

.accordion--modifier {
  background-color: red;
}
```
