# Dashboard Power BI — Atividades na universidade

## Título
Dados sobre as atividades

## Filtros
- Ano
- Coordenador

## Métricas
- Total de participantes: soma de `Participantes`
- Participantes por atividade: soma de `Participantes` agrupada por `Nome` + `Ano`
- Ranking dos públicos-alvo: soma de `Participantes` por `Público alvo`
- Impactos na comunidade: tabela/cartões de texto com `Impactos`

## Medidas DAX sugeridas

```DAX
Total de Participantes = SUM('dados_tratados_atividades'[Participantes])

Total de Atividades = DISTINCTCOUNT('dados_tratados_atividades'[Atividade])

Participantes por Atividade = SUM('dados_tratados_atividades'[Participantes])
```

## Coluna calculada sugerida

```DAX
Atividade = 'dados_tratados_atividades'[Nome] & " (" & 'dados_tratados_atividades'[Ano] & ")"
```

## Layout
1. Cabeçalho com título e filtros por Ano e Coordenador.
2. Cartões de visão geral: Total de participantes e Total de atividades.
3. Gráfico de barras horizontais: Participantes por atividade.
4. Ranking/tabela: Principais públicos-alvo.
5. Seção de insights destacados.
6. Resumo do impacto na comunidade com texto completo.

## Paleta
- #444F6C
- #0F3B8C
- #00A1FF
- #FFCC29
- #008F4F
