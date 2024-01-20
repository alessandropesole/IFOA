import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const Graphic = ({day}) => {
    const data = [
        {name:day.list[0].dt_txt.slice(0,10) , temperature: day.list[0].main.temp }, 
        {name:day.list[7].dt_txt.slice(0,10)  , temperature: day.list[7].main.temp  }, 
        {name:day.list[15].dt_txt.slice(0,10)  , temperature: day.list[15].main.temp  }, 
        {name:day.list[23].dt_txt.slice(0,10)  , temperature: day.list[23].main.temp  },
    ];

    return(
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
    <CartesianGrid stroke="#A7B9BB" strokeDasharray="5 5" />
    <XAxis  dataKey="name" />
    <YAxis dataKey="temperature" />
    <Tooltip />
  </LineChart>
  )

}
export default Graphic