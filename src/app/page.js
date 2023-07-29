'use client';
import Image from 'next/image'
import styles from './page.module.css'
import useCounterStore from '../store/counter';
import { Row, Col, PageContainer, Button } from '../components';

export default function Home() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <PageContainer>
      <h1>Home</h1>
      <div>

        <h2>Testing Zustand: {count}</h2>
        <Row paddingtop="30px" width="200px">
          <Button onClick={increment} backgroundColor='#dddddd' rounded>+</Button>
          <Button onClick={decrement} backgroundColor='#dddddd' rounded>-</Button>
        </Row>
      </div>

    </PageContainer>
  )
}
