import React from "react";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from '@mui/icons-material/Groups';
import GavelIcon from '@mui/icons-material/Gavel';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ApiIcon from '@mui/icons-material/Api';
import BrushIcon from '@mui/icons-material/Brush';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import IosShareIcon from '@mui/icons-material/IosShare';
import ExtensionIcon from '@mui/icons-material/Extension';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BookIcon from '@mui/icons-material/Book';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StorageIcon from '@mui/icons-material/Storage';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import HistoryIcon from '@mui/icons-material/History';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import EastIcon from '@mui/icons-material/East';

const Sidebar = ({ open }) => {
  return (
    <Drawer variant="persistent" anchor="left" open={open} sx={{ width: 240 }}>
      <List sx={{ width: 240, paddingTop: 8 }}>
      <ListItem component="h3">
          <ListItemText primary="Access Control" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="Roles" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GavelIcon />
          </ListItemIcon>
          <ListItemText primary="Permissions" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HandshakeIcon />
          </ListItemIcon>
          <ListItemText primary="Tenants" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ApiIcon />
          </ListItemIcon>
          <ListItemText primary="API-Tokens" />
        </ListItem>
        <ListItem component="h3">
          <ListItemText primary="Customization" />
        </ListItem>
        {/* <Divider>

        </Divider> */}
        <ListItem button>
          <ListItemIcon>
            <BrushIcon />
          </ListItemIcon>
          <ListItemText primary="Conditional Styling" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CropOriginalIcon />
          </ListItemIcon>
          <ListItemText primary="Icons" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <IosShareIcon />
          </ListItemIcon>
          <ListItemText primary="External Actions" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExtensionIcon />
          </ListItemIcon>
          <ListItemText primary="Structure Editor" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CheckBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Surveys" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Taxonomy" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notification Rules" />
        </ListItem>
        <ListItem component="h3">
          <ListItemText primary="Automation" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StorageIcon />
          </ListItemIcon>
          <ListItemText primary="Data Sources" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CloudUploadIcon />
          </ListItemIcon>
          <ListItemText primary="Importer" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="Task Scheduling" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PlayCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Consolidation" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EastIcon />
          </ListItemIcon>
          <ListItemText primary="Propagation Rules" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
