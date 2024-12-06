import{a as g,t as f}from"./disclose-version.CM6f1PTD.js";import{p as P,t as k,a as S,g as t,b as n,s as o,c as a,r as s,n as B,d as u}from"./runtime.g0my00JR.js";import{s as y}from"./render.pmuW5QOO.js";import{i as _}from"./if.DVEvk735.js";import{r as O}from"./attributes.BVavg5V5.js";import{e as z}from"./utils.sCj8HAia.js";import{b as T}from"./input.N22HgeA5.js";import{p as N}from"./event-modifiers.CWmzcjye.js";import{i as W}from"./lifecycle.6aQbxLMK.js";import{s as q}from"./supabaseClient.CaMOPPuz.js";var D=f('<span class="loading loading-spinner loading-sm"></span>'),F=f('<p class="text-sm text-center mt-4"> </p>'),G=f(`<div class="h-screen grid lg:grid-cols-2"><div class="relative hidden lg:block" style="
      background-image: 
        linear-gradient(180deg, rgba(103, 21, 21, 0.8) 0%, rgba(103, 21, 21, 0.3) 50%),
        url('/images/login_bg.png');;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    "><div class="relative z-10 h-full flex flex-col items-center justify-center space-y-4 p-10"><div class="text-center"><h1 class="text-5xl font-extrabold text-white tracking-tight mb-4">EuCorp</h1> <p class="text-xl text-gray-300 max-w-md">Our Institutional Planning System</p></div> <div class="mt-6 space-y-2 text-gray-200"><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <p>Streamline Project Management</p></div> <div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <p>Enhance Collaboration</p></div> <div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <p>Monitor Progress Effectively</p></div></div></div></div> <div class="flex items-center justify-center px-8"><div class="w-full max-w-md"><div class="text-center mb-8"><h1 class="text-2xl font-semibold">Create an account</h1> <p class="text-gray-600">Enter your email below to create your account</p></div> <form class="space-y-4"><input type="email" placeholder="name@example.com" required class="input input-bordered w-full"> <button type="submit" class="btn bg-rose-700 w-full text-white"><!> <span> </span></button></form> <!> <div class="divider svelte-130ijz8">OR CONTINUE WITH</div> <button class="btn btn-outline w-full">Google</button> <p class="text-gray-500 text-sm text-center mt-4">By clicking continue, you agree to our <a href="/terms" class="hover:underline text-primary">Terms of Service</a> and <a href="/privacy" class="hover:underline text-primary">Privacy Policy</a>.</p></div></div></div>`);function Y(C,j){P(j,!1);let p=u(""),l=u(""),r=u(!1);async function E(){n(r,!0);const{error:e}=await q.auth.signInWithOtp({email:t(p)});n(r,!1),e?(console.error("Error sending magic link:",e.message),n(l,`Failed to send magic link. ${e.message}`)):n(l,"Check your email for the magic link!")}W();var d=G(),x=o(a(d),2),h=a(x),c=o(a(h),2),m=a(c);O(m);var v=o(m,2),b=a(v);_(b,()=>t(r),e=>{var i=D();g(e,i)});var w=o(b,2),L=a(w,!0);s(w),s(v),s(c);var M=o(c,2);_(M,()=>t(l),e=>{var i=F(),I=a(i,!0);s(i),k(()=>y(I,t(l))),g(e,i)}),B(6),s(h),s(x),s(d),k(()=>{v.disabled=t(r),y(L,t(r)?"Sending...":"Sign In with Email")}),T(m,()=>t(p),e=>n(p,e)),z("submit",c,N(E)),g(C,d),S()}export{Y as L};