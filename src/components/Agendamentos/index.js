import React, {useState, useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Titulo from "../Titulo"
import { getAgendamentos } from '../../services/axios';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Agendamentos() {
    const classes = useStyles();
    
    const [agendamentos, setAgendamentos] = useState([]);
    useEffect(async () => {
        try{
            let a = await getAgendamentos();
            setAgendamentos(a);
        }catch(error){
            console.log(error);
        }
    }, [])

    return (
        <React.Fragment>
            <Titulo>Agendamentos</Titulo>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Data</TableCell>
                        <TableCell>Cidadão</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell>Local</TableCell>
                        <TableCell align="right">Data/Hora</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {agendamentos.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.username}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.website}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Ver Mais Agendamentos
                </Link>
            </div>
        </React.Fragment>
    );
}