from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)


# Allow requests from the GitHub Pages frontend.
# This is suitable for an educational demonstration.
CORS(app)


def get_chatbot_response(message):

    text = message.lower().strip()


    # Greeting
    if any(word in text for word in [
        "hi",
        "hello",
        "hey"
    ]):

        return (
            "Welcome to EcoDrive Agent Support! "
            "How may I help you?"
        )


    # EcoDrive
    if (
        "ecodrive" in text
        or "about" in text
    ):

        return (
            "EcoDrive EV is a futuristic electric mobility "
            "demonstration focused on electric performance, "
            "smart technology and connected driving."
        )


    # Features
    if any(word in text for word in [
        "feature",
        "performance",
        "technology"
    ]):

        return (
            "EcoDrive features include electric performance, "
            "smart dashboard concepts, connected services "
            "and driver-assistance concepts."
        )


    # Charging
    if any(word in text for word in [
        "charging",
        "charge"
    ]):

        return (
            "EcoDrive demonstrates two charging concepts: "
            "convenient home charging and faster public "
            "charging for longer journeys."
        )


    # Home charging
    if "home charging" in text:

        return (
            "Home charging can provide a convenient way "
            "to replenish an EV while it is parked, "
            "including overnight charging."
        )


    # Fast charging
    if "fast charging" in text:

        return (
            "Fast charging is designed to replenish EV "
            "energy more quickly during journeys and "
            "busy schedules."
        )


    # Test drive
    if any(word in text for word in [
        "test drive",
        "demo",
        "drive"
    ]):

        return (
            "You can request a test-drive demonstration "
            "from the EcoDrive Contact page."
        )


    # Contact
    if any(word in text for word in [
        "contact",
        "support"
    ]):

        return (
            "Visit the Contact page for the test-drive "
            "request form and EcoDrive Agent Support."
        )


    # Help
    if "help" in text:

        return (
            "I can help with EcoDrive, Features, Charging, "
            "Test Drive and Contact information. "
            "Try asking: What features does EcoDrive have?"
        )


    # Default
    return (
        "I can help with EcoDrive, Features, Charging, "
        "Test Drive and Contact. Please try one of those topics."
    )


@app.route("/", methods=["GET"])
def home():

    return jsonify({
        "status": "online",
        "service": "EcoDrive EV Agent Support"
    })


@app.route("/health", methods=["GET"])
def health():

    return jsonify({
        "status": "healthy"
    })


@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json(
        silent=True
    )


    if not data:

        return jsonify({
            "response": "Please send a message."
        }), 400


    message = data.get(
        "message",
        ""
    )


    if not isinstance(message, str):

        return jsonify({
            "response": "Please send a valid text message."
        }), 400


    message = message.strip()


    if not message:

        return jsonify({
            "response": "Please enter a message."
        }), 400


    response = get_chatbot_response(
        message
    )


    return jsonify({
        "response": response
    })


if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )