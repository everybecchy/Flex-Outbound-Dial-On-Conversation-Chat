# Flex Conversations Chat Outbound Dialling

Este plugin é um POC/código de exemplo de uma implementação de discagem de saída para [Flex Conversations](https://www.twilio.com/docs/flex/conversations) a partir de uma tarefa de chat.

## Aviso Legal

**Este software deve ser considerado como "código de exemplo", um Entregável Tipo B, e é fornecido "como está" para o usuário. A Twilio não tem responsabilidade de dar suporte ao uso ou implementação deste software.**

# Visão Geral

O plugin adiciona um botão de discagem de saída (Outbound Dialling Button) às tarefas de chat no TaskCanvasHeader para chats baseados em Flex Conversations. O botão permitirá que o agente faça uma chamada para o cliente da tarefa de chat.

Ao clicar no botão, é acionada uma função para iniciar uma chamada telefônica para o cliente associado à conversa de chat. Esta funcionalidade é especialmente útil para agentes que precisam continuar a interação com o cliente através de uma chamada de voz.

# Implementação de Discagem de Saída no Flex Conversations

Flex Conversations faz uso do produto Twilio Conversations e da [API de Interações](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions). Ao adicionar a funcionalidade de discagem de saída, é possível iniciar uma chamada diretamente a partir de uma tarefa de chat, melhorando a eficiência e a continuidade no atendimento ao cliente.

Este plugin é uma implementação mínima destinada a servir como ponto de partida para seu caso de uso específico. Não há necessidade de configuração adicional de variáveis de ambiente ou funções serverless.

# Possíveis Melhorias

Este plugin é uma implementação básica e minimalista para discagens de saída, e algumas melhorias que você pode considerar são:

- Adicionar tratamento de erros para garantir que, em caso de falha, o agente seja notificado adequadamente. Você pode considerar adicionar uma [Notificação Flex UI](https://www.twilio.com/docs/flex/developer/ui/v1/notifications) em caso de erro.
- Considerar o uso do [conversations.conversation_id](https://www.twilio.com/docs/flex/developer/insights/enhance-integration#link-tasks-to-a-conversation) em todas as tarefas relacionadas à Conversação para melhor rastreamento e relatórios.
- Implementar uma lógica para desabilitar o botão de discagem de saída após ser acionado, ou substituí-lo por um indicador de carregamento, garantindo que o agente não tente iniciar múltiplas chamadas acidentalmente.
- Expandir a funcionalidade para suportar transferências de chamadas ou chamadas de conferência com múltiplos agentes.

# Configuração

Não há necessidade de criar um novo Workflow TaskRouter ou implantar funções serverless para este plugin.

## Testando o Plugin

Para testar o plugin localmente no ambiente do Flex, você pode usar o seguinte comando:

twilio flex:plugins:start
Este comando inicia o servidor de desenvolvimento e carrega o plugin no Flex, permitindo que você visualize e teste as mudanças em tempo real.

Realizando o Deploy do Plugin
Para implantar o plugin no Flex, siga os passos abaixo:

Deploy do Plugin: Utilize o comando abaixo para fazer o deploy da versão mais recente do plugin. O comando inclui uma descrição para o changelog e para o plugin em si.

twilio flex:plugins:deploy --major --changelog "Adicionando discagem de saída para chats" --description "Primeiro Plugin no Flex"

Liberando o Plugin: Após o deploy, libere o plugin para uso no Flex com o comando:


twilio flex:plugins:release --name "Lançamento do Primeiro Plugin" --description "Habilitando o Plugin de Exemplo" --plugin plugin-sample@1.0.0

Por Everybecch.

