mtm6302-capstone-chen1052x

Name: Zhenfeng Cheng
Student Number: 041170367
Project: Apod Explorer Project (Vanilla JS)


The design decisions for the mockup reflect both usability and theme. 
The layout was built as a single-page flow, where the search section appears at the top, followed by the display of the Astronomy Picture of the Day, and finally the favourites section at the bottom. 
This sequence mirrors the way a user naturally interacts with the site, starting with input, then exploring results, and finally saving them. The visual design uses a dark navy background to evoke the atmosphere of space while silightly brigher accent colours such as purple create contrast, guide attention, and keep the interface lively. 
Typography also follows this principle, with Orbitron and Jersey giving the site a futuristic space feel for headers, while Roboto maintains readability for the longer explanatory text.


Prototype Creation:

To create the prototype, I first designed the layout in HTML, organizing sections for navigation, search, results, and favorites. Then, I styled it with CSS to ensure a clean, modern look and added responsiveness. I used simple structure and accessible elements to make it easy to use and visually consistent.

JavaScript was added to handle the date selection form and fetch the Wikimedia Picture of the Day dynamically. When the user chooses a date and submits the form, the script extracts the year, month, and day from the input, then sends a request to the Wikimedia Featured Feed API. After receiving the response, the script updates the image source and description on the page without reloading it.The image can take a few seconds to appear.