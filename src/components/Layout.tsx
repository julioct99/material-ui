import { Drawer, makeStyles, Typography } from '@material-ui/core';

const drawerWitdth = 240;

const useStyles = makeStyles({
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    marginTop: 25,
  },
  drawer: {
    width: drawerWitdth,
  },
  drawerPaper: {
    width: drawerWitdth,
  },
  root: {
    display: 'flex',
  },
});

export interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* App bar */}
      {/* Side drawer */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5'>Ninja notes</Typography>
        </div>
      </Drawer>

      <div className={classes.page}> {children} </div>
    </div>
  );
};

export default Layout;
