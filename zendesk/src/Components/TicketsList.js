import React, { Component } from 'react'
import TicketItem from './TicketItem'
import LinearProgress from '@mui/material/LinearProgress';
import { Dialog, Pagination, Stack, TablePagination } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
var axios = require('axios').default
export class TicketsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ticketsList: [],
            isLoading: true,
            isError: false,
            page: 0,
            rowsPerPage: 10
        }
    }

    componentDidMount() {

        axios.get("http://localhost:3001/tickets").then((res) => {
            console.log(res.data)
            this.setState({
                ticketsList: res.data.tickets,
                isLoading: false
            })
        }).catch((err) => {
            console.log(err)
            this.setState({
                isError: true,
                isLoading: false
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
    render() {
        return (

            <div className="container mt-4">

                <h2>Ticketing Tool</h2>
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
                                {this.state.isLoading == true ? (
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
                            return <TicketItem data={item} key={item.id}></TicketItem>
                        })}


                        {/* {this.state.isLoading == false ? this.state.ticketsList.map(item => {
                            return <TicketItem data={item}></TicketItem>
                        }) : ""} */}

                    </tbody>
                </table>
                <Dialog
                    // fullScreen={fullScreen}
                    open={this.state.isError}
                    // onClose={false}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"Oops!!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Something went wrong, Please come back later
                        </DialogContentText>
                    </DialogContent>

                </Dialog>
            </div>
        )
    }
}

export default TicketsList
