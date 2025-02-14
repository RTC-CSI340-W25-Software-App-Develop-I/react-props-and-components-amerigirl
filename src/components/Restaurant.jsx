
function Restaurant(props) {

    return (
      <div className="restaurant">
        <h2>{props.restaurant.name}</h2>
        <ul>
          <li>{props.restaurant.phone}</li>
          <li>{props.restaurant.cuisine}</li>
          <li>{props.restaurant.rating}</li>
          <li>{props.restaurant.address}</li>
        </ul>

        <ul>
          <li>Monday:</li>
          <li>{props.restaurant.hours.monday}</li>
          <li>Tuesday:</li>
          <li>{props.restaurant.hours.tuesday}</li>
          <li>Wednesday:</li>
          <li>{props.restaurant.hours.wednesday}</li>
          <li>Thursday:</li>
          <li>{props.restaurant.hours.thursday}</li>
          <li>Friday:</li>
          <li>{props.restaurant.hours.friday}</li>
          <li>Saturday:</li>
          <li>{props.restaurant.hours.saturday}</li>
          <li>Sunday:</li>
          <li>{props.restaurant.hours.sunday}</li>
        </ul>
        <br></br>
      </div>
    );
}

export default Restaurant;
