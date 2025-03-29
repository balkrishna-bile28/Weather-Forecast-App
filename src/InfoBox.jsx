import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info= {}}){
  const INIT_URL = "https://imgs.search.brave.com/TPrh6MbYjiHhWdXdyG0viv2PZcJo3w-zRRDvTNTngYI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzE5LzIxLzcz/LzM2MF9GXzUxOTIx/NzM4NF90RndOOGdB/YnByNEJLZWdRUGlE/Y0dwRnAxbTlNWXpk/Zi5qcGc"

  const HOT_URL = "https://images.unsplash.com/photo-1602523234690-254793b8dd40?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL ="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL ="https://images.unsplash.com/photo-1438449805896-28a666819a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return(
    <div className="InfoBox">      
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : (info.temp) > 20 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color= 'text.secondary' component={"span"}>
          <div>Temperature = {info.temp}&deg;C </div>
          <div>Humidity = {info.humidity} </div>
          <div>Min Temp = {info.tempMin}&deg;C </div>
          <div>Max Temp = {info.tempMax}&deg;C </div>
          <div>The weather can be dscribed as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C. </div>
        </Typography>
      </CardContent>
      </Card>
      </div> 
    </div>
  )
}