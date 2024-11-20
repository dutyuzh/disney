import Image from 'next/image';

interface LoadingProps {
  width?: number;
  height?: number;
}

const Loading: React.FC<LoadingProps> = ({ width = 600, height = 100 }) => {
  return (
    <div style={styles.container}>
      <Image
        src="/disney-animation-loading.gif"
        alt="Loading..."
        width={width}
        height={height}
        priority
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Center it on the screen
  },
};

export default Loading;
