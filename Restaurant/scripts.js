document.addEventListener('DOMContentLoaded', () => {
    function setupPackage(packagePrefix, roomPrice) {
        const roomCountElement = document.getElementById(`room-count-${packagePrefix}`);
        const roomPriceElement = document.getElementById(`room-price-${packagePrefix}`);
        const minusButton = document.getElementById(`minus-btn-${packagePrefix}`);
        const plusButton = document.getElementById(`plus-btn-${packagePrefix}`);
        const signupButton = document.getElementById(`signup-btn-${packagePrefix}`);
        const thankYouMsg = document.getElementById(`thank-you-msg-${packagePrefix}`);
        const chosenRoomsElement = document.getElementById(`chosen-rooms-${packagePrefix}`);

        let roomCount = 1;

        minusButton.addEventListener('click', () => {
            if (roomCount > 1) {
                roomCount--;
                updateRoomDetails();
            }
        });

        plusButton.addEventListener('click', () => {
            roomCount++;
            updateRoomDetails();
        });

        signupButton.addEventListener('click', () => {
            chosenRoomsElement.textContent = roomCount;
            thankYouMsg.style.display = 'block';
        });

        function updateRoomDetails() {
            roomCountElement.textContent = roomCount;
            roomPriceElement.textContent = roomCount * roomPrice;
        }
    }

    setupPackage('basic', 199);
    setupPackage('pro', 299);

    document.getElementById('subscription-form').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (name === '' || email === '') {
            event.preventDefault();
            alert('Please fill out all fields');
        }
    });
});

