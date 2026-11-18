# Student &amp; Fresh Graduate Financial Resilience Navigator
## COMP2300 Software Design and Development Project — Deliverable 2 (D2)
### Design Concepts, User Stories, and Low-Fidelity Interactive Prototype

**Academic Institution:** University of Southampton Malaysia (EduCity, Iskandar Puteri)  
**Module:** COMP2300 Software Design and Development Project  
**Client / Domain Expert:** Pauline Yong Tung Fong (CEO, Sigma Wealth Sdn. Bhd. &amp; Alpha Academy; FPAM Johor Chapter)  
**Project Team:** Wong Jun Han, Ong Jie Son, Xu Suyang  
**Deliverable Documents &amp; Artifacts:** 
* [Deliverable 2.md](file:///home/potato/Projects/COMP2300-coursework/Lofi-Prototype/Deliverable%202.md) (Complete Academic Submission Report)
* [index.html](file:///home/potato/Projects/COMP2300-coursework/Lofi-Prototype/index.html) (Interactive Clickable Lo-Fi Prototype)
* [Wireframe.drawio](file:///home/potato/Projects/COMP2300-coursework/Lofi-Prototype/wireframes/Wireframe.drawio) (Original Multi-Screen Draw.io XML Model)
* [css/style.css](file:///home/potato/Projects/COMP2300-coursework/Lofi-Prototype/css/style.css) (Low-Fidelity Wireframe &amp; Responsive Stylesheet)
* [js/app.js](file:///home/potato/Projects/COMP2300-coursework/Lofi-Prototype/js/app.js) (Interactive State, Keypad, Bilingual Engine, What-If Simulators)

---

## 1. Executive Summary &amp; Ideation Overview

Through qualitative research with Malaysian university students (living away from home at EduCity, Iskandar Puteri), early-career fresh graduates, and gig workers, three critical cognitive and behavioral challenges were uncovered:

1. **Financial Anxiety &amp; Avoidance Loops:** Following early-semester lump-sum disbursements (e.g. PTPTN loans or allowance deposits), students rapidly deplete funds. Traditional personal finance apps exacerbate this shame by presenting punitive red alerts, negative scolding cues, and complex accounting tables—leading users to avoid opening banking apps altogether.
2. **Gig-Income Volatility &amp; Horizon Mismatch:** Freelancers and gig riders (e.g., GrabFood, Shopee, tutoring) face unpredictable weekly income swings. A single unexpected expense (vehicle servicing) wipes out subsistence budgets because static monthly templates fail.
3. **Social Spending Pressures ("The Mamak Dilemma"):** Intense peer pressure during group dining leads students to overspend out of fear of appearing stingy or socially awkward.

### Re-Conceptualization: The "Runway" Mental Model
The design team transformed personal finance from a stressful bookkeeping ledger into an empathetic, glanceable **"Fuel Gauge"** that answers the student's primary morning question:
> **"How many days of normal life do I have left?"** (Runway Days) and **"How much is Safe-to-Spend today?"**

---

## 2. Three Distinct Design Concepts &amp; Hybrid Integration

To ground the system in established interaction patterns, the team evaluated three distinct concepts:

| Concept | Core Interaction | Key Strength | Evaluated Risk / Trade-Off |
| :--- | :--- | :--- | :--- |
| **Concept 1: "Runway" (Selected)** | Glance-first central fuel gauge displaying **Runway Days** &amp; **Safe-to-Spend** limit using calm color transitions. | Eliminates financial avoidance; rapid `< 5s` numeric keypad logging without compulsory categorization. | Lacks multi-step decision forecasting if used in isolation. |
| **Concept 2: "What-If Lab"** | Pre-purchase decision simulator for big tickets, BNPL plans, and salary deductions. | Proactively flags auto-debit overdraft penalties and models Malaysian statutory deductions (EPF, SOCSO, EIS). | Higher computational complexity if built as a standalone tool. |
| **Concept 3: "Circle"** | Peer-aware social spending coach targeting group dining ("The Mamak Dilemma"). | Low-stigma refusal toolkits ("Graceful Out"), bill splitting, and anonymous peer challenge streaks. | Narrower scope if focused exclusively on social interactions. |

### The Winning Hybrid Architecture
As detailed in **Section 3 of `Deliverable 2.md`**, **Concept 1 ("Runway") was selected as the foundational core**, enhanced by integrating high-impact features from Concepts 2 and 3:
* **From Concept 1:** The primary Runway Fuel Gauge, `< 5s` Rapid Numeric Keypad with optional Mood Tags, and Ambient Widgets.
* **From Concept 2:** The inline **"Mamak Night" Decision Simulator** (Teh Tarik vs Full Supper), **BNPL Collision Checker**, and **Graduate Salary Reality Simulator**.
* **From Concept 3:** The **"Graceful Out" Social Refusal Toolkit** and **"Squad Goals" Anonymous Peer Challenge**.

---

## 3. Screen-by-Screen Implementation in the Lo-Fi Prototype

The interactive prototype (`index.html`) faithfully implements the complete screen architecture:

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                    FINANCIAL RESILIENCE NAVIGATOR (HYBRID)                    │
├───────────────┬───────────────┬───────────────┬───────────────┬───────────────┤
│ 1. RUNWAY     │ 2. QUICK-ADD  │ 3. WHAT-IF    │ 4. CIRCLE     │ 5. WIDGETS    │
│ Fuel Gauge    │ Numeric Pad   │ Decision Lab  │ Social Coach  │ Ambient Glance│
│ Days Left     │ & Gig-Smooth  │ & BNPL Checks │ & Graceful Out│ Lockscreen    │
└───────────────┴───────────────┴───────────────┴───────────────┴───────────────┘
```

### Screen 1: Runway Fuel Gauge (US-01, US-06)
* **Hero Metric:** Displays **Runway Days** prominently (`18 DAYS LEFT`) and **Safe-to-Spend Today** (`RM 25.00 / day`).
* **Semicircular Capacity Gauge:** Uses a non-punitive calm dial (green → amber → soft blue) avoiding aggressive red scolding.
* **Non-Judgmental Alerts:** Gentle notifications indicating reserved BNPL auto-debit funds without shame triggers.
* **Spending Ceiling:** Monthly goal cap tracking burn rate without spreadsheet intimidation.

### Screen 2: Quick-Add Tracker &amp; Gig-Income Smoothing (US-04, US-05)
* **Rapid Numeric Keypad Modal:** Dedicated 0–9 keypad with 1-tap optional **Mood Tags** (`🍽️ Food`, `☕ Social`, `🚗 Transport`, `📚 Study`). Logging takes `< 5 seconds`.
* **Gig-Income Smoothing Module:** A 4-week rolling average algorithm that stabilizes erratic weekly earnings for gig workers, preventing seasonal dips from artificially distorting daily runway.
* **Calculations &amp; Audit Trail:** Transparent formula:
  $$\text{Base Allowance} - \text{Logged Expenditures} - \text{Committed BNPL} = \text{Net Safe Buffer}$$

### Screen 3: "What-If Lab" &amp; BNPL Collision Checker (US-03, US-08)
* **"Mamak Night" Decision Simulator:** Interactive slider moving from `RM 3.00 (Teh Tarik only)` to `RM 25.00 (Full Supper Feast)`, visually calculating real-time runway preservation (+1.2 days gained vs -1.2 days lost).
* **BNPL Collision Checker:** Overlays installment obligations (SPayLater RM 120/mo and Atome RM 50/mo) and issues proactive 3-day buffer warnings to prevent RM 10 late fees.
* **Graduate Salary Reality Simulator:** Calculates net take-home salary from gross offers by factoring in official Malaysian statutory deductions: EPF (11%), SOCSO (0.5%), EIS (0.2%), and PTPTN loans against Belanjawanku living benchmarks.

### Screen 4: "Circle" &amp; "Graceful Out" Social Toolkit (US-09)
* **"Graceful Out" Toolkit:** Low-stigma, pre-formatted bilingual refusal prompts with 1-click clipboard copying:
  * *"I'm in for teh tarik, skipping late supper tonight!"* (Copy)
  * *"Sedang jimat minggu ni, jom lepak minum je!"* (Salin Mesej)
* **"Squad Goals" Anonymous Peer Challenge:** Community habit streaks (e.g. "No-Boba Week", Day 4 of 7) motivating students without exposing account balances.
* **Outing Cost Splitter:** Interactive pre-event cost calculator checking per-person liability against discretionary buffers.

### Screen 5: Ambient Widgets &amp; System Tray (US-02, US-07)
* **Lockscreen &amp; Homescreen 2x2 Widgets:** Provides zero-click ambient financial visibility upon waking up or turning on the computer.
* **System Tray Glance:** Menu-bar status pill showing `[ 🟢 18d | RM 25/d ]`.
* **Zero-Credential Privacy:** Completely local data storage (LocalStorage/SQLite architecture) with zero open-banking credential linking.

---

## 4. Dual Viewport Scalability &amp; Bilingual Engine

### 1. Viewport Scaler Toolbar
* **📱 Mobile Simulator Mode (390px):** Emulates mobile handset ergonomics with notch and bottom tab navigation.
* **💻 Desktop Dashboard Mode (1200px Fluid):** Expands into a widescreen dashboard with vertical sidebar navigation, multi-column responsive grid (`.desktop-split-grid`), and desktop top bar.
* **Auto-Detection:** Automatically opens in Desktop Dashboard mode on displays $\ge 992\text{px}$.

### 2. Bilingual Interface Toggle (US-10)
* One-click toggle (`[🌐 Language: EN | BM]`) instantly translates all UI components, buttons, calculation headers, and social prompts between **English** and **Bahasa Melayu**.

---

## 5. Traceability Matrix: User Stories &amp; Deliverable 2 Alignment

| Epic | User Story | Priority | Implemented UI Component |
| :--- | :--- | :--- | :--- |
| **Epic 1** | **US-01:** View Runway Days &amp; Safe-to-Spend | **Must Have** | Screen 1: Hero Runway Box (`18 Days Left`) &amp; Safe-to-Spend (`RM 25/d`). |
| **Epic 1** | **US-02:** System Tray &amp; Widget Access | **Must Have** | Screen 5: Lockscreen Pill &amp; Desktop Menu Bar Widget. |
| **Epic 2** | **US-03:** BNPL Collision Calendar | **Must Have** | Screen 3: BNPL Timeline Collision Box with 3-day buffer alert. |
| **Epic 2** | **US-04:** Rapid Numeric Keypad &amp; Mood Tags | **Must Have** | Screen 2: Slide-in 0–9 Keypad Modal with 1-tap Mood Tags (`< 5s` logging). |
| **Epic 2** | **US-05:** 4-Week Gig-Income Smoothing | **Must Have** | Screen 2: Gig Smoothing Toggle with rolling average baseline calculation. |
| **Epic 3** | **US-06:** Non-Judgmental Overspending Alerts | **Must Have** | Screen 1: Empathetic reminder banner avoiding red scolding cues. |
| **Epic 7** | **US-07:** Zero-Credential Local Privacy | **Must Have** | Screen 5: Local-first architecture without bank credential scraping. |
| **Epic 4** | **US-08:** Graduate Salary Reality Simulator | **Should Have** | Screen 3: Malaysian statutory deductions (EPF 11%, SOCSO, EIS, PTPTN). |
| **Epic 4** | **US-09:** "Squad Goals" Anonymous Peer Challenge | **Should Have** | Screen 4: "No-Boba Week" peer challenge streak tracker. |
| **Epic 6** | **US-10:** Bilingual Interface (EN / BM) | **Should Have** | Top Bar: Instant 1-click toggle between English and Bahasa Melayu. |
| **Out-Scope**| **US-11 &amp; US-12:** Bank Scraping &amp; AI Chatbots | **Won't Have** | Excluded to preserve privacy and prevent speculative ML in COMP2300. |

---

## 6. How to Run, Test, and Inspect

### Option 1: Open Directly in Web Browser
Open `index.html` in any browser:
```bash
xdg-open index.html
```

### Option 2: Run via Local Python Server
```bash
cd /home/potato/Projects/COMP2300-coursework/Lofi-Prototype
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Option 3: Review Full Deliverable 2 Report
* Read [`Deliverable 2.md`](file:///home/potato/Projects/COMP2300-coursework/Lofi-Prototype/Deliverable%202.md) for the complete academic report including ideation mind maps, research synthesis, and comparative evaluations.
* Inspect [`wireframes/Wireframe.drawio`](file:///home/potato/Projects/COMP2300-coursework/Lofi-Prototype/wireframes/Wireframe.drawio) for the editable XML diagrams.

---
*Created for COMP2300 Software Design and Development Project — Deliverable 2 (D2).*
