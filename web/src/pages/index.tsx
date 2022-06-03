import type { NextPage } from 'next';
import Title from '../ui/components/Title/Title';
import List from '../ui/components/List/List';

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
      <List 
        pets={[
          {
            id: 1,
            name: 'Pipoca',
            history: 'loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat!',
            picture: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          },
          {
            id: 2,
            name: 'Rafinha',
            history: 'Rafinha é um cãozinho muito fofo',
            picture: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          }
        ]}
      />
    </div>
  )
}

export default Home
