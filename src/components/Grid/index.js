// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

// THIS FILE IS A GRID FOR CARDS !!!

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         height: 140,
//         width: 100,
//     },
//     control: {
//         padding: theme.spacing(2),
//     },
// }));

// export default function Grid() {
//     const [spacing] = React.useState(2);
//     const classes = useStyles();

//     return (
//         <Grid container className={classes.root} spacing={2}>
//             <Grid item xs={12}>
//                 <Grid container justify="center" spacing={spacing}>
//                     {[0, 1, 2].map((value) => (
//                         <Grid key={value} item>
//                             <Paper className={classes.paper} />
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Grid>
//             <Grid item xs={12}>
//                 <Paper className={classes.control}>
//                     <Grid container>
//                         <Grid item>
//                         </Grid>
//                     </Grid>
//                 </Paper>
//             </Grid>
//         </Grid>
//     );
// }

