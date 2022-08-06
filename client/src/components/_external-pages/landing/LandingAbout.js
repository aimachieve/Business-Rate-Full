// material
import { styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, Stack, Table, TableBody, TableCell, TableRow, Rating, Button, Chip } from '@material-ui/core';
//
import { MotionInView, varFadeInUp } from '../../animate';
import Logo from '../../Logo'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'left',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
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
  function createData(name, rate) {
    return { name, rate };
  }

  const rows = [
    createData('1. In-N-Out Burger', 0),
    createData('2. Del Taco', 0),
    createData('3. Subway', 99.76),
    createData('4. EI Torrito Grill', 0),
    createData('5. So-Cal Fish Tacos', 0),
    createData("6. Rally's", 0),
    createData('7. Sol Mexican Cantina', 0),
    createData('8. Rainbow Donuts', 0),
    createData('9. FTK Sandwiches', 0),
    createData('10. Pancakes Galore', 0),
  ];

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={8} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={6} justifyContent={'center'}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Stack direction={'row'} alignItems={'center'} spacing={3}>
                  <img src="/images/subway.png" alt="subway" style={{ width: '140px', height: '70px' }} />
                  <Stack>
                    <Typography sx={{ fontFamily: 'PoppinsBold', color: "#1d4871", fontSize: 40 }}>
                      Subway
                    </Typography>
                    <Stack direction="rows" spacing={2}>
                      <Rating name="size-large" defaultValue={4.98} size="large" />
                      <Typography sx={{ mb: 3, fontFamily: 'Poppins', color: "#1d4871", fontSize: 15, textAlign: 'center' }}>
                        <b> 4.98 avg </b> / 12,596 ratings
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Stack justifyContent={'center'} alignItems="center" spacing={3} sx={{ mb: 2, mt: 2 }}>
                  <Stack direction="row" justifyContent="center" sx={{ width: 250 }}>
                    <Box component="img" sx src="/images/badge_new.jpg" />
                  </Stack>
                  <Typography sx={{ fontSize: 40, fontFamily: "PoppinsBold", color: "#1d4871", textAlign: 'left' }}>
                    Claim Your FREE <br />
                    Website Badge Today!
                  </Typography>
                  <Typography sx={{ fontSize: 10, fontWeight: 700, fontFamily: "Poppins" }}>
                    Get your digital badge for free and use it on your social media, website, newsletter, and more. Badges are only awarded to busninesses that have ranked in the hightest in their location and category. The badge will link your customers to your ranking so they can see how AWESOME your busniness is doing.
                  </Typography>
                  <Button variant="contained" sx={{ borderRadius: '30px', backgroundColor: "#1d4871", fontSize: 20, fontFamily: "Poppins" }}>Claim Now</Button>
                </Stack>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <MotionInView threshold={0.5} variants={varFadeInUp}>
              <Logo />
            </MotionInView>
            <MotionInView threshold={0.5} variants={varFadeInUp}>
              <Table sx={{ width: 350, border: 'solid 1px black', marginTop: '10px', borderRadius: '50px' }} size="small" aria-label="a dense table">
                {/* <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead> */}
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderBottom: 'solid 1px black', color: "#1d4871",
                      '&:hover': {
                        borderRadius: "solid 3px #1d4871",
                        bgColor: 'red'
                      } }}
                    >
                      <TableCell component="th" scope="row" style={{
                        cursor: "pointer"
                      }}>
                        <Stack direction="row" spacing={3}>
                          <Typography sx={{color: "#1d4871", fontSize: '20px', fontFamily: 'Poppins'}}>
                            {row.name}
                          </Typography>
                          <Typography>
                            {row.rate !== 0 ? <Chip label="99.76 Rating Score ™" color='primary' /> : ""}
                          </Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
