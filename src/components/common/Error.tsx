import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Error = () => (
  <Box
    display="flex"
    flexDirection="column"
    height="100vh"
    textAlign="center"
    justifyContent="center"
  >
    <Container maxWidth="md">
      <img
        src={"/images/errorimg.svg"}
        alt="404"
        width={500}
        height={500}
        style={{ width: "100%", maxWidth: "500px", maxHeight: "500px" }}
      />
      <Typography align="center" variant="h1" mb={4}>
        Opps!!!
      </Typography>
      <Typography align="center" variant="h4" mb={4}>
        It Looks like you went off-road 🛣️
      </Typography>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/"
        disableElevation
      >
        Back to De-Road
      </Button>
    </Container>
  </Box>
);

export default Error;
