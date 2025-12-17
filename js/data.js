/*
  ===================================================================
  DAILY OPERATIONS DASHBOARD - CONFIGURATION DATA
  ===================================================================
  
  File: data.js
  Description: Defines the daily process list, time windows, and validation rules.
  Note: This data powers both the Dashboard (index.html) and Reports (history.html).
*/

const processes = [

  /* =========================
     1. BOD – MORNING OPERATIONS
     ========================= */

  {
    id: "BOD_GREEK",
    category: "BOD",
    submitType: "ONCE",
    dayCloseRequired: true,
    name: "Greek – BOD Verification",
    timeWindow: "07:30 – 08:30",
    issueScreenshotRequired: true,
    checks: [
      "Contract & Security file check",
      "Dashboard – All components UP",
      "Exchange Login check (Dashboard)",
      "GATS TBT status check",
      "GMBS server login",
      "Broadcast connection check"
    ]
  },

  {
    id: "BOD_MULTITRADE",
    category: "BOD",
    submitType: "ONCE",
    dayCloseRequired: true,
    name: "Multitrade – BOD Verification",
    timeWindow: "07:30 – 08:30",
    issueScreenshotRequired: true,
    checks: [
      "Contract file verification",
      "Server Manager status",
      "Admin Application – Exchange Login",
      "TBT check in Watchlist"
    ]
  },

  {
    id: "BOD_HVT_TIME",
    category: "BOD",
    submitType: "ONCE",
    dayCloseRequired: true,
    name: "HVT Server – Time Synchronization",
    timeWindow: "08:00 – 08:30",
    issueScreenshotRequired: false,
    checks: [
      "Time synchronization verified",
      "Status sent on WhatsApp group"
    ]
  },

  {
    id: "BOD_INTELLECT_PRIMARY",
    category: "BOD",
    submitType: "ONCE",
    dayCloseRequired: true,
    name: "Intellect DB – Log Shipping (Primary)",
    timeWindow: "07:00 – 08:00",
    issueScreenshotRequired: true,
    checks: [
      "Log shipping status OK",
      "No delay / failure observed"
    ]
  },

  {
    id: "BOD_TGS_MAIL",
    category: "BOD",
    submitType: "ONCE",
    dayCloseRequired: true,
    name: "TGS Job Report – Mail",
    timeWindow: "08:20 – 08:40 (Target 08:30)",
    issueScreenshotRequired: false,
    checks: [
      "TGS job status verified",
      "Mail sent successfully"
    ]
  },

  {
    id: "BOD_MAIL_CHECK",
    category: "BOD",
    submitType: "ONCE",
    dayCloseRequired: true,
    name: "Mail Check",
    timeWindow: "Morning",
    issueScreenshotRequired: false,
    checks: [
      "Alerts checked",
      "Exchange mails reviewed",
      "Application related mails verified"
    ]
  },

  /* =========================
     2. CONTINUOUS – MARKET HOURS
     ========================= */

  {
    id: "CONT_INTELLECT_HOURLY",
    category: "CONTINUOUS",
    submitType: "MONITOR",
    dayCloseRequired: false,
    name: "Intellect DB – Log Shipping & DR",
    timeWindow: "07:30 – 15:00",
    issueScreenshotRequired: true,
    checks: [
      "Log shipping running",
      "DR status OK"
    ]
  },

  {
    id: "CONT_RESEARCH_360",
    category: "CONTINUOUS",
    submitType: "MONITOR",
    dayCloseRequired: false,
    name: "Research 360 – Utilization Monitor",
    timeWindow: "09:00 – 17:00",
    issueScreenshotRequired: true,
    checks: [
      "Utilization within limits",
      "No abnormal spike observed"
    ]
  },

  /* =========================
     3. EOD – CLOSING OPERATIONS
     ========================= */

  {
    id: "EOD_RESEARCH_360_REPORT",
    category: "EOD",
    submitType: "ONCE",
    dayCloseRequired: true,
    name: "Research 360 – EOD Utilization Report",
    timeWindow: "17:00 – 18:00",
    issueScreenshotRequired: false,
    checks: [
      "Utilization report prepared",
      "Mail sent successfully"
    ]
  }

];

/* =========================
   STATUS CONSTANTS
   ========================= */

const STATUS = Object.freeze({
  DONE: "DONE",
  PENDING: "PENDING",
  ISSUE: "ISSUE"
});
