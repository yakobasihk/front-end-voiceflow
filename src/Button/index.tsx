import styles from './index.module.scss';

interface ButtonProps {
  text: string;
  onClick: (e?: any) => any;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
