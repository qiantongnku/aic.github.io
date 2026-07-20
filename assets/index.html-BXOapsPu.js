import{_ as u}from"./Elim shoukuanma-2us1cfEW.js";import{_ as b}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as f,e as y,d as r,a,o as h}from"./app-B-e_tPmY.js";const g="/image/form.jpg",v={data(){return{firstName:"",lastName:"",paperId:"",paperTitle:"",affiliation:"",workUnit:"",city:"",country:"",email:"",phone:"",regType:"Online",invite:"No",passportNumber:"",needsInvoice:"No",invoiceTitle:"",taxId:""}},methods:{handleSubmit(p){p.preventDefault();const e=document.getElementById("registrationForm"),l=document.getElementById("error-message");l.innerHTML="";const o=[],i=[{name:"firstName",label:"First Name"},{name:"lastName",label:"Last Name"},{name:"paperId",label:"Paper ID"},{name:"paperTitle",label:"Paper Title"},{name:"affiliation",label:"Affiliation"},{name:"workUnit",label:"Work Unit"},{name:"email",label:"Email"},{name:"phone",label:"Phone"},{name:"regType",label:"Registration Type"},{name:"invite",label:"Invitation Letter Choice"},{name:"needsInvoice",label:"Invoice Choice"}];this.invite==="Yes"&&i.push({name:"passportNumber",label:"Passport Number"}),this.needsInvoice==="Yes"&&(i.push({name:"invoiceTitle",label:"Invoice Title"}),i.push({name:"taxId",label:"Tax ID"}));for(const t of i){const n=e.querySelectorAll(`[name="${t.name}"]`);let d=!1;n.length>0&&(n[0].type==="radio"?n.forEach(c=>{c.checked&&(d=!0)}):n[0].value.trim()!==""&&(d=!0)),d||o.push(t.label)}if(o.length>0)return l.innerHTML="Please fill the following required fields:<br>- "+o.join("<br>- "),!1;const m=new FormData(e);let s='<html><head><meta charset="utf-8"></head><body><h2>MiTA 2026 Registration Details</h2><ul>';for(const[t,n]of m.entries())s+=`<li><b>${t}</b>: ${n}</li>`;s+="</ul></body></html>";try{const t=htmlDocx.asBlob(s);saveAs(t,"AIC2026_Registration.docx")}catch(t){console.error("Download failed:",t),l.innerHTML="Download failed. Check if required libraries (html-docx-js, file-saver) are loaded."}return!1}}};function x(p,e,l,o,i,m){return h(),f("div",null,[e[0]||(e[0]=y('<hr><h3 id="registration-fee" tabindex="-1"><a class="header-anchor" href="#registration-fee"><span>Registration Fee</span></a></h3><div style="padding-right:1.5rem;padding-left:1.5rem;"><table style="width:auto;min-width:600px;border-collapse:collapse;font-family:&#39;Times New Roman&#39;, Times, serif;font-size:18px;text-align:center;border:1px solid #ddd;"><thead><tr style="background-color:#f2f2f2;"><th style="border:1px solid #ddd;padding:12px;white-space:nowrap;">Registration Period (Per Paper)</th> <th style="border:1px solid #ddd;padding:12px;white-space:nowrap;">Onsite Registration</th> <th style="border:1px solid #ddd;padding:12px;white-space:nowrap;">Online Registration</th></tr></thead> <tbody><tr><td style="border:1px solid #ddd;padding:12px;">Standard (On or before <b>Apr 17, 2026</b>)</td> <td style="border:1px solid #ddd;padding:12px;">$530 (CNY 3600)</td> <td style="border:1px solid #ddd;padding:12px;">$530 (CNY 3600)</td></tr> <tr><td style="border:1px solid #ddd;padding:12px;">Late (After <b>Apr 17, 2026</b>)</td> <td style="border:1px solid #ddd;padding:12px;">$560 (CNY 3800)</td> <td style="border:1px solid #ddd;padding:12px;">$560 (CNY 3800)</td></tr></tbody></table></div><div style="text-align:justify;font-family:Times New Roman;font-size:18px;color:black;padding-right:1.5rem;padding-left:1.5rem;"><p>The fee for no paper registration is the same as above.</p></div><h3 id="registration-and-refund-policy" tabindex="-1"><a class="header-anchor" href="#registration-and-refund-policy"><span>Registration and Refund Policy:</span></a></h3><div style="text-align:justify;font-family:Times New Roman;font-size:18px;color:black;padding-right:1.5rem;padding-left:1.5rem;"><p>An accepted paper will be published in the proceedings ONLY if at least one author registers for the paper.</p><p>AIC 2026 provides onsite and online presentation and the registration fee is the same. The authors can choose via the payment link.</p><p>Refund Policy: There will be no refunds to the authors.</p></div><h3 id="payment-by-cny" tabindex="-1"><a class="header-anchor" href="#payment-by-cny"><span>Payment by CNY:</span></a></h3><div style="text-align:justify;font-family:Times New Roman;font-size:18px;color:black;padding-right:1.5rem;padding-left:1.5rem;"><p>Account Name（户名）：天津以琳会展服务有限公司</p><p>Account No. （账号）：8111401013201156590</p><p>Bank Name（开户行）：中信银行天津华津支行</p><p>Please specify the paper ID and the name of the payer（请备注论文编号和注册人姓名）.</p><p>If Alipay doesn&#39;t work, please try paying with WeChat Pay.</p></div><div style="text-align:center;"><img src="'+u+'" width="600"></div><h3 id="payment-by-usd" tabindex="-1"><a class="header-anchor" href="#payment-by-usd"><span>Payment by USD:</span></a></h3>',10)),r(` <ul>
      <li><b><a href="/pdf/Payment_Route.pdf" download style="color: #27ae60;">Please refer to: Payment_Route.pdf</a></b></li>
   </ul> `),e[1]||(e[1]=a("p",null,"Please contact aic2025.conf@gmail.com for getting the secured payment link.",-1)),e[2]||(e[2]=a("h3",{id:"after-payment",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#after-payment"},[a("span",null,"After Payment:")])],-1)),e[3]||(e[3]=a("p",null,"Please scan the QR code to fill out the registration form:",-1)),e[4]||(e[4]=a("div",{style:{"text-align":"center"}},[a("img",{src:g,width:"600"})],-1)),r(" 必须引入 html-docx-js 和 FileSaver.js "),r(" 引入 html-docx-js 库 "),r(" 引入 FileSaver.js 库 "),r(` <div class="form-container">
  <h3>AIC 2026 Registration Form</h3>
  <form id="registrationForm" @submit.prevent="handleSubmit">
    <label>First Name <span class="required">*</span></label>
    <input type="text" v-model="firstName" name="firstName" required>
    <label>Last Name <span class="required">*</span></label>
    <input type="text" v-model="lastName" name="lastName" required>
    <label>Paper ID <span class="required">*</span></label>
    <input type="text" v-model="paperId" name="paperId" required>
    <label>Paper Title <span class="required">*</span></label>
    <input type="text" v-model="paperTitle" name="paperTitle" required>
    <label>Affiliation (Title) <span class="required">*</span></label>
    <select v-model="affiliation" name="affiliation" required>
      <option value="Prof.">Prof.</option>
      <option value="Associate Prof.">Associate Prof.</option>
      <option value="Lecturer">Lecturer</option>
      <option value="Student">Student</option>
      <option value="Other">Other</option>
    </select>
    <label>Organization / Work Unit <span class="required">*</span></label>
    <input type="text" v-model="workUnit" name="workUnit" required>   
    <label>City</label>
    <input type="text" v-model="city" name="city">
    <label>Country</label>
    <input type="text" v-model="country" name="country"> 
    <label>Email <span class="required">*</span></label>
    <input type="email" v-model="email" name="email" required>
    <label>Phone <span class="required">*</span></label>
    <input type="tel" v-model="phone" name="phone" required>
    <label>Registration Type <span class="required">*</span></label>
    <div class="radio-group">
      <label><input type="radio" v-model="regType" name="regType" value="Online" required> Online</label>
      <label><input type="radio" v-model="regType" name="regType" value="Onsite"> Onsite</label>
    </div> 
    <label>Do you need an invitation letter? <span class="required">*</span></label>
    <div class="radio-group">
      <label><input type="radio" v-model="invite" name="invite" value="Yes" required> Yes</label>
      <label><input type="radio" v-model="invite" name="invite" value="No"> No</label>
    </div>
    <div v-if="invite === 'Yes'">
      <label>Passport Number <span class="required">*</span></label>
      <input type="text" v-model="passportNumber" name="passportNumber" :required="invite === 'Yes'">
    </div>
    <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;">
    <label>Do you need an invoice? <span class="required">*</span></label>
    <div class="radio-group">
      <label><input type="radio" v-model="needsInvoice" name="needsInvoice" value="Yes" required> Yes</label>
      <label><input type="radio" v-model="needsInvoice" name="needsInvoice" value="No"> No</label>
    </div>
    <div v-if="needsInvoice === 'Yes'">
      <label>Invoice Title <span class="required">*</span></label>
      <input type="text" v-model="invoiceTitle" name="invoiceTitle" :required="needsInvoice === 'Yes'">
      <label>Tax ID / VAT Number <span class="required">*</span></label>
      <input type="text" v-model="taxId" name="taxId" :required="needsInvoice === 'Yes'">
    </div>
    <button type="submit" style="margin-top: 20px;">Submit and Download Form</button>
  </form>

  <div id="error-message" style="color: red; margin-top: 10px;"></div>
</div> `)])}const I=b(v,[["render",x],["__file","index.html.vue"]]),R=JSON.parse('{"path":"/Registration/","title":"Home","lang":"en-US","frontmatter":{"home":true,"icon":"home","title":"Home","bgImage":"/image/background.jpg","bgImageStyle":{"background-attachment":"fixed"},"heroText":"1st International Conference on Artificial Intelligence and Computing (AIC 2026)","tagline":"April 21–25, 2026  Kaifeng, China","actions":[{"text":"Deadline","link":"../Deadline/","type":"primary"},{"text":"Call for Papers","link":"../PDFReader/","type":"primary"},{"text":"Paper Submission","link":"../Submission/","type":"primary"}],"copyright":false,"description":"Registration Fee The fee for no paper registration is the same as above. Registration and Refund Policy: An accepted paper will be published in the proceedings ONLY if at least ...","head":[["meta",{"property":"og:url","content":"https://mihu03.github.io/Registration/"}],["meta",{"property":"og:site_name","content":"AIC 2026"}],["meta",{"property":"og:title","content":"Home"}],["meta",{"property":"og:description","content":"Registration Fee The fee for no paper registration is the same as above. Registration and Refund Policy: An accepted paper will be published in the proceedings ONLY if at least ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Home\\",\\"description\\":\\"Registration Fee The fee for no paper registration is the same as above. Registration and Refund Policy: An accepted paper will be published in the proceedings ONLY if at least ...\\"}"]]},"headers":[{"level":3,"title":"Registration Fee","slug":"registration-fee","link":"#registration-fee","children":[]},{"level":3,"title":"Registration and Refund Policy:","slug":"registration-and-refund-policy","link":"#registration-and-refund-policy","children":[]},{"level":3,"title":"Payment by CNY:","slug":"payment-by-cny","link":"#payment-by-cny","children":[]},{"level":3,"title":"Payment by USD:","slug":"payment-by-usd","link":"#payment-by-usd","children":[]},{"level":3,"title":"After Payment:","slug":"after-payment","link":"#after-payment","children":[]}],"git":{},"readingTime":{"minutes":4.6,"words":1381},"filePathRelative":"Registration/README.md","autoDesc":true}');export{I as comp,R as data};
