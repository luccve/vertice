"use strict";(self["webpackChunkvertice_front"]=self["webpackChunkvertice_front"]||[]).push([[860],{2860:function(e,a,r){r.r(a),r.d(a,{default:function(){return V}});var o=r(6252),i=r(9963),t=r(3577),s=r(4093),n=r(942);const l=e=>((0,o.dD)("data-v-6f793148"),e=e(),(0,o.Cn)(),e),u={class:"templateView"},c={class:"login space-content"},d=l((()=>(0,o._)("div",{class:"logo"},[(0,o._)("h2",null,"Login"),(0,o._)("img",{src:s,alt:"Logo da Vértice"})],-1))),p=l((()=>(0,o._)("br",null,null,-1))),h=l((()=>(0,o._)("br",null,null,-1))),m={class:"senha"},g=["type"],v=l((()=>(0,o._)("h5",null,"Mostrar senha",-1))),w=[v],_={key:0},k={class:"btn-login"},f={id:"g-img"};function y(e,a,r,s,l,v){const y=(0,o.up)("MenuBar"),M=(0,o.up)("router-link"),b=(0,o.up)("FooterBar");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(y),(0,o._)("div",u,[(0,o._)("div",c,[d,p,(0,o._)("form",null,[(0,o.wy)((0,o._)("input",{ref:"emailInput",for:"email",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":a[0]||(a[0]=a=>e.email=a),onBlur:a[1]||(a[1]=(...a)=>e.validateEmail&&e.validateEmail(...a))},null,544),[[i.nr,e.email]]),h,(0,o._)("div",m,[(0,o.wy)((0,o._)("input",{type:e.inputType,placeholder:"Senha",required:"","onUpdate:modelValue":a[2]||(a[2]=a=>e.password=a)},null,8,g),[[i.YZ,e.password]]),(0,o._)("a",{onClick:a[3]||(a[3]=(...a)=>e.recoverPassword&&e.recoverPassword(...a))},"Recuperar senha"),(0,o._)("button",{id:"show",onClick:a[4]||(a[4]=(0,i.iM)(((...a)=>e.toggleType&&e.toggleType(...a)),["prevent"]))},w)]),e.errMSG?((0,o.wg)(),(0,o.iD)("p",_,(0,t.zw)(e.errMSG),1)):(0,o.kq)("",!0),(0,o._)("div",k,[(0,o._)("button",{type:"submit",onClick:a[5]||(a[5]=(0,i.iM)(((...a)=>e.register&&e.register(...a)),["prevent"]))},"Login")]),(0,o._)("div",f,[(0,o._)("img",{onClick:a[6]||(a[6]=(0,i.iM)(((...a)=>e.signInWithGoogle&&e.signInWithGoogle(...a)),["prevent"])),src:n,alt:"Imagem do google"})])]),(0,o._)("p",null,[(0,o.Uk)(" Você não tem conta? "),(0,o.Wm)(M,{to:"/registrar"},{default:(0,o.w5)((()=>[(0,o.Uk)("Crie uma conta")])),_:1})])])]),(0,o.Wm)(b)],64)}r(7658);var M=r(2262),b=r(4864),G=r(63),C=r(2201),S=r(4142),E=r(1934),T=r(3578),Z=(0,o.aZ)({name:"login-view",setup(){const e=(0,M.iH)(""),a=(0,M.iH)(""),r=(0,M.iH)(""),o=(0,C.tv)(),i=(0,M.iH)("password");let t=!0;return{email:a,validateEmail:s,isValidEmail:t,password:r,errMSG:e,router:o,inputType:i};function s(){}},components:{MenuBar:S.Z,FooterBar:E.Z},methods:{toggleType(){this.inputType="password"===this.inputType?"text":"password"},checkLogin(){console.log({email:this.email,password:this.password})},register(){const e=(0,b.v0)();(0,b.e5)(e,this.email,this.password).then((e=>{console.log(e),alert("Conta logada!"),G.Z.push(`/Painel/${e.user.uid}`)})).catch((e=>{switch(console.log(e.code),e.code){case"auth/invalid-email":this.errMSG="Email invalido!";break;case"auth/user-not-found":this.errMSG="Usuário sem registro encontrado!";break;case"auth/wrong-password":this.errMSG="Senha errada";break;default:this.errMSG="Email ou senha incorreta";break}}))},signInWithGoogle(){const e=new b.hJ;(0,b.rh)((0,b.v0)(),e).then((e=>{(0,T._Y)({displayName:e.user.displayName,email:e.user.email,photoURL:"https://source.unsplash.com/random/151x151/",sexo:"",uid:e.user.uid}),G.Z.push(`/Painel/${e.user.uid}`)})).catch((e=>{alert(e.message)}))},recoverPassword(){console.log((0,b.v0)())}}}),I=r(3744);const U=(0,I.Z)(Z,[["render",y],["__scopeId","data-v-6f793148"]]);var V=U}}]);
//# sourceMappingURL=860.d3cfd82a.js.map