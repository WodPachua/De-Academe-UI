"use client";
import { useEffect, useState } from "react";

import { Grid, Box } from "@mui/material";
import PageContainer from "../components/layout/PageContainer";
// components
import YearlyBreakup from "../components/home/YearlyBreakup";
import MonthlyEarnings from "../components/home/MonthlyEarnings";
import TopCards from "../components/home/TopCards";
import RevenueUpdates from "../components/home/RevenueUpdates";
import Welcome from "../components/layout/shared/welcome/Welcome";

function HomePage() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box >
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} lg={12}>
            <TopCards />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={8}>
            <RevenueUpdates isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={12}>
                <YearlyBreakup isLoading={isLoading} />
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                <MonthlyEarnings isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Welcome />
      </Box>
    </PageContainer>
  );
}

export default HomePage;
