// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  StoreHero,
  StoreCard,
  // LandingConnect
} from '../components/_external-pages/store';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function StorePage() {
  return (
    <RootStyle title="Business Rate" id="move_top">
      <StoreHero />
      <ContentStyle>
        <StoreCard />
      </ContentStyle>
    </RootStyle>
  );
}
