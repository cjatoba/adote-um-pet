import { Link, Box } from '@mui/material';
import NextLink from 'next/link';
import {
  HeaderContainer,
  Logo,
  LinksContainer
} from './HeaderAdmin.style';

export default function HeaderAdmin() {
  return (
    <HeaderContainer>
      <div>
        <Logo src={'/images/logo.svg'} alt={'Adote um Pet'}/>
        <LinksContainer>
          <Link component={NextLink} href={'/pets/register'}>
            <a>Cadastrar Pet</a>
          </Link>
          <Link component={NextLink} href={'/pets/report'}>
            <a>
              Relatório{' '}
              <Box
                component={'span'}
                sx={{display:{ sm: 'initial', xs: 'none' }}}
              >
                de Adoções
              </Box>
            </a>
          </Link>
        </LinksContainer>
      </div>
    </HeaderContainer>
  )
}