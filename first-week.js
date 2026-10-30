/* Government Game — first playable campaign week. Only NEW slots get this tutorial. */
(function(){
"use strict";
const chapters=[
{title:"The school crossing",person:"Tamsin Roe · Parent organizer",skill:"Listen before promising",
 setup:"Several families want a safer crossing outside Ash Street School. The school board may not control the road itself.",
 prompt:"Tamsin asks what you will do about the problem.",
 first:[
 ["Ask which requests the parents have already made.",{trust:2,research:1},"listen","Tamsin describes letters the district never answered."],
 ["Promise to fix the crossing if elected.",{trust:1,scrutiny:2},"promise","Tamsin appreciates the urgency, then asks whether the board has that power."],
 ["Request the safety reports and check who controls the road.",{research:3},"records","Tamsin gives you a reference number; the reports will take time."]
 ],
 follow:{listen:"Tamsin asks whether parents can help shape your proposal.",promise:"Tamsin asks how you would keep a promise outside the board's authority.",records:"Tamsin asks whether she will hear from you before the records arrive."},
 second:[
 ["Arrange a follow-up meeting and be clear about what you still need to learn.",{trust:2,coalition:1},"followup","Tamsin agrees to another meeting. She will remember the commitment."],
 ["Explain that you must speak to the people responsible for the road first.",{research:2,trust:-1},"authority","Tamsin accepts that, but asks for a definite update."]
 ]},
{title:"The first doorstep",person:"Luz Ortega · Field lead",skill:"Learn voter contact",
 setup:"You have a single volunteer shift. Luz takes you to a household willing to talk.",
 prompt:"A resident asks why school-board elections matter when the city controls the roads.",
 first:[
 ["Agree there are different authorities and ask what concerns them most.",{trust:2,field:2},"listen","The resident explains how school hours affect traffic."],
 ["Explain your priorities for the schools.",{message:2,field:1},"message","They listen, then repeat their question about responsibility."],
 ["Say you need to check the rules before giving a definite answer.",{trust:2,research:1},"honest","The voter says they rarely hear a candidate admit that."]
 ],
 follow:{listen:"The resident says a neighbor could introduce you to three other households. They do not want a rehearsed speech.",message:"The resident asks whether you will return with a practical answer.",honest:"The resident asks you to come back once you know more."},
 second:[
 ["Record the question and arrange a follow-up, without assuming their support.",{field:2,trust:1},"return","Luz marks the follow-up in the campaign records."],
 ["Ask permission to leave information about the campaign.",{field:1,message:1},"card","The resident takes a card but promises nothing."]
 ]},
{title:"A filing correction",person:"Celia Park · Election-office clerk",skill:"Learn deadlines and rules",
 setup:"The election office has flagged an address discrepancy in your campaign paperwork.",
 prompt:"Celia returns your filing packet. It is not yet accepted.",
 first:[
 ["Find the official requirement and correct the entry.",{compliance:3,rules:2},"verify","Celia points to the instructions and verifies the changed entry."],
 ["Ask whether it can be amended later.",{rules:1,scrutiny:1},"amend","Celia explains that an amendment is not automatic approval."],
 ["Check the supporting record with your campaign contact.",{team:1,compliance:1},"call","The contact finds the supporting document."]
 ],
 follow:{verify:"Celia says to keep the receipt as proof of the filing.",amend:"You still have time to fix the packet, but the deadline will not move for you.",call:"The paperwork matches. Celia asks whether you want to review the whole packet."},
 second:[
 ["Review the full packet and save the official receipt.",{compliance:2,rules:1},"receipt","Your corrected packet is received for processing. The assistant records the receipt."],
 ["Submit the corrected packet and move to your next appointment.",{compliance:1},"submit","The packet is received for processing. You still need to watch for confirmation."]
 ]},
{title:"The teachers' questions",person:"Kenna Brooks · Teachers association contact",skill:"Understand coalition choices",
 setup:"Kenna has not endorsed anyone. Teachers want to know how you would divide a tight school budget.",
 prompt:"She asks whether classroom staffing or building repairs should come first.",
 first:[
 ["Ask for examples from the affected schools before deciding.",{coalition:2,research:1},"ask","Kenna identifies two schools with very different problems."],
 ["Explain your priority while admitting the budget tradeoff.",{policy:2,trust:1},"answer","Kenna says a serious answer must survive new evidence."],
 ["Ask whether the association will support your campaign.",{coalition:-1,message:1},"endorse","Kenna says members decide endorsements, not her alone."]
 ],
 follow:{ask:"Kenna asks if teachers can review your proposal before you publish it.",answer:"Kenna asks whether you would change the plan if teachers supplied better numbers.",endorse:"Kenna explains that support cannot be promised in exchange for one meeting."},
 second:[
 ["Invite written feedback and consider it before finalizing.",{coalition:2,policy:1},"feedback","Kenna agrees to circulate the idea, without offering an endorsement."],
 ["Keep final control of the campaign's position.",{message:1,coalition:-1},"control","Kenna accepts that boundary, but remains undecided."]
 ]},
{title:"The rival's leaflet",person:"Owen Slate · Press and digital",skill:"Check information before reacting",
 setup:"Victor Rusk's campaign says your school priorities ignore taxpayers. A reporter wants a response.",
 prompt:"Owen has the leaflet but not the data behind its main claim.",
 first:[
 ["Check the figures before answering, even if the reporter waits.",{research:2,press:1},"verify","A public budget table complicates the leaflet's claim."],
 ["Respond with your own priorities without repeating the accusation.",{message:2,press:1},"reply","The reporter asks for one specific example."],
 ["Decline comment and keep your planned voter appointments.",{field:1,press:-1},"decline","The reporter says the article will run regardless."]
 ],
 follow:{verify:"Owen asks whether to release the partial figures or wait for a more complete check.",reply:"The reporter wants to know what you would actually change.",decline:"Owen asks whether you want to leave the claims unanswered."},
 second:[
 ["Provide one verifiable fact and offer the supporting record.",{press:2,research:1},"facts","The reporter records the sourcing. The story remains outside your control."],
 ["Offer a brief statement of your position and move on.",{message:2},"brief","Your position is recorded. The wider argument continues."]
 ]},
{title:"A volunteer shift",person:"Luz Ortega · Field lead",skill:"Choose what you cannot do today",
 setup:"One volunteer shift can reach new apartment residents, follow up with parents, or improve the voter list. Not all three.",
 prompt:"Luz asks which job to prioritize.",
 first:[
 ["Reach apartment residents who have not heard from the campaign.",{field:2,inclusion:2},"apartments","The volunteers find new concerns but little time for follow-ups."],
 ["Honor the parent group's earlier follow-up.",{trust:2,coalition:1},"parents","Tamsin gets a response; fewer new doors are knocked."],
 ["Check the voter list before scheduling more door visits.",{research:2,field:1},"list","Luz finds duplicate records, but the shift reaches fewer residents."]
 ],
 follow:{apartments:"Several residents say the evening forum time excludes them.",parents:"Tamsin asks whether you can raise the crossing problem formally.",list:"Luz asks whether to correct records immediately or keep moving."},
 second:[
 ["Adjust next week's schedule using what the team learned.",{team:2,adaptability:1},"adjust","The revised plan goes to volunteers."],
 ["Keep the published schedule so volunteers can rely on it.",{team:1,field:1},"steady","The team knows what to expect, though some needs will wait."]
 ]},
{title:"Your first weekly review",person:"Mara Chen · Campaign manager",skill:"Make your next commitment",
 setup:"One week in, the ward knows a little about you. You have made decisions, but not all consequences are visible yet.",
 prompt:"Mara asks what should take priority next week.",
 first:[
 ["Revisit people who are waiting for an answer.",{trust:2,field:1},"follow","The follow-up list becomes the first priority."],
 ["Meet voters who have not heard from your campaign.",{field:2,inclusion:1},"outreach","Luz starts a new contact plan."],
 ["Prepare a clear public explanation of your school priorities.",{message:2,policy:1},"policy","Owen schedules a careful message review."]
 ],
 follow:{follow:"Mara asks which promise has the closest deadline.",outreach:"Mara asks which neighborhood has the largest information gap.",policy:"Mara asks who should test the statement before publication."},
 second:[
 ["Choose a concrete next step and tell people what to expect.",{team:2,trust:1},"commit","Your next week's first commitment is written down."],
 ["Leave room for new facts before finalizing the schedule.",{adaptability:2},"flex","The calendar stays flexible, but some people may wait longer."]
 ]}
];
const style=document.createElement("style");
style.textContent=[
".ggWeek{height:100%;min-height:0;padding:14px;display:grid;grid-template-columns:235px minmax(0,1fr);gap:14px;}",
".ggWeekAside,.ggWeekMain{background:rgba(17,11,7,.95);border:1px solid var(--line);border-radius:20px;min-height:0;overflow:auto;}",
".ggWeekAside{padding:18px}.ggWeekMain{padding:20px 26px}",
".ggWeekMain h2,.ggWeekAside h3{font-family:var(--serif);color:var(--gold2);line-height:1.2}",
".ggWeekMain h2{font-size:29px;margin:10px 0 12px}",
".ggWeekMain .choice{margin:7px 0;padding:11px 14px}",
".ggWeekMain .sceneBody{font-size:20px;line-height:1.4;max-width:760px}",
".ggWeekMain .muted{max-width:760px}",
".ggWeekAside p{font-size:13px;color:var(--muted);line-height:1.5}",
".ggWeekAside .btn{width:100%;margin:5px 0}",
".ggWeekAside .ggSep{margin-top:18px;border-top:1px solid var(--line);padding-top:13px}",
".ggWeek .ggSmall{font-size:12px;color:var(--muted);margin-top:16px;line-height:1.45}",
"@media(max-height:720px){.ggWeekMain{padding:13px 20px}.ggWeekMain h2{font-size:24px}.ggWeekMain .sceneBody{font-size:18px}.ggWeekMain .choice{padding:9px 12px}}"
].join("");
document.head.appendChild(style);
const originalStartNew=startNew;
startNew=function(slot){
 const before=state;
 originalStartNew(slot);
 if(state && state!==before && !state.quizDone){
   state.tutorialWeek={version:1,stage:0,choices:{},seenDays:[],newsDays:[],learned:[],lastResult:""};
   save();
 }
};
const originalRenderGame=renderGame;
renderGame=function(){
 if(state && state.quizDone && state.tutorialWeek && state.tutorialWeek.version===1 && state.day>=1 && state.day<=7){
   renderTutorialWeek();return;
 }
 originalRenderGame();
};
function weekData(){return chapters[(state.day||1)-1];}
function ensureDay(){
 const w=state.tutorialWeek,day=state.day,d=weekData();
 if(!w.seenDays.includes(day)){
  w.seenDays.push(day);
  assistantRecord("Conversations",d.title,d.person+": "+d.prompt,"Conversation you attended");
  if(day===1)assistantRecord("Career","Campaign begins","The school-board race in Harbor Ward Seven has begun. These records reflect what you have personally learned.","Your political career");
  save();
 }
}
function consequence(){
 const w=state.tutorialWeek,day=state.day,first=w.choices["1-first"];
 if(day===2 && first==="promise")return "Tamsin has already told parents about your crossing promise. You need to confirm what the school board can actually do.";
 if(day===2 && first==="listen")return "Tamsin sent information about an unanswered request. The follow-up still matters.";
 if(day===5 && first==="promise")return "The leaflet mentions the crossing promise. Owen worries the wording exceeds the board's authority.";
 if(day===7 && w.choices["3-second"]==="receipt")return "Your election-office receipt is safely on record.";
 return "";
}
function renderTutorialWeek(){
 const w=state.tutorialWeek,d=weekData();if(!d){originalRenderGame();return;}
 ensureDay();
 const stage=w.stage,first=w.choices[state.day+"-first"],opts=stage===0?d.first:d.second;
 const prompt=stage===0?d.prompt:d.follow[first];
 const inner=stage<2?
  '<div class="sceneSpeaker">'+esc(d.person)+'</div><div class="sceneBody">'+esc(prompt)+'</div><div class="answers">'+opts.map((c,i)=>'<button class="choice" data-act="weekChoice" data-idx="'+i+'">'+esc(c[0])+'</button>').join("")+'</div>':
  '<div class="sceneSpeaker">Day complete</div><div class="result">'+esc(w.lastResult)+'</div><p class="muted">The Personal Assistant has recorded your choice. Other people may react to it later.</p><div class="row"><button class="btn" data-act="weekContinue">'+(state.day===7?"Enter the next week":"Begin the next day")+'</button></div>';
 const recent=w.learned.slice(-3).map(t=>'<div class="timelineItem">'+esc(t)+'</div>').join("")||"<p>You'll learn through actual decisions, one situation at a time.</p>";
 const extra=consequence();
 root.className="screen ggWeek";
 root.innerHTML='<aside class="ggWeekAside"><div class="qtag">Harbor Ward Seven</div><h3>Campaign Day '+state.day+'</h3><p>Election Day is ahead. The early work is small enough to learn as you go.</p><div class="ggSep"><div class="qtag">What you have encountered</div>'+recent+'</div><div class="ggSep"><h3>Your records</h3><p>Your Personal Assistant records conversations, promises and known outcomes automatically.</p><button class="btn secondary" data-act="journal">Personal Assistant</button><button class="btn ghost" data-act="save">Save</button></div></aside>'+
 '<section class="ggWeekMain"><div class="row"><span class="pill">Campaign Day '+state.day+'</span><span class="pill">'+esc(d.skill)+'</span></div><h2>'+esc(d.title)+'</h2><p class="muted">'+esc(d.setup)+'</p>'+
 (extra?'<div class="briefCard">'+esc(extra)+'</div>':"")+inner+
 '<p class="ggSmall">Take your time. Your progress is saved after every decision, including if you leave the game.</p></section>';
 save();
}
function pickWeek(i){
 if(!state||!state.tutorialWeek||state.day>7)return;
 const w=state.tutorialWeek,d=weekData(),isFirst=w.stage===0;
 if(w.stage!==0&&w.stage!==1)return;
 const c=(isFirst?d.first:d.second)[i];if(!c)return;
 const key=state.day+(isFirst?"-first":"-second");if(w.choices[key])return;
 w.choices[key]=c[2];
 applyEffects(c[1]||{},true);
 addJournal("decision",d.title+": "+c[0]+". "+c[3]);
 if(isFirst){
  w.stage=1;
  assistantRecord("Conversations",d.title,d.person+": "+d.follow[c[2]],"Follow-up in conversation");
 }else{
  w.stage=2;w.lastResult=c[3];w.learned.push(d.skill);
  assistantRecord("Journal","Day "+state.day+" outcome",c[3],"Observed outcome");
 }
 save();renderTutorialWeek();
}
function continueWeek(){
 if(!state||!state.tutorialWeek||state.tutorialWeek.stage!==2||state.day>7)return;
 const day=state.day,w=state.tutorialWeek;
 if(!w.newsDays.includes(day)){
  const news={2:"The school board schedules a public budget hearing. The decision was made independently of your campaign.",4:"The district publishes a crossing report. Its recommendations are not yet approved.",6:"Victor Rusk's campaign reserves the larger room for the next public forum. Organizers say both campaigns can speak."}[day];
  if(news)addJournal("world pulse",news);
  w.newsDays.push(day);
 }
 w.stage=0;w.lastResult="";
 setDay(day+1);
 if(day===7)assistantRecord("Career","First week completed","You learned conversations, voter contact, filing, coalition work, checking claims and limited resources. Your decisions remain part of your record.","Campaign recap");
 save();renderGame();
}
document.addEventListener("click",function(e){
 const el=e.target.closest("[data-act]");if(!el)return;
 if(el.dataset.act==="weekChoice")pickWeek(Number(el.dataset.idx));
 if(el.dataset.act==="weekContinue")continueWeek();
});
if(state && state.quizDone && state.tutorialWeek && state.day<=7)renderGame();
})();