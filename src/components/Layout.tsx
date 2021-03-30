import {
  Drawer,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar,
} from '@material-ui/core';
import { SubjectOutlined, AddCircleOutlineOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

const drawerWitdth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
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
    active: {
      backgroundColor: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWitdth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

interface MenuItem {
  text: string;
  icon: JSX.Element;
  path: string;
}

export interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems: MenuItem[] = [
    {
      text: 'My notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/',
    },
    {
      text: 'Create note',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: '/create',
    },
  ];

  return (
    <div className={classes.root}>
      {/* App bar */}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is: {format(new Date(), 'do MMMM Y')}{' '}
          </Typography>
          <Typography> Mario </Typography>
          <Avatar src='/mario-av.png' className={classes.avatar} />
        </Toolbar>
      </AppBar>

      {/* Side drawer */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography className={classes.title} variant='h5'>
            Ninja notes
          </Typography>
        </div>

        {/*  List / links */}
        <List>
          {menuItems.map((menuItem) => (
            <ListItem
              button
              key={menuItem.text}
              onClick={() => history.push(menuItem.path)}
              className={location.pathname === menuItem.path ? classes.active : undefined}
            >
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}{' '}
      </div>
    </div>
  );
};

export default Layout;
