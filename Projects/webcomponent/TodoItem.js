const template=document.createElement('template');
template.innerHTML=`
<style>
label{
    color:red;
    display:block; 
}
.description{
    font-size:0.65rem;
    font-weight:lighter;
    color:#777;
}

</style>
<label>
<input type="checkbox"/>
<slot></slot>
<span class="description"><slot name="description"></slot> </span>
</label>
`


class TodoItem extends HTMLElement{
    constructor(){
        super();
        //this.attachShadow will atatach this component as shadow dom.
        //it will have two modes open and close, if open then this.shadow will shadow or else it will be null.
        //general aapoach to keep it as open to make modifications by using this.shadowRoot.
        const shadow=this.attachShadow({mode:"open"})
        //using this method is not appreiciated as styles added to this h3 will effect 
        //all h3, the same goes for setting styles for h3 in index.html
        shadow.innerHTML=`<h3>${this.innerText}</h3>`
        //in order to have separate styles for custom 
        //element we use a feature called shadow dom
        shadow.append(template.content.cloneNode(true));
        //this.title=shadow.querySelector("[data-title]");
        //this.title.innerHTML=this.innerText
        this.checkbox=shadow.querySelector('input')
        
    }
    static get observedAttributes(){
        return ["checked"]
    }
    //in built method which triggers when any attribute changes
    attributeChangedCallback(name,oldValue,newValue){
        console.log("called",name,oldValue,newValue)
        if(name==="checked"){
            this.updateChecked(newValue)
        }   
    }
    disconnectedCallback(){
        console.log("disconnected")
    }
    connectedCallback(){
        console.log("connected")
    }
    updateChecked(value){
        console.log("updated")
        this.checkbox.checked=value !=null && value!=="false"
    }
}
//to register the custom element with the dom we need "customElements"
//always custom item should have - in it
//second param will the class you defined for custom element
customElements.define("todo-item",TodoItem);
const item=document.querySelector("todo-item");
//this folloing sets checked again and again which triggers attributeChangedCallback and inturn triggers uodatedCheckbox
//let checked=true;
//setInterval(()=>{
//    checked = !checked;
//    item.setAttribute("checked",checked)
//})

//disconnect will trigger when item is removed
//item.remove()