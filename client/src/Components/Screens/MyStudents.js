import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const MyStudents = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        let mounted = true;
        fetch('/mystudents', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                if (mounted) {
                    setData(result)
                }
            })

        return () => mounted = false;
    }, [])

    const columns = [
        { id: 'studentName', label: 'Student Name', minWidth: 170 },
        { id: 'rollNumber', label: 'Roll Number', minWidth: 100 },
    ];

    const rows = Object.entries(data)

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%' }} style={{marginTop:"60px"}}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={12}>
                                Student Details
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 57, minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                const studentId=(row[1]._id)
                                return (
                                    <TableRow component={Link} to={'/mystudents/'+studentId} hover={true} role="checkbox" tabIndex={-1} key={row.code} style={{textDecoration:"none"}}>
                                        {columns.map((column) => {
                                            const value = row[1][column.id];
                                            return (
                                                <TableCell  key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default MyStudents;