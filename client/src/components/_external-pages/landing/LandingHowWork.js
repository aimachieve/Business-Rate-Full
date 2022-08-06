// material
import { styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, Stack, Button } from '@material-ui/core';
//
import { MotionInView, varFadeInUp } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}));

// ----------------------------------------------------------------------

export default function LandingDarkMode() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={8} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Stack spacing={5}>
                  <Typography sx={{ fontFamily: 'PoppinsBold', color: "#173858", fontSize: 30 }}>
                    BusinessRate ® businesses in each state are awarded yearly
                  </Typography>
                  <Typography sx={{ fontSize: 15, fontWeight: 700, fontFamily: "Poppins" }}>
                    Get your digital badge for free and use it on your social media, website, newsletter, and more. Badges are only awarded to busninesses that have ranked in the hightest in their location and category. The badge will link your customers to your ranking so they can see how AWESOME your busniness is doing.
                  </Typography>
                  <Stack direction="row" spacing={3}>
                    <Button variant="outlined" sx={{ borderRadius: '30px', fontSize: 15, fontFamily: "Poppins" }}>
                      See Award Winners
                    </Button>
                    <Button variant="contained" sx={{ borderRadius: '30px', fontSize: 15, fontFamily: "Poppins" }}>
                      Create Free Account
                    </Button>
                  </Stack>
                </Stack>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <MotionInView threshold={0.5} variants={varFadeInUp}>
              <Box component="img" src="/images/badge_topRated.webp" />
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
