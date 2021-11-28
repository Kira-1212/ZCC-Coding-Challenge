import React, { Component } from 'react'
import TicketItem from './TicketItem'
import LinearProgress from '@mui/material/LinearProgress';
import { Dialog, Stack, TablePagination } from '@mui/material';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button} from '@mui/material'
var axios = require('axios').default
export class TicketsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ticketsList: [],
            isLoading: true,
            isError: false,
            page: 0,
            rowsPerPage: 25,
            errormessage:""
        }
    }

    componentDidMount() {

        axios.get("http://localhost:3001/tickets").then((res) => {
            if(res.data.status === 401)
            {
                this.setState({
                    isError: true,
                    isLoading: false,
                    errormessage:"Authorization error, please check the credentials in the backend",
                    ticketsList:[]
                })  
            }
            else if(res.data.tickets.length === 0){
                this.setState({
                    isError: true,
                    isLoading: false,
                    errormessage:"No tickets to display",
                    ticketsList:[]
                }) 
            } 
            else
            {
            this.setState({
                ticketsList: res.data.tickets,
                isLoading: false
            })
        }
        })
        .catch((err) => {
            this.setState({
                isError: true,
                isLoading: false,
                errormessage:"Something went wrong with the API, please check and try again",
                ticketsList:[]
            })  
        })
    }
    handleChangePage = (event, newPage) => {
        this.setState({ page: newPage })
    }
    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0
        })
    }
    handleClose = ()=>
    {
        this.setState(
            {
                isError:false
            })
    }
    render() {
        return (
            <div className="container mt-4">
                <h2 style={{textAlign: 'center'}}>Zendesk Ticket Viewer</h2>
                <TablePagination
                    component="div"
                    count={this.state.ticketsList.length}
                    page={this.state.page}
                    onPageChange={this.handleChangePage}
                    rowsPerPage={this.state.rowsPerPage}
                    onRowsPerPageChange={this.handleChangeRowsPerPage}
                />
                <table className="table table-dark">
                    
                    <tbody>
                        <tr>
                            <td>Subject</td>
                            <td>Status</td>
                            <td>Created At</td>
                            <td>Updated At</td>
                            <td>Priority</td>
                        </tr>
                        <tr>
                            <td colSpan="5" className="table-active">
                                {this.state.isLoading === true ? (
                                    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                                        <LinearProgress color="inherit" />
                                    </Stack>
                                ) : ""}
                            </td>
                        </tr>
                        {(this.state.rowsPerPage > 0
                            ? this.state.ticketsList.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                            : this.state.ticketsList
                        ).map((item) => {
                            return <TicketItem   data={item} key={item.id}></TicketItem>
                        })}
                    </tbody>
                </table>
                <Dialog
                    open={this.state.isError}
                    aria-labelledby="responsive-dialog-title"
                    
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"Oops!!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.state.errormessage}
                        </DialogContentText>
                    </DialogContent>
                    <Button autoFocus onClick={this.handleClose}>
                            Close
                        </Button> 
                </Dialog>
            </div>
        )
    }
}

export default TicketsList
