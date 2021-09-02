import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './index.css';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const Form = () => {
  const [values, setValues] = useState({
    dateReport: new Date(),
    state: '',
    typePersonReport: '',
    gender: '',
    countryOrigin: '',
    age: null,
    ageConstitution: null,
    reportedEconomicActivity: '',
    economySector: '',
    profession: '',
    geographicArea: '',
    municipality: '',
    parish: '',
    relationship: '',
    relationshipCheck: true,
    typeOperation: '',
    dateInitOperation: new Date(),
    dateEndOperation: new Date(),
    typeCoin: '',
    typeProduct: '',
    typeIntermediary: '',
    typeCi: '',
    ci: null,
    authorizationNumber: '',
    description: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleDateChange = (nameField, date) => {
    setValues({
      ...values,
      [nameField]: date
    });
  };

  const handleCheckBoxChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };
  return (
    <FormControl component="fieldset">
      <Card>
        <CardHeader title="Formulario" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Typography color="textPrimary" gutterBottom variant="h5">
                  Fecha de Reporte
                </Typography>
                <KeyboardDatePicker
                  className="input-date"
                  disableToolbar
                  fullWidth
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  value={values.dateReport}
                  onChange={(date) => handleDateChange('dateReport', date)}
                  name="dateReport"
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Estado o Zona Geográfica de la Agencia o Sucursal que Reporta
              </Typography>
              <FormControl fullWidth>
                <Select
                  labelId="select-state-required"
                  id="select-state-required"
                  value={values.state}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="state"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Tipo de Persona Reportada
              </Typography>
              <FormControl fullWidth>
                <Select
                  labelId="select-typePersonReport-required"
                  id="select-typePersonReport-required"
                  value={values.typePersonReport}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="typePersonReport"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Genero del Sujeto o Representante
              </Typography>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select-outlined"
                  value={values.gender}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="gender"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                País de Nacimiento u Origen
              </Typography>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select-outlined"
                  value={values.countryOrigin}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="countrySubject"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Nacionalidad Sujeto Reportado
              </Typography>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select-outlined"
                  value={values.gender}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="gender"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Edad del Reportado
              </Typography>
              <TextField
                fullWidth
                // helperText="Please specify the first name"
                name="age"
                type="number"
                onChange={handleChange}
                required
                value={values.age}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Años de constitución en caso de ser figura jurídica reportada
              </Typography>
              <TextField
                fullWidth
                // helperText="Please specify the first name"
                name="ageConstitution"
                type="number"
                onChange={handleChange}
                required
                value={values.ageConstitution}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Actividad Económica del Reportado
              </Typography>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select-outlined"
                  value={values.reportedEconomicActivity}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="reportedEconomicActivity"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Sector de la economía del reportado
              </Typography>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select-outlined"
                  value={values.economySector}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="economySector"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Profesión u Oficio del Reportado o Representante
              </Typography>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select-outlined"
                  value={values.profession}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="profession"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Estado o Zona Geográfica donde Reside el Reportado
              </Typography>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select-outlined"
                  value={values.geographicArea}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="geographicArea"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Municipio donde reside el reportada
              </Typography>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select-outlined"
                  value={values.municipality}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="municipality"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Parroquia donde reside el reportado
              </Typography>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select-outlined"
                  value={values.parish}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="parish"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Relación entre Reportado y Sujeto Obligado
              </Typography>
              <Grid container>
                <Grid
                  item
                  md={6}
                  xs={6}
                  justifyContent="space-around"
                  display="flex"
                >
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={values.relationshipCheck}
                        onChange={handleCheckBoxChange}
                        name="relationshipCheck"
                      />
                    )}
                    label="Sujeto regulado"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={!values.relationshipCheck}
                        onChange={handleChange}
                        name="relationshipCheck"
                      />
                    )}
                    label="Otro"
                  />
                </Grid>
                <Grid item md={6} xs={6}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={values.relationship}
                      onChange={handleChange}
                      fullWidth
                      variant="outlined"
                      name="relationship"
                    >
                      <MenuItem value="">
                        <em>Ninguno</em>
                      </MenuItem>
                      {states.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Tipo de Operación
              </Typography>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select-outlined"
                  value={values.typeOperation}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="typeOperation"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Typography color="textPrimary" gutterBottom variant="h5">
                  Fecha de inicio de Operaciones
                </Typography>
                <KeyboardDatePicker
                  className="input-date"
                  disableToolbar
                  fullWidth
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  value={values.dateInitOperation}
                  onChange={(date) => (
                    handleDateChange('dateInitOperation', date)
                  )}
                  name="dateInitOperation"
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item md={6} xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Typography color="textPrimary" gutterBottom variant="h5">
                  Fecha de fin de Operaciones
                </Typography>
                <KeyboardDatePicker
                  className="input-date"
                  disableToolbar
                  fullWidth
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  value={values.dateEndOperation}
                  onChange={(date) => (
                    handleDateChange('dateEndOperation', date)
                  )}
                  name="dateEndOperation"
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Monto en Bolívares Soberanos
              </Typography>
              <TextField
                fullWidth
                // helperText="Please specify the first name"
                name="ageConstitution"
                type="number"
                onChange={handleChange}
                required
                value={values.ageConstitution}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Tipo de Moneda de las Operaciones
              </Typography>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select-outlined"
                  value={values.typeCoin}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="typeCoin"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Tipo de Producto o Instrumento Financiero
              </Typography>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select-outlined"
                  value={values.typeProduct}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="typeProduct"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Tipo de Intermediario
              </Typography>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select-outlined"
                  value={values.typeIntermediary}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  name="typeIntermediary"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Documento de Cédula de Identidad del Intermediario o RIF
              </Typography>
              <Grid container>
                <Grid item md={1} xs={1}>
                  <FormControl fullWidth>
                    <Select
                      id="demo-simple-select-outlined"
                      value={values.typeCi}
                      onChange={handleChange}
                      fullWidth
                      variant="outlined"
                      name="typeCi"
                    >
                      <MenuItem value="">
                        <em>Ninguno</em>
                      </MenuItem>
                      {states.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={11} xs={11} paddingLeft={5}>
                  <TextField
                    fullWidth
                    // helperText="Please specify the first name"
                    name="ci"
                    type="number"
                    onChange={handleChange}
                    required
                    value={values.ci}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Número de Autorización Ante la SUDEASEG
              </Typography>
              <TextField
                fullWidth
                helperText="En caso de que no tenga Nro de credencial, por favor ingrese el Nro de Cédula o RIF del intermediario"
                name="authorizationNumber"
                type="number"
                onChange={handleChange}
                required
                value={values.authorizationNumber}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h5">
                Descripción de la Operación:
              </Typography>
              <TextField
                id="outlined-multiline-static"
                name="description"
                multiline
                fullWidth
                inputProps={{ maxLength: 1000 }}
                rows={4}
                value={values.description}
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </FormControl>
  );
};

export default Form;
