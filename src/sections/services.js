import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

import icon1 from 'assets/icons/BEMESTAR.png';
import icon2 from 'assets/icons/Sustentabilidade.png';
import icon3 from 'assets/icons/OneHealth.png';

const SERVICES_DATA = [
  {
    icon: icon3,
    title: 'One Health',
    text:
      'Reducing the distance between consumers and producers means also thinking about the concept of One Health, how the actions taken in one end can have great impact in the other. ',
  },
  {
    icon: icon2,
    title: 'Sustainability',
    text:
      'Aligned with the concept of One Health , our approach to the Sustainability concept lies on the need to implement greener, cleaner production practices in many of nowadays production systems.',
  },
  {
    icon: icon1,
    title: 'Animal Welfare',
    text:
      'Animal Welfare is were it all started. The growing awareness of the consumers concerning animal welfare and production methodologies has led to an increase in the search of welfare certifications. ',
  },
];

const Services = () => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <BlockTitle
          slogan="Quality features"
          title="Concerta Principles"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.icon} alt="" />
              </Box>
              <Heading as="h3">{service.title}</Heading>
              <Text as="p">{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
      },
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
      },
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
      },
    },
  },
  blockTitle: {
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      '1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['80px', null, null, '110px'],
    height: ['80px', null, null, '110px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
   
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
};
