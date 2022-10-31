import { useState } from 'react';
import Button from 'src/Button';
import Input from 'src/Input';
import styles from './index.module.scss';

interface CreateUserModalProps {
  setOpen: (state: boolean) => void;
  reload: () => void;
}

const CreateUserModal = ({ setOpen, reload }: CreateUserModalProps) => {
  const [userInput, setUserInput] = useState<string>('');

  const createUser = () => {
    const users = JSON.parse(localStorage.getItem('users') || 'null');
    if (!users) localStorage.setItem('users', JSON.stringify([userInput]));
    else {
      localStorage.setItem('users', JSON.stringify([...users, userInput]));
    }
    setOpen(false);
    reload();
  };

  return (
    <>
      <div className={styles.createUserModal}>
        <Input placeholder="user input here" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <Button text="Add" onClick={createUser} />
      </div>
      <div className={styles.overlay} onClick={() => setOpen(false)}></div>
    </>
  );
};

export default CreateUserModal;
