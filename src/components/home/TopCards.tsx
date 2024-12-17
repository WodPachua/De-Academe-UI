'use client'
import { Box, CardContent, Grid, Typography } from "@mui/material";

const topcards = [
  {
    icon: '/images/svgs/icon-briefcase.svg',
    title: "Clients",
    digits: "50",
    bgcolor: "warning",
  },
  {
    icon: '/images/svgs/icon-user-male.svg',
    title: "Employees",
    digits: "8",
    bgcolor: "primary",
  },

  {
    icon: '/images/svgs/icon-mailbox.svg',
    title: "Projects",
    digits: "3",
    bgcolor: "secondary",
  },
  {
    icon: '/images/svgs/icon-favorites.svg',
    title: "Modules",
    digits: "6",
    bgcolor: "error",
  },
  {
    icon: '/images/svgs/icon-speech-bubble.svg',
    title: "Payroll",
    digits: "3m",
    bgcolor: "success",
  },
  {
    icon: '/images/svgs/icon-connect.svg',
    title: "Reports",
    digits: "4",
    bgcolor: "info",
  },
];

const TopCards = () => {
  return (
    <Grid container spacing={3}>
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={2} key={i}>
          <Box bgcolor={topcard.bgcolor + ".light"} textAlign="center">
            <CardContent>
              <img src={topcard.icon} alt={"topcard.icon"} width="50" height="50" />
              <Typography
                color={topcard.bgcolor + ".main"}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >
                {topcard.title}
              </Typography>
              <Typography
                color={topcard.bgcolor + ".main"}
                variant="h4"
                fontWeight={600}
              >
                {topcard.digits}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
