'use client';

import useCounterStore from '../store/counter';
import { Row, PageContainer, Button } from '../components';
import usePopupStore from '../store/popup';

export default function Home() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  const setPopup = usePopupStore((state) => state.setId);

  return (
    <PageContainer>
      <h1>Home</h1>
      <div>

        <h2>Testing Zustand: {count}</h2>
        <Row paddingtop="30px" width="200px">
          <Button onClick={increment} backgroundColor='#dddddd' rounded>+</Button>
          <Button onClick={decrement} backgroundColor='#dddddd' rounded>-</Button>
        </Row>

        <h1></h1>
        <button onClick={ () => {setPopup(1)} }>Open popup</button>

      </div>

    </PageContainer>
  )
}
