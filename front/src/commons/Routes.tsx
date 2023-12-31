export const ROUTES = {
  // Shopper
  SHOPPER_URL: "/product/*",
  SHOPPER_MAIN: "/:productSeq",
  SHOPPER_INFO: "/info",
  NotFound: "/notfound",

  // Trader
  TRADER_URL: "/m/*",
  TRADER_LANDING: "/landing",
  TRADER_MAIN: "/",
  TRADER_LOGIN: "/",
  TRADER_CONFIRM: "/confirm/:billId",
  TRADER_CREATE: "/create",
  TRADER_GETLIST: "/list",
  TRADER_SECTION: "/section",
  TRADER_SIGN: "/sign/:billId",
  TRADER_SIGNCHECK: "/signcheck/:billId",
  TRADER_STATE: "/state",

  // Officer
  OFFICER_URL: "/*",
  OFFICER_LOGIN: "/",
  OFFICER_MAIN: "/",
  OFFICER_CREATE: "/create",
  OFFICER_DETAIL: "/detail/:billId",
  OFFICER_MANAGE: "/manage",
  OFFICER_STOCK: "/stock",
  OFFICER_STOCKLIST: "/stocklist",
};
