import styles from './index.module.scss';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return <input className={styles.input} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
