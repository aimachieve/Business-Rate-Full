// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import { CategoryCarousel } from '../../carousel';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: '#F7F7F7'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));
// ----------------------------------------------------------------------

export default function LandingHugeAbout() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography sx={{ mb: 3,  fontFamily: 'PoppinsBold', color: "#173858", fontSize: 40 }}>
              Promote your Ranking online or in your store
            </Typography>
            
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <CategoryCarousel />
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
