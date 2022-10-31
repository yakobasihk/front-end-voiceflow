import React, { useEffect, useState } from 'react';
import { interact } from './utils';
import { useParams } from 'react-router-dom';
import { GeneralTrace, IntentRequest } from '@voiceflow/general-types';
import Title from 'src/Title';
import MessageList from 'src/MessageList';
import Interaction from 'src/Interaction';
import Container from 'src/Container';

interface RouteParams {
  userID: string;
}

const Chat: React.FC = () => {
  const { userID } = useParams<RouteParams>();
  const [messageList, setMessageList] = useState<GeneralTrace[]>([]);
  const [latestInteraction, setLatestInteraction] = useState<GeneralTrace | null>(null);

  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem(userID) || 'null');
    if (!user) {
      const interactions = await interact('', userID, 'launch');
      const messages = interactions.filter((message) => message.type === 'text');
      const interaction = interactions.find((message) => message.type === 'choice' || message.type === 'entity-filling') || null;
      setLatestInteraction(interaction);
      setMessageList(messages);
      localStorage.setItem(userID, JSON.stringify({ messages, interaction }));
    } else {
      setMessageList(user.messages);
      setLatestInteraction(user.interaction);
    }
  }, []);

  const reset = async () => {
    console.log('launched');
    const interactions = await interact('', userID, 'launch');
    console.log(interactions);
    const messages = interactions.filter((message) => message.type === 'text');
    const interaction = interactions.find((message) => message.type === 'choice' || message.type === 'entity-filling') || null;
    setLatestInteraction(interaction);
    setMessageList(messages);
    localStorage.setItem(userID, JSON.stringify({ messages, interaction }));
  };

  const sendChoiceOrText = async (payload: IntentRequest) => {
    const result = await interact(payload, userID, typeof payload === 'string' ? 'text' : 'intent');
    console.log('result', result);
    const messages = result.filter((message) => message.type === 'text');
    const interaction = result.find((message) => message.type === 'choice' || message.type === 'entity-filling') || null;
    localStorage.setItem(
      userID,
      JSON.stringify({
        messages: [...messageList, ...messages],
        interaction,
      })
    );
    setMessageList([...messageList, ...messages]);
    setLatestInteraction(interaction || null);
  };

  return (
    <Container>
      <Title text={userID + ' Chat'} />
      <MessageList messages={messageList.filter((message) => message.type === 'text')} />
      <Interaction latest={latestInteraction} reset={reset} act={sendChoiceOrText} />
    </Container>
  );
};

export default Chat;
