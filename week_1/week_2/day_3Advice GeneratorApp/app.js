const adviceId = document.getElementById("advice-id");
const adviceTxt = document.getElementById("advice-content");
const adviceBtn = document.getElementById("generate-btn");
const spinner = document.getElementById("spinner");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
    spinner.style.display = "block";
    adviceTxt.style.display = "none";
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Failed to fetch advice");
        }
        const {
            slip: {
                id,
                advice
            }
        } = await res.json();
        adviceId.innerText = id;
        adviceTxt.innerText = advice;
    } catch (error) {
        adviceTxt.innerText = "Error fetching advice. Please try again.";
        console.error(error);
    } finally {
        spinner.style.display = "none";
        adviceTxt.style.display = "inline";
    }
}

adviceBtn.addEventListener("click", getAdvice);
getAdvice();