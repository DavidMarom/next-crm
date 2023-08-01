'use client'
import react, { useEffect, useState } from 'react';
import { Col, Row, Card01 } from '@/components';
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
  const [editPopupOn, setEditPopupOn] = useState(false);

  const [editPopupData, setEditPopupData] = useState({});

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

  const triggerEditPopup = (row) => {
    console.log(row);
    setEditPopupData(row);
    setEditPopupOn(true);
  }

  const columns = [
    { id: '_id', label: 'ID', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'price', label: 'Price', minWidth: 100 },
  ];

  return (
    <PageContainer>
      <h1>Calling mongoDB</h1>
      {editPopupOn &&
        <Card01 background="#555555" direction="column">
          <h2>Edit a record:</h2>
          <Row>
            <div>
              <p>Name</p>
              <input type="text" name="name" onChange={(e) => { setEditPopupData({ ...editPopupData, name: e.target.value }) }} value={editPopupData.name} />
            </div>
            <div>
              <p>Price</p>
              <input type="text" name="price" onChange={(e) => { setEditPopupData({ ...editPopupData, price: e.target.value }) }} value={editPopupData.price} />
            </div>
            <div>
              <button onClick={async () => {
                setDeleteLoading(true);
                await http.put("/api01", editPopupData);
                await getData();
                setDeleteLoading(false);
                setEditPopupOn(false);
              }}>Save</button>
              <button onClick={() => { setEditPopupOn(false) }}>Cancel</button>
            </div>
          </Row>
        </Card01>
      }


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
                        <div>
                          <button onClick={async () => {
                            setDeleteLoading(true);
                            await http.delete("/api01", { params: { id: row._id } });
                            await getData();
                            setDeleteLoading(false);
                          }}>Delete</button>

                          <button onClick={() => { triggerEditPopup(row) }}>
                            Edit
                          </button>
                        </div>
                      }
                    </TableCell>
                  </TableRow>
                );
              })}

          </TableBody>

        </Table>
      </TableContainer>
      <Card01>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card01>
    </PageContainer>
  );
}

export default Page02;
