# Relatórios Power BI por atividade

Este pacote contém uma página HTML de referência para cada atividade identificada na coluna `Atividade`, além dos CSVs tratados para importação no Power BI.

## Filtros globais por página
- Use o campo `Periodo` como slicer de período.
- Exiba o slicer apenas nas páginas em que a atividade tem mais de um período.

## Medidas DAX sugeridas

```DAX
Total Participantes = SUM('dados_tratados_geral'[Participantes])

Qtd Realizações = COUNTROWS('dados_tratados_geral')

Público Alvo Principal =
VAR TabelaPublico =
    SUMMARIZE(
        'dados_tratados_geral',
        'dados_tratados_geral'[Público alvo],
        "ParticipantesPublico", SUM('dados_tratados_geral'[Participantes])
    )
VAR TopPublico = TOPN(1, TabelaPublico, [ParticipantesPublico], DESC)
RETURN CONCATENATEX(TopPublico, 'dados_tratados_geral'[Público alvo], ", ")
```

## Estrutura visual recomendada por página

1. Cartão: Total de participantes.
2. Slicer: Período, usando `Periodo`, quando houver mais de um período.
3. Cartão ou texto: Frequência da atividade.
4. Barra/tabela: Público-alvo por total de participantes.
5. Tabela: Realizações por período com Nome, Período e Participantes.
6. Cartões ou listas: Eventos relacionados e Disciplina atrelada, somente quando houver conteúdo.
7. Caixa de texto: Impactos, com quebra automática e altura suficiente para exibir todo o texto.

## Cores
- #444F6C
- #0F3B8C
- #00A1FF
- #FFCC29
- #008F4F
