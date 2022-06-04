import { Button} from '@mui/material'
import { Pet } from '../../../data/@types/Pet';
import { TextService } from '../../../data/services/TextService';
import {
  ListStyled,
  ItemList,
  Picture,
  Information,
  Name,
  Description,
} from './List.style';

interface ListProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function List(props: ListProps) {
  const textSizeLimit = 200;
  
  return (
    <ListStyled>
      {props.pets.map(pet => (
        <ItemList key={pet.id}>
          <Picture
            src={pet.picture}
            alt={pet.name}
          />
          <Information>
            <Name>{pet.name}</Name>
            <Description>
              {TextService.textLimiter(pet.history, textSizeLimit)}
            </Description>
            <Button
                variant={'contained'}
                fullWidth
                onClick={() => props.onSelect(pet)}
            >
                Adotar {pet.name}
            </Button>
          </Information>
        </ItemList>
      ))}
    </ListStyled>
  );
}