
import DateIcon from "../icons/icons/date-icon"
import AddressIcon from "../icons/icons/address-icon"
import ArrowRightIcon from "../icons/icons/arrow-right-icon"
import Button from "../ui/button";
import classes from "./event-item.module.css"
const EventItem = ({item}) => {

    const {title, image, date, location, id } = item;

    const humanReadableDate= new Date(date).toLocaleDateString('en-in',{
      year:'numeric',
      month:'long',
      day:'numeric'
    });
    // console.log(item)

    const FormattedAddress= location.replace(', ', '\n');
    const exploreLink = `/events/${id}`
  return (
    <li className={classes.item}>
        <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
      <div className={classes.summary} >
      <h2>{title}</h2>
      </div>
      
      <div className={classes.date}>
      <DateIcon/>
      <time>{humanReadableDate}</time>
      </div>
      <div className={classes.address}>
      <AddressIcon/>
      <address>{FormattedAddress}</address>
      </div>
      <div className={classes.actions}>
      <Button link={exploreLink}>
      <span>Explore Event</span>
      <span className={classes.icon}><ArrowRightIcon/></span>
      </Button>
      </div>
     
      </div>
    </li>
  )
}

export default EventItem