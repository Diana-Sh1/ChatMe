"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[341],{1341:function(e,s,n){n.r(s),n.d(s,{default:function(){return E}});var r=n(5671),o=n(3144),t=n(136),i=n(516),l=n(3531),a=n(2338),u=n(2791),c=n(5987),g="Users_content__eVkcM",f="Users_inner__79Gij",p="Users_user_logo__xncyl",h="Users_title__605GK",d="Users_block_main__MgENi",_="Users_block_buttons__ZEmQi",m="Users_user_info__TBDOm",P="Users_status_info__kBCoF",C="Users_subscribe_btn__u3aDb",w="Users_pagination__S-sSj",j=n(9439),x="Paginator_selectedPage__CRNLp",v=n(184),b=function(e){for(var s=e.currentPage,n=e.onPageChanged,r=e.totalItemsCount,o=e.pageSize,t=e.portionSize,i=void 0===t?8:t,l=Math.ceil(r/o),a=[],c=1;c<=l;c++)a.push(c);var g=Math.ceil(l/i),f=(0,u.useState)(1),p=(0,j.Z)(f,2),h=p[0],d=p[1],_=(h-1)*i+1,m=h*i;return(0,v.jsxs)(v.Fragment,{children:[h>1&&(0,v.jsx)("button",{onClick:function(){d(h-1)},children:"\u2190"}),a.filter((function(e){return e>=_&&e<=m})).map((function(e){return(0,v.jsx)("span",{onClick:function(){n(e)},className:s===e?x:"",children:e},e.id)})),g>h&&(0,v.jsx)("button",{onClick:function(){d(h+1)},children:"\u2192"})]})},k=n(1087),I=n(2389),N=function(e){var s=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("div",{className:p,children:(0,v.jsx)(k.OL,{to:"/profile/"+s.id,children:(0,v.jsx)("img",{src:null!=s.photos.small?s.photos.small:I,alt:""})})}),(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("div",{className:m,children:s.name}),(0,v.jsx)("div",{className:P,children:s.status})]}),(0,v.jsx)("div",{className:_,children:s.followed?(0,v.jsx)("button",{disabled:n.some((function(e){return e===s.id})),onClick:function(){r(s.id)},className:C,children:"Unfollow"}):(0,v.jsx)("button",{disabled:n.some((function(e){return e===s.id})),onClick:function(){o(s.id)},className:C,children:"Follow"})})]})},U=["currentPage","onPageChanged","totalItemsCount","pageSize"],S=function(e){var s=e.currentPage,n=e.onPageChanged,r=e.totalItemsCount,o=e.pageSize,t=(0,c.Z)(e,U);return(0,v.jsxs)("div",{className:g,children:[(0,v.jsx)("h2",{className:h,children:"List of Users"}),(0,v.jsx)("div",{className:w,children:(0,v.jsx)(b,{currentPage:s,onPageChanged:n,totalItemsCount:r,pageSize:o})}),t.users.map((function(e){return(0,v.jsx)(N,{user:e,followingInProgress:t.followingInProgress,unfollow:t.unfollow,follow:t.follow},e.id)}))]})},z=n(7843),Z=n(7781),F=function(e){return e.usersPage.users},y=function(e){return e.usersPage.pageSize},D=function(e){return e.usersPage.totalItemsCount},M=function(e){return e.usersPage.currentPage},q=function(e){return e.usersPage.isFetching},L=function(e){return e.usersPage.followingInProgress},B=function(e){(0,t.Z)(n,e);var s=(0,i.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var o=arguments.length,t=new Array(o),i=0;i<o;i++)t[i]=arguments[i];return(e=s.call.apply(s,[this].concat(t))).onPageChanged=function(s){e.props.requestUsers(s,e.props.pageSize)},e}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,v.jsxs)(v.Fragment,{children:[this.props.isFetching?(0,v.jsx)(z.Z,{}):null,(0,v.jsx)(S,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),n}(u.Component),E=(0,Z.qC)((0,l.$j)((function(e){return{users:F(e),pageSize:y(e),totalItemsCount:D(e),currentPage:M(e),isFetching:q(e),followingInProgress:L(e)}}),{follow:a.ZN,setCurrentPage:a.D4,unfollow:a.fv,toggleFollowingProgress:a.ZH,requestUsers:a.D7}))(B)}}]);
//# sourceMappingURL=341.4a6cfdf0.chunk.js.map