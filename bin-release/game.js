function J(){this.B=function(a){for(var b=0;24>b;b++)this[String.fromCharCode(97+b)]=a[b]||0;.01>this.c&&(this.c=.01),a=this.b+this.c+this.e,.18>a&&(a=.18/a,this.b*=a,this.c*=a,this.e*=a)}}var W=new function(){this.A=new J;var a,b,c,d,e,f,g,h,i,j,k,l;this.reset=function(){var a=this.A;d=100/(a.f*a.f+.001),e=100/(a.g*a.g+.001),f=1-a.h*a.h*a.h*.01,g=-a.i*a.i*a.i*1e-6,a.a||(k=.5-a.n/2,l=5e-5*-a.o),h=1+a.l*a.l*(0<a.l?-.9:10),i=0,j=1==a.m?0:(1-a.m)*(1-a.m)*2e4+32},this.D=function(){this.reset();var d=this.A;return a=d.b*d.b*1e5,b=d.c*d.c*1e5,c=d.e*d.e*1e5+12,3*((a+b+c)/3|0)},this.C=function(m,n){var o=this.A,p=1!=o.s||o.v,q=o.v*o.v*.1,r=1+3e-4*o.w,s=o.s*o.s*o.s*.1,t=1+1e-4*o.t,u=1!=o.s,v=o.x*o.x,w=o.g,x=o.q||o.r,y=o.r*o.r*o.r*.2,z=o.q*o.q*(0>o.q?-1020:1020),A=o.p?((1-o.p)*(1-o.p)*2e4|0)+32:0,B=o.d,C=o.j/2,D=o.k*o.k*.01,E=o.a,F=a,G=1/a,H=1/b,I=1/c,o=5/(1+o.u*o.u*20)*(.01+s);o>.8&&(o=.8);for(var J,K,L,M,N,o=1-o,O=!1,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=Array(1024),$=Array(32),_=Z.length;_--;)Z[_]=0;for(_=$.length;_--;)$[_]=2*Math.random()-1;for(_=0;n>_;_++){if(O)return _;if(A&&++X>=A&&(X=0,this.reset()),j&&++i>=j&&(j=0,d*=h),f+=g,d*=f,d>e&&(d=e,w>0&&(O=!0)),K=d,C>0&&(Y+=D,K*=1+Math.sin(Y)*C),K|=0,8>K&&(K=8),E||(k+=l,0>k?k=0:k>.5&&(k=.5)),++Q>F)switch(Q=0,++P){case 1:F=b;break;case 2:F=c}switch(P){case 0:R=Q*G;break;case 1:R=1+2*(1-Q*H)*B;break;case 2:R=1-Q*I;break;case 3:R=0,O=!0}x&&(z+=y,L=0|z,0>L?L=-L:L>1023&&(L=1023)),p&&r&&(q*=r,1e-5>q?q=1e-5:q>.1&&(q=.1)),N=0;for(var ab=8;ab--;){if(V++,V>=K&&(V%=K,3==E))for(J=$.length;J--;)$[J]=2*Math.random()-1;switch(E){case 0:M=k>V/K?.5:-.5;break;case 1:M=1-V/K*2;break;case 2:M=V/K,M=6.28318531*(M>.5?M-1:M),M=1.27323954*M+.405284735*M*M*(0>M?1:-1),M=.225*((0>M?-1:1)*M*M-M)+M;break;case 3:M=$[Math.abs(32*V/K|0)]}p&&(J=U,s*=t,0>s?s=0:s>.1&&(s=.1),u?(T+=(M-U)*s,T*=o):(U=M,T=0),U+=T,S+=U-J,M=S*=1-q),x&&(Z[W%1024]=M,M+=Z[(W-L+1024)%1024],W++),N+=M}N=.125*N*R*v,m[_]=N>=1?32767:-1>=N?-32768:32767*N|0}return n}};window.jsfxr=function(a){W.A.B(a);var b=W.D();a=new Uint8Array(4*((b+1)/2|0)+44);var b=2*W.C(new Uint16Array(a.buffer,44),b),c=new Uint32Array(a.buffer,0,44);c[0]=1179011410,c[1]=b+36,c[2]=1163280727,c[3]=544501094,c[4]=16,c[5]=65537,c[6]=44100,c[7]=88200,c[8]=1048578,c[9]=1635017060,c[10]=b;for(var b=b+44,c=0,d="data:audio/wav;base64,";b>c;c+=3)var e=a[c]<<16|a[c+1]<<8|a[c+2],d=d+("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>18]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>12&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>6&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[63&e]);return d};var aa;!function(){function a(){this.sounds={}}a.prototype.add=function(a,b,c){this.sounds[a]=[],c.forEach(function(c,d){this.sounds[a].push({tick:0,count:b,pool:[]});for(var e=0;b>e;e++){var f=new Audio;f.src=jsfxr(c),this.sounds[a][d].pool.push(f)}},this)},a.prototype.play=function(a){var b=this.sounds[a],c=b.length>1?b[Math.floor(Math.random()*b.length)]:b[0];c.pool[c.tick].play(),c.tick<c.count-1?c.tick++:c.tick=0},aa=new a,aa.add("check",1,[[2,,.1747,,.1291,.6731,.2,-.2999,,,,,,.4368,.1862,,.28,,1,,,.1596,,.5]]),aa.add("move",5,[[3,,.0316,,.1483,.5871,,-.6609,,,,,,,,,,,1,,,.0227,,.25]]),aa.add("capture",5,[[0,,.3065,,.2516,.36,,.1584,,,,,,.1149,,,,,1,,,.2188,,.25]]),aa.add("checkmate",1,[[1,,.2402,,.3917,.2242,,.1535,,,,,,,,.5609,,,1,,,,,.5]])}(),window.onload=function(){"use strict";function a(){Y=W.createElement("div"),Y.id="root",X.appendChild(Y);var a=Y.style;a.position="absolute",a.left="50%",a.top="0",a.marginLeft=-bb/2+"px ",y(),A(),F(),z(),c(0),j()}function b(){for(var a=yb.length-1,b=0;b<yb.length;b++)if(vb<yb[b]){b>0&&(a=b-1);break}c(a),N=null,zb=-1,pb++}function c(a){function b(){var a=Z.ceil(f/2);yb.push(h+a);for(var b=0;f>b;b++){if(xb[h]=[],b==a)for(var c=0;cb>c;c++)xb[h][c]={checkPoint:!0};h++}}function c(){var b,c=Array.prototype.slice.call(arguments);b="object"==typeof c[0]?c.shift():{};var d,f,i,j,k=a<yb.length,l=h;for(i=c.length-1;i>=0;i--){if(f=c[i],f.length>cb)throw new Error;if(xb[h]=[],k&&""!==f)for(j=0;j<f.length;j++){var m=f.charAt(j);if(" "!==m&&"."!==m){var n=m.toLowerCase(),o=e(n,h,j);b.showThreat==n&&(d=xb[h][j]),b.intro&&(o.piece.intro=!0)}}h++}if(d)for(d.piece.showThreat=!0,i=l;h>i;i++)for(f=xb[i],j=0;cb>j;j++){var p=g(i,j);p&&p.piece==d.piece&&(xb[i][j]||(xb[i][j]={}),xb[i][j].showThreat=!0)}}xb&&d(),xb=[],yb=[0];var f=5,h=0;c({intro:!0},"","","",Ib?"  reqr":"",Ib?"   kk":"","","","","","","","kkkkkkkk"),c({showThreat:"p"},"","","    p","","","","",""),c("  pppp","  pppp","","  p","","     p",""," p"),c("","pppppp","","  pppppp","","pppppp","",""),c("","pp   ppp","  p p","   p","","","",""),c("","   pp","p p  p p"," p    p","","","",""),c("","    ppp","     p","ppp"," p   ppp","      p","",""),b(),c({showThreat:"r"},"","   p","","   r","","   p","",""),c("","","r"," r","  r","   r","    r","     r","pppppp"),c("","","","       p","    rp r","","","pp","r   p  p","p"),c("","p     r","r     p","r    p","","   p","   p","p  ppppp",""),b(),c({showThreat:"b"},"","","","","...b","","","",""),c(""," p p p","b b b b","","","","","",""),c("","r.p..p.r","p......p","","b      b","pp....pp","",""),c("","r"," r  p..b","     ..r","....p","...p","..p","pp.....p"),b(),c({showThreat:"k"},"","","   k","","","","",""),c("p","r.....p","","","......kk","","pkk",""),c("p   pppp","r    b r","   p b p","","",""," k","","",""),b(),c({showThreat:"l"},"","","","   l","","","",""),c("l.llllll","l.l....l","..l.llll",".ll.l   ","l...l l ","l.lll l ","l.    l ","lllllll "),c(" p  pll"," l p   l","lpl p p ","     lp","ll ll l"," l  l","",""),c("","   r"," kll","",""," l pl  b","       l","  p  l","","","","",""),b(),c("","c","","","","",""),O=h,0===a?(Cb=e(Mb,5,4).piece,vb=2):(vb=yb[a],Cb=e(Mb,vb,3).piece,vb-=4)}function d(){for(var a in xb)if(xb[a])for(var b in xb[a]){var c=xb[a][b];c&&c.piece&&E(c.piece)}}function e(a,b,c){var d={shape:null,type:a,row:b,col:c,showThreat:!1};if(xb[b]||(xb[b]=[]),xb[b][c]||(xb[b][c]={}),xb[b][c].piece=d,a==Ub)for(var e=0;cb>e;e++)3!=e&&4!=e&&(xb[b][e]||(xb[b][e]={}),xb[b][e].wall=!0);return xb[b][c]}function f(a,b){var c=Cb.col,d=Cb.row;0>b?b=0:b>=cb&&(b=cb-1);var e=Z.floor(vb),f=zb-2;if(e>a?a=e:a>=f&&(a=f),b!=c||a!=d){var h=xb[d][c];xb[a]||(xb[a]=[]);var j=xb[a][b];if(j||(j={},xb[a][b]=j),!j.wall){var l=g(a,b);l?(aa.play("check"),Cb.invalid=!0,Cb.invalidCol=b,Cb.invalidRow=a,Cb.threateningPiece=l.piece,b=c,a=d,qb++):(Cb.invalid=!1,j.piece?(i(j.piece),ob++,aa.play("capture")):aa.play("move"),h.piece=null,j.piece=Cb),Cb.oldCol=c,Cb.oldRow=d,Cb.anim=!0,Cb.animStartTime=mb,Cb.col=b,Cb.row=a,a>=O&&k(!0,!0)}}}function g(a,b){var c;if(c=h(a,b,Sb))return c;if(c=h(a+1,b-1,Ob)||h(a+1,b+1,Ob))return c;var d,e,f;for(e=b-1;e>=0;e--)if(f=h(a,e),f&&f.piece){if(f.piece.type==Pb)return f;break}for(e=b+1;cb>=e;e++)if(f=h(a,e),f&&f.piece){if(f.piece.type==Pb)return f;break}for(d=a+1;a+cb>=d;d++)if(f=h(d,b),f&&f.piece){if(f.piece.type==Pb)return f;break}for(d=a-1;d>=a-cb;d--)if(f=h(d,b),f&&f.piece){if(f.piece.type==Pb)return f;break}for(e=b-1,d=a-1;e>=0;e--,d--)if(f=h(d,e),f&&f.piece){if(f.piece.type==Qb)return f;break}for(e=b+1,d=a-1;cb>e;e++,d--)if(f=h(d,e),f&&f.piece){if(f.piece.type==Qb)return f;break}for(e=b-1,d=a+1;e>=0;e--,d++)if(f=h(d,e),f&&f.piece){if(f.piece.type==Qb)return f;break}for(e=b+1,d=a+1;cb>e;e++,d++)if(f=h(d,e),f&&f.piece){if(f.piece.type==Qb)return f;break}return c=h(a+2,b-1,Rb)||h(a-2,b-1,Rb)||h(a+2,b+1,Rb)||h(a-2,b+1,Rb)||h(a+1,b-2,Rb)||h(a-1,b-2,Rb)||h(a+1,b+2,Rb)||h(a-1,b+2,Rb)}function h(a,b,c){var d=xb[a];if(d){var e=d[b];if(e&&e.piece&&(!c||e.piece.type==c))return e}}function i(a){if(Bb.push(a),a.removedTime=mb,a.justRemoved=!0,a.showThreat)for(var b=a.row-cb;b<a.row+cb;b++){var c=xb[b];if(c)for(var d=a.col-cb;d<a.col+cb;d++)c[d]&&(c[d].showThreat=!1)}}function j(){window.stb&&stb(),tb?(0===Bc.space||_b.click)&&(k(!1),Bc.space=-1):(Ib?(Lb>=0&&(0===Bc.space||_b.click)&&(Bc.space=-1,Lb++,P=null),n()):(l(),m()),r()),_b.click=!1,window.ste&&ste(),Ab&&requestAnimationFrame(j)}function k(a,c){c?(Ab=!1,tb=!0,rb.style.display="block"):a!=tb&&(tb=a,tb?sb.style.display="block":(sb.style.display="none",b()))}function l(){if(!(0>=zb||Cb.invalid||Ib)){var a=0,b=0;$b||((Bc.down==Yb||0===Bc.down)&&(b=-1),(Bc.up==Yb||0===Bc.up)&&(b=1),(Bc.left==Yb||0===Bc.left)&&(a=-1),(Bc.right==Yb||0===Bc.right)&&(a=1),(a||b)&&(a?(Bc.up<=Yb&&Bc.up>0&&(b=1),Bc.down<=Yb&&Bc.down>0&&(b=-1)):(Bc.left<=Yb&&Bc.left>0&&(a=-1),Bc.right<=Yb&&Bc.right>0&&(a=1)),f(Cb.row+b,Cb.col+a),$b=!0));var c;if($b){var d=!0;for(c in Ac)if(Ac[c]){d=!1;break}$b=!d}for(c in Bc)Bc[c]>=1?Bc[c]++:Bc[c]>Zb&&Bc[c]--;if(!Cb.anim&&_b.x>0&&_b.x<bb&&_b.y>ab&&_b.y<bb+ab){var e=_b.x/bb,g=(_b.y-ab)/bb;v(e,g),bc=Z.floor(v.res.x*cb),ac=Z.floor(v.res.y*cb+vb),a=bc-Cb.col,b=ac-Cb.row,a>1?a=1:-1>a&&(a=-1),b>1?b=1:-1>b&&(b=-1),ac=Cb.row+b,bc=Cb.col+a,_b.click&&(a||b)&&f(ac,bc)}else bc=-1,ac=-1}}function m(){if(mb=Date.now(),N&&(vb+=wb*(mb-N)*nb),Cb.row<vb-.9){if(ub)if(g(Cb.row+1,Cb.col))if(g(Cb.row+1,Cb.col+1)){if(g(Cb.row+1,Cb.col-1))return void k(!0);f(Cb.row+1,Cb.col+1)}else f(Cb.row+1,Cb.col+1);else f(Cb.row+1,Cb.col);else k(!0);aa.play("checkmate")}var a=Z.floor(vb)+eb;if(!N||a>zb){for(var b,c,d,e=a-eb-5;e>zb-eb-5;e--)if(b=xb[e])for(d=!0,c=0;cb>c;c++)b[c]&&b[c].piece&&E(b[c].piece);for(e=zb+1;a>=e;e++)if(b=xb[e])for(d=!0,c=0;cb>c;c++){var h=cb/2;c%2===0?h+=c/2:h-=(c+1)/2,b[h]&&b[h].piece&&D(b[h].piece)}zb=a}N=mb}function n(){var a,b,c,d,e=xb[8][3].piece,f=Cb;mb=Date.now();var g=!P;if(g&&(P=mb,p(),e&&(e.talking=!1,e.talkingStarTime=mb),f.talking=!1,f.talkingStarTime=mb),-1==Lb)ib.style.opacity=0,kb.style.opacity=0,Jb=0,m(),N=null,Lb=0;else if(0===Lb);else if(1==Lb)g&&(G(!0,["Surrender Black King !","Your army is defeated, and your Queen is mine !"]),e.talking=!0);else if(2==Lb){if(g)for(H(),b=0;cb>b;b++)c=xb[0][b],o(c.piece,{row:2,col:b+(b%2===0?1:-1)},.1*b,.5)}else if(3==Lb)g&&(G(!0,["You thought I'd only bring two knights to battle ?","You are surrounded,","admit defeat now and I shall be merciful."]),e.talking=!0);else if(4==Lb)g&&(G(!1,["Never !"]),f.talking=!0);else if(5==Lb)g&&(G(!0,["As you wish...","I am taking the prisoner back to the castle.","Knights, capture him, I want him alive."]),e.talking=!0);else if(6==Lb){if(g){for(H(),b=2;5>=b;b++)c=xb[8][b],c&&(o(c.piece,{row:9},0,.5),o(c.piece,{row:10},1,.5));o(xb[7][3].piece,{row:8,col:1},.5,.5),o(xb[7][3].piece,{row:10,col:2},1.5,.5),o(xb[7][4].piece,{row:8,col:6},.5,.5),o(xb[7][4].piece,{row:10,col:5},1.5,.5)}}else if(7==Lb){if(g)for(G(!1,["Wait for me my Queen, I will save you !"]),f.talking=!0,a=1;2*cb>a;a++)if(d=xb[a])for(b=0;cb>b;b++)c=d[b],c&&c.piece&&c.piece.intro&&(E(c.piece),d[b]={})}else 8==Lb&&(g&&(H(),Fb.style.display="none"),Kb=(mb-P)/4e3,Kb>1?Lb=9:(Kb=Z.sin(Kb*$/2),Jb=(Kb-.2)/.6,0>Jb?Jb=0:Jb>1&&(Jb=1),ib.style.opacity=Jb,Kb>.8&&(Hb.style.opacity=(1-Kb)/.2,kb.style.opacity=1-Hb.style.opacity)));if(g)if(U.length){Fb.style.opacity=0;var h=U[0].e==Q,i=U[U.length-1],j=i.du+i.de;j+=h?2:.5,o(Fb.style,{opacity:1},j,.1)}else Fb.style.opacity=1;q(),9==Lb&&(Ib=!1,Jb=1,Hb.style.display="none",ib.style.opacity=1,kb.style.opacity=1,Fb.style.display="none",H(),Cb.talking=!1),N=mb}function o(a,b,c,d){U.push({e:a,to:b,de:c||0,du:d})}function p(){if(U)for(var a=0;a<U.length;a++){var b=U[a];for(var c in b.to)b.e[c]=b.to[c]}U=[]}function q(){for(var a,b=(mb-P)*nb,c=0;c<U.length;c++){var d=U[c];if(b<=d.de);else if(b>=d.de+d.du);else{if(!d.from){d.from={};for(a in d.to)d.from[a]=d.e[a]}var e=(b-d.de)/d.du;e=Z.sin(e*$/2);for(a in d.to)d.e[a]=d.from[a]*(1-e)+d.to[a]*e}}Q.setAttributeNS(null,"y",Q._y)}function r(){for(var a,b,c=zb-eb-5;zb>=c;c++)if(b=xb[c])for(var d=0;cb>d;d++)if(b[d]&&b[d].piece){var e=b[d].piece;if(s(e.row,e.col,e),e.talking){var f=-Z.abs(Z.sin((mb-e.talkingStarTime)*$/800))*db*.2;e.y+=f}t(e),e.y>Cb.y&&(!a||a.y>e.y)&&(a=e)}var g;if(Cb.anim)if(g=Cb.invalid?nb*(mb-Cb.animStartTime)/Eb:nb*(mb-Cb.animStartTime)/Db,0>g||g>=1)Cb.anim=!1,Cb.invalid&&Cb.threateningPiece&&(Cb.threateningPiece.shape.style.filter="none"),Cb.invalid=!1;else if(g=Z.sin(g*$*.5),Cb.invalid){s(Cb.row,Cb.col);var h=.4*(.5>g?g:1-g)*db,i=Z.sin(6*g*$)*h;Cb.x+=i,t(Cb),Cb.threateningPiece.shape.style.filter="url(#"+Wb+")"}else s(Cb.oldRow,Cb.oldCol),Cb.opacity=g*Cb.opacity+(1-g)*s.res.opacity,Cb.scale=g*Cb.scale+(1-g)*s.res.scale,Cb.x=g*Cb.x+(1-g)*s.res.x,Cb.y=g*Cb.y+(1-g)*s.res.y,t(Cb);for(l=0,n=Bb.length;n>l;l++){var j=Bb[l],k=(mb-j.removedTime)/1e3;k>1?(E(j),Bb[l]=Bb[n-1],n--,l--,Bb=Bb.slice(0,n)):(j.justRemoved&&(j.justRemoved=!1,j.removedX=j.x,j.removedY=j.y),j.x=j.x<.5*bb?j.removedX-k*bb:j.removedX+k*bb,j.y=j.removedY-Z.sin(k*$)*bb*.4,t(j))}Cb.anim&&Cb.invalid?(T||(T={onTop:!0,type:Xb}),T.shape||(D(T),T.row=Cb.invalidRow,T.col=Cb.invalidCol),s(Cb.invalidRow,Cb.invalidCol,T),T.scale=1,T.y-=g*T.scale*db*.2,T.opacity=.8>g?1:1-(g-.8)/(1-.8),t(T)):T&&T.shape&&E(T),a&&a.shape&&Cb.shape&&Cb.shape.nextSibling!=a.shape&&wc.insertBefore(Cb.shape,a.shape),hb.save(),hb.translate(0,ab),hb.fillStyle=cc,hb.beginPath(),hb.rect(0,0,bb,bb),hb.fill(),hb.clip();var l,m,n,o=Z.floor(vb),p=-(vb-Z.floor(vb)),q={},r={},v={},w={};for(l=-1;eb>l;l++)for(m=0;cb>m;m++){if(u(m/cb,(l+p)/cb,q),u(m/cb,(l+1+p)/cb,w),u((m+1)/cb,(l+1+p)/cb,v),u((m+1)/cb,(l+p)/cb,r),hb.beginPath(),hb.moveTo(q.x*bb,q.y*bb),hb.lineTo(r.x*bb,r.y*bb),hb.lineTo(v.x*bb,v.y*bb),hb.lineTo(w.x*bb,w.y*bb),hb.closePath(),hb.lineWidth=1,hb.fillStyle=-1!=ac&&-1!=bc&&l+o==ac&&m==bc?fc:(l+m+o)%2===0?dc:ec,hb.fill(),b=xb[l+o],b&&b[m]){var x=b[m];x.showThreat&&(hb.fillStyle="rgba("+ic+",0.5)",hb.fill()),x.checkPoint&&(hb.fillStyle=jc,hb.fill())}if(Cb.invalid&&Cb.invalidCol==m&&Cb.invalidRow==l+o){var y=1.5*(.5>g?g:1-g);hb.fillStyle="rgba("+ic+","+y+")",hb.fill()}}hb.restore()}function s(a,b,c){c=c||s.res,u((b+.5)/cb,(a-vb+.5)/cb);var d=.02,e=1;return u.res.y<kc?e=0:u.res.y<lc&&(e=1-(d-u.res.y)/(lc-kc)),c.opacity=e,c.x=u.res.x*bb,c.y=u.res.y*bb+ab,c.scale=u.res.scaleX,c}function t(a){a.shape&&(a.shape.style.opacity=a.opacity,a.scale>0&&a.shape.setAttributeNS(null,"transform","scale("+a.scale+") translate("+a.x/a.scale+","+a.y/a.scale+")"))}function u(a,b,c){return c=c||u.res,c.y=w(b,mc,nc,oc),c.scaleX=w(b,pc,qc,rc),c.scaleY=c.scaleX,c.x=(1-c.scaleX)/2+a*c.scaleX,Ib&&(c.x=Jb*c.x+(1-Jb)*a,c.y=Jb*c.y+(1-Jb)*(1-b),c.scaleX=Jb*c.scaleX+1*(1-Jb),c.scaleY=c.scaleX),c}function v(a,b,c){c=c||v.res,c.y=x(b,mc,nc,oc,!1);var d=w(c.y,pc,qc,rc);return c.x=(a-(1-d)/2)/d,c}function w(a,b,c,d){return b*a*a+c*a+d}function x(a,b,c,d,e){return e?(-c+Z.sqrt(c*c-4*b*(d-a)))/(2*b):(-c-Z.sqrt(c*c-4*b*(d-a)))/(2*b)}function y(){Y.appendChild(gb),gb.width=bb,gb.height=bb+ab}function z(){var a=jb,b=a.createLinearGradient(0,0,0,bb),c="rgba(10,20,25,",d=")";b.addColorStop(0,c+0+d),b.addColorStop(.2,c+0+d),b.addColorStop(1,c+.5+d),a.fillStyle=b,a.fillRect(0,0,bb,bb),a.restore(),ib.style.top=ab+"px",ib.style.pointerEvents="none",Y.appendChild(ib)}function A(){var a=.02*bb;kb.width=bb,kb.height=ab+a;var b=lb;b.clearRect(0,0,bb,bb),b.save(),b.fillStyle="#FF8601",b.beginPath(),b.rect(0,0,bb,ab),b.fill(),b.clip(),b.fillStyle="#FFE7CA";var c=bb/4;b.beginPath(),b.arc(bb/2,ab+.3*c,c,0,$,!0),b.fill(),b.restore(),b.beginPath(),b.fillStyle="rgb(10,20,25)";for(var d=40,e=[0,.7,.1,.3,.2,1,.3,.5,.35,.8,.42,.5,.55,.9,.7,.45,.8,1.1,.88,.4,1,.8],f=0;f<e.length;f+=2){var g=e[f]*bb,h=ab-d*e[f+1];0===f?b.moveTo(g,h):b.lineTo(g,h)}b.lineTo(bb,ab),b.lineTo(0,ab),b.fill(),b.restore(),b.save(),b.translate(0,ab);var i=b.createLinearGradient(0,0,0,a),j="rgba(10,20,25,",k=")";i.addColorStop(0,j+1+k),i.addColorStop(1,j+0+k),b.fillStyle=i,b.fillRect(0,0,bb,a),b.restore(),Y.appendChild(kb)}function B(a,b,c){var d=W.createElement("canvas");return c&&(d.id=c),d.width=a,d.height=b,d}function C(a){return a.getContext("2d")}function D(a){var b;if(xc[a.type]||(xc[a.type]=[]),b=xc[a.type].length?xc[a.type].pop():sc(a.type),wc.firstChild&&!a.onTop?wc.insertBefore(b,wc.firstChild):wc.appendChild(b),a.shape)throw new Error;a.shape=b,b.style.filter="none"}function E(a){a.shape&&(xc[a.type].push(a.shape),wc.removeChild(a.shape),a.shape=null)}function F(){function a(a,b){return g(["M",[a,b],"L",[a+1,b],"L",[a+.5,b-3],"L",[a,b]])}function b(a,b,c){var e=W.createElementNS(r,"g");e.setAttributeNS(null,"id",a),c||e.appendChild(d());for(var f=0;f<b.length;f++){var g=b[f];g.getAttributeNS(null,"x")||(g.setAttributeNS(null,"x",-db/2),g.setAttributeNS(null,"y",-db)),e.appendChild(g)}return v.appendChild(e),e}function c(a){var b=W.createElementNS(r,"filter");return b.setAttributeNS(null,"id",a),J(b,{x:"0",y:"0",width:"100%",height:"100%","color-interpolation-filters":"sRGB"}),I(b,'<feFlood flood-color="rgba(255,0,0,0.3)" result="COLOR"></feFlood><feComposite operator="atop" in="COLOR" in2="SourceGraphic"></feComposite>'),v.appendChild(b),b}function d(){var a=f(5,8,3.1,1.8);return K(a,"rgba(0,0,0,0.2)","none"),a}function e(a,b,c){var d=W.createElementNS(r,"circle");return J(d,{cx:j(a-w),cy:j(b-x),r:j(c)}),d}function f(a,b,c,d){var e=W.createElementNS(r,"ellipse");return J(e,{cx:j(a-w),cy:j(b-x),rx:j(c),ry:j(d)}),e}function g(a,b){var c=W.createElementNS(r,"path");return c.setAttributeNS(null,"d",h(a)),b&&J(c,b),c}function h(a){for(var b="",c=0;c<a.length;c++){var d=a[c];"object"==typeof d&&(d=j(d[0]-w)+","+j(d[1]-x)),b+=d+" "}return b}function i(a,b){var c=W.createElementNS(r,"use");return J(c,b),c.setAttributeNS(s,"xlink:href","#"+a),c.setAttribute("xmlns:xlink",s),c}function j(a){return.1*Z.round(db*a)}function k(a,b){var c=W.createElementNS(r,"text");c.setAttributeNS(null,"id",a),J(c,{x:"-40","font-size":"28",fill:"red",stroke:"black","stroke-width":"1","font-family":"Impact"}),I(c,b),v.appendChild(c)}function l(){sb=W.createElementNS(r,"g"),sb.style.display="none",tc.appendChild(sb);var a=W.createElementNS(r,"rect");J(a,{x:0,y:0,width:"100%",height:"100%",fill:"rgba(0,0,0,0.5)"}),sb.appendChild(a);var b=W.createElementNS(r,"text");J(b,{x:"50%",y:"50%","font-size":"48px",fill:"orange",stroke:"red","stroke-width":"2px","text-anchor":"middle","font-family":"Impact"}),I(b,"CHECKMATE !"),sb.appendChild(b),b=W.createElementNS(r,"text"),J(b,{x:"50%",y:"60%","font-size":"22px",fill:"white",stroke:"black","stroke-width":"1px","text-anchor":"middle","font-family":"Impact"}),I(b,'<tspan x="50%">Press <tspan style="fill:orange;">SPACE</tspan> or <tspan style="fill:orange;">CLICK</tspan></tspan><tspan x="50%" dy="1.5em">to restart from the last checkpoint.</tspan>'),sb.appendChild(b)}function m(){Hb=W.createElementNS(r,"g"),tc.appendChild(Hb);var a=W.createElementNS(r,"rect");J(a,{x:0,y:0,width:"100%",height:ab,fill:cc,stroke:"#000"}),Hb.appendChild(a);var b=W.createElementNS(r,"text");J(b,{x:"50%",y:"60","font-size":"48px",fill:"orange",stroke:"red","stroke-width":"2px","text-anchor":"middle","font-family":"Impact"}),I(b,'CHESS<tspan style="font-style:italic;">PURSUIT</tspan>'),Hb.appendChild(b)}function n(){Fb=W.createElementNS(r,"text"),J(Fb,{x:"50%",y:ab+bb-10,"font-size":"22px",fill:"white",stroke:"black","stroke-width":"1px","text-anchor":"middle","font-family":"Impact"}),I(Fb,'Press <tspan style="fill:orange;">SPACE</tspan> or <tspan style="fill:orange;">CLICK</tspan>'),tc.appendChild(Fb)}function o(){Gb=W.createElementNS(r,"text"),J(Gb,{x:"50%",y:"50%","font-size":"32px",fill:"orange",stroke:"black","stroke-width":"1px","text-anchor":"middle","font-family":"Impact"}),I(Gb,"PAUSED"),Gb.style.display="none",tc.appendChild(Gb)}function p(){var a=bb-2*fb,b=.3*bb-2*fb;vc=bb+ab,uc=ab+bb-b-fb,Q=W.createElementNS(r,"svg"),Q._y=vc,J(Q,{x:fb,y:vc,width:a,height:b}),tc.appendChild(Q);var c=W.createElementNS(r,"rect");J(c,{width:"100%",height:"100%",fill:"rgba(0,0,0,0.8)",stroke:"#fff","stroke-width":2}),Q.appendChild(c),R=W.createElementNS(r,"text"),J(R,{x:10,y:20,"font-size":"18px",fill:"#fff","text-anchor":"left","font-family":"Impact"}),Q.appendChild(R),S=W.createElementNS(r,"text"),J(S,{x:10,y:40,"font-size":"16px",fill:"#fff","text-anchor":"left","font-family":"sans-serif"}),Q.appendChild(S)}function q(){rb=W.createElementNS(r,"g"),rb.style.display="none",tc.appendChild(rb);var a=W.createElementNS(r,"rect");J(a,{x:0,y:0,width:"100%",height:"100%",fill:"rgba(0,0,0,0.5)"}),rb.appendChild(a);var b=W.createElementNS(r,"text");J(b,{x:"50%",y:"50%","font-size":"48px",fill:"#5f7",stroke:"black","stroke-width":"2px","text-anchor":"middle","font-family":"Impact"}),I(b,"YOU WIN !"),rb.appendChild(b),b=W.createElementNS(r,"text"),J(b,{x:"50%",y:"60%","font-size":"22px",fill:"white",stroke:"black","stroke-width":"1px","text-anchor":"middle","font-family":"Impact"}),I(b,"Alas, your Queen is in another castle..."),rb.appendChild(b)}sc=i;var r="http://www.w3.org/2000/svg",s="http://www.w3.org/1999/xlink",t=bb,u=bb+ab;tc=W.createElementNS(r,"svg"),tc.setAttribute("xmlns",r),tc.setAttributeNS(null,"viewBox","0 0 "+t+" "+u),tc.setAttributeNS(null,"width",t),tc.setAttributeNS(null,"height",u),Y.appendChild(tc);var v=W.createElementNS(r,"defs");tc.appendChild(v),wc=W.createElementNS(r,"g"),tc.appendChild(wc),m(),c(Wb),k(Xb,"CHECK"),l(),p(),n(),o(),q();var w=5,x=8;K(b(Ob,[g(["M",[2,8],"Q",[5,10],[8,8],"L",[5,3],"L",[2,8]]),e(5,3,2)]),gc,hc,0),K(b(Nb,[g(["M",[4.6,1.4],"L",[5.4,1.4],"L",[5.4,-.6],"L",[6.4,-.6],"L",[6.4,-1.4],"L",[5.4,-1.4],"L",[5.4,-2.4],"L",[4.6,-2.4],"L",[4.6,-1.4],"L",[3.6,-1.4],"L",[3.6,-.6],"L",[4.6,-.6],"L",[4.6,1.4]]),g(["M",[2,8],"Q",[5,10],[8,8],"L",[6,3],"L",[7,1],"Q",[5,0],[3,1],"L",[4,3],"L",[2,8]])]),gc,hc,0),K(b(Rb,[g(["M",[2,8],"Q",[5,10],[8,8],"L",[7,6],"Q",[8,3],[7,0],"L",[6,1],"L",[5,1],"L",[2,4],"L",[3,5],"L",[5,4],"L",[2,8]])]),gc,hc,0),K(b(Pb,[g(["M",[2,8],"Q",[5,10],[8,8],"L",[6.5,3],"L",[8,2],"L",[8,0],"L",[7,0],"L",[7,1],"L",[6,1],"L",[6,0],"L",[4,0],"L",[4,1],"L",[3,1],"L",[3,0],"L",[2,0],"L",[2,2],"L",[3.5,3],"L",[2,8]])]),gc,hc,0),K(b(Qb,[g(["M",[2,8],"Q",[5,10],[8,8],"L",[6,4],"Q",[8,1.1],[5,0],"Q",[2,1.1],[4,4],"L",[2,8]]),e(5,0,.7),g(["M",[3.8,.8],"L",[4.4,2.5]],{"stroke-width":2})]),gc,hc,0),K(b(Tb,[g(["M",[2,8],"Q",[5,10],[8,8],"L",[8.5,6],"L",[7,7],"L",[7,5],"L",[6,6],"L",[5,4.5],"L",[4,6],"L",[3,5],"L",[3,7],"L",[1.5,6],"L",[2,8]])]),gc,hc,0),K(b(Sb,[a(2,9.5),a(5,9),a(8,10),a(7,8),a(4,7.5),a(1,8.5)],!0),gc,hc,0),K(b(Mb,[g(["M",[4.6,1.4],"L",[5.4,1.4],"L",[5.4,-.6],"L",[6.4,-.6],"L",[6.4,-1.4],"L",[5.4,-1.4],"L",[5.4,-2.4],"L",[4.6,-2.4],"L",[4.6,-1.4],"L",[3.6,-1.4],"L",[3.6,-.6],"L",[4.6,-.6],"L",[4.6,1.4]]),g(["M",[2,8],"Q",[5,10],[8,8],"L",[6,3],"L",[7,1],"Q",[5,0],[3,1],"L",[4,3],"L",[2,8]])]),"#002","#333",0),K(b(Vb,[e(5,.4,.6),g(["M",[2,8],"Q",[5,10],[8,8],"L",[6,3],"L",[7.5,1],"L",[5.8,1.5],"L",[5,.8],"L",[4.2,1.5],"L",[2.5,1],"L",[4,3],"L",[2,8]])]),"#002","#333",0),w=2.5,x=50,K(b(Ub,[g(["M",[25,30],"L",[50,30],"L",[50,5],"L",[45,5],"L",[45,10],"L",[40,10],"L",[40,5],"L",[35,5],"L",[35,10],"L",[30,10],"L",[30,5],"L",[25,5],"L",[25,30]]),g(["M",[0,50],"L",[0,50],"L",[27.5,50],"L",[27.5,35],"L",[47.5,35],"L",[47.5,50],"L",[75,50],"L",[75,20],"L",[70,20],"L",[70,25],"L",[65,25],"L",[65,20],"L",[60,20],"L",[60,25],"L",[55,25],"L",[55,20],"L",[50,20],"L",[50,25],"L",[45,25],"L",[45,20],"L",[40,20],"L",[40,25],"L",[35,25],"L",[35,20],"L",[30,20],"L",[30,25],"L",[25,25],"L",[25,20],"L",[20,20],"L",[20,25],"L",[15,25],"L",[15,20],"L",[10,20],"L",[10,25],"L",[5,25],"L",[5,20],"L",[0,20],"L",[0,50]])],!0),gc,hc,0)}function G(a,b){a?I(R,"White King :"):I(R,"Black King :");for(var c="",d=0;d<b.length;d++)c+='<tspan x="10" '+(0===d?"":'dy="1.2em"')+">"+b[d]+"</tspan>";I(S,c),o(Q,{_y:uc},0,.5)}function H(){o(Q,{_y:vc},0,.5)}function I(a,b){for(;a.firstChild;)a.removeChild(a.firstChild);var c="<svg>"+b+"</svg>";yc.innerHTML=c;var d=Array.prototype.slice.call(yc.childNodes[0].childNodes);d.forEach(function(b){a.appendChild(b)})}function J(a,b){if(b)for(var c in b)a.setAttributeNS(null,c,b[c]);return a}function K(a,b,c,d){var e={};return"undefined"!=typeof b&&(e.fill=b),"undefined"!=typeof c&&(e.stroke=c),"undefined"!=typeof d&&(e.strokeWidth=d),J(a,e),a}function L(a,b){b||(b=window.e);var c=b.keyCode;b.charCode&&!c&&(c=b.charCode);var d=zc[c];d&&Ac[d]!==a&&(Ac[d]=a,"undefined"==typeof Bc[d]&&(Bc[d]=-1),a?Bc[d]<1&&(Bc[d]=1):Bc[d]>0&&(Bc[d]=0))}function M(a,b){_b.click=a,W.onmousemove(b)}var N,O,P,Q,R,S,T,U,V=window,W=V.document,X=W.body,Y=null,Z=V.Math,$=Z.PI,_=(Z.sqrt,Z.random,1),ab=100*_,bb=400*_,cb=8,db=bb/cb,eb=2*cb+3,fb=6,gb=B(bb,bb,"bg"),hb=C(gb),ib=B(bb,bb,"shadow"),jb=C(ib),kb=B(bb,2*bb,"sky"),lb=C(kb),mb=0,nb=.001,ob=0,pb=0,qb=0,rb=null,sb=null,tb=!1,ub=!1,vb=0,wb=1,xb=null,yb=null,zb=-1,Ab=!0,Bb=[],Cb=null,Db=.05,Eb=.5,Fb=null,Gb=null,Hb=null,Ib=!0,Jb=0,Kb=0,Lb=-1,Mb="h",Nb="e",Ob="p",Pb="r",Qb="b",Rb="k",Sb="l",Tb="w",Ub="c",Vb="q",Wb="ef",Xb="ct",Yb=6,Zb=-1,$b=!1,_b={},ac=-1,bc=-1,cc="#193441",dc="#D1DBBD",ec="#3E606F",fc="#794",gc="#eee",hc="#555",ic="255,0,0",jc="rgba(93, 255, 182, 0.56)",kc=-.02,lc=.02;s.res={};var mc=3/16,nc=-0.875,oc=1,pc=-2.5/16,qc=0,rc=1;u.res={},v.res={};var sc,tc,uc,vc,wc=null,xc={},yc=W.createElement("div"),zc={37:"left",65:"left",81:"left",38:"up",90:"up",87:"up",83:"down",40:"down",39:"right",68:"right",32:"space",27:"esc",13:"enter"},Ac={},Bc={};W.onkeyup=function(a){Ib||!Ac.enter||tb||(Ab=!Ab,Gb.style.display=Ab?"none":"block",console.log("debug toggle anim: ",Ab),Ab&&(N=Date.now(),j())),L(!1,a)},W.onkeydown=function(a){L(!0,a)},W.onmousedown=function(a){M(!0,a)},W.onmousemove=function(a){_b.x=a.clientX-Y.offsetLeft,_b.y=a.clientY},a()};