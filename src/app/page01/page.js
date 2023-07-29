'use client'
import { useState } from 'react';
import { Row } from '@/components';
import http from '../../services/http';
import { PageContainer } from '@/components';
import Button from '@mui/material/Button';

const Page01 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  return (
    <PageContainer>
      <h1>Add an item to the list</h1>
      <br />
      <h2>Insert a new record:</h2>
      <p>Name: </p><input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Price: </p><input type="number" onChange={(e) => setPrice(e.target.value)} />

      {loading ? <p>Inserting...</p> :
        <button onClick={async () => {
          setLoading(true);
          await http.post("/api01", { name, price });
          setLoading(false)
        }}>Insert</button>
      }

    </PageContainer>
  );
}

export default Page01;
