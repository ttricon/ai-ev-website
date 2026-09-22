/* =========================================================
   ECODRIVE EV JAVASCRIPT
   ========================================================= */


/*
   IMPORTANT FOR GLOBAL DEPLOYMENT

   When the Flask backend is deployed, replace the value below
   with the actual HTTPS address of your Flask backend.

   Example:

   const API_URL = "https://your-flask-backend.example.com/chat";

   Until then, the built-in fallback chatbot will work locally.
*/

const API_URL = window.ECODRIVE_API_URL || "";


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

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

            dropdown.classList.toggle("open");

        }

    });

});


/* =========================================================
   CLOSE MOBILE NAV WHEN LINK IS CLICKED
   ========================================================= */

document.querySelectorAll(".dropdown-menu a").forEach(link => {

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

        if (chatWindow.classList.contains("active") &&
            chatInput) {

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

    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}


/* =========================================================
   FALLBACK CHATBOT
   ========================================================= */

function getLocalResponse(message) {

    const text =
        message.toLowerCase().trim();


    if (
        text.includes("hi") ||
        text.includes("hello") ||
        text.includes("hey")
    ) {

        return "Welcome to EcoDrive Agent Support! How may I help you?";

    }


    if (
        text.includes("ecodrive") ||
        text.includes("about")
    ) {

        return "EcoDrive EV is a futuristic electric mobility demonstration focused on electric performance, smart technology and connected driving.";

    }


    if (
        text.includes("feature") ||
        text.includes("performance") ||
        text.includes("technology")
    ) {

        return "EcoDrive features include electric performance, smart dashboard concepts, connected services and driver-assistance concepts.";

    }


    if (
        text.includes("charging") ||
        text.includes("charge")
    ) {

        return "EcoDrive demonstrates two charging concepts: convenient home charging and faster public charging for longer journeys.";

    }


    if (
        text.includes("home charging")
    ) {

        return "Home charging can provide a convenient way to replenish an EV while it is parked, including overnight charging.";

    }


    if (
        text.includes("fast charging")
    ) {

        return "Fast charging is designed to replenish EV energy more quickly during journeys and busy schedules.";

    }


    if (
        text.includes("test drive") ||
        text.includes("demo") ||
        text.includes("drive")
    ) {

        return "You can request a test-drive demonstration from the Contact page. Select Contact → Book a Test Drive.";

    }


    if (
        text.includes("contact") ||
        text.includes("support")
    ) {

        return "Visit the Contact page for the test-drive request form and EcoDrive Agent Support.";

    }


    if (
        text.includes("help")
    ) {

        return "I can help with EcoDrive, Features, Charging, Test Drive and Contact information. Try asking: 'What features does EcoDrive have?'";

    }


    return "I can help with EcoDrive, Features, Charging, Test Drive and Contact. Please try one of those topics.";


}


/* =========================================================
   ASK FLASK BACKEND
   ========================================================= */

async function getBackendResponse(message) {

    if (!API_URL) {

        return getLocalResponse(message);

    }


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
                "Backend request failed."
            );

        }


        const data =
            await response.json();


        if (data.response) {

            return data.response;

        }


        return getLocalResponse(message);


    } catch (error) {

        console.warn(
            "EcoDrive backend unavailable:",
            error
        );


        return getLocalResponse(message);

    }

}


/* =========================================================
   SEND CHAT MESSAGE
   ========================================================= */

async function sendChatMessage(message) {

    if (!message || !message.trim()) {
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
                chatInput.value.trim();

            if (!message) {
                return;
            }


            chatInput.value = "";


            await sendChatMessage(message);

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

            await sendChatMessage(
                question
            );

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