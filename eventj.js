document.addEventListener("DOMContentLoaded", function() {
    const seatingChart = document.getElementById("seatingChart");
    const selectedSeatsDisplay = document.getElementById("selectedSeats");
    const rows = 5;
    const cols = 5;
    let selectedSeats = [];

    // Create seats
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const seat = document.createElement("div");
            seat.classList.add("seat");
            seat.dataset.seatId = `${i}-${j}`;
            seat.textContent = `${j + 1}`; 
            seat.addEventListener("click", toggleSeat);
            seatingChart.appendChild(seat);
        }
        
    }

    function toggleSeat(event) {
        const seat = event.target;
        const seatId = seat.dataset.seatId;

        if (selectedSeats.includes(seatId)) {
            selectedSeats = selectedSeats.filter(id => id !== seatId);
            seat.classList.remove("selected");
        } else {
            selectedSeats.push(seatId);
            seat.classList.add("selected");
        }

        updateSelectedSeatsDisplay();
    }

    function updateSelectedSeatsDisplay() {
        if (selectedSeats.length > 0) {
            selectedSeatsDisplay.textContent = selectedSeats.join(", ");
        } else {
            selectedSeatsDisplay.textContent = "None";
        }
    }
    document.getElementById('contact').addEventListener('d', function(event) {
        event.preventDefault();
        alert('seat is booked!');
    });
    
});
