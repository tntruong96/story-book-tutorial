import Buttons from "./Buttons";

export default {
  title:'Components/Buttons',
  decorators: [(story) => <div style={{ margin: '3rem' }}>{story()}</div>],
  component: Buttons,
  //👇 Creates specific argTypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: false,
    size: 'large'
  },
};

 const Default = {
  args:{
    label: "Button",
    primary: true,
    height: 'md',
    type: 'round',
    styles: []
  }
}

export const Primary = {
  args: {
    ...Default.args,
    size: 'md',
    styles: [{
      "title": "Solid",
      "type": "solid",
      "loading": true,
      "disabled": false,

      "interface": {
        "bgColor": "bg-primary-500",
        "border": "",
        "color": ""
      }
    }, {
      "title": "Light Solid",
      "type": "light-solid",
      "loading": false,
      "disabled": false,

      "interface": {
        "bgColor": "bg-primary-50",
        "border": "border-none",
        "color": ""
      }
    }, {
      "title": "Outline",
      "type": "outline",
      "loading": false,
      "disabled": false,

      "interface": {
        "bgColor": "bg-white",
        "border": "border-primary-500 border border-solid",
        "color": ""
      }
    }, {
      "title": "Light Outline",
      "type": "light-outline",
      "loading": false,
      "disabled": false,

      "interface": {
        "bgColor": "bg-white",
        "border": "border-primary-100 border border-solid",
        "color": ""
      }
    }]
  },
  
};

export const Neutral = {
  args: {
    ...Primary.args,
    label: "Button",
    styles: [
      {
        title: 'Solid',
        type:'solid',
        interface:{
          bgColor: 'bg-black',
          border:'',
          color:'text-white'
        }
      },
      {
        title: 'Light Solid',
        type:'light-solid',
        interface: {
          bgColor: 'bg-neutral-25',
          border:'border-none',
          color:''
        }
        
      },
      {
        title: 'Outline',
        type:'outline',
        interface:{
          bgColor: 'bg-white',
          border:'border-black border border-solid',
          color:''
        }
      },
      {
         title: 'Light Outline',
         type:'light-outline',
         interface:{
          bgColor: 'bg-white',
          border:'border-neutral-100 border border-solid',
          color:''
         }
      },
    ]
  },
};
