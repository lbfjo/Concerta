/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
// import BannerImg from "assets/banner-thumb.png";
import ShapeLeft from "assets/leftasset.png";
import ShapeRight from "assets/shape-right.png";
import Banner from "./banner";

export default function Maintenance() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h3" variant="heroPrimary">
            Maintenance{" "}
          </Heading>
          {/* <Text as="p" variant="heroSecondary">
            Get your blood tests delivered at let home collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </Text> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  content: {
    h3: {
      color: "black",
      fontWeight: "bold",
      lineHeight: [1.39],
      letterSpacing: ["-.7px", "-1.5px"],
      mb: ["15px", null, null, null, "20px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, "90%", "100%", "540px"],
      fontSize: [6, null, null, "36px", null, "55px", 9],
    },
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ["26px", null, null, null, 2.33],
      color: "text_secondary",
      mb: ["20px", null, null, null, null, "30px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, null, null, "410px"],
      br: {
        display: ["none", null, null, null, "inherit"],
      },
    },
  },
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    button: {
      margin: "2px",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 4],
      h3: {
        color: "black",
        fontWeight: "bold",
        lineHeight: [1.39],
        letterSpacing: ["-.7px", "-1.5px"],
        mb: ["15px", null, null, null, "20px"],
        width: ["100%"],
        maxWidth: ["100%", null, null, "90%", "100%", "1500px"],
        fontSize: [6, null, null, "36px", null, "55px", 9],
      },
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
