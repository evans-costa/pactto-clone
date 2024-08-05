import HomeIcon from "@mui/icons-material/Home";
import ForumIcon from "@mui/icons-material/Forum";
import LinkIcon from "@mui/icons-material/Link";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RedeemIcon from "@mui/icons-material/Redeem";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SettingsIcon from "@mui/icons-material/Settings";

export const menuData = [
  {
    id: 0,
    label: "Home",
    path: "/home",
    icon: <HomeIcon />,
  },
  {
    id: 1,
    label: "Pacttos (Chats)",
    path: "/pacttos",
    icon: <ForumIcon />,
  },
  {
    id: 2,
    label: "Videos to Review",
    path: "/videos-to-review",
    icon: <LinkIcon />,
  },
  {
    id: 3,
    label: "Web Links You Created",
    path: "shared-links",
    icon: <VideoLibraryIcon />,
  },
  {
    id: 4,
    label: "Personal Information",
    path: "/personal-info",
    icon: <ManageAccountsIcon />,
  },
  {
    id: 5,
    label: "Review Packages For Sale",
    path: "/packages",
    icon: <RedeemIcon />,
  },
  {
    id: 6,
    label: "Pactto Website",
    path: "/profile",
    icon: <ViewCarouselIcon />,
  },
  {
    id: 7,
    label: "Reference Video Library",
    path: "/library",
    icon: <OndemandVideoIcon />,
  },
  {
    id: 8,
    label: "Subscription",
    path: "/subscription",
    icon: <SubscriptionsIcon />,
  },
  {
    id: 9,
    label: "Review Settings",
    path: "/review-settings",
    icon: <SettingsIcon />,
  },
];
