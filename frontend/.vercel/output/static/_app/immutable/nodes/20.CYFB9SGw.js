import{a as b,t as R}from"../chunks/disclose-version.CM6f1PTD.js";import{p as Mt,t as f,a as At,g as t,b as o,c as s,r as a,s as n,m as j,d as g,i as G}from"../chunks/runtime.g0my00JR.js";import{s as h}from"../chunks/render.pmuW5QOO.js";import{i as rt}from"../chunks/if.DVEvk735.js";import{e as L,i as U}from"../chunks/each.BeKM084r.js";import{e as H}from"../chunks/utils.sCj8HAia.js";import{b as I}from"../chunks/select.BRIlu2rr.js";import{i as Et}from"../chunks/lifecycle.6aQbxLMK.js";import{o as Ft}from"../chunks/index-client.v1G0sw0w.js";import{s as p}from"../chunks/supabaseClient.CaMOPPuz.js";var St=R('<p class="text-green-400 my-2"> </p>'),$t=R('<p class="text-red-400 my-2"> </p>'),Dt=R('<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td><button class="btn btn-primary">Add Assessment</button> <button class="btn btn-error">Delete</button></td></tr>'),Nt=R("<option> </option>"),qt=R("<option> </option>"),Pt=R("<option> </option>"),Lt=R("<option> </option>"),Ut=R('<div class="modal modal-open"><div class="modal-box bg-gray-800 text-white"><h3 class="font-bold text-lg"> </h3> <label class="label" for="likelihoodRating">Likelihood Rating</label> <select id="likelihoodRating" class="select select-bordered w-full max-w-xs"><option disabled>Select likelihood</option><!></select> <label class="label mt-2" for="severity">Severity</label> <select id="severity" class="select select-bordered w-full max-w-xs"><option disabled>Select severity</option><!></select> <label class="label mt-2" for="riskControlRating">Risk Control Rating</label> <select id="riskControlRating" class="select select-bordered w-full max-w-xs"><option disabled>Select control rating</option><!></select> <label class="label mt-2" for="riskMonitoringRating">Risk Monitoring Rating</label> <select id="riskMonitoringRating" class="select select-bordered w-full max-w-xs"><option disabled>Select monitoring rating</option><!></select> <div class="modal-action"><button class="btn btn-primary">Save</button> <button class="btn">Cancel</button></div></div></div>'),zt=R('<div><h1 class="text-3xl font-bold"> </h1> <!> <!> <h2 class="text-2xl font-bold mt-8">All Saved Risks</h2> <table class="table table-zebra w-full mt-4"><thead><tr><th>RRN</th><th>Risk Statement</th><th>Classification</th><th>Actions</th><th>Key Persons</th><th>Budget</th><th></th></tr></thead><tbody></tbody></table> <!></div>');function Vt(ft,mt){Mt(mt,!1);let z=g([]),ot=g([]),at=g([]),J=g([]),O=g([]),Q=g([]),T=g([]),V=null,st=null,it=g(""),B=g(null),m=g(null),W=g(!1),$=g(null),c=g({risk_id:"",likelihoodRating:null,severity:null,riskControlRating:null,riskMonitoringRating:null});const _t=async()=>{try{const{data:r,error:e}=await p.from("classification").select("*");if(e)throw e;o(at,r)}catch(r){console.error("Error fetching classification:",r),o(m,"Failed to fetch classification.")}},ht=async()=>{try{const{data:r,error:e}=await p.from("likelihood_rating").select("*");if(e)throw e;o(J,r)}catch(r){console.error("Error fetching likelihood rating:",r),o(m,"Failed to fetch likelihood rating.")}},ut=async()=>{try{const{data:r,error:e}=await p.from("severity").select("*");if(e)throw e;o(O,r)}catch(r){console.error("Error fetching severity:",r),o(m,"Failed to fetch severity.")}},gt=async()=>{try{const{data:r,error:e}=await p.from("risk_control_rating").select("*");if(e)throw e;o(Q,r)}catch(r){console.error("Error fetching risk control rating:",r),o(m,"Failed to fetch risk control rating.")}},pt=async()=>{try{const{data:r,error:e}=await p.from("risk_monitoring_rating").select("*");if(e)throw e;o(T,r)}catch(r){console.error("Error fetching risk monitoring rating:",r),o(m,"Failed to fetch risk monitoring rating.")}},kt=async()=>{try{const{data:r,error:e}=await p.from("risks").select("*").order("rrn",{ascending:!0});if(e)throw e;o(z,r.sort((v,_)=>{const y=u=>{const w=u.match(/(\d+)$/);return w?parseInt(w[0],10):0};return y(v.rrn)-y(_.rrn)}))}catch(r){console.error("Error fetching risks:",r),o(m,"Failed to fetch saved risks.")}},lt=async()=>{try{const{data:r,error:e}=await p.from("risk_assessment").select("*");if(e)throw e;o(ot,r)}catch(r){console.error("Error fetching risk assessments:",r),o(m,"Failed to fetch risk assessments.")}},bt=async()=>{try{const{data:r,error:e}=await p.auth.getSession();if(e)throw e;if(V=r.session,V){const{data:v,error:_}=await p.from("profiles").select("id, department_id").eq("id",V.user.id).single();if(_)throw _;st=v;const{data:y,error:u}=await p.from("departments").select("name").eq("id",st.department_id).single();if(u)throw u;o(it,y.name),await kt(),await lt(),await _t(),await ht(),await ut(),await gt(),await pt()}else o(m,"User is not logged in.")}catch(r){console.error("Error fetching user profile or department:",r),o(m,"Failed to fetch profile or department details.")}finally{}},Rt=r=>{o($,r),o(W,!0)},nt=()=>{o(W,!1),o($,null),o(c,{risk_id:"",likelihoodRating:null,severity:null,riskControlRating:null,riskMonitoringRating:null})},yt=async()=>{try{if(!t($)){o(m,"No risk selected for assessment.");return}const{data:r,error:e}=await p.from("risk_assessment").insert({risk_id:t($).id,lr:t(c).likelihoodRating,s:t(c).severity,rcr:t(c).riskControlRating,rmr:t(c).riskMonitoringRating});if(e)throw e;o(B,"Risk assessment saved successfully!"),await lt(),nt()}catch(r){console.error("Error saving risk assessment:",r),o(m,"Failed to save risk assessment.")}},wt=async r=>{try{const{data:e,error:v}=await p.from("risks").delete().eq("id",r);if(v)throw v;o(B,"Risk deleted successfully!"),o(z,t(z).filter(_=>_.id!==r))}catch(e){console.log("Error deleting risk: ",e),o(m,"Failed to delete risk.")}};Ft(()=>{bt()}),Et();var X=zt(),Y=s(X),xt=s(Y);a(Y);var ct=n(Y,2);rt(ct,()=>t(B),r=>{var e=St(),v=s(e,!0);a(e),f(()=>h(v,t(B))),b(r,e)});var dt=n(ct,2);rt(dt,()=>t(m),r=>{var e=$t(),v=s(e,!0);a(e),f(()=>h(v,t(m))),b(r,e)});var Z=n(dt,4),vt=n(s(Z));L(vt,5,()=>t(z),U,(r,e)=>{var v=Dt(),_=s(v),y=s(_,!0);a(_);var u=n(_),w=s(u,!0);a(u);var D=n(u),E=s(D,!0);f(()=>{var M;return h(E,((M=t(at).find(et=>et.id===t(e).classification))==null?void 0:M.name)||"N/A")}),a(D);var C=n(D),tt=s(C,!0);a(C);var x=n(C),N=s(x,!0);a(x);var q=n(x),F=s(q,!0);a(q);var S=n(q),P=s(S);f(()=>P.disabled=t(ot).some(M=>M.risk_id===t(e).id));var K=n(P,2);a(S),a(v),f(()=>{h(y,t(e).rrn),h(w,t(e).risk_statement),h(tt,t(e).actions),h(N,t(e).key_persons),h(F,t(e).budget)}),H("click",P,()=>Rt(t(e))),H("click",K,()=>wt(t(e).id)),b(r,v)}),a(vt),a(Z);var Ct=n(Z,2);rt(Ct,()=>t(W),r=>{var e=Ut(),v=s(e),_=s(v),y=s(_);a(_);var u=n(_,4);f(()=>{t(c).likelihoodRating,G(()=>{t(J)})});var w=s(u);w.value=((w.__value="")==null,"");var D=n(w);L(D,1,()=>t(J),U,(d,l)=>{var i=Nt(),k={},A=s(i);a(i),f(()=>{k!==(k=t(l).id)&&(i.value=(i.__value=t(l).id)==null?"":t(l).id),h(A,`${t(l).symbol??""} - ${t(l).name??""}`)}),b(d,i)}),a(u);var E=n(u,4);f(()=>{t(c).severity,G(()=>{t(O)})});var C=s(E);C.value=((C.__value="")==null,"");var tt=n(C);L(tt,1,()=>t(O),U,(d,l)=>{var i=qt(),k={},A=s(i);a(i),f(()=>{k!==(k=t(l).id)&&(i.value=(i.__value=t(l).id)==null?"":t(l).id),h(A,`${t(l).value??""} - ${t(l).name??""}`)}),b(d,i)}),a(E);var x=n(E,4);f(()=>{t(c).riskControlRating,G(()=>{t(Q)})});var N=s(x);N.value=((N.__value="")==null,"");var q=n(N);L(q,1,()=>t(Q),U,(d,l)=>{var i=Pt(),k={},A=s(i);a(i),f(()=>{k!==(k=t(l).id)&&(i.value=(i.__value=t(l).id)==null?"":t(l).id),h(A,`${t(l).symbol??""} - ${t(l).name??""}`)}),b(d,i)}),a(x);var F=n(x,4);f(()=>{t(c).riskMonitoringRating,G(()=>{t(T)})});var S=s(F);S.value=((S.__value="")==null,"");var P=n(S);L(P,1,()=>t(T),U,(d,l)=>{var i=Lt(),k={},A=s(i,!0);a(i),f(()=>{k!==(k=t(l).id)&&(i.value=(i.__value=t(l).id)==null?"":t(l).id),h(A,t(l).status)}),b(d,i)}),a(F);var K=n(F,2),M=s(K),et=n(M,2);a(K),a(v),a(e),f(()=>{var d;return h(y,`Add Risk Assessment for ${((d=t($))==null?void 0:d.rrn)??""}`)}),I(u,()=>t(c).likelihoodRating,d=>j(c,t(c).likelihoodRating=d)),I(E,()=>t(c).severity,d=>j(c,t(c).severity=d)),I(x,()=>t(c).riskControlRating,d=>j(c,t(c).riskControlRating=d)),I(F,()=>t(c).riskMonitoringRating,d=>j(c,t(c).riskMonitoringRating=d)),H("click",M,yt),H("click",et,nt),b(r,e)}),a(X),f(()=>h(xt,`${t(it)??""} Risks Register`)),b(ft,X),At()}export{Vt as component};