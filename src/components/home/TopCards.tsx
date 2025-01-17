'use client'
import { Box, CardContent, Grid, Typography } from "@mui/material";
import { RootState } from "../../store/appStore";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/appStore";
import { fetchClients } from "../../store/slices/clientSlice";

const TopCards = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchClients());
}, [dispatch]);

  const clients = useSelector((state: RootState) => state.clients.clients);
  const numberOfClients = clients.length;

  const topcards = [
    {
      icon: '/images/svgs/icon-briefcase.svg',
      title: "Clients",
      digits: numberOfClients.toString(),
      bgcolor: "warning",
    },
    {
      icon: '/images/svgs/icon-user-male.svg',
      title: "Employees",
      digits: "0",
      bgcolor: "primary",
    },
    {
      icon: '/images/svgs/icon-mailbox.svg',
      title: "Projects",
      digits: "0",
      bgcolor: "secondary",
    },
    {
      icon: '/images/svgs/icon-favorites.svg',
      title: "Modules",
      digits: "0",
      bgcolor: "error",
    },
    {
      icon: '/images/svgs/icon-speech-bubble.svg',
      title: "Payroll",
      digits: "0",
      bgcolor: "success",
    },
    {
      icon: '/images/svgs/icon-connect.svg',
      title: "Reports",
      digits: "0",
      bgcolor: "info",
    },
  ];

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