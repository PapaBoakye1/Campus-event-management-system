function RSVP(eventId) {
    const availableSeats = document.getElementById(`seats-${eventId}`).textContent;
    let updatedSeats = parseInt(availableSeats) - 1;
    
    if (updatedSeats >= 0) {
        document.getElementById(`seats-${eventId}`).textContent = updatedSeats;
        alert("You have successfully RSVP'd to the event.");
    } else {
        alert("Sorry, no available seats for this event.");
    }
}
