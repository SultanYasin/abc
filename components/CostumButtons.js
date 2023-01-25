import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './my-style.module.css'

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      
      <Button variant="contained"  className={styles.primaryBtn} >
        BTN1
      </Button>
      <Button variant="outlined" className={styles.secondaryBtn}>
        BTN2
      </Button>
    </Stack>
  );
}