import styles from './index.module.scss';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
