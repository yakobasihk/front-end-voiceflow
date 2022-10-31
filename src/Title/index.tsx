import styles from './index.module.scss';

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default Title;
