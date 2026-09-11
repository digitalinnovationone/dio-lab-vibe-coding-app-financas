# Fase 6 — Persistência, validações e polimento

> Última fase do MVP. Avance somente quando o checklist da Fase 5 estiver completo.

## 📋 Prompt principal

```
Agora vou deixar o app completo.

1. Salve todas as transações e metas no armazenamento do navegador (localStorage).
   Ao abrir, carregue os dados salvos. Atualize tudo ao adicionar ou excluir.

2. Botão "Limpar dados" no rodapé, em cartão discreto, com confirmação:
   "Tem certeza? Esta ação não pode ser desfeita." (Apagar tudo / Cancelar)

3. Validações no chat: se o valor for zero, negativo ou maior que 1 milhão,
   o agente responde: "Esse valor não parece certo. Pode confirmar?"

4. Responsividade: no celular, tudo cabe sem cortes e o teclado não esconde o campo de texto.

5. Mensagem de confirmação no topo (toast): "Transação adicionada!" some em 3 segundos.
   Ao excluir: "Transação excluída."

6. Rodapé discreto: "Feito com vibe coding 🚀"
```

## 🔧 Refinamentos (se precisar)

```
No celular, o chat sai da tela quando abre o teclado. Faça a página rolar.
```

```
O toast aparece atrás do cartão de saldo. Ele deve ficar por cima de tudo.
```

## ✅ Critério de aceite

- [ ] Recarregou a página e os dados continuam
- [ ] "Limpar dados" pede confirmação e zera tudo
- [ ] Valores inválidos recebem resposta do agente
- [ ] Testei no celular (ou modo móvel do navegador) e tudo cabe
- [ ] Toasts aparecem e somem sozinhos
- [ ] Rodapé presente

## 💡 Dica

- **Lovable:** use a pré-visualização em formato celular para testar a responsividade.
- **Copilot:** abra as ferramentas do navegador em modo dispositivo (F12 → ícone de celular).
- Finalizada esta fase, rode o **Checklist Final de Qualidade** do README.
