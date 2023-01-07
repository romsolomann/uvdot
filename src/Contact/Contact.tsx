import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "../Input/Input";
import { ContactForm } from "../interfaces/contact.interface";
import { StyledWrapper } from "../styled/StyledWrapper";
import theme from "../styled/theme";
import Map, { Popup } from "react-map-gl";
import telephone from "../../public/assets/icons/contact/telephone.svg";
import email from "../../public/assets/icons/contact/mail.svg";
import pin from "../../public/assets/icons/contact/pin.svg";
import Image from "next/image";

export const Contact = () => {
  const { t } = useTranslation();
  const methods = useForm<ContactForm>();
  const onSubmit = methods.handleSubmit((data) => console.log(data));
  return (
    <StyledWrapper
      sx={{ bgcolor: (theme) => theme.palette.background.default }}
    >
      <Typography variant="h2" textAlign="center">
        {t("contact.title")}
      </Typography>
      <Container maxWidth="lg">
        <Grid container mt={10} justifyContent="space-between">
          <Grid container alignItems="center" item md={5}>
            <FormProvider {...methods}>
              <form onSubmit={onSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Input name="name" />
                  </Grid>
                  <Grid item xs={6}>
                    <Input name="phone" />
                  </Grid>
                  <Grid item xs={12}>
                    <Input name="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <Input name="message" multiline rows={5} />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                      }}
                    >
                      {t("buttons.submit")}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </FormProvider>
          </Grid>
          <Grid item md={5}>
            <Map
              initialViewState={{
                longitude: 34.85931290909617,
                latitude: 32.023260883925346,
                zoom: 13.5,
              }}
              style={{ width: "100%", height: "500px" }}
              mapStyle="mapbox://styles/shimon123/clclzvevc00nx14s1sdsfi8i4"
              mapboxAccessToken="pk.eyJ1Ijoic2hpbW9uMTIzIiwiYSI6ImNrcWc5bDRucjBoNmcydW9leXgxaTY5MG0ifQ.cyhkIjRQq_M9KkkYQUOrHg"
              attributionControl={false}
            >
              <Popup
                longitude={34.85931290909617}
                latitude={32.023260883925346}
                anchor="bottom"
                closeButton={false}
                maxWidth={"300px"}
              >
                <Box width={280}>
                  <Typography
                    component="h5"
                    variant="h5"
                    fontWeight={800}
                    mb={2}
                  >
                    {t("title")}
                  </Typography>
                  <Divider />
                  <Box mt={2} display="flex" alignItems="center">
                    <Image
                      src={telephone}
                      alt="telephone"
                      width={15}
                      height={15}
                    />
                    <Typography variant="body2" ml={2}>
                      {t("contact.phone")}
                    </Typography>
                  </Box>
                  <Box mt={2} display="flex" alignItems="center">
                    <Image src={email} alt="email" width={15} height={15} />
                    <Typography variant="body2" ml={2}>
                      {t("contact.email")}
                    </Typography>
                  </Box>
                  <Box mt={2} display="flex" alignItems="center">
                    <Image src={pin} alt="pin" width={15} height={15} />
                    <Typography variant="body2" ml={2}>
                      {t("contact.address")}
                    </Typography>
                  </Box>
                </Box>
              </Popup>
            </Map>
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  );
};
