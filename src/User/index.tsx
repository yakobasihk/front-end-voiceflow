import Button from 'src/Button';
import styles from './index.module.scss';

interface UserProps {
  text: string;
  reload: () => void;
}

const User = ({ text, reload }: UserProps) => {
  const deleteUser = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || 'null');
    localStorage.setItem('users', JSON.stringify(users.filter((u: string) => u !== text)));
    reload();
  };

  return (
    <div className={styles.user}>
      {text}
      <Button text="Delete ?" onClick={deleteUser} />
    </div>
  );
};

export default User;
