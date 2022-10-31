import { useEffect, useState } from 'react';
import Button from 'src/Button';
import Input from 'src/Input';
import styles from './index.module.scss';

interface InteractionProps {
  latest: any;
  reset: () => void;
  act: (payload: any) => any;
}

const Interaction = ({ latest, reset, act }: InteractionProps) => {
  const [userInput, setUserInput] = useState<string>('');

  useEffect(() => {
    setUserInput('');
  }, [latest]);

  return (
    <div className={styles.interaction}>
      {latest ? (
        <div className={styles.inputs}>
          {latest.payload?.buttons?.map((button) => (
            <Button text={button.name} onClick={() => act(button.request.payload)} />
          ))}
          {latest.payload?.entityToFill && (
            <div className={styles.inputContainer}>
              <Input placeholder="user input here" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
              <Button text="Send" onClick={() => act(userInput)} />
            </div>
          )}
        </div>
      ) : (
        <div>
          <Button text="Reset" onClick={reset} />
        </div>
      )}
    </div>
  );
};

export default Interaction;
