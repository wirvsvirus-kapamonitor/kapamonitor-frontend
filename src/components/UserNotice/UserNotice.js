import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent } from '@material-ui/core';
import { setConfirm } from '../../store/userNotice/actions';
import { connect } from 'react-redux';

function UserNotice(props) {

    return(
        <Dialog
            style={{backgroundColor:"white"}}
            open={!props.userNoticeConfirmed}
            onClose={()=>{}}
            fullWidth={true}
            maxWidth="md"
        >
            <DialogTitle>Disclaimer</DialogTitle>
         <DialogContent>   Die hier präsentierten Daten sind als Demonstrationsdaten zu verstehen und stellen keine Abbildung der Realität dar,
             sollen keine Auskunft über die Realität geben und haben in keiner Form Bezug zu den genannten Personen und Einrichtungen. Jegliche Ähnlichkeit ist zufällig und unbeabsichtigt.
             Weiterhin werden keine Personenbezogenen Daten verarbeitet oder gespeichert und die hier zur Verfügung gestellten Masken sind ausschließlich als Demonstrationsmuster zu verstehen.
             Ich habe die oben dargelegten Informationen und Sachverhalte verstanden und stimme diesen durch meine Nutzung zu.
         </DialogContent>
            <DialogActions>
                <Button onClick={()=>props.setConfirm(true)} color="primary">
                    Zustimmen
                </Button>

                <Button onClick={()=>props.setConfirm(false)} color="primary">
                    Ablehnen
                </Button>
            </DialogActions>
        </Dialog>
    )

}
const mapStateToProps = state => ({
    userNoticeConfirmed: state.userNotice.userNoticeConfirmed
})

const mapDispatchToProps = {
    setConfirm
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserNotice);
