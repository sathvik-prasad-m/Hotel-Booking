FROM nginx:latest


COPY booking.html /usr/share/nginx/html/booking.html
COPY confirmation.html /usr/share/nginx/html/confirmation.html
COPY index.html /usr/share/nginx/html/index.html
COPY rooms.html /usr/share/nginx/html/rooms.html
COPY script.js /usr/share/nginx/html/script
COPY style.css /usr/share/nginx/style.css
COPY image.png /usr/share/nginx/html/image.png