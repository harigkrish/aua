import { IconContext } from "react-icons";
import { anticons } from "./antdesign";
import { icomoonicons } from "./icomoon";
import { icons as gameIcons } from "./game";
import { boxicons } from "./boxicons";
import { flatcolorIcons } from "./flatcolor";
import { grommeticons } from "./grommeticons";
import { fontawesomeicons } from "./fontawesome";
import { bootstrapicons } from "./bootstrapicons";
import { tablerIcons } from "./tabler/TablerIcons";

export const reacticons = {
  login: anticons.login,
  logout: icomoonicons.logout,
  Dashboard: icomoonicons.Dashboard,
  MenuToggler: icomoonicons.MenuToggler,
  Task: icomoonicons.Task,
  Timesheet: icomoonicons.Timesheet,
  NoCamera: gameIcons.NoCamera,
  edit: anticons.edit,
  nodeburger: boxicons.nodeburger,
  Comments: gameIcons.Comments,
  Approved: flatcolorIcons.approved,
  Pending: flatcolorIcons.pending,
  PreviousArrow: grommeticons.PreviousArrow,
  NextArrow: grommeticons.NextRoow,
  Profit: fontawesomeicons.profit,
  Remove: fontawesomeicons.remove,
  Delete: anticons.delete,
  Add: bootstrapicons.add,
  Update: bootstrapicons.update,
  Filter: anticons.filter,
  User: bootstrapicons.user,
  loader: anticons.loader,
  masters: bootstrapicons.masters,
  TableConfig: tablerIcons.TableConfig,
  COGs: bootstrapicons.cogs,
};

export const IconProvider = ({ icon, className, color, size }) => {
  const Icon = icon;
  return (
    <IconContext.Provider value={{ color, className, size }}>
      <div>
        <Icon />
      </div>
    </IconContext.Provider>
  );
};
