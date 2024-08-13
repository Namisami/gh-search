import Alert from '@mui/material/Alert';
import styles from './Error.module.sass';

interface ErrorProps {
  message: string
}

const Error = ({ 
  message 
}: ErrorProps) => {
  return (
    <div className={ styles.error }>
      <Alert severity='error'>{ message }</Alert>
    </div>
  )
}

export default Error;
