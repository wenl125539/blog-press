import{_ as C,c as f,a as g,w as u,b as n,e as B,r as h,o as v,V as y,d as s}from"./app.437044c9.js";import{S as A,P as x,W as D,B as H,M,a as R}from"./chunks/three.module.7e641f4f.js";const T={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:p,openBlock:l,createElementBlock:r}=y,i=[p("div",{id:"container",style:{height:"200px"}},null,-1)];function k(m,e){return l(),r("div",null,i)}const{onMounted:t}=y;return{render:k,...{setup(){let m=()=>{const e=new A;let a=document.getElementById("container");const F=new x(30,a.clientWidth/a.clientHeight,.1,100),o=new D;o.setSize(a.clientWidth,a.clientHeight),a.appendChild(o.domElement);const w=new H(1,1,1),b=new M({color:65280}),c=new R(w,b);e.add(c),F.position.z=5;const E=function(){requestAnimationFrame(E),c.rotation.x+=.01,c.rotation.y+=.01,o.render(e,F)};E()};t(()=>{m()})}}}}()}},N='{"title":"demo1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6587\u6863","slug":"\u6587\u6863"}],"relativePath":"plugin/08_threejs/0_demo.md","lastUpdated":1667050614000}',V=n("h1",{id:"demo1",tabindex:"-1"},"demo1",-1),W=n("div",null,"canvas \u77E9\u5F62\u7684\u7ED8\u5236",-1),q=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s("200px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" onMounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token function-variable function"},"draw"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" scene "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("THREE"),n("span",{class:"token punctuation"},"."),s("Scene")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// \u900F\u89C6\u6444\u50CF\u673A"),s(`
      `),n("span",{class:"token comment"},"// PerspectiveCamera\uFF08\u89C6\u91CE\u89D2\u5EA6\uFF08FOV\uFF09, \u957F\u5BBD\u6BD4\uFF08aspect ratio\uFF09, \u8FDC\u526A\u5207\u9762, \u8FD1\u526A\u5207\u9762\uFF09"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" container "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'container'"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" camera "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("THREE"),n("span",{class:"token punctuation"},"."),s("PerspectiveCamera")]),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(`
        container`),n("span",{class:"token punctuation"},"."),s("clientWidth "),n("span",{class:"token operator"},"/"),s(" container"),n("span",{class:"token punctuation"},"."),s("clientHeight"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"0.1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"100"),s(`
      `),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// \u6E32\u67D3\u5668"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" renderer "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("THREE"),n("span",{class:"token punctuation"},"."),s("WebGLRenderer")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
      renderer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setSize"),n("span",{class:"token punctuation"},"("),s("container"),n("span",{class:"token punctuation"},"."),s("clientWidth"),n("span",{class:"token punctuation"},","),s(" container"),n("span",{class:"token punctuation"},"."),s("clientHeight"),n("span",{class:"token punctuation"},")"),s(`
      container`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"appendChild"),n("span",{class:"token punctuation"},"("),s("renderer"),n("span",{class:"token punctuation"},"."),s("domElement"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// BoxGeometry\uFF08\u7ACB\u65B9\u4F53\uFF09x,y,z"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" geometry "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("THREE"),n("span",{class:"token punctuation"},"."),s("BoxGeometry")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// \u6750\u8D28"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" material "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("THREE"),n("span",{class:"token punctuation"},"."),s("MeshBasicMaterial")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0x00ff00"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// \u7F51\u683C"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" cube "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("THREE"),n("span",{class:"token punctuation"},"."),s("Mesh")]),n("span",{class:"token punctuation"},"("),s("geometry"),n("span",{class:"token punctuation"},","),s(" material"),n("span",{class:"token punctuation"},")"),s(`
      scene`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("cube"),n("span",{class:"token punctuation"},")"),s(`

      camera`),n("span",{class:"token punctuation"},"."),s("position"),n("span",{class:"token punctuation"},"."),s("z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),s(`
      `),n("span",{class:"token comment"},"// \u6E32\u67D3\u573A\u666F,\u52A8\u753B\u5FAA\u73AF"),s(`
      `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"animate"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"//requestAnimationFrame\u7684\u4F18\u70B9\uFF0C\u6700\u91CD\u8981\u7684\u4E00\u70B9\u5C31\u662F\u5F53\u7528\u6237\u5207\u6362\u5230\u5176\u5B83\u7684\u6807\u7B7E\u9875\u65F6\uFF0C\u5B83\u4F1A\u6682\u505C\uFF0C\u4ECE\u800C\u8282\u7701\u8D44\u6E90"),s(`
        `),n("span",{class:"token function"},"requestAnimationFrame"),n("span",{class:"token punctuation"},"("),s("animate"),n("span",{class:"token punctuation"},")"),s(`

        cube`),n("span",{class:"token punctuation"},"."),s("rotation"),n("span",{class:"token punctuation"},"."),s("x "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"0.01"),s(`
        cube`),n("span",{class:"token punctuation"},"."),s("rotation"),n("span",{class:"token punctuation"},"."),s("y "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"0.01"),s(`

        renderer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),s("scene"),n("span",{class:"token punctuation"},","),s(" camera"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token function"},"animate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"draw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("less"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},"#containers"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("125"),n("span",{class:"token punctuation"},","),s(" 247"),n("span",{class:"token punctuation"},","),s(" 108"),n("span",{class:"token punctuation"},","),s(" 0.699"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),z=B(`<h2 id="\u6587\u6863" tabindex="-1">\u6587\u6863</h2><p>\u5230github\u4E0A\u4E0B\u8F7D\u6587\u6863\u5230\u672C\u5730\u8FD0\u884C\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5207\u6362\u4E2D\u6587 <a href="https://github.com/mrdoob/three.js" target="_blank" rel="noopener noreferrer">github</a></p><div class="language-js line-numbers-mode"><pre><code>\u8FDB\u5165\u76EE\u5F55
yarn install 
yarn dev
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>api\u5730\u5740\uFF1A<a href="http://192.168.3.8:8080/docs/" target="_blank" rel="noopener noreferrer">http://192.168.3.8:8080/docs/</a> \u7F16\u8F91\u5668\u5730\u5740\uFF1A<a href="http://192.168.3.8:8080/editor/" target="_blank" rel="noopener noreferrer">http://192.168.3.8:8080/editor/</a></p>`,4);function G(p,l,r,_,i,k){const t=h("render-demo-0"),d=h("demo");return v(),f("div",null,[V,g(d,{sourceCode:`<template>
  <div id="container" style="height:200px"></div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  setup() {
    let draw = () => {
      const scene = new THREE.Scene()
      // \u900F\u89C6\u6444\u50CF\u673A
      // PerspectiveCamera\uFF08\u89C6\u91CE\u89D2\u5EA6\uFF08FOV\uFF09, \u957F\u5BBD\u6BD4\uFF08aspect ratio\uFF09, \u8FDC\u526A\u5207\u9762, \u8FD1\u526A\u5207\u9762\uFF09
      let container = document.getElementById('container')
      const camera = new THREE.PerspectiveCamera(
        30,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      )
      // \u6E32\u67D3\u5668
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(renderer.domElement)
      // BoxGeometry\uFF08\u7ACB\u65B9\u4F53\uFF09x,y,z
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      // \u6750\u8D28
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      // \u7F51\u683C
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      camera.position.z = 5
      // \u6E32\u67D3\u573A\u666F,\u52A8\u753B\u5FAA\u73AF
      const animate = function () {
        //requestAnimationFrame\u7684\u4F18\u70B9\uFF0C\u6700\u91CD\u8981\u7684\u4E00\u70B9\u5C31\u662F\u5F53\u7528\u6237\u5207\u6362\u5230\u5176\u5B83\u7684\u6807\u7B7E\u9875\u65F6\uFF0C\u5B83\u4F1A\u6682\u505C\uFF0C\u4ECE\u800C\u8282\u7701\u8D44\u6E90
        requestAnimationFrame(animate)

        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        renderer.render(scene, camera)
      }

      animate()
    }

    onMounted(() => {
      draw()
    })
  },
}
<\/script>

<style lang="less" scoped>
#containers {
  width: 100%;
  background: rgba(125, 247, 108, 0.699);
}
</style>
`},{description:u(()=>[W]),highlight:u(()=>[q]),default:u(()=>[g(t)]),_:1}),z])}var j=C(T,[["render",G]]);export{N as __pageData,j as default};
