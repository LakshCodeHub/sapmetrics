import * as React from 'react';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';

const categories = [
    {
        id: 'Quality',
        children: [
            { id: 'Analytics', icon: <SettingsIcon />, active: true },
        ],
    },
];

const item = {
    py: 2,
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

export default function Navigator(props: DrawerProps) {
    const { ...other } = props;

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem sx={{ py: 3, px: 3, fontSize: 22, color: '#fff', mb: 2 }}>
                    API METRICS
                </ListItem>
                {categories.map(({ id, children }) => (
                    <Box key={id} sx={{ bgcolor: '#101F33' }}>
                        {children.map(({ id: childId, icon, active }) => (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton selected={active} sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}