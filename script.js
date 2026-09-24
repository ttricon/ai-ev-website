/* =========================================================
   ECODRIVE EV JAVASCRIPT
   ========================================================= */


/* =========================================================
   BOOK TEST DRIVE
   ========================================================= */

function bookTestDrive() {

    alert(
        "Thank you for your interest in EcoDrive EV! " +
        "Our team will contact you to arrange your test drive."
    );

}


/* =========================================================
   FLASK BACKEND
   ========================================================= */

const API_URL =
    "https://ai-ev-website-backend.onrender.com/chat";


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("active");

    });

}


/* =========================================================
   MOBILE DROPDOWN MENUS
   ========================================================= */

const dropdownToggles =
    document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach(toggle => {

    toggle.addEventListener("click", event => {

        const dropdown =
            toggle.closest(".dropdown");

        if (window.innerWidth <= 760) {

            event.preventDefault();

            if (dropdown) {

                dropdown.classList.toggle("open");

            }

        }

    });

});


/* =========================================================
   CLOSE MOBILE NAV WHEN LINK IS CLICKED
   ========================================================= */

document
    .querySelectorAll(".dropdown-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            if (mainNav) {

                mainNav.classList.remove("active");

            }

        });

    });


/* =========================================================
   CHATBOT ELEMENTS
   ========================================================= */

const chatToggle =
    document.getElementById("chatToggle");

const chatWindow =
    document.getElementById("chatWindow");

const chatClose =
    document.getElementById("chatClose");

const chatForm =
    document.getElementById("chatForm");

const chatInput =
    document.getElementById("chatInput");

const chatMessages =
    document.getElementById("chatMessages");


/* =========================================================
   OPEN / CLOSE CHATBOT
   ========================================================= */

if (chatToggle && chatWindow) {

    chatToggle.addEventListener("click", () => {

        chatWindow.classList.toggle("active");

        if (
            chatWindow.classList.contains("active") &&
            chatInput
        ) {

            setTimeout(() => {

                chatInput.focus();

            }, 100);

        }

    });

}


if (chatClose && chatWindow) {

    chatClose.addEventListener("click", () => {

        chatWindow.classList.remove("active");

    });

}


/* =========================================================
   ADD CHAT MESSAGE
   ========================================================= */

function addMessage(message, type) {

    if (!chatMessages) {

        return;

    }

    const messageElement =
        document.createElement("div");

    messageElement.className =
        type === "user"
            ? "user-message"
            : "bot-message";

    messageElement.textContent =
        message;

    chatMessages.appendChild(
        messageElement
    );

    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


/* =========================================================
   LOCAL CHATBOT RESPONSES
   ========================================================= */

function getLocalResponse(message) {

    const text =
        message.toLowerCase().trim();


    /* =====================================================
       GREETINGS
       ===================================================== */

    if (
        text === "hi" ||
        text === "hello" ||
        text === "hey" ||
        text.includes("good morning") ||
        text.includes("good evening")
    ) {

        return "Welcome to EcoDrive Agent Support! How may I help you today?";

    }


    /* =====================================================
       ABOUT ECODRIVE
       ===================================================== */

    if (
        text.includes("what is ecodrive") ||
        text.includes("about ecodrive") ||
        text.includes("tell me about ecodrive") ||
        text === "ecodrive"
    ) {

        return "EcoDrive EV is a futuristic electric mobility platform focused on electric performance, smart technology, connected driving and sustainable mobility.";

    }


    /* =====================================================
       VEHICLE FEATURES
       ===================================================== */

    if (
        text.includes("feature") ||
        text.includes("features") ||
        text.includes("performance") ||
        text.includes("technology") ||
        text.includes("what can the car do")
    ) {

        return "EcoDrive EV features include electric performance, smart dashboard technology, connected services, driver-assistance concepts, regenerative braking and modern EV charging capabilities.";

    }


    /* =====================================================
       MODELS
       ===================================================== */

    if (
        text.includes("model") ||
        text.includes("models") ||
        text.includes("which car") ||
        text.includes("available car") ||
        text.includes("available model") ||
        text.includes("vehicle options")
    ) {

        return "EcoDrive can be presented with different EV models for different customer needs, such as a compact City EV, a premium Electric Sedan and an Electric SUV. Model availability and specifications can vary.";

    }


    /* =====================================================
       CITY EV
       ===================================================== */

    if (
        text.includes("city ev") ||
        text.includes("small ev") ||
        text.includes("compact ev") ||
        text.includes("city car")
    ) {

        return "The EcoDrive City EV is designed as a compact electric vehicle for urban commuting, easy parking and efficient everyday driving.";

    }


    /* =====================================================
       ELECTRIC SUV
       ===================================================== */

    if (
        text.includes("suv") ||
        text.includes("electric suv")
    ) {

        return "The EcoDrive Electric SUV concept is designed for customers looking for additional space, comfort and versatile electric mobility for families and longer journeys.";

    }


    /* =====================================================
       ELECTRIC SEDAN
       ===================================================== */

    if (
        text.includes("sedan") ||
        text.includes("premium car") ||
        text.includes("premium ev") ||
        text.includes("electric sedan")
    ) {

        return "The EcoDrive Electric Sedan concept focuses on premium comfort, smooth electric performance, connected technology and an elegant driving experience.";

    }


    /* =====================================================
       PRICE
       ===================================================== */

    if (
        text.includes("price") ||
        text.includes("pricing") ||
        text.includes("cost") ||
        text.includes("how much") ||
        text.includes("expensive") ||
        text.includes("price of")
    ) {

        return "EcoDrive vehicle pricing depends on the model, battery configuration and selected features. Please contact EcoDrive Agent Support for the latest pricing information.";

    }


    /* =====================================================
       BATTERY
       ===================================================== */

    if (
        text.includes("battery") ||
        text.includes("battery capacity") ||
        text.includes("battery life")
    ) {

        return "EcoDrive EVs use high-voltage lithium-ion battery technology designed to provide efficient performance and dependable everyday driving. Battery capacity varies by model.";

    }


    /* =====================================================
       RANGE
       ===================================================== */

    if (
        text.includes("range") ||
        text.includes("driving range") ||
        text.includes("how far")
    ) {

        return "Driving range depends on the vehicle model, battery configuration, driving conditions and usage. Different EcoDrive models can offer different ranges.";

    }


    /* =====================================================
       HOME CHARGING
       ===================================================== */

    if (
        text.includes("home charging") ||
        text.includes("charge at home") ||
        text.includes("home charger")
    ) {

        return "Home charging provides a convenient way to recharge your EcoDrive EV while it is parked. Many EV owners charge overnight for everyday use.";

    }


    /* =====================================================
       FAST CHARGING
       ===================================================== */

    if (
        text.includes("fast charging") ||
        text.includes("quick charging") ||
        text.includes("dc charging")
    ) {

        return "Fast charging is designed to replenish the EV battery more quickly during journeys. Charging speed depends on the vehicle and charging station specifications.";

    }


    /* =====================================================
       GENERAL CHARGING
       ===================================================== */

    if (
        text.includes("charging") ||
        text.includes("charge") ||
        text.includes("charging station")
    ) {

        return "EcoDrive supports convenient EV charging through home charging and faster public charging options. Charging time varies depending on the charger and vehicle battery.";

    }


    /* =====================================================
       MAINTENANCE / SERVICE
       ===================================================== */

    if (
        text.includes("service") ||
        text.includes("maintenance") ||
        text.includes("servicing") ||
        text.includes("repair")
    ) {

        return "Electric vehicles generally require less routine mechanical maintenance than conventional petrol or diesel vehicles because they have fewer moving parts. EcoDrive service requirements depend on the specific model.";

    }


    /* =====================================================
       WARRANTY
       ===================================================== */

    if (
        text.includes("warranty") ||
        text.includes("guarantee")
    ) {

        return "EcoDrive warranty coverage can vary by vehicle model and component. Please contact EcoDrive Agent Support for the applicable warranty terms.";

    }


    /* =====================================================
       TEST DRIVE
       ===================================================== */

    if (
        text.includes("test drive") ||
        text.includes("test-drive") ||
        text.includes("demo drive") ||
        text.includes("book a drive")
    ) {

        return "You can request an EcoDrive test drive from the Contact page. Select Contact → Book a Test Drive and submit your details.";

    }


    /* =====================================================
       BOOKING
       ===================================================== */

    if (
        text === "book" ||
        text.includes("booking") ||
        text.includes("reserve") ||
        text.includes("reservation")
    ) {

        return "You can submit a test-drive request through the Contact page. Our demonstration website can be used to explore the booking process.";

    }


    /* =====================================================
       CONTACT
       ===================================================== */

    if (
        text.includes("contact") ||
        text.includes("customer care") ||
        text.includes("customer support")
    ) {

        return "For EcoDrive support, visit the Contact page. You can also use Agent Support to ask questions about vehicles, charging, pricing, service and test drives.";

    }


    /* =====================================================
       DEALER / SHOWROOM / LOCATION
       ===================================================== */

    if (
        text.includes("dealer") ||
        text.includes("dealership") ||
        text.includes("showroom") ||
        text.includes("location") ||
        text.includes("where can i buy")
    ) {

        return "EcoDrive dealership and showroom availability depends on the location. Please contact EcoDrive Agent Support for location-specific information.";

    }


    /* =====================================================
       EV VS PETROL
       ===================================================== */

    if (
        text.includes("ev vs petrol") ||
        text.includes("electric vs petrol") ||
        text.includes("petrol vs electric") ||
        text.includes("why electric")
    ) {

        return "Electric vehicles use electric motors and batteries instead of internal-combustion engines. They can provide quiet operation, instant motor response and zero tailpipe emissions while driving.";

    }


    /* =====================================================
       EV BENEFITS
       ===================================================== */

    if (
        text.includes("benefits") ||
        text.includes("advantage") ||
        text.includes("advantages") ||
        text.includes("why ev")
    ) {

        return "Key EV benefits include quiet operation, instant electric motor response, regenerative braking and zero tailpipe emissions during driving.";

    }


    /* =====================================================
       REGENERATIVE BRAKING
       ===================================================== */

    if (
        text.includes("regenerative braking") ||
        text.includes("regen braking") ||
        text.includes("regeneration")
    ) {

        return "Regenerative braking allows the electric motor to help slow the vehicle while recovering some energy and sending it back to the battery.";

    }


    /* =====================================================
       SAFETY
       ===================================================== */

    if (
        text.includes("safety") ||
        text.includes("safe") ||
        text.includes("airbag") ||
        text.includes("driver assistance")
    ) {

        return "EcoDrive focuses on modern EV safety concepts including driver-assistance technologies, smart monitoring and connected vehicle features. Actual safety equipment depends on the vehicle model.";

    }


    /* =====================================================
       SOFTWARE / CONNECTED FEATURES
       ===================================================== */

    if (
        text.includes("app") ||
        text.includes("connected") ||
        text.includes("smart") ||
        text.includes("connectivity")
    ) {

        return "EcoDrive connected technology can provide smart vehicle information, digital services and connected driving features designed to improve the EV ownership experience.";

    }


    /* =====================================================
       ENVIRONMENT
       ===================================================== */

    if (
        text.includes("environment") ||
        text.includes("eco friendly") ||
        text.includes("eco-friendly") ||
        text.includes("sustainable") ||
        text.includes("green")
    ) {

        return "Electric vehicles can help reduce tailpipe emissions because they do not produce exhaust emissions while driving. Their overall environmental impact also depends on electricity generation and battery production.";

    }


    /* =====================================================
       HELP
       ===================================================== */

    if (
        text === "help" ||
        text.includes("what can you do") ||
        text.includes("what can i ask")
    ) {

        return "I can help with EcoDrive models, features, pricing, battery, range, charging, service, warranty, safety, test drives, booking, dealerships and general EV information.";

    }


    /* =====================================================
       THANK YOU
       ===================================================== */

    if (
        text.includes("thank you") ||
        text.includes("thanks")
    ) {

        return "You're welcome! I'm happy to help with EcoDrive EV.";

    }


    /* =====================================================
       NO LOCAL MATCH
       ===================================================== */

    return null;

}


/* =========================================================
   ASK FLASK BACKEND
   ========================================================= */

async function getBackendResponse(message) {


    /* =====================================================
       FIRST CHECK LOCAL PREDEFINED RESPONSES
       ===================================================== */

    const localResponse =
        getLocalResponse(message);

    if (localResponse) {

        return localResponse;

    }


    /* =====================================================
       IF NO LOCAL MATCH, ASK FLASK
       ===================================================== */

    try {

        const response =
            await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    message: message
                })

            });


        if (!response.ok) {

            throw new Error(
                "Backend request failed: " +
                response.status
            );

        }


        const data =
            await response.json();


        if (data.response) {

            return data.response;

        }


        return getDefaultResponse();

    }


    catch (error) {

        console.warn(
            "EcoDrive backend unavailable:",
            error
        );

        return getDefaultResponse();

    }

}


/* =========================================================
   DEFAULT RESPONSE
   ========================================================= */

function getDefaultResponse() {

    return "I can help with EcoDrive models, features, pricing, battery, range, charging, service, warranty, safety, test drives and general EV information. Please try asking about one of these topics.";

}


/* =========================================================
   SEND CHAT MESSAGE
   ========================================================= */

async function sendChatMessage(message) {

    if (
        !message ||
        !message.trim()
    ) {

        return;

    }


    addMessage(
        message,
        "user"
    );


    const typingElement =
        document.createElement("div");


    typingElement.className =
        "bot-message";


    typingElement.textContent =
        "EcoDrive Agent is responding...";


    if (chatMessages) {

        chatMessages.appendChild(
            typingElement
        );

        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    }


    const response =
        await getBackendResponse(message);


    if (typingElement) {

        typingElement.remove();

    }


    addMessage(
        response,
        "bot"
    );

}


/* =========================================================
   CHAT FORM
   ========================================================= */

if (chatForm) {

    chatForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const message =
                chatInput
                    ? chatInput.value.trim()
                    : "";


            if (!message) {

                return;

            }


            if (chatInput) {

                chatInput.value = "";

            }


            await sendChatMessage(
                message
            );

        }
    );

}


/* =========================================================
   QUICK CHAT OPTIONS
   ========================================================= */

const quickOptions =
    document.querySelectorAll(
        ".quick-options button"
    );


quickOptions.forEach(button => {

    button.addEventListener(
        "click",
        async () => {

            const question =
                button.dataset.question;


            if (question) {

                await sendChatMessage(
                    question
                );

            }

        }
    );

});


/* =========================================================
   TEST DRIVE FORM
   ========================================================= */

const testDriveForm =
    document.getElementById(
        "testDriveForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


if (testDriveForm) {

    testDriveForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            if (formMessage) {

                formMessage.textContent =
                    "Demo request submitted successfully. This educational form does not send data to a live customer system.";

            }


            testDriveForm.reset();

        }
    );

} 