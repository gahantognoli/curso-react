import React, { Fragment } from 'react';
import Header from '../../components/Cabecalho';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useEstilos = makeStyles({
    titulo: {
        textAlign: 'center',
        color: 'blue'
    }
})

const Sobre = () => {
    const classes = useEstilos();

    return (
        <Fragment>
            <Header />
            <Container maxWidth='sm'>
                <Typography variant="h1" component="h2">Sobre</Typography>
                <Typography className={classes.titulo} variant="body1" component="p">
                    Sunt in elit nisi incididunt culpa eiusmod Lorem esse.
                    Cupidatat duis ad laboris occaecat est mollit sit ea esse.
                    Mollit eu eu velit occaecat nulla cupidatat ad sit reprehenderit enim aute nostrud irure.
                    Aliquip Lorem incididunt dolore non irure consequat ad ad voluptate pariatur dolor nostrud
                    culpa qui. Tempor eu dolore occaecat deserunt. Adipisicing mollit mollit ut excepteur
                    reprehenderit et cupidatat id ex adipisicing cillum duis commodo.
                </Typography>
            </Container>
        </Fragment>
    );
}

export default Sobre;