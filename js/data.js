/*
===================================================================
DAILY OPERATIONS DASHBOARD - CONFIGURATION DATA
===================================================================

File: data.js
Purpose:
- Defines all daily operational processes
- Used by index.html (Dashboard) and history.html (Reports)

IMPORTANT RULES:
- Every `id` MUST be unique
- `dayCloseRequired: true` blocks day close until DONE
===================================================================
*/

const processes = [

  /* =========================================================
     1. BOD – BEGINNING OF DAY (MANDATORY)
     ========================================================= */

  {
    id: "BOD_GREEK_VERIFICATION",
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
    id: "BOD_MULTITRADE_VERIFICATION",
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
    id: "BOD_HVT_TIME_SYNC",
    category: "BOD",
    submitType: "ONCE",
    dayCloseRequired: true,
    name: "HVT Server – Time Synchronization",
    timeWindow: "08:00 – 08:30",
    issueScreenshotRequired: false,
    checks: [
      "Time synchronization verified",
      "Status shared on WhatsApp group"
    ]
  },

  {
    id: "BOD_INTELLECT_LOGSHIP_PRIMARY",
    category: "BOD",
    submitType: "ONCE",
    dayCloseRequired: true,
    name: "Intellect DB – Log Shipping (Primary)",
    timeWindow: "07:00 – 08:00",
    issueScreenshotRequired: true,
    checks: [
      "Log shipping status OK",
      "No delay or failure observed"
    ]
  },

  {
    id: "BOD_TGS_JOB_MAIL",
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
    id: "BOD_MAIL_REVIEW",
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

  /* =========================================================
     2. CONTINUOUS – MARKET HOURS (NON-BLOCKING)
     ========================================================= */

  {
    id: "CONT_INTELLECT_LOGSHIP_DR",
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
    id: "CONT_RESEARCH360_UTILIZATION",
    category: "CONTINUOUS",
    submitType: "MONITOR",
    dayCloseRequired: false,
    name: "Research 360 – Utilization Monitor",
    timeWindow: "09:00 – 17:00",
    issueScreenshotRequired: true,
    checks: [
      "Utilization within limits",
      "09:00 status updated",
      "10:00 status updated",
      "11:00 status updated",
      "12:00 status updated",
      "13:00 status updated",
      "14:00 status updated",
      "15:00 status updated",
      "16:00 status updated",
      "17:00 status updated",
      "No abnormal spike observed"
    ]
  },

  {
    id: "CONT_FATAL_CPU_MEMORY",
    category: "CONTINUOUS",
    submitType: "MONITOR",
    dayCloseRequired: false,
    name: "Fatal Error, Live 64 BIT, DB CPU & Memory Utilization",
    timeWindow: "09:00 – 15:00",
    issueScreenshotRequired: true,
    checks: [
      "09:00 status sent on WhatsApp",
      "10:00 status sent on WhatsApp",
      "11:00 status sent on WhatsApp",
      "12:00 status sent on WhatsApp",
      "13:00 status sent on WhatsApp",
      "14:00 status sent on WhatsApp",
      "15:00 status sent on WhatsApp"
    ]
  },

  /* =========================================================
     3. EOD – END OF DAY (MANDATORY)
     ========================================================= */

  {
    id: "EOD_RESEARCH360_REPORT",
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

/* =========================================================
   STATUS CONSTANTS
   ========================================================= */

const STATUS = Object.freeze({
  DONE: "DONE",
  PENDING: "PENDING",
  ISSUE: "ISSUE"
});
