# Ruby Guidelines

## Code Style

- Adicione as configurações da gem [Rubocop] ao projeto.
- Utilize o [Ruby Style Guide]. A análise e formatação de código da Rubocop é baseada neste guia.
- Evite modificadores de condicional (linhas que terminam com condicionais).
- Evite muitas atribuições por linha. (`foo, bar = 1, 2`).
- Evite comentários com TODO. (`# TODO`).
- Evite nomes de métodos bang (!). Prefira nomes descritivos.
- Prefira `detect` ao invés de `find`.
- Prefira `select` ao invés de `find_all`.
- Prefira `map` ao invés de `collect`.
- Prefira `reduce` ao invés de `inject`.
- Prefira `&:method_name` para `{ |item| item.method_name }` chamadas de métodos mais simples.
- Use `_` para parâmetros de bloco não usados.
- Adicione underscore (`_`) como prefixo de de variáveis e parâmetros não usados.
- Use `%()` para strings em uma única linha contendo aspas duplas que requerem interpolação.
- Use `?` como sufixo para métodos predicados (que retornam true ou false).
- Use `def self.method`, não `class << self`.
- Use `def` com parenteses quando tiverem parâmetros.
- Use [heredocs] para strings com múltiplas linhas.
- Ordene os métodos de classe acima dos métodos de instância.
- Prefira a invocação de método ao invés de variáveis ​​de instância.
- Evite parâmetros opcionais. Será que o método não está fazendo muita coisa?
- Evite monkey-patching.
- Gere os [Bundler binstubs] necessários para o projeto, como`rake` e
  `rspec`, e adicione ao controle de versão.
- Prefira `private` ao indicar o escopo. Use `protected` apenas com métodos de comparação `def ==(other)`, `def <(other)`, e `def >(other)`.

[Rubocop]: ../packages/ruby/.rubocop.yml
[Ruby Style Guide]: https://rubystyle.guide/
[heredocs]: https://www.rubyguides.com/2018/11/ruby-heredoc/
[Bundler binstubs]: https://github.com/sstephenson/rbenv/wiki/Understanding-binstubs

## Bundler

- Especifique no `Gemfile` a [versão do Ruby] usada no projeto.
- Use a [versão pessimista] (`~>`) no `Gemfile` para gems que seguem o versionamento semântico, como `rspec`, `factory_bot`, e `capybara`.
- Use a opção [sem versão] no `Gemfile` para gems que é seguro atualizar automaticamente, como a `pg`, `thin`, and `debugger`.
- Use a [versão exata] no `Gemfile` para gems sensíveis, como a gem Rails.

[versão do Ruby]: http://bundler.io/v1.3/gemfile_ruby.html
[versão exata]: http://robots.thoughtbot.com/post/35717411108/a-healthy-bundle
[versão pessimista]: http://robots.thoughtbot.com/post/35717411108/a-healthy-bundle
[sem versão]: http://robots.thoughtbot.com/post/35717411108/a-healthy-bundle

** Em breve teremos uma gem com as definições do Rubocop que será usada como dependência nos projetos.

** Esse style guide é fortemente baseado no [guia da thoughtbot].

[guia da thoughtbot]: https://github.com/thoughtbot/guides/blob/main/ruby/README.md