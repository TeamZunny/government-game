
/* Government Game: personality creation and shared actor attributes.
   New games only. In-progress legacy quizzes and all existing completed saves are unchanged. */
const GG_PERSONALITY_QUESTIONS=[{"id":1,"text":"You're invited to a gathering where you know only one person. What do you do?","options":[["Introduce yourself to a few people.",{"Charisma":3,"Humility":1}],["Stay with someone familiar until you're comfortable.",{"Focus":2,"Common Sense":1}],["Listen to the conversation before joining in.",{"Humility":2,"Focus":1}]]},{"id":2,"text":"Someone publicly disagrees with an idea you care about. What's your first reaction?","options":[["Respond immediately and defend your point.",{"Temper":3,"Charisma":1}],["Ask what they disagree with.",{"Humility":3,"Common Sense":1}],["Think it over before replying.",{"Focus":2,"Common Sense":2}]]},{"id":3,"text":"A plan you've been looking forward to falls apart at the last minute. What happens next?","options":[["Quickly work out another practical option.",{"Common Sense":3,"Focus":1}],["Get everyone together and make a new plan.",{"Charisma":2,"Humility":1}],["Feel frustrated, but push to keep something going.",{"Temper":3,"Focus":1}]]},{"id":4,"text":"A friend tells you that you handled something badly. How do you respond?","options":[["Ask them to explain what they saw.",{"Humility":3,"Focus":1}],["Explain why you made that decision.",{"Temper":2,"Charisma":1}],["Take some time to think about whether they're right.",{"Focus":2,"Common Sense":2}]]},{"id":5,"text":"You're organizing a weekend trip for a group. What do you naturally handle?","options":[["The budget, travel, and practical details.",{"Common Sense":3,"Focus":1}],["Getting everyone excited and involved.",{"Charisma":3,"Humility":1}],["The schedule and keeping things on track.",{"Focus":3,"Common Sense":1}]]},{"id":6,"text":"Someone interrupts you during an important task. What do you do?","options":[["Finish the part you're working on first.",{"Focus":3,"Temper":1}],["Pause and find out what they need.",{"Humility":2,"Charisma":1}],["Let them know that the interruption is frustrating.",{"Temper":3,"Charisma":1}]]},{"id":7,"text":"Two friends are arguing, and both want you to take their side. What do you do?","options":[["Help them talk to each other.",{"Charisma":3,"Humility":1}],["Hear both sides before deciding.",{"Humility":3,"Common Sense":1}],["Tell them plainly what you think is wrong.",{"Temper":2,"Common Sense":2}]]},{"id":8,"text":"A group asks you to take charge of a new hobby project. What appeals to you?","options":[["Bringing people together to make it happen.",{"Charisma":3,"Humility":1}],["Having a clear goal and seeing it through.",{"Focus":3,"Temper":1}],["Finding the simplest workable approach.",{"Common Sense":3,"Focus":1}]]},{"id":9,"text":"You notice a small mistake in work that everyone else has approved. What do you do?","options":[["Check whether the mistake could cause a real problem.",{"Common Sense":3,"Focus":1}],["Go through the details again before raising it.",{"Focus":3,"Humility":1}],["Point it out straight away so it gets fixed.",{"Temper":2,"Charisma":2}]]},{"id":10,"text":"Someone you were depending on doesn't show up. What do you do first?","options":[["Ask what happened before judging them.",{"Humility":3,"Charisma":1}],["Tell them directly that they let you down.",{"Temper":3,"Focus":1}],["Find another way to finish what needs doing.",{"Common Sense":3,"Focus":1}]]},{"id":11,"text":"You receive unexpected praise for something you helped with. How do you react?","options":[["Enjoy the attention and thank everyone.",{"Charisma":3,"Temper":1}],["Make sure the others get credit too.",{"Humility":3,"Charisma":1}],["Appreciate it, then think about what to improve.",{"Focus":3,"Humility":1}]]},{"id":12,"text":"Something at home suddenly stops working. What's your instinct?","options":[["Try the simplest likely fix first.",{"Common Sense":3,"Focus":1}],["Work out the cause step by step.",{"Focus":3,"Common Sense":1}],["Ask someone who's dealt with it before.",{"Humility":2,"Charisma":2}]]},{"id":13,"text":"A conversation becomes heated. What do you tend to do?","options":[["Speak more firmly so you're heard.",{"Temper":3,"Charisma":1}],["Slow things down and look for common ground.",{"Humility":3,"Common Sense":1}],["Focus on the main issue and avoid side arguments.",{"Focus":3,"Common Sense":1}]]},{"id":14,"text":"You have several things to do and not enough time. What comes first?","options":[["Choose the jobs with the biggest practical impact.",{"Common Sense":3,"Focus":1}],["Make a clear list and work through it.",{"Focus":3,"Common Sense":1}],["Ask others to share the work.",{"Charisma":2,"Humility":2}]]},{"id":15,"text":"You realize that an opinion you strongly defended was wrong. What happens next?","options":[["Acknowledge it and thank whoever corrected you.",{"Humility":3,"Charisma":1}],["Feel annoyed with yourself, then move forward.",{"Temper":2,"Focus":2}],["Work out why the mistake happened so it won't recur.",{"Common Sense":2,"Focus":2}]]}];
const GG_PERSONALITY_QUESTIONS_V1=GG_PERSONALITY_QUESTIONS;
const GG_CORE_ATTRIBUTES=["Charisma","Temper","Focus","Humility","Common Sense","Empathy","Relatability"];
const GG_ALL_ATTRIBUTES=[...GG_CORE_ATTRIBUTES,"Experience"];
const GG_NEW_QUESTIONS=[
 {id:16,text:"A friend seems upset but says they're fine. What do you do?",options:[
  ["Give them space, but let them know you are ready to listen.",{Empathy:3,Humility:1}],
  ["Ask gently what is bothering them.",{Empathy:2,Charisma:1}],
  ["Focus on helping with the practical problem you can see.",{"Common Sense":2,Focus:1}]
 ]},
 {id:17,text:"You're spending an afternoon with people you have just met. How do you usually connect?",options:[
  ["Share a simple story about something you've experienced.",{Relatability:3,Charisma:1}],
  ["Ask about their day-to-day lives and look for common ground.",{Relatability:2,Empathy:2}],
  ["Find a shared activity and get everyone involved.",{Charisma:2,Relatability:1}]
 ]},
 {id:18,text:"A coworker is embarrassed after making a mistake. What would you naturally do?",options:[
  ["Make sure they feel supported before talking about the mistake.",{Empathy:3,Humility:1}],
  ["Mention a similar mistake you've made so they feel less alone.",{Relatability:3,Empathy:1}],
  ["Help them make a workable plan to put things right.",{"Common Sense":2,Focus:1}]
 ]}
];
const GG_PERSONALITY_QUESTIONS_V2=GG_PERSONALITY_QUESTIONS_V1.map(q=>({id:q.id,text:q.text,options:q.options.map(a=>[a[0],{...a[1]}])})).concat(GG_NEW_QUESTIONS);
// The new attributes are measured through everyday responses throughout the quiz,
// not just in the three new questions.
const GG_RESPONSE_WEIGHTS={
 "1-0":{Relatability:2},"1-2":{Empathy:1},"2-1":{Empathy:2},"3-1":{Relatability:1},
 "4-0":{Empathy:1},"5-1":{Relatability:1},"6-1":{Empathy:2},
 "7-0":{Empathy:1},"7-1":{Empathy:2},"8-0":{Relatability:2},
 "9-2":{Relatability:1},"10-0":{Empathy:2},"11-1":{Humility:1,Relatability:1},
 "12-2":{Relatability:1},"13-1":{Empathy:1},"14-2":{Empathy:1,Relatability:1},
 "15-0":{Empathy:1}
};
for(const q of GG_PERSONALITY_QUESTIONS_V2)q.options.forEach((a,i)=>{
 const extra=GG_RESPONSE_WEIGHTS[q.id+"-"+i]||{};
 for(const [trait,v] of Object.entries(extra))a[1][trait]=(a[1][trait]||0)+v;
});
function ggCurrentQuestions(){return state?.personalityQuizVersion===1?GG_PERSONALITY_QUESTIONS_V1:GG_PERSONALITY_QUESTIONS_V2;}
const GG_ACTOR_DEFAULTS={"mara":[12,7,16,11,15],"luz":[14,10,14,15,13],"daryl":[8,6,17,12,17],"owen":[17,11,13,9,12],"kenna":[12,10,16,14,14],"nia":[11,9,15,14,15],"rusk":[17,15,14,6,13],"junie":[16,7,13,18,15],"celia":[10,6,18,14,17],"tamsin":[14,13,16,12,14],"edan":[11,12,15,8,13],"priya":[12,10,16,12,15],"rev-mendez":[14,7,15,18,16],"sal":[8,7,19,13,17],"grell":[14,14,13,8,11]};
const GG_NPC_SOCIAL={
 mara:[12,13],luz:[16,17],daryl:[11,9],owen:[10,17],kenna:[16,14],
 nia:[15,14],rusk:[7,15],junie:[18,17],celia:[13,11],tamsin:[17,15],
 edan:[8,11],priya:[14,15],"rev-mendez":[18,15],sal:[12,8],grell:[7,14]
};
const GG_ACTOR_ACTIONS={"mara":["Review the upcoming schedule","Reassign a volunteer shift"],"luz":["Contact residents outside the usual routes","Organize a volunteer visit"],"daryl":["Check expense records","Review an approaching filing deadline"],"owen":["Review a public statement","Contact a local reporter"],"kenna":["Gather classroom concerns","Consult teachers about priorities"],"nia":["Check a public claim","Prepare an interview request"],"rusk":["Contact potential supporters","Coordinate an opposition message"],"junie":["Organize a neighborhood meeting","Speak with community volunteers"],"celia":["Process election paperwork","Review filing requests"],"tamsin":["Gather parent concerns","Request a school crossing update"],"edan":["Review campaign statements","Look for inconsistencies in a public plan"],"priya":["Edit a community story","Verify an interview detail"],"rev-mendez":["Prepare civic observers","Review public access concerns"],"sal":["Compare voter contact records","Identify gaps in the contact map"],"grell":["Prepare a response for Rusk","Coordinate outreach contacts"]};

function ggClamp(value,min,max){return Math.max(min,Math.min(max,Number(value)||0));}
function ggAttributesFor(id){
 const a=GG_ACTOR_DEFAULTS[id]||[10,10,10,10,10];
 const social=GG_NPC_SOCIAL[id]||[10,10];
 return {...Object.fromEntries(GG_CORE_ATTRIBUTES.map((k,i)=>[
  k,ggClamp(i<5?a[i]:social[i-5],2,19)
 ])),Experience:0};
}
function ggLevelFromXp(xp){
 // Experience rises only at milestones, never through quiz answers.
 return Math.min(20,1+Math.floor(Math.sqrt(Math.max(0,xp)/18)));
}
function ggNewProgress(day=1){
 return {xp:0,level:1,lastDay:Math.max(1,Number(day)||1),awards:{}};
}
function ggApplyXp(attributes,progress,amount,key){
 if(!progress||!attributes||!key||progress.awards[key])return false;
 progress.awards[key]=true;
 progress.xp=Math.max(0,(Number(progress.xp)||0)+Math.max(0,Number(amount)||0));
 const next=ggLevelFromXp(progress.xp);
 if(next>progress.level){progress.level=next;attributes.Experience=next-1;return true;}
 attributes.Experience=Math.max(0,progress.level-1);return false;
}
function ggAwardPlayer(amount,key,detail){
 if(!state?.quizDone||!state.attributes)return;
 if(!state.experienceProgress)state.experienceProgress=ggNewProgress(state.day);
 const old=state.experienceProgress.level;
 const leveled=ggApplyXp(state.attributes,state.experienceProgress,amount,key);
 if(leveled){
  assistantRecord("Career","Experience gained",
    "You have gained experience from "+detail+". Your experience level is now "+state.experienceProgress.level+".",
    "Personal Assistant · personal growth");
 }
 return state.experienceProgress.level>old;
}
function ggEnsureActors(){
 if(!state||!state.quizDone)return;
 if(!state.npcAttributes)state.npcAttributes={};
 if(!state.worldHistory)state.worldHistory=[];
 if(!state.npcWorld)state.npcWorld={lastDay:Math.max(1,Number(state.day)||1),rivalActivity:0,communityActivity:0,reportingActivity:0};
 for(const npc of CHARACTERS){
  if(!state.npcAttributes[npc.id])state.npcAttributes[npc.id]=ggAttributesFor(npc.id);
  const attrs=state.npcAttributes[npc.id],defaults=ggAttributesFor(npc.id);
  for(const key of GG_ALL_ATTRIBUTES)if(!Number.isFinite(attrs[key]))attrs[key]=defaults[key];
 }
 if(!state.npcProgress)state.npcProgress={};
 for(const npc of CHARACTERS){
  if(!state.npcProgress[npc.id])state.npcProgress[npc.id]=ggNewProgress(state.day);
  state.npcAttributes[npc.id].Experience=Math.max(0,(state.npcProgress[npc.id].level||1)-1);
 }
 if(!state.experienceProgress)state.experienceProgress=ggNewProgress(state.day);
 if(!Number.isFinite(state.attributes?.Experience))state.attributes.Experience=0;
 if(!state.rollHistory)state.rollHistory={};
}
function ggRoll(attributes,trait,difficulty,context=0){
 const a=ggClamp(attributes?.[trait]??10,1,20);
 const die=1+Math.floor(Math.random()*20);
 // Experience is a modest bonus, not a second die or automatic success.
 const experience=ggClamp(attributes?.Experience??0,0,19);
 const total=die+(a-10)*0.7+experience*0.32+context;
 return {die,trait,total,success:total>=difficulty,strong:total>=difficulty+5};
}
function ggNpcStep(day){
 if(!state?.quizDone||!state.attributes||!Number.isInteger(day)||day<2)return;
 ggEnsureActors();
 const w=state.npcWorld;
 if(day<=w.lastDay)return;
 for(let d=w.lastDay+1;d<=day;d++){
  for(const npc of CHARACTERS){
   // All actors have the same five attributes; several get an active turn each day.
   const turnChance=ggRoll(state.npcAttributes[npc.id],"Focus",12,1);
   if(!turnChance.success)continue;
   const tasks=GG_ACTOR_ACTIONS[npc.id]||["Attend to their own work"];
   const task=tasks[Math.floor(Math.random()*tasks.length)];
   const skill=/gather.*concern|classroom|public access|community story/i.test(task)?"Empathy":/residents|neighborhood|supporters|outreach/i.test(task)?"Relatability":/consult|observer|parent/i.test(task)?"Humility":/response|opposition|campaign statement/i.test(task)?"Temper":/meet|contact|speak|support|interview|organize/i.test(task)?"Charisma":/claim|details|records|review|check|compare|verify|edit/i.test(task)?"Focus":"Common Sense";
   const outcome=ggRoll(state.npcAttributes[npc.id],skill,12);
   const event={day:d,actorId:npc.id,task,trait:skill,outcome:outcome.strong?"major success":outcome.success?"progress":"setback",public:false};
   state.worldHistory.push(event);
   ggApplyXp(state.npcAttributes[npc.id],state.npcProgress[npc.id],
       outcome.success?3:2,"day-"+d,"daily activity");
   if(npc.id==="rusk"||npc.id==="grell"){
     if(outcome.success){w.rivalActivity+=outcome.strong?2:1;}
   }else if(npc.id==="nia"||npc.id==="priya"){
     if(outcome.success)w.reportingActivity+=1;
   }else if(npc.id==="tamsin"||npc.id==="junie"||npc.id==="kenna"){
     if(outcome.success)w.communityActivity+=1;
   }
   // The player learns only about observable public events, not the private turn log.
   const publicEvent=(npc.id==="rusk"||npc.id==="kenna"||npc.id==="junie")&&outcome.success&&d%4===0;
   if(publicEvent){
     event.public=true;
     const publicText=npc.id==="rusk"?"Victor Rusk's campaign announces another local outreach effort.":npc.id==="kenna"?"The teachers association says members are collecting questions for candidates.":"A community meeting is announced, with invitations still being arranged.";
     assistantRecord("News","Around the ward",publicText,"Public notice");
   }
  }
  w.lastDay=d;
  // Experience from simply living through a game day is small and non-repeatable.
  ggAwardPlayer(1,"elapsed-day-"+d,"time spent in your political life");
  for(const npc of CHARACTERS)ggApplyXp(state.npcAttributes[npc.id],
       state.npcProgress[npc.id],1,"elapsed-day-"+d,"passing time");
 }
 state.worldHistory=state.worldHistory.slice(-600);
}
function ggCheck(eventId,personName,trait,bonus=0){
 if(!state?.attributes)return null;
 ggEnsureActors();
 if(state.rollHistory[eventId])return state.rollHistory[eventId];
 const npc=CHARACTERS.find(n=>personName.includes(n.name))||CHARACTERS.find(n=>personName.startsWith(n.name.split(" ")[0]));
 const npcAttrs=npc?state.npcAttributes[npc.id]:ggAttributesFor("mara");
 const theirs=ggRoll(npcAttrs,trait,11);
 const temperFriction=(trait==="Humility"||trait==="Focus")?Math.max(0,(state.attributes.Temper-12)*0.3):0;
 const ours=ggRoll(state.attributes,trait,11+Math.round((theirs.total-11)/5),bonus+2-temperFriction);
 const outcome=ours.strong?"strong":ours.success?"steady":"uncertain";
 const note=outcome==="strong"?"Your approach lands particularly well.":outcome==="uncertain"?"The conversation is less convincing than you hoped, but it can continue.":"Your point is understood, even though questions remain.";
 const record={trait,outcome,note,playerRoll:ours.die,npcRoll:theirs.die,npcId:npc?.id||null};
 state.rollHistory[eventId]=record;
 return record;
}
const ggOldBeginQuiz=beginQuiz;
beginQuiz=function(){
 state.personalityQuizVersion=2;
 state.personalityWelcome=true;
 state.personalityAnswers=[];
 state.quizOrder=ggCurrentQuestions().map(q=>q.id);
 state.quizIndex=0;state.scores={};state.quizDone=false;state.profile=null;
 state.attributes=null;
};
const ggOldRenderQuiz=renderQuiz;
renderQuiz=function(){
 if(!state?.personalityQuizVersion){ggOldRenderQuiz();return;}
 const n=state.quizIndex||0,questions=ggCurrentQuestions(),total=questions.length;
 root.className="screen quiz personalityQuiz";
 if(state.personalityWelcome){
  root.innerHTML='<section class="card quizBox personalityBox"><div class="qtag">Create your character</div><h1>Before your political career begins</h1><p class="lead">Here are a few questions to help determine what kind of person your character is.</p><p class="muted">Think of this as a personality test. These are everyday situations, not political questions. There are no right or wrong answers. Choose what feels most like the character you want to play.</p><p class="muted">Your answers shape seven personality attributes. Experience is the eighth and is earned only through play. Every character uses these attributes in hidden rolls.</p><div class="row"><button class="btn" data-act="personalityBegin">Start personality test</button></div><p class="quizHelp">'+total+' questions · Three choices each · Your progress is saved automatically.</p></section>';
  save();return;
 }
 const q=questions[n];
 if(!q){finishQuiz();return;}
 const pct=Math.round(n/total*100);
 root.innerHTML='<section class="card quizBox personalityBox"><div class="qtag">Your personality · Question '+(n+1)+' of '+total+'</div><div class="progress" role="progressbar" aria-label="Personality test progress" aria-valuemin="0" aria-valuemax="'+total+'" aria-valuenow="'+n+'"><div class="bar" style="width:'+pct+'%"></div></div><div class="question">'+esc(q.text)+'</div><div class="answers">'+q.options.map((a,i)=>'<button class="answer" data-act="answer" data-idx="'+i+'">'+esc(a[0])+'</button>').join('')+'</div><p class="quizHelp">Choose how your character would naturally respond. There is no best answer.</p></section>';
 save();
};
const ggOldAnswer=answer;
answer=function(index){
 if(!state?.personalityQuizVersion){ggOldAnswer(index);return;}
 if(state.personalityWelcome)return;
 const questions=ggCurrentQuestions();const q=questions[state.quizIndex];if(!q)return;
 const c=q.options[index];if(!c)return;
 state.personalityAnswers.push({questionId:q.id,choice:index});
 for(const [key,value] of Object.entries(c[1]))state.scores[key]=(state.scores[key]||0)+value;
 state.quizIndex++;
 if(state.quizIndex>=questions.length)finishQuiz();
 else renderQuiz();
};
const ggOldFinishQuiz=finishQuiz;
finishQuiz=function(){
 if(!state?.personalityQuizVersion){ggOldFinishQuiz();return;}
 if(state.quizDone)return;
 // Numbers influence rolls but are not placed in the player's face.
 const active=state.personalityQuizVersion===1?GG_CORE_ATTRIBUTES.slice(0,5):GG_CORE_ATTRIBUTES;
 const mean=active.reduce((sum,k)=>sum+(state.scores[k]||0),0)/active.length;
 const attributes=Object.fromEntries(GG_CORE_ATTRIBUTES.map(k=>[k,
  state.personalityQuizVersion===1 && (k==="Empathy"||k==="Relatability") ? 10 :
  ggClamp(Math.round(10+((state.scores[k]||0)-mean)*0.85),3,19)
 ]));
 attributes.Experience=0;
 state.attributes=attributes;
 const sorted=GG_CORE_ATTRIBUTES.slice().sort((a,b)=>attributes[b]-attributes[a]);
 const primary=sorted[0],secondary=sorted[1];
 const titles={"Charisma":"The Connector","Temper":"The Firebrand","Focus":"The Planner","Humility":"The Listener","Common Sense":"The Problem Solver","Empathy":"The Understanding One","Relatability":"The Everyday Voice"};
 const descriptions={"Charisma":"You are comfortable making an impression and bringing people into a conversation.","Temper":"You feel strongly about things and tend to react with intensity.","Focus":"You stay with a problem and value seeing things through.","Humility":"You are willing to listen, reconsider, and let others contribute.","Common Sense":"You look for solutions that work outside of theory.","Empathy":"You notice how other people are feeling and consider what they are going through.","Relatability":"People can see something familiar in the way you speak and share your experiences."};
 state.profile={title:titles[primary],primary,traits:sorted,description:descriptions[primary],secondaryDescription:descriptions[secondary],generation:state.personalityQuizVersion===1?"personality-v1":"personality-v2"};
 state.quizDone=true;
 state.experienceProgress=ggNewProgress(state.day);
 state.personalityWelcome=false;
 state.log.unshift("Character created: "+state.profile.title+". Their personality will shape future chances, but choices and circumstances still matter.");
 assistantRecord("Career","Your character begins",state.profile.description+" "+state.profile.secondaryDescription,"Character creation");
 ggEnsureActors();
 save();renderReveal();
};
const ggOldRenderReveal=renderReveal;
renderReveal=function(){
 if(!state?.profile||!["personality-v1","personality-v2"].includes(state.profile.generation)){ggOldRenderReveal();return;}
 root.className="screen reveal";
 root.innerHTML='<section class="card personalityReveal"><div class="qtag">Your character</div><h1>'+esc(state.profile.title)+'</h1><p class="lead">'+esc(state.profile.description)+'</p><p class="muted">'+esc(state.profile.secondaryDescription)+'</p><div class="hr"></div><h3>Who you are</h3><p class="muted">Charisma · Temper · Focus · Humility · Common Sense · Empathy · Relatability</p><p class="muted">Experience begins at zero. It increases only as you spend time in the world and gain experience levels.</p><p class="muted">These attributes affect hidden checks and decisions. Every person you meet has them too. Chance, experience, relationships, and circumstances also matter.</p><div class="briefCard"><h3>Your first step</h3><p class="muted">Your political life starts with a small local campaign. You will learn the work one day at a time.</p></div><button class="btn" data-act="enterGame">Begin your political career</button></section>';
};
const ggOldSetDay=setDay;
setDay=function(next){
 const previous=state?.day||1;
 ggOldSetDay(next);
 if(state?.quizDone && state?.attributes && state.day>previous){ggNpcStep(state.day);}
};
document.addEventListener("click",function(e){
 const b=e.target.closest("[data-act]");
 if(!b||b.dataset.act!=="personalityBegin")return;
 if(!state?.personalityQuizVersion||!state.personalityWelcome)return;
 state.personalityWelcome=false;save();renderQuiz();
});
const ggStyle=document.createElement("style");
ggStyle.textContent=".personalityQuiz,.personalityReveal{overflow:auto;min-height:0}.personalityBox{max-width:780px}.personalityQuiz .question{font-size:clamp(21px,2.2vw,30px);line-height:1.33;margin:19px 0}.personalityQuiz .answers{gap:10px}.personalityQuiz .answer{padding:13px 16px}.personalityQuiz .lead{margin:16px 0;max-width:680px}.personalityQuiz .quizHelp{margin-top:18px;color:var(--muted);font-size:12px}.personalityReveal{max-width:860px}.personalityReveal h3{color:var(--gold2);font-family:var(--serif)}@media(max-height:730px){.personalityQuiz .question{font-size:22px;margin:10px 0 12px}.personalityQuiz .answer{padding:10px 14px}.personalityQuiz .answers{gap:8px}}";
document.head.appendChild(ggStyle);
// Old completed campaigns did not have attributes. Give them neutral starting
// values without changing their original profiles, scores, or save slots.
const ggOldMigrate=migrate;
migrate=function(){
 ggOldMigrate();
 if(state?.quizDone){
  if(!state.attributes){
   state.attributes=Object.fromEntries(GG_CORE_ATTRIBUTES.map(k=>[k,10]));
   state.attributeSource="legacy-neutral";
  }
  for(const k of GG_CORE_ATTRIBUTES)if(!Number.isFinite(state.attributes[k]))state.attributes[k]=10;
  if(!Number.isFinite(state.attributes.Experience))state.attributes.Experience=0;
  ggEnsureActors();
 }
};
if(state?.quizDone){migrate();save();}
if(state?.personalityQuizVersion&&!state.quizDone)renderQuiz();

const ggOldFinishEncounter=finishEncounter;
finishEncounter=function(){
 const id=state?.activeEncounter?.id;
 ggOldFinishEncounter();
 if(id&&state?.quizDone)ggAwardPlayer(6,"completed-encounter-"+id,"a completed political situation");
 save();
};
