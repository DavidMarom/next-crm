'use client';
import Image from 'next/image'
import styles from './page.module.css'
import useCounterStore from '../store/counter';
import { Row, Col, PageContainer } from '../components';

export default function Home() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <PageContainer>
      <h1>Home</h1>
      <div>

        <p>Testing Zustand: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

    </PageContainer>
  )
}
