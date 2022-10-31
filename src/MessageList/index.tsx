import styles from './index.module.scss';

interface MessageListProps {
  messages: any[];
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className={styles.messageList}>
      {messages.map((message) => (
        <p>{message?.payload?.message}</p>
      ))}
    </div>
  );
};

export default MessageList;
