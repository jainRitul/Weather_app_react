import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL = 
   "https://images.unsplash.com/photo-1545134969-8debd725b007?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL ="https://images.unsplash.com/photo-1467489748806-96d0b3ae69ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL ="https://plus.unsplash.com/premium_photo-1675276116240-51a71b0a8524?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL ="https://images.unsplash.com/photo-1582324982598-981139657fa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW55fGVufDB8fDB8fHww";

    return(
         <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            
                                info.humidity > 80
                                ? RAIN_URL :
                                info.temp > 15
                                ? HOT_URL : 
                                COLD_URL 
                        }
                        title="green iguana"
                    />
                  <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}{  
                                info.humidity > <ThunderstormIcon/>
                                ? RAIN_URL :
                                info.temp > 15
                                ? <WbSunnyIcon />: 
                                <AcUnitIcon/> }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                         <p>Temperature = {info.temp}&deg;C</p>
                         <p>Humidity = {info.humitidity}</p>
                         <p>Min temp = {info.tempMin}&deg;C</p>
                         <p>Max temp = {info.tempMax}&deg;C</p>
                         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
    
               </Card>
               </div>
         </div>
    );
}