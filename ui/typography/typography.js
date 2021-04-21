import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        pagetitle: {
           marginTop: 10,
            marginBottom: 15,
        },

    })
);

export const Pagetitle = ({children}) => {
    const classes = useStyles();
    return (
        <Typography
            variant="h3"
            className={classes.pagetitle}
        >
            {children}
        </Typography>
    )
}

export const P = ({children}) => {
    return (
        <Typography variant="body1">{children}</Typography>
    )
}
