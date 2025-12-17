=====================================================================
📋 DAILY OPERATIONS DASHBOARD – USER & DEVELOPER README
=====================================================================

Created By : Nitin Pawar
Product   : SaXham AI – Operations Dashboard
Type      : Local Web Application (No Database)
Tech      : HTML, CSS, JavaScript, Browser LocalStorage

---------------------------------------------------------------------
1️⃣ WHAT IS THIS PROJECT?
---------------------------------------------------------------------
Daily Operations Dashboard is a simple, lightweight web-based checklist
system designed for IT Operations / Market Operations / Support Teams.

It helps track:
• BOD (Beginning of Day) activities
• CONTINUOUS (Market hour monitoring)
• EOD (End of Day) activities
• Daily progress
• Day close validation
• Date-wise history reports

⚠️ This project works completely on LOCAL SYSTEM.
No internet, no server DB, no login required.

---------------------------------------------------------------------
2️⃣ HOW DATA IS STORED?
---------------------------------------------------------------------
• Data is saved in Browser LocalStorage
• Each date has separate records
• Even if browser or system restarts, data remains
• Closing terminal does NOT delete data

---------------------------------------------------------------------
3️⃣ FOLDER STRUCTURE
---------------------------------------------------------------------
project-folder/
│
├── index.html        → Main Daily Dashboard
├── history.html      → Date-wise Report Page
├── js/
│   └── data.js       → All process definitions & rules
├── Logo.png          → Optional branding logo
└── README.txt        → This file

---------------------------------------------------------------------
4️⃣ SYSTEM REQUIREMENTS
---------------------------------------------------------------------
• Windows / Linux / Mac
• Python 3.x installed
• Any modern browser (Chrome recommended)

---------------------------------------------------------------------
5️⃣ HOW TO START PROJECT (LOCAL SYSTEM)
---------------------------------------------------------------------

STEP 1: Open Command Prompt / Terminal
--------------------------------------
Go to project folder:

    cd path/to/project-folder

STEP 2: Start Local Web Server
------------------------------
Run:

    python -m http.server 8000

(If python command not works, try)

    py -m http.server 8000

STEP 3: Open Browser
--------------------
Open this URL in browser:

    http://localhost:8000

Click on:
    index.html

✔️ Dashboard is now LIVE

---------------------------------------------------------------------
6️⃣ IMPORTANT NOTE (VERY IMPORTANT)
---------------------------------------------------------------------
❗ If you CLOSE the terminal, server will STOP.

To use dashboard again:
    → Open terminal
    → Run python -m http.server 8000 again

⚠️ DATA WILL NOT BE LOST
Because data is stored in browser LocalStorage.

---------------------------------------------------------------------
7️⃣ HOW TO USE DASHBOARD (USER GUIDE)
---------------------------------------------------------------------

▶ DAILY WORKFLOW
----------------
1. Tick checklist items
2. Select Status:
   • DONE → All checklist must be ticked
   • PENDING → Remark required
   • ISSUE → Remark + Screenshot required
3. Click "Submit Update"

▶ MANDATORY TASKS
-----------------
• Tasks marked with (*) are mandatory
• Day cannot be closed without them

▶ CLOSE DAY
-----------
• Click "Close Operations Day"
• Button activates only when mandatory tasks are completed
• Once closed:
  → No more changes allowed
  → Data becomes read-only

▶ REPORTS
---------
• Click "Reports"
• Select date
• View:
  → Completion summary
  → Status, remarks & time
• Report visible only after Day Close

▶ RESET
-------
• Clears only TODAY’s data
• Old dates remain safe

---------------------------------------------------------------------
8️⃣ DEVELOPER GUIDE (IMPORTANT)
---------------------------------------------------------------------

▶ data.js CONTROLS EVERYTHING
-----------------------------
File:
    js/data.js

Each process contains:
• id
• category (BOD / CONTINUOUS / EOD)
• name
• timeWindow
• checks (checklist items)
• dayCloseRequired (true/false)
• issueScreenshotRequired

▶ ADD NEW TASK
--------------
Add new object inside processes[] in data.js

▶ ADD MANDATORY TASK
--------------------
Set:
    dayCloseRequired: true

▶ UI LOGIC
----------
• index.html → Dashboard logic
• history.html → Reporting logic
• No backend
• No database
• No framework

---------------------------------------------------------------------
9️⃣ LIMITATIONS
---------------------------------------------------------------------
• Local system only
• Single user
• Browser specific storage
• Clearing browser data will erase records

---------------------------------------------------------------------
🔟 BEST PRACTICES
---------------------------------------------------------------------
• Use same browser daily
• Do not clear browser cache/storage
• Close day only after full verification
• Use remarks properly for audit

---------------------------------------------------------------------
📌 SUMMARY
---------------------------------------------------------------------
This dashboard is:
✔ Simple
✔ Fast
✔ Zero cost
✔ Audit friendly
✔ Ideal for IT / Ops teams

---------------------------------------------------------------------
END OF README
=====================================================================
