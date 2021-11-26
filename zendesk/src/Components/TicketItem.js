import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { Component } from 'react'

export class TicketItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isPopUpOpen: false
        }
    }
    openPopUp = () => {
        this.setState({ isPopUpOpen: true })
    }
    handleClose = () => {
        console.log("close")
        // this.setState(prevState => ({
        //     isPopUpOpen: !prevState.isPopUpOpen
        // }));
        this.setState({ isPopUpOpen: false })
    }
    render() {
        console.log(this.state.isPopUpOpen)
        const item = this.props.data
        return (
            <React.Fragment>
                <Dialog
                    // fullScreen={fullScreen}
                    open={this.state.isPopUpOpen}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"Description"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {item.description}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={this.handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <tr className="table-active " onClick={this.openPopUp}>
                    <th scope="row">{item.subject}</th>
                    <td>{item.status}</td>
                    <td>{item.created_at}</td>
                    <td>{item.updated_at}</td>
                    <td >{item.priority}</td>

                </tr>
            </React.Fragment>
        )
    }
}

export default TicketItem
