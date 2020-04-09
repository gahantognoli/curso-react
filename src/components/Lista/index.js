import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Lista(props) {
    const { dados, chave } = props;
    return (
        <List component="nav">
            <ul>
                {
                    dados.map(item => (
                        <ListItem key={item.id}>
                            <ListItemText primary={item[chave]} />
                        </ListItem>)
                    )
                }
            </ul>
        </List>
    )
}

export default Lista;