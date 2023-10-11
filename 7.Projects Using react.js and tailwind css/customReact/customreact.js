function customRender(reactelement,Container)
{
    // const domElement = document.createElement(reactelement.type)
    // domElement.innerHTML = reactelement.children;
    // domElement.setAttribute('href',reactelement.props.href);
    // domElement.setAttribute('target',reactelement.props.target);
    // Container.appendChild(domElement);

    const domElement = document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children;
    for(prop in reactelement.props)
    {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactelement.props[prop]);
    }
    Container.appendChild(domElement);

}
const reactelement = {
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
const mainCantainer = document.querySelector('#root');
customRender(reactelement , mainCantainer)