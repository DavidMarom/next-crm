'use client'
import react, { useEffect, useState } from 'react';
import { Row } from '@/components';
import http from '../../services/http';
import { PageContainer } from '@/components';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';


const Page02 = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [rows, setRows] = useState(typeof window !== 'undefined' && (localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : []);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => { getData() }, []);

  const getData = async () => {
    setLoading(true);
    const res = await http.get("/api01");
    localStorage.setItem("data", JSON.stringify(res.data));
    setRows(res.data);
    setLoading(false);
  }

  const columns = [
    { id: '_id', label: 'ID', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'price', label: 'Price', minWidth: 100 },
  ];

  return (
    <Row>
      <PageContainer>
        <h1>Calling mongoDB</h1>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>

              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      }

                      )}
                      <TableCell>
                        {deleteLoading ?
                          <p>Deleting...</p> :
                          <button onClick={async () => {
                            setDeleteLoading(true);
                            const res = await http.delete("/api01", { params: { id: row._id } });
                            getData();
                            setDeleteLoading(false);
                          }}>Delete</button>
                        }
                      </TableCell>
                    </TableRow>
                  );
                })}

            </TableBody>

          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

      </PageContainer>
    </Row >
  );
}

export default Page02;
