import {useRouter} from "next/router"
import {getEventById} from "../../dummy-data"
import EventSummary from "../../components/event-detail/event-detail/event-summary"
import EventContent from "../../components/event-detail/event-detail/event-content"
import EventLogistics from "../../components/event-detail/event-detail/event-logistics"
const EventDetailsPage = () => {

  const router=useRouter()
  const eventid=router.query.eventid;
  const event=getEventById(eventid)

  if(!event){
    return <p>NO event found</p>
  }
  return (
    <>
    <EventSummary title={event.title}/>
    <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
    <EventContent><p>{event.description}</p></EventContent>
    </>
  )
}

export default EventDetailsPage