'use client'
import { useEffect, useState } from 'react';
import { Row } from '@/components';
import http from '../../services/http';
import { PageContainer } from '@/components';
import { Table } from 'antd';

const Page02 = () => {
  const [data, setData] = useState([
    {
      name: "test",
      price: 0,
      key: 1
    }
    
  ]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => { getData() }, []);

  const getData = async () => {
    setLoading(true);
    const res = await http.get("/api01",);
    console.log(res.data);
    // setData(res.data);
    // const dataSource = orgDataSource.map((item, index) => { return { ...item, key: index } })

    setLoading(false);
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Id',
      dataIndex: '_id',
      key: '_id',
    }
  ];

  return (
    <Row>
      <PageContainer>
        <h1>Calling mongoDB</h1>



        {!loading ? <Table dataSource={data} columns={columns} /> : null}
      </PageContainer>
    </Row>
  );
}

export default Page02;
