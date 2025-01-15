"use client";
import { Card, CardHeader, CardContent, Divider, Box } from "@mui/material";

type Props = {
  title: string;
  footer?: string | JSX.Element;
  codeModel?: JSX.Element | JSX.Element[];
  children: JSX.Element;
};

const ParentCard = ({ title, children, footer }: Props) => {

  return (
    <Card
      sx={{
        padding: 0,
        border: `1px solid #e5eaef`,
      }}
      elevation={0}
      variant={"outlined"}
    >
      <CardHeader title={title} />
      <Divider />

      <CardContent>{children}</CardContent>
      {footer ? (
        <>
          <Divider />
          <Box p={3}>{footer}</Box>
        </>
      ) : (
        ""
      )}
    </Card>
  );
};

export default ParentCard;
