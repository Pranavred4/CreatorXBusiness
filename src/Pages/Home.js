import React from "react";
import ReactDOM from "react-dom/client";
import BoxSx from "./Box.js";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import businessImg from '../images/business.png';
import creatorImg from '../images/creator.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <Item>
              <BoxSx  title="Business" count="8000" img={businessImg} /> 
            </Item>
          </Grid>
          <Grid item xs={4} md={4}>
          <Item>
          <BoxSx  title="Contracts" count="1000" img={businessImg} /> 
          </Item>
            </Grid>
          <Grid item xs={4} md={4}>
            <Item>
             <BoxSx title="Content Creators" count="100,100" img={creatorImg} /> 
            </Item>
          </Grid>

         
        </Grid>
      </Box>
   
  );
}
