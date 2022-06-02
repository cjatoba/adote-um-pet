import type { NextPage } from 'next';
import Title from '../ui/components/Title/Title';
import { Subtitle } from '../ui/components/Title/Title.style';

const Home: NextPage = () => {
  return (
    <div>
      <Title
        title=""
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
    </div>
  )
}

export default Home
