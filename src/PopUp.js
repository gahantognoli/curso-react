import M from 'materialize-css';

const PopUp = {
    exibeMensagem: (status, mensagem) => {
        if (status === 'success') {
            M.toast({
                html: mensagem,
                calsses: 'green',
                displayLength: 2000
            });
        }

        if (status === 'error') {
            M.toast({
                html: mensagem,
                calsses: 'red',
                displayLength: 2000
            });
        }
    }
}

export default PopUp;