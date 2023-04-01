import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
// import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const Theme = useTheme();
  const colors = tokens(Theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MainSidebar = () => {
  const Theme = useTheme();
  const colors = tokens(Theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar } = useProSidebar();
  return (
    <Box>
      <Sidebar
        rootStyles={{
          '& .ps-sidebar-container': {
              background: `${colors.primary[400]} !important`,
          },
          "& .ps-menuitem-root:hover": {
            color: "#868dfb !important",
          },
        }}
      >
        <Menu 
          iconShape="square"
          rootStyles={{
            "& .pro-icon-wrapper": {
              backgroundColor: "transparent !important",
            },
            "& .ps-menu-button": {
              padding: "5px 35px 5px 20px !important",
            },
            "& .ps-menu-button:hover": {
              color: "#868dfb !important",
              backgroundColor:colors.primary[400]
            },
            "& .ps-menu-button.active": {
              color: "#6870fa !important",
            },
          }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => {
              collapseSidebar()
              setIsCollapsed(!isCollapsed)
            }}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  heigt="100px"
                  src={require("../../assets/user.png")}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <MenuItem
              component={<Link to="/" />}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              Dashboard
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <MenuItem
              component={<Link to="/team" />}
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              Manage Team
            </MenuItem>
            <MenuItem
              component={<Link to="/contacts" />}
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              Contacts Information
            </MenuItem>
            <MenuItem
              component={<Link to="/invoices" />}
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              Invoices Balances
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <MenuItem
              component={<Link to="/form" />}
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              Profile Form
            </MenuItem>
            <MenuItem
              component={<Link to="/calendar" />}
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              Calendar
            </MenuItem>
            <MenuItem
              component={<Link to="/faq" />}
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              FAQ Page
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <MenuItem
              component={<Link to="/bar" />}
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              Bar Chart
            </MenuItem>
            <MenuItem
              component={<Link to="/pie" />}
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              Pie Chart
            </MenuItem>
            <MenuItem
              component={<Link to="/line" />}
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              Line Chart
            </MenuItem>
            <MenuItem
              component={<Link to="/geography" />}
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              Geography Chart
            </MenuItem>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MainSidebar;