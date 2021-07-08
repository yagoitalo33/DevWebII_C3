import React, {useState, useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Titulo from '../Titulo';
import {getAgendamentos} from '../../services/axios';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Numeros() {

  const [totalAgendamentos, setTotalAgendamentos] = useState(0);

  useEffect(async () => {
    let a = await getAgendamentos();
    setTotalAgendamentos(a.length);
  })

  const classes = useStyles();
  return (
    <React.Fragment>
      <Titulo>Total de Agendamentos</Titulo>
      <Typography component="p" variant="h4">
        {totalAgendamentos}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Data do Último Agendamento
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver Agendamento
        </Link>
      </div>
    </React.Fragment>
  );
}