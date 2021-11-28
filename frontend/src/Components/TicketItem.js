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
        this.setState({ isPopUpOpen: false })
    }
    render() {
        const item = this.props.data
        return (
            <React.Fragment>
                <Dialog
                    open={this.state.isPopUpOpen}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                    maxWidth="md"
                    fullWidth
                >
                    <DialogTitle id="responsive-dialog-title" style={{textAlign:'center'}}>
                        {"Ticket Details"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {item.description}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <div className ="container">
                            <div className = "row">                         
                                <div className = "col-md-4">   
                                    Requester ID: {item.requester_id}
                                </div>
                                <div className = "col-md-4">   
                                    Submitter ID: {item.submitter_id}
                                </div>  
                                <div className = "col-md-4">   
                                    Assignee ID {item.assignee_id}
                                </div> 
                            </div>
                            <div className = "row" style={{marginTop:"10px"}} >
                                <div className = "col-md-12">
                                    <center><Button autoFocus onClick={this.handleClose}>
                                        Close
                                    </Button></center>   
                                </div>
                            </div>
                        </div>
                    </DialogActions>
                </Dialog>
                <tr className="table-active" onClick={this.openPopUp}>
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
