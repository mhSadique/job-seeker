import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const SearchBox = () => {
    const history = useHistory();
    const [searchText, setSearchText] = useState("");
    return (
        <Grid container sx={{ justifyContent: 'stretch' }}>
            <Grid item sx={{ flexGrow: 9, mr: 1 }}>
                <TextField
                    id="outlined-basic"
                    label={null}
                    variant="outlined"
                    sx={{ width: '100%' }}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </Grid>
            <Grid item sx={{ flexGrow: 0 }}>
                <Button
                    variant="contained"
                    onClick={() => {
                        if (!searchText) return;
                        history.push(`/search/${searchText}`);
                    }}
                    sx={{
                        height: '100%'
                    }}
                >
                    Search</Button>
            </Grid>
        </Grid>
    );
};

export default SearchBox;