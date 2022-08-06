// import { useState } from 'react';
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button,  Container, Typography, Stack,  TextField, Grid } from '@material-ui/core';
// routes
//
import { varWrapEnter, varFadeInRight, varFadeInUp } from '../components/animate';
import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-outline';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400],
  // background: 'url(/images/banner1.jpg)',
  backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    // height: '100vh',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(25),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  // const [age, setAge] = useState('');
  // const [value, setValue] = useState(new Date());
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const popularCats = [
    {
      icon: "",
      name: "Acuppuncturists"
    },
    {
      icon: "",
      name: "Financial Advisers"
    },
    {
      icon: "",
      name: "Moving Service COmpanies"
    },
    {
      icon: "",
      name: "Veterinarinans"
    },
    {
      icon: "",
      name: "Architects"
    },
    {
      icon: "",
      name: "FitnessCenters"
    },
    {
      icon: "",
      name: "Nail Salons"
    },
    {
      icon: "",
      name: "Accounting Firms"
    },
    {
      icon: "",
      name: "Senior Living Communities"
    },
    {
      icon: "",
      name: "Flooring Contractors"
    },
    {
      icon: "",
      name: "Painting COntractors"
    },
    {
      icon: "",
      name: "Chiropractors"
    },
    {
      icon: "",
      name: "Attorneys & Law Firms"
    },
    {
      icon: "",
      name: "Funeral Homes & Services"
    },
    {
      icon: "",
      name: "Pest Control Companies"
    },
    {
      icon: "",
      name: "Eye Doctors & Optometrists"
    },
    {
      icon: "",
      name: "Auto Shops"
    },
    {
      icon: "",
      name: "Grage Door Contractors"
    },
    {
      icon: "",
      name: "Pet Groomers"
    },
    {
      icon: "",
      name: "Family Doctors"
    }
  ]
  const allCats = [
    {
      icon: "",
      name: "Acuppuncturists"
    },
    {
      icon: "",
      name: "Financial Advisers"
    },
    {
      icon: "",
      name: "Moving Service COmpanies"
    },
    {
      icon: "",
      name: "Veterinarinans"
    },
    {
      icon: "",
      name: "Architects"
    },
    {
      icon: "",
      name: "FitnessCenters"
    },
    {
      icon: "",
      name: "Nail Salons"
    },
    {
      icon: "",
      name: "Accounting Firms"
    },
    {
      icon: "",
      name: "Senior Living Communities"
    },
    {
      icon: "",
      name: "Flooring Contractors"
    },
    {
      icon: "",
      name: "Painting COntractors"
    },
    {
      icon: "",
      name: "Chiropractors"
    },
    {
      icon: "",
      name: "Attorneys & Law Firms"
    },
    {
      icon: "",
      name: "Funeral Homes & Services"
    },
    {
      icon: "",
      name: "Pest Control Companies"
    },
    {
      icon: "",
      name: "Eye Doctors & Optometrists"
    },
    {
      icon: "",
      name: "Auto Shops"
    },
    {
      icon: "",
      name: "Grage Door Contractors"
    },
    {
      icon: "",
      name: "Pet Groomers"
    },
    {
      icon: "",
      name: "Family Doctors"
    },
    {
      icon: "",
      name: "Baber Shops"
    },
    {
      icon: "",
      name: "Home Contractrs"
    },
    {
      icon: "",
      name: "Photographers"
    },
    {
      icon: "",
      name: "Home Care"
    },
    {
      icon: "",
      name: "Beauty Salons & Spas"
    },
    {
      icon: "",
      name: "House Cleaning Companies"
    },
    {
      icon: "",
      name: "Plumbers"
    },
    {
      icon: "",
      name: "Plustinc Surgeons"
    },
    {
      icon: "",
      name: "Carpet Cleaners"
    },
    {
      icon: "",
      name: "HVAC / Heating & AC"
    },
    {
      icon: "",
      name: "Pool Service & Repair"
    },
    {
      icon: "",
      name: "Therapists & Psychiasts"
    },
    {
      icon: "",
      name: "Catering Companies"
    },
    {
      icon: "",
      name: "Interior Designers"
    },
    {
      icon: "",
      name: "Private Investigators"
    },
    {
      icon: "",
      name: "Urgent Care Centers"
    },
    {
      icon: "",
      name: "Grage Door Contractors"
    },
    {
      icon: "",
      name: "Pet Groomers"
    },
    {
      icon: "",
      name: "Family Doctors"
    },
    {
      icon: "",
      name: "Family Doctors"
    }
  ]
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Grid container spacing={2} sx={{ width: 1, mx: 'auto' }} justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={12} md={9}>
                  <TextField sx={{ background: 'white' }} label="Search by Name, Category or Location" fullWidth />
                </Grid>
                <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                  <Button variant="contained" sx={{
                    border: "solid 2px #ffb03d",
                    borderRadius: '50px',
                    backgroundColor: "#ffb03d",
                    color: 'white',
                    padding: '10px'
                  }}>
                    Find Business
                  </Button>
                </Grid>
              </Grid>
            </motion.div>
            <Container>
              <motion.div variants={varWrapEnter} style={{ color: "#29B2FE", marginBottom: '20px' }}>
                <Icon icon={homeFill} /> / Categories
              </motion.div>
              <Container>
                <motion.div variants={varFadeInUp}>
                  <Typography sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#173858", fontSize: 30 }}>
                    Popular Categories
                  </Typography>
                  <Grid container spacing={2} sx={{ width: 1, mx: 'auto' }} justifyContent={'center'} alignItems={'center'}>
                    {
                      popularCats.map((p, i) => (
                        <Grid item xs={6} md={3} key={i} sx={{color: '#969090', fontFamily: 'Poppins'}}>
                          {p.name}
                        </Grid>
                      ))
                    }
                  </Grid>
                  <div style={{textAlign: 'right'}}>
                  <Button sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#173858", fontSize: 15, flex: 'end'}}>
                    View More
                  </Button>
                  </div>
                </motion.div>
                <motion.div variants={varFadeInUp}>
                  <Typography sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#173858", fontSize: 30 }}>
                    Browse All Categores
                  </Typography>
                  <Grid container spacing={2} sx={{ width: 1, mx: 'auto' }} justifyContent={'center'} alignItems={'center'}>
                    {
                      allCats.map((p, i) => (
                        <Grid item xs={6} md={3} key={i} sx={{color: '#969090', fontFamily: 'Poppins'}}>
                          {p.name}
                        </Grid>
                      ))
                    }
                  </Grid>
                  <div style={{textAlign: 'right'}}>
                  <Button sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#173858", fontSize: 15, flex: 'end'}}>
                    View More
                  </Button>
                  </div>
                </motion.div>
              </Container>
            </Container>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
