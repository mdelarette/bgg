import React from 'react';


import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const PageTest = () => {

    const [value, setValue] = React.useState("value");

    const [selected, setSelected] = React.useState(1);
    const [values, setValues] = React.useState([]);

    const [radio, setRadio] = React.useState('');

    const [debut, setDebut] = React.useState('');
    const [dateLivraison, setDateLivraison] = React.useState(null);

    const [year, setYear] = React.useState((new Date()).getFullYear());


    const [switch1, setSwitch1] = React.useState(false);
    const [switch2, setSwitch2] = React.useState(true);

    const options = ["option 1", "option 2"];

    return (
        <>
            <Typography align="center" variant="h6" >Page de test du thème</Typography>

            <hr />
            <Typography variant="body1">Buttons</Typography>
            <Paper sx={{ margin: "8px" }}>
                <Button color="primary" sx={{ margin: "8px" }} >{'primary'}</Button>
                <Button color="secondary" sx={{ margin: "8px" }}>{'secondary'}</Button>

                <Button variant="outlined" color="primary" sx={{ margin: "8px" }}>{'primary outlined'}</Button>
                <Button variant="outlined" color="secondary" sx={{ margin: "8px" }}>{'secondary outlined'}</Button>

                <Button variant="contained" color="primary" sx={{ margin: "8px" }}>{'primary contained'}</Button>
                <Button variant="contained" color="secondary" sx={{ margin: "8px" }}>{'secondary contained'}</Button>


            </Paper>

            <hr />
            <Typography variant="body1">TextField</Typography>
            <Paper sx={{ margin: "8px" }}>

                <TextField sx={{ margin: "8px" }} label="Outlined" variant="outlined" />
                <TextField sx={{ margin: "8px" }} label="Filled" variant="filled" />
                <TextField sx={{ margin: "8px" }} label="Standard" variant="standard" />

                <TextField sx={{ margin: "8px" }} label="Avec aide" defaultValue="Valeur par défaut" helperText="Message d'aide" />
                <TextField sx={{ margin: "8px" }} label="Avec erreur" error defaultValue="Valeur par défaut" helperText="Message d'erreur" />

                <TextField
                    sx={{ margin: "8px" }}
                >
                </TextField>

                <TextField
                    sx={{ margin: "8px" }}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                >
                </TextField>

            </Paper>

            <hr />
            <Typography variant="body1">Select</Typography>
            <Paper sx={{ margin: "8px" }}>
                <TextField
                    sx={{ margin: "8px" }}
                    label="select"
                    fullWidth

                    select
                    SelectProps={{
                        multiple: false,
                        value: selected,
                        onChange: e => setSelected(e.target.value)
                    }}
                >
                    <MenuItem key={0} value="" disabled>Sélectionner un item</MenuItem>
                    <MenuItem key={1} value={1}>
                        {"MenuItem1"}
                    </MenuItem>
                    <MenuItem key={2} value={2}>
                        {"MenuItem2"}
                    </MenuItem>
                </TextField>


                <TextField
                    sx={{ margin: "8px" }}
                    label="select multiple"
                    fullWidth

                    select
                    SelectProps={{
                        multiple: true,
                        placeholder: "placeholder",
                        value: values,
                        onChange: e => { console.log(e.target.value); setValues(e.target.value.sort()); },
                        renderValue: (values) => {
                            return (<div>{values.map(x => options[x]).join(', ')}</div>);
                        }
                    }}
                >
                    <MenuItem value="" disabled>Sélectionner un ou plusieurs item</MenuItem>

                    {options.map((option, index) => (
                        <MenuItem key={index} value={index}>
                            <Checkbox checked={values.indexOf(index) > -1} />
                            <ListItemText primary={option} />
                        </MenuItem>
                    ))}

                </TextField>
            </Paper>


            <hr />
            <Typography variant="body1">Radio button group</Typography>
            <Paper sx={{ margin: "8px" }}>


                <FormControl component="fieldset">
                    <FormLabel component="legend">{"Radio groupe"}</FormLabel>
                    <RadioGroup
                        name="RadioGroup"
                        value={radio}
                        onChange={e => setRadio(e.target.value)}
                    >
                        {options.map((option, index) => (
                            <FormControlLabel key={index} value={index.toString()} control={<Radio />} label={option} />
                        ))}

                    </RadioGroup>
                </FormControl>


            </Paper>

            <hr />
            <Typography variant="body1">Date picker</Typography>
            <Paper sx={{ margin: "8px" }}>

                <TextField
                    sx={{ margin: "8px" }}
                    id="dateCreationDebut"
                    label="TextField type date"
                    type="date"
                    value={debut}
                    onChange={e => setDebut(e.target.value)}
                    InputLabelProps={{
                        shrink: true
                    }}
                    inputProps={{
                        name: 'dateCreationDebut',
                        id: 'dateCreationDebut'
                    }}
                />

            </Paper>

            <hr />
            <Typography variant="body1">Switches</Typography>
            <Paper>
                <FormControlLabel
                    control={
                        <Switch
                            id="switch1"
                            name="switch1"
                            checked={switch1}
                            onChange={e => setSwitch1(!switch1)}
                            value="switch1"
                            color="secondary"
                        />
                    }
                    label="Switch 1"
                    labelPlacement="start"
                />

                <FormControlLabel
                    control={
                        <Switch
                            id="switch2"
                            name="switch2"
                            checked={switch2}
                            onChange={e => setSwitch2(!switch2)}
                            value="switch2"
                            color="secondary"
                        />
                    }
                    label="Switch 2"
                    labelPlacement="end"
                />


                <FormControlLabel
                    control={
                        <Switch
                            id="switch11"
                            name="switch11"
                            checked={!switch1}
                            onChange={e => setSwitch1(!switch1)}
                            value="switch11"
                            color="primary"
                        />
                    }
                    label="Switch 11"
                    labelPlacement="start"
                />

                <FormControlLabel
                    control={
                        <Switch
                            id="switch22"
                            name="switch22"
                            checked={!switch2}
                            onChange={e => setSwitch2(!switch2)}
                            value="switch22"
                            color="primary"
                        />
                    }
                    label="Switch 22"
                    labelPlacement="end"
                />
            </Paper>


            <hr />
            <Typography variant="body1">Paper</Typography>
            <Box display='flex' flexDirection='row'>
                <Paper sx={{ width: "150px", height: "50px", marginRight: "24px" }} elevation={0}>élévation = 0</Paper>
                <Paper sx={{ width: "150px", height: "50px", marginRight: "24px" }} >sans élévation (défault)</Paper>
                <Paper sx={{ width: "150px", height: "50px", marginRight: "24px" }} elevation={1}>élévation = 1</Paper>
                <Paper sx={{ width: "150px", height: "50px", marginRight: "24px" }} elevation={4}>élévation = 4</Paper>
                <Paper sx={{ width: "150px", height: "50px", marginRight: "24px" }} elevation={8}>élévation = 8</Paper>
                <Paper sx={{ width: "150px", height: "50px", marginRight: "24px" }} elevation={16} square>élévation = 16 square</Paper>
                <Paper sx={{ width: "150px", height: "50px", marginRight: "24px" }} elevation={24}>élévation = 24</Paper>

                <Paper sx={{ width: "150px", height: "50px", marginRight: "24px" }} variant="outlined">outlined</Paper>
                <Paper sx={{ width: "150px", height: "50px", marginRight: "24px" }} variant="outlined" square>outlined square </Paper>
            </Box>

        </>
    );
};


export default PageTest;