import React, {useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {makeStyles} from '@material-ui/core/styles';
import {useRouter} from 'next/router';
import {Link} from 'next/link';

const useStyles = makeStyles((theme) => ({
        tabContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    })
);

export const TabBar = (props) => {
    const classes = useStyles();
    const router = useRouter();

    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        // console.log(newValue);
        setValue(newValue);
    };

    return (
        <Tabs className={classes.tabContainer} value={value} onChange={handleChange}>
            <Tab label="Home" component={Link} href="/home"/>
            <Tab label="Settings" component={Link} href="/settings"/>
        </Tabs>
    )
}
