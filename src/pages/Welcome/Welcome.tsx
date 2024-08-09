import { Typography } from '@mui/material';
import styles from './Welcome.module.sass';

const Welcome = () => {
  return (
    <div className={ styles.welcomeWrapper }>
      <Typography 
        className={ styles.welcome }
        variant='body1'
        component='span'
      >
        Добро пожаловать
      </Typography>
    </div>
  )
};

export default Welcome;
