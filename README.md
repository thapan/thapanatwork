thapanatwork (Fire TV QA & Automation Portfolio)
A React/Vite portfolio showcasing Product QA & Automation Lead work across Fire TV (Amazon) and WLAN validation (Qualcomm).

Setup
Node 18+
Install: npm install
Dev: npm run dev (Vite; default at http://localhost:5173/thapanatwork/ per base setting)
Build: npm run build
Preview build: npm run preview
Structure
App.jsx, Layout.js — routing/shell (HashRouter, smooth-scroll nav)
Pages/Home.js — main page composing portfolio sections
components/portfolio/* — hero, projects, timeline, skills, stats, contact
public/shubham_resume.pdf — current downloadable resume
Notable Content
Hero: Product QA & Automation Lead (Fire TV), 10+ yrs, launch QA & connectivity focus
Projects: Amazon (FTV Launch QA/Automation; automation & tooling; lab ops; hotspot programs), Qualcomm (automation/ML, stress labs, RF debug, chipset bring-up)
Skills/Tools: Technical & leadership tiles aligned to projects; tools grouped (wireless/RF, automation/CLI, cloud/pipelines, QA/launch ops, lab ops, AI/analytics)
Stats: Launches, automation, tests executed, tools/frameworks built
Contact: Email, LinkedIn, resume download
Resume Download
Resume link points to public/shubham_resume.pdf. Replace this file to update the download.
Notes
Smooth-scroll navigation with header offset; scroll progress bar; back-to-top button on desktop.
Mobile nav closes before scrolling to sections.
