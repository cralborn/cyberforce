   import LakeOne from '../images/LakeOne.jpg';
   import LakeTwo from '../images/LakeTwo.jpg';
   import Water from '../images/Water.js';
   import Generator from '../images/Generator.js';
   import Outflow from '../images/Outflow.js';
   
   export const SliderData = 
   [
    {
        title: "Kuma Lake",
        Water_Level:  <Water />,
        Generators: <Generator />,
        Generation_Outflow: <Outflow />,
        path: '/lakes',
        label:'View Lake',
        image: LakeOne,
        alt: 'Lake'
    },
    {
        title: "Lumi River",
        Water_Level:  <Water />,
        Generators: <Generator />,
        Generation_Outflow:<Outflow />,
        path: '/lakes',
        label:'View Lake',
        image: LakeTwo,
        alt: 'Lake'
    },
]