"use client";
import React, { useState } from "react";
import {
  Container,
  Grid,
  Stack,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";

export default function Dashboard() {
  const [fieldsVisibility, setFieldsVisibility] = useState<any>({
    field1: true,
    field2: true,
    field3: true,
    field4: true,
    field5: true,
    field6: true,
    field7: true,
    field8: true,
    field9: true,
    field10: true,
    field11: true,
    field12: true,
    field13: true,
    field14: true,
    field15: true,
    field16: true,
    field17: true,
    field18: true,
    field19: true,
    field20: true,
    field21: true,
  });
  const [finalData, SetFinalData] = useState<any>({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
    field8: "",
    field9: "",
    field10: "",
    field11: "",
    field12: "",
    field13: "",
    field14: {},
    field15: "",
    field16: "",
    field17: "",
    field18: "",
    field19: "",
    field20: "",
    field21: "",
  });
  const [age, setAge] = React.useState("");
  const [nationality, setNationality] = useState("");

  const handleAgeChange = (event: any) => {
    setAge(event.target.value);
    SetFinalData({ ...finalData, field4: event.target.value });
    switch (event.target.value) {
      case 10: {
        setFieldsVisibility({
          ...fieldsVisibility,
          ...{
            field13: false,
            field1: false,
            field21: false,
            field15: true,
            field10: true,
            field19: true,
            field14: true,
            field8: true,
            field5: true,
          },
        });
        break;
      }
      case 20: {
        setFieldsVisibility({
          ...fieldsVisibility,
          ...{
            field13: true,
            field1: true,
            field21: true,
            field15: false,
            field10: false,
            field19: false,
            field14: true,
            field8: true,
            field5: true,
          },
        });
        break;
      }
      case 30: {
        setFieldsVisibility({
          ...fieldsVisibility,
          ...{
            field13: true,
            field1: true,
            field21: true,
            field15: true,
            field10: true,
            field19: true,
            field14: false,
            field8: false,
            field5: false,
          },
        });
        break;
      }
    }
  };

  const handleNationalityChange = (event: any) => {
    setNationality(event.target.value);
    SetFinalData({ ...finalData, field11: event.target.value });

    switch (event.target.value) {
      case "I": {
        setFieldsVisibility({
          ...fieldsVisibility,
          ...{
            field6: true,
            field9: false,
            field16: true,
            field18: false,
          },
        });
        break;
      }
      case "NI": {
        setFieldsVisibility({
          ...fieldsVisibility,
          ...{
            field6: false,
            field9: true,
            field16: false,
            field18: true,
          },
        });
        break;
      }
    }
  };
  const submitHandler = () => {
    let Data = {};
    Object.keys(fieldsVisibility).forEach((dat: any) => {
      if (fieldsVisibility[dat] === true) {
        console.log(finalData[dat]);
        Data = Object.assign({ ...Data, ...{ [dat]: finalData[dat] } });
      }
    });
    console.log(Data);
  };
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Stack direction="column" spacing={2}>
            {fieldsVisibility.field1 && (
              <TextField
                label="field 1 - age - 10"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field1: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field2 && (
              <TextField
                label="field 2"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field2: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field3 && (
              <TextField
                label="field 3"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field3: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field4 && (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleAgeChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            )}
            {fieldsVisibility.field5 && (
              <TextField
                label="field 5 - age - 30"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field5: e.target.value });
                }}
              />
            )}
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="column" spacing={2}>
            {fieldsVisibility.field6 && (
              <TextField
                label="field 6 - Nationality(IN)"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field6: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field7 && (
              <TextField
                label="field 7"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field7: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field8 && (
              <TextField
                label="field 8 - age - 30"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field8: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field9 && (
              <TextField
                label="field 9 - Nationality(NIN)"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field9: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field10 && (
              <TextField
                label="field 10 - age - 20"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field10: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field11 && (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Nationality
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={nationality}
                  label="Nationality"
                  onChange={handleNationalityChange}
                >
                  <MenuItem value={"I"}>Indian</MenuItem>
                  <MenuItem value={"NI"}>Non-Indian</MenuItem>
                </Select>
              </FormControl>
            )}
            {fieldsVisibility.field12 && (
              <TextField
                label="field 12"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field12: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field13 && (
              <TextField
                label="field 13 - age - 10"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field13: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field14 && (
              <Stack direction="row" spacing={2}>
                <TextField
                  label="field 14 - Month - 30"
                  onChange={(e) => {
                    SetFinalData({
                      ...finalData,
                      field14: {
                        ...finalData.field14,
                        ...{ month: e.target.value },
                      },
                    });
                  }}
                />
                <TextField
                  label="field 14 - Year - 30"
                  onChange={(e) => {
                    SetFinalData({
                      ...finalData,
                      field14: {
                        ...finalData.field14,
                        ...{ year: e.target.value },
                      },
                    });
                  }}
                />
              </Stack>
            )}
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="column" spacing={2}>
            {fieldsVisibility.field15 && (
              <TextField
                label="field 15 - age - 20"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field15: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field16 && (
              <TextField
                label="field 16 - Nationality(IN)"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field16: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field17 && (
              <TextField
                label="field 17"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field17: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field18 && (
              <TextField
                label="field 18 - Nationality(NIN)"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field18: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field19 && (
              <TextField
                label="field 19 - age - 20"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field19: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field20 && (
              <TextField
                label="field 20"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field20: e.target.value });
                }}
              />
            )}
            {fieldsVisibility.field21 && (
              <TextField
                label="field 21 - age - 10"
                onChange={(e) => {
                  SetFinalData({ ...finalData, field21: e.target.value });
                }}
              />
            )}
          </Stack>
        </Grid>
      </Grid>
      <Button onClick={() => submitHandler()} variant="contained">
        Submit Data
      </Button>
    </Container>
  );
}
