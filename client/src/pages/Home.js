// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  StoreHero,
  Businesses,
  Claim,
  Cities,
  Awarded,
  Goal
  // LandingConnect
} from '../components/_external-pages/home';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  // backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <RootStyle title="Business Rate" id="move_top">
      <StoreHero />
      <ContentStyle>
        <Businesses />
        <Claim />
        <Cities />
        <Awarded />
        <Goal />
      </ContentStyle>
    </RootStyle>
  );
}
