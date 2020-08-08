import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import './Killswitch.css';

export default function Killswitch(props) {
    return (
        <div id="Killswitch-Container">
            <FormGroup row>
                <FormControlLabel
                control={
                    <Switch
                        checked={props.checkedA}
                        onChange={props.handleChange}
                        name="checkedA"
                    />
                }
                label="Trippy Background"
                style={{ color: 'white' }}
                id="TrippyToggle"
                />
            </FormGroup>
        </div>
    );
}
