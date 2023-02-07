import React,{useState} from 'react';
import { Box, Container, Grid, Button, Input, Heading, Text } from 'theme-ui';
import styled from 'styled-components'

import axios from 'axios';
import Image from 'components/image';

import img1 from 'assets/partner-1-1.png';
import img2 from 'assets/partner-1-2.png';
import img3 from 'assets/partner-1-3.png';
//import subscribe from 'pages/api/subscribe';
import bannerImg from 'assets/banner-image-1-1.jpg';
import MyModal from 'components/myModal';
const SuccessState = styled.p`
  color: #087d07;
  padding-top: 20px;
`
const ErrorState = styled.p`
  color: #b00020;
  padding-top: 20px;
`

const Banner = () => {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    console.log(e)
    e.preventDefault()
    setState('Loading')

    try {
      const response = await axios.post('/api/subscribe', { email })
      console.log(response)
      setState('Success')
      setEmail('')
    } catch (e) {
      console.log(e.response.data.error)
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
    <Box sx={styles.banner} id="banner">
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <Heading as="h3">
            Shortening the gap between the producer and the final consumer
            </Heading>
            <Text as="p">
            Concerta was created in 2021 and is a pioneer in the approach of consulting agrobusiness

            </Text>
            <Box as="form" sx={styles.form}>
              <Box as="label" htmlFor="subscribe" variant="styles.srOnly">
                subscribe
              </Box>
              <Input
                name="subscribe"
                id="subscribe"
                placeholder="Subscribe newsletter"
                sx={styles.form.input}
                onChange={(e) => setEmail(e.target.value)}

              />
              <Button type="submit" sx={styles.form.button}  onClick={subscribe}
 >
                Subscribe
              </Button>
           
            </Box>
            console.log('teste')
            {state === 'Error' && (
          <MyModal  >{errorMsg}</MyModal>
        )}
        {state === 'Success' && (
          <MyModal >Awesome, you've been subscribed!</MyModal>
        )}
            <Box sx={styles.partner}>
              <Text as="span">Sponsored by:</Text>
              <Box as="div">
                <Image src={img1} alt="" />
              </Box>
              <Box as="div">
                <Image src={img2} alt="" />
              </Box>
              <Box as="div">
                <Image src={img3} alt="" />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.image}>
            <Image src={bannerImg} alt="" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    pt: ['110px', null, null, null, '150px', '200px'],
    pb: ['50px', null, null, null, '60px', null, '0'],
    backgroundColor: '#F6F8FB',
    overflow: 'hidden',
  },
  container: {
    width: [null, null, null, null, null, null, '1390px'],
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    gridGap: '0',
  },
  content: {
    h3: {
      color: 'black',
      fontWeight: 'bold',
      lineHeight: [1.39],
      letterSpacing: ['-.7px', '-1.5px'],
      mb: ['15px', null, null, null, '20px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, '90%', '100%', '540px'],
      fontSize: [6, null, null, '36px', null, '55px', 9],
    },
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ['26px', null, null, null, 2.33],
      color: 'text_secondary',
      mb: ['20px', null, null, null, null, '30px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, null, null, '410px'],
      br: {
        display: ['none', null, null, null, 'inherit'],
      },
    },
  },
  form: {
    mb: ['30px', null, null, null, null, '60px'],
    display: ['flex'],
    input: {
      borderRadius: ['4px'],
      backgroundColor: '#fff',
      width: ['240px', null, null, null, '315px', null, '375px'],
      height: ['45px', null, null, '55px', null, null, '65px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
    },
    button: {
      fontSize: [1, null, null, null, 2, '20px'],
      borderRadius: ['4px'],
      padding: ['0 15px'],
      ml: ['10px'],
      width: ['auto', null, null, null, '180px'],
    },
  },
  image: {
    img: {
      display: 'flex',
      mixBlendMode: 'darken',
      position: 'relative',
      top: ['0', null, null, null, null, '-40px'],
      maxWidth: ['100%', null, null, null, null, null, 'none'],
    },
  },
  partner: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    mb: ['40px'],
    '> div + div': {
      ml: ['10px', null, null, '20px', null, '30px'],
    },
    img: {
      display: 'flex',
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: '#566272',
      lineHeight: [1],
      opacity: 0.6,
      display: 'block',
      mb: ['20px', null, null, null, '0px'],
      mr: [null, null, null, null, '20px'],
      flex: ['0 0 100%', null, null, null, '0 0 auto'],
    },
  },
  Modal: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    mb: ['40px'],
    
    '> div + div': {
      background:'#566272',
      ml: ['10px', null, null, '20px', null, '30px'],
    },
  },
};