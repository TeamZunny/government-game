/* Named political offices. Directory entries are definitions, not yet playable career routes. */
(function(){
"use strict";
const OFFICES=[{"id":"school-board-member","group":"Education","name":"School Board Member","method":"Usually elected","duty":"Sets district policy and budgets; oversees the superintendent.","entry":"Win a school board election."},{"id":"office-2","group":"Education","name":"School Board Chair / President","method":"Chosen by board members","duty":"Presides over school board meetings and procedures.","entry":"Serve on the board and be selected."},{"id":"office-3","group":"Education","name":"Education Advisory Board Member","method":"Appointed","duty":"Advises education officials on local needs.","entry":"Receive appointment."},{"id":"office-4","group":"Education","name":"State Board of Education Member","method":"Elected or appointed; varies","duty":"Sets statewide education policy within state law.","entry":"Win election or receive appointment."},{"id":"office-5","group":"Education","name":"State Superintendent of Public Instruction","method":"Elected or appointed; varies","duty":"Directs statewide education administration.","entry":"Win election or receive appointment."},{"id":"office-6","group":"Town & City","name":"Town Council Member","method":"Elected","duty":"Votes on town budgets and ordinances.","entry":"Win town election."},{"id":"office-7","group":"Town & City","name":"City Council Member / Alderperson","method":"Elected","duty":"Legislates on city services budgets and ordinances.","entry":"Win city council election."},{"id":"office-8","group":"Town & City","name":"City Council President / Chair","method":"Selected or elected; varies","duty":"Presides over council and manages its procedures.","entry":"Serve on council and be selected or elected."},{"id":"office-9","group":"Town & City","name":"Select Board Member","method":"Elected","duty":"Oversees town policy and administration.","entry":"Win select board election where used."},{"id":"office-10","group":"Town & City","name":"Town Supervisor / Board Chair","method":"Elected or selected; varies","duty":"Leads town government or board business.","entry":"Win local election or be selected."},{"id":"office-11","group":"Town & City","name":"Township Trustee","method":"Usually elected","duty":"Governs designated township services.","entry":"Win township election."},{"id":"office-12","group":"Town & City","name":"Mayor","method":"Elected or selected; varies","duty":"Leads or represents city government; powers vary.","entry":"Win mayoral election or be selected by council."},{"id":"office-13","group":"Town & City","name":"Deputy Mayor / Vice Mayor","method":"Elected selected or appointed; varies","duty":"Assists mayor and may act in their absence.","entry":"Qualify under city charter and be chosen."},{"id":"office-14","group":"Town & City","name":"City Manager","method":"Appointed administrator","duty":"Runs daily city administration under council oversight.","entry":"Be appointed by city council."},{"id":"office-15","group":"Town & City","name":"City / Town Clerk","method":"Elected or appointed; varies","duty":"Maintains municipal records and procedures.","entry":"Win election or receive appointment."},{"id":"office-16","group":"Town & City","name":"City / Town Treasurer","method":"Elected or appointed; varies","duty":"Manages municipal funds and accounts.","entry":"Win election or receive appointment."},{"id":"office-17","group":"Town & City","name":"Planning & Zoning Commissioner","method":"Usually appointed","duty":"Reviews planning and land use proposals.","entry":"Receive local appointment."},{"id":"office-18","group":"County & Regional","name":"County Commissioner","method":"Elected","duty":"Approves county budgets policy and services.","entry":"Win county election."},{"id":"office-19","group":"County & Regional","name":"County Commission Chair","method":"Selected or elected; varies","duty":"Leads county board meetings and agenda.","entry":"Serve on board and be selected or elected."},{"id":"office-20","group":"County & Regional","name":"County Council Member","method":"Elected","duty":"Legislates and reviews county finances.","entry":"Win county council election where used."},{"id":"office-21","group":"County & Regional","name":"County Executive","method":"Elected or appointed; varies","duty":"Heads county executive administration.","entry":"Win election or receive appointment."},{"id":"office-22","group":"County & Regional","name":"County Administrator / Manager","method":"Appointed administrator","duty":"Runs daily county operations.","entry":"Be appointed under county rules."},{"id":"office-23","group":"County & Regional","name":"County Sheriff","method":"Usually elected; varies","duty":"Leads county law enforcement and often the jail.","entry":"Win election or receive appointment."},{"id":"office-24","group":"County & Regional","name":"County Clerk / Recorder","method":"Elected or appointed; varies","duty":"Maintains public records and official filings.","entry":"Win election or receive appointment."},{"id":"office-25","group":"County & Regional","name":"County Treasurer","method":"Elected or appointed; varies","duty":"Handles county funds and finances.","entry":"Win election or receive appointment."},{"id":"office-26","group":"County & Regional","name":"County Assessor","method":"Elected or appointed; varies","duty":"Values property for taxation.","entry":"Win election or receive appointment."},{"id":"office-27","group":"County & Regional","name":"District Attorney / State's Attorney","method":"Elected or appointed; varies","duty":"Leads criminal prosecutions for a jurisdiction.","entry":"Meet legal qualifications and win or be appointed."},{"id":"office-28","group":"County & Regional","name":"Water / Utility District Board Member","method":"Elected or appointed; varies","duty":"Governs a dedicated public utility district.","entry":"Win district election or be appointed."},{"id":"office-29","group":"County & Regional","name":"Regional Transit Authority Board Member","method":"Usually appointed","duty":"Governs public transit priorities and budgets.","entry":"Receive regional appointment."},{"id":"office-30","group":"State","name":"State Representative / Assembly Member","method":"Elected","duty":"Makes state laws and represents a district.","entry":"Win state legislature election."},{"id":"office-31","group":"State","name":"State Senator","method":"Elected","duty":"Makes state laws and represents a senate district.","entry":"Win state senate election."},{"id":"office-32","group":"State","name":"Speaker of the State House","method":"Chosen by legislators","duty":"Leads the lower state legislative chamber.","entry":"Serve as legislator and be selected speaker."},{"id":"office-33","group":"State","name":"State Senate President / President Pro Tempore","method":"Selected or constitutional role; varies","duty":"Presides over state senate proceedings.","entry":"Hold necessary legislative or state office."},{"id":"office-34","group":"State","name":"State Majority / Minority Leader","method":"Chosen by party caucus","duty":"Leads state legislative party caucus.","entry":"Be selected by legislative colleagues."},{"id":"office-35","group":"State","name":"Governor","method":"Elected","duty":"Leads state executive government.","entry":"Win statewide election."},{"id":"office-36","group":"State","name":"Lieutenant Governor","method":"Elected or appointed; varies","duty":"Assists governor and has succession duties.","entry":"Win election or receive appointment."},{"id":"office-37","group":"State","name":"State Attorney General","method":"Elected or appointed; varies","duty":"Serves as state's chief legal officer.","entry":"Meet qualifications and win election or appointment."},{"id":"office-38","group":"State","name":"State Secretary of State","method":"Elected or appointed; varies","duty":"Oversees state records and often elections.","entry":"Win election or receive appointment."},{"id":"office-39","group":"State","name":"State Treasurer","method":"Elected or appointed; varies","duty":"Manages state funds and investments.","entry":"Win election or receive appointment."},{"id":"office-40","group":"State","name":"State Auditor / Comptroller","method":"Elected or appointed; varies","duty":"Audits finances or manages state accounts.","entry":"Win election or receive appointment."},{"id":"office-41","group":"State","name":"State Agriculture Commissioner","method":"Elected or appointed; varies","duty":"Oversees agriculture-related state programs.","entry":"Win election or receive appointment."},{"id":"office-42","group":"State","name":"State Insurance Commissioner","method":"Elected or appointed; varies","duty":"Oversees insurance regulation.","entry":"Win election or receive appointment."},{"id":"office-43","group":"State","name":"State Labor Commissioner","method":"Usually appointed; varies","duty":"Oversees labor and workforce programs.","entry":"Receive appointment or win election."},{"id":"office-44","group":"State","name":"State Public Service / Utilities Commissioner","method":"Elected or appointed; varies","duty":"Regulates specified utilities and services.","entry":"Win election or receive appointment."},{"id":"office-45","group":"State","name":"State Cabinet / Agency Secretary","method":"Appointed","duty":"Runs a state executive department.","entry":"Receive governor's appointment."},{"id":"office-46","group":"State","name":"State Supreme Court Justice","method":"Elected or appointed; varies","duty":"Interprets state law and decides appeals.","entry":"Meet judicial requirements and be selected."},{"id":"office-47","group":"Federal","name":"U.S. Representative","method":"Elected","duty":"Makes federal laws for a congressional district.","entry":"Win House election; age 25+ citizen 7 years and state inhabitant."},{"id":"office-48","group":"Federal","name":"U.S. House Delegate / Resident Commissioner","method":"Elected in eligible territories","duty":"Represents a territory with limited floor votes.","entry":"Win relevant territorial election."},{"id":"office-49","group":"Federal","name":"Speaker of the U.S. House","method":"Chosen by House","duty":"Leads House proceedings and leadership.","entry":"Be elected Speaker by House."},{"id":"office-50","group":"Federal","name":"U.S. House Majority / Minority Leader","method":"Chosen by party caucus","duty":"Leads House party agenda.","entry":"Be chosen by party colleagues."},{"id":"office-51","group":"Federal","name":"U.S. Senator","method":"Elected","duty":"Makes federal laws for a whole state.","entry":"Win Senate election; age 30+ citizen 9 years and state inhabitant."},{"id":"office-52","group":"Federal","name":"U.S. Senate Majority / Minority Leader","method":"Chosen by party caucus","duty":"Leads Senate party strategy and scheduling.","entry":"Be chosen by party colleagues."},{"id":"office-53","group":"Federal","name":"President Pro Tempore of the U.S. Senate","method":"Elected by Senate","duty":"Presides when required; constitutional succession role.","entry":"Be elected by Senate."},{"id":"office-54","group":"Federal","name":"Federal Agency Administrator / Director","method":"Appointed","duty":"Leads a federal agency and its programs.","entry":"Receive executive appointment; confirmation sometimes required."},{"id":"office-55","group":"Federal","name":"U.S. Ambassador","method":"Nominated and confirmed","duty":"Represents U.S. government overseas.","entry":"Receive presidential nomination and Senate confirmation."},{"id":"office-56","group":"Federal","name":"U.S. Cabinet Secretary","method":"Nominated and confirmed","duty":"Leads executive department and advises president.","entry":"Receive presidential nomination and Senate confirmation."},{"id":"office-57","group":"Federal","name":"Federal Judge","method":"Nominated and confirmed","duty":"Hears cases and interprets federal law.","entry":"Receive presidential nomination and Senate confirmation."},{"id":"office-58","group":"Federal","name":"U.S. Supreme Court Justice","method":"Nominated and confirmed","duty":"Decides constitutional and major federal questions.","entry":"Receive presidential nomination and Senate confirmation."},{"id":"office-59","group":"Federal","name":"Vice President of the United States","method":"Elected on presidential ticket","duty":"Assists president; Senate presiding and succession duties.","entry":"Win with presidential ticket or succeed lawfully."},{"id":"office-60","group":"Federal","name":"President of the United States","method":"Elected via Electoral College","duty":"Heads executive branch and serves as head of state.","entry":"Win presidential election or succeed lawfully; natural-born citizen age 35+ and resident 14 years."}];
const GROUPS=["Education","Town & City","County & Regional","State","Federal"];
let selectedGroup="Education",selectedOffice=null,query="";
function careerStatus(){
 if(!state?.quizDone)return{position:"No office held",goal:"Finish creating your character",today:"Begin your political life"};
 const c=state.career||{},day=Number(state.day)||1;
 if(c.status==="member-elect")return{position:"School Board Member-elect",goal:"Prepare to take office",today:"Governing system is not yet playable"};
 if(c.status==="defeated")return{position:"Former School Board Candidate",goal:"Plan a new campaign",today:"Further career paths are in development"};
 const tasks=["Hear the parents","Visit a local voter","File your candidacy","Listen to teachers","Check a public claim","Assign volunteers","Plan next week's work"];
 return{position:"School Board Candidate",goal:"Win the School Board election",
   today:day<=7?tasks[day-1]:(day>=24?"Election Day":"Continue campaign work")};
}
function ensureCareer(){
 if(!state?.quizDone)return;
 if(!state.career||typeof state.career!=="object")state.career={status:"candidate",currentOffice:null,targetOffice:"school-board-member",history:[]};
 if(!Array.isArray(state.career.history))state.career.history=[];
 if(!state.career.status)state.career.status="candidate";
}
function careerProgress(){
 if(!state?.quizDone||state.career?.status!=="candidate")return[];
 const choices=state.tutorialWeek?.choices||{};
 const day=Number(state.day)||1;
 const v=!!choices["2-second"],f=!!choices["3-second"];
 return [
  {name:"Meet local voters",done:v,detail:v?"First conversation recorded":"Hear voters' concerns"},
  {name:"Submit candidacy paperwork",done:f,detail:f?"Received for processing":"Check filing requirements"},
  {name:"Build voter support",done:(Number(state.stats?.field)||0)>=35,detail:(Number(state.stats?.field)||0)>=35?"Outreach foundation established":"Keep talking with residents and following up"}
 ];
}
function careerSummary(){
 const c=careerStatus();
 return '<section class="careerSummary" data-career-injected="true"><span class="careerEyebrow">CURRENT STATUS</span><strong>'+esc(c.position)+'</strong><span class="careerEyebrow">OFFICE HELD</span><small>None</small><span class="careerEyebrow">GOAL</span><b>'+esc(c.goal)+'</b><span class="careerEyebrow">TODAY</span><small>'+esc(c.today)+'</small>'+
 careerProgress().map(x=>'<div class="careerTask"><span>'+(x.done?"✓":"○")+'</span><div><b>'+esc(x.name)+'</b><small>'+esc(x.detail)+'</small></div></div>').join('')+'</section>';
}
function updateCareerHeader(){
 const top=document.querySelector(".topCenter");if(!top)return;
 const chap=top.querySelector(".chapter"),title=top.querySelector("h1");if(!chap||!title)return;
 if(!state){chap.textContent="HARBOR WARD SEVEN";title.textContent="Your Political Life";return;}
 const s=careerStatus();
 chap.textContent="CURRENT STATUS · "+s.position;
 title.textContent="Goal: "+s.goal;
}
function decorateCareer(){
 if(!state?.quizDone||!root?.innerHTML||root.innerHTML.includes('data-career-injected="true"'))return;
 if(root.className.includes("ggWeek")){
  root.innerHTML=root.innerHTML.replace('<div class="ggSep">',careerSummary()+'<div class="ggSep">');
 }else if(root.className.includes("game")){
  root.innerHTML=root.innerHTML.replace(/<aside class="panel left"><h2>.*?<\/h2>/,
    '<aside class="panel left"><h2>'+esc(careerStatus().position)+'</h2>'+careerSummary());
 }
}
const previousSave=save;
save=function(){if(state?.quizDone)ensureCareer();previousSave();updateCareerHeader();decorateCareer();};
const previousMigrate=migrate;
migrate=function(){previousMigrate();ensureCareer();};
const previousGame=renderGame;
renderGame=function(){previousGame();updateCareerHeader();decorateCareer();};
const previousHome=renderHome;
renderHome=function(){previousHome();updateCareerHeader();};
const previousQuiz=renderQuiz;
renderQuiz=function(){previousQuiz();updateCareerHeader();};
const previousReveal=renderReveal;
renderReveal=function(){previousReveal();updateCareerHeader();};
const previousEnding=renderEnding;
renderEnding=function(){
 if(state?.quizDone){
  ensureCareer();
  if(state.career.status==="candidate"){
   const result=calculateOutcome();
   state.career.status=result.startsWith("win")?"member-elect":"defeated";
   state.career.electionResult=result;
   save();
  }
 }
 previousEnding();updateCareerHeader();
};
function showCareer(){
 if(state?.quizDone)ensureCareer();
 selectedGroup="Education";selectedOffice=null;query="";
 const s=careerStatus();
 modal.className="modalBackdrop show";
 modal.innerHTML='<div class="modal careerModal"><div class="careerTop"><div><div class="qtag">YOUR POLITICAL CAREER</div><h2>Political Offices</h2></div><button class="btn secondary" data-act="careerClose">Close</button></div>'+
 '<div class="careerCurrent"><b>'+esc(s.position)+'</b><span>Office held: '+(state?.career?.status==="member-elect"?"Not yet sworn in":"None")+'</span><span>Immediate goal: '+esc(s.goal)+'</span></div>'+
 '<p class="careerNotice">This is the named office directory. Beyond the first School Board campaign, elections and governing are not playable yet.</p>'+
 '<div class="careerTabs" id="careerTabs"></div><input id="careerSearch" class="careerSearch" type="search" placeholder="Search all offices" aria-label="Search offices" autocomplete="off">'+
 '<div class="careerColumns"><div class="careerList" id="careerList"></div><div class="careerDetails" id="careerDetails"></div></div></div>';
 const input=document.getElementById("careerSearch");
 if(input)input.addEventListener("input",()=>{query=input.value.trim().toLowerCase();renderCareerList();});
 renderCareerList();
}
function renderCareerList(){
 const tabs=document.getElementById("careerTabs"),list=document.getElementById("careerList");
 if(!tabs||!list)return;
 tabs.innerHTML=GROUPS.map(g=>'<button data-act="careerGroup" data-group="'+esc(g)+'" aria-pressed="'+(g===selectedGroup)+'">'+esc(g)+'</button>').join('');
 const offices=OFFICES.filter(o=>query?[o.name,o.duty,o.method,o.entry].join(" ").toLowerCase().includes(query):o.group===selectedGroup);
 list.innerHTML='<div class="careerCount">'+offices.length+' named positions · '+esc(query?"Search results":selectedGroup)+'</div>'+
 (offices.length?offices.map(o=>'<button class="careerOffice" data-act="careerDetail" data-office="'+esc(o.id)+'"><b>'+esc(o.name)+'</b><small>'+esc(o.method)+'</small></button>').join(''):'<p class="muted">No matching offices.</p>');
 renderCareerDetails();
}
function renderCareerDetails(){
 const panel=document.getElementById("careerDetails");if(!panel)return;
 const o=OFFICES.find(o=>o.id===selectedOffice);
 if(!o){panel.innerHTML='<p class="muted">Select an office to see its work and how someone can reach it.</p>';return;}
 panel.innerHTML='<div class="qtag">'+esc(o.group)+'</div><h3>'+esc(o.name)+'</h3>'+
 '<div class="careerFact"><b>Responsibilities</b><p>'+esc(o.duty)+'</p></div>'+
 '<div class="careerFact"><b>Selection</b><p>'+esc(o.method)+'</p></div>'+
 '<div class="careerFact"><b>Requirements / pathway</b><p>'+esc(o.entry)+'</p></div>'+
 '<p class="careerNotice">Defined potential office. Gameplay for this role is not yet implemented.</p>';
}
document.addEventListener("click",function(event){
 const el=event.target.closest("[data-act]");if(!el)return;
 const a=el.dataset.act;
 if(a==="career"){showCareer();}
 else if(a==="careerClose"){modal.className="modalBackdrop";modal.innerHTML="";}
 else if(a==="careerGroup"){selectedGroup=el.dataset.group||"Education";selectedOffice=null;query="";
  const search=document.getElementById("careerSearch");if(search)search.value="";renderCareerList();}
 else if(a==="careerDetail"){selectedOffice=el.dataset.office;renderCareerDetails();}
});
const style=document.createElement("style");
style.textContent=[
 ".topCenter{min-width:240px;max-width:420px}.topCenter .chapter{letter-spacing:.08em;font-size:10px}.topCenter h1{font-size:19px;line-height:1.2}",
 ".game .roomHint{display:none}.game .stageTop>p.muted:first-of-type{display:none}.game .roomBtn{padding:8px;margin:5px 0}",
 ".careerSummary{border:1px solid var(--line);border-radius:12px;background:rgba(244,213,141,.045);padding:9px;margin:8px 0;display:flex;flex-direction:column;gap:3px}",
 ".careerEyebrow{font-size:10px;color:var(--gold2);letter-spacing:.08em;margin-top:7px}.careerSummary strong{font-size:14px}.careerSummary>b{font-size:13px}.careerSummary>small{color:var(--ink);font-size:12px}",
 ".careerTask{display:flex;align-items:flex-start;gap:7px;margin-top:6px;padding-top:6px;border-top:1px solid rgba(244,213,141,.14)}.careerTask b{display:block;font-size:12px}.careerTask small{display:block;color:var(--muted);font-size:11px;line-height:1.25}",
 ".ggWeekAside>p{display:none}.game .left>.careerSummary{margin:0 8px 10px}",
 ".careerModal{width:min(1050px,96vw);max-height:88vh;overflow:hidden;display:flex;flex-direction:column;gap:9px}",
 ".careerTop{display:flex;justify-content:space-between;align-items:center}.careerTop h2{margin:4px 0;color:var(--gold2);font-family:var(--serif)}",
 ".careerCurrent{display:flex;flex-wrap:wrap;gap:10px;border:1px solid var(--line);border-radius:12px;padding:9px;font-size:12px}",
 ".careerNotice{color:var(--muted);font-size:12px;line-height:1.35;margin:0}",
 ".careerTabs{display:flex;flex-wrap:wrap;gap:5px}.careerTabs button{font-size:12px;background:transparent;border:1px solid var(--line);border-radius:99px;padding:5px 9px;color:var(--ink)}",
 ".careerTabs button[aria-pressed=true]{border-color:var(--gold2);background:rgba(244,213,141,.1)}",
 ".careerSearch{width:min(370px,100%);border-radius:10px;border:1px solid var(--line);padding:9px;background:#170f0a;color:var(--ink)}",
 ".careerColumns{display:grid;grid-template-columns:1.1fr 1fr;gap:11px;min-height:0;flex:1}",
 ".careerList,.careerDetails{min-height:0;overflow:auto;border:1px solid var(--line);padding:10px;border-radius:12px}",
 ".careerCount{font-size:11px;color:var(--muted);margin:0 0 7px}.careerOffice{display:flex;justify-content:space-between;gap:12px;text-align:left;align-items:baseline;width:100%;margin-bottom:5px;padding:9px;background:rgba(255,255,255,.04);color:var(--ink);border:1px solid var(--line);border-radius:9px}",
 ".careerOffice:hover{border-color:var(--gold2)}.careerOffice b{font-size:13px}.careerOffice small{font-size:10px;color:var(--gold2);text-align:right}",
 ".careerDetails h3{font-family:var(--serif);color:var(--gold2);font-size:24px}.careerFact{margin:13px 0}.careerFact b{color:var(--gold2);font-size:12px}.careerFact p{margin:4px 0;font-size:14px;line-height:1.35}",
 "@media(max-width:1450px){.topCenter{min-width:215px;max-width:350px}.topCenter h1{font-size:17px}.topCenter .chapter{font-size:9px}}",
 "@media(max-height:720px){.careerModal{max-height:92vh;padding:14px}.careerSummary{padding:7px}.careerTask{margin-top:3px;padding-top:3px}}"
].join("");
document.head.appendChild(style);
updateCareerHeader();
})();
