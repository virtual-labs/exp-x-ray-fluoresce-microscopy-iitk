
function textToSpeech(text, lang) {
  // Check if the SpeechSynthesis API is available in the browser
  if ("speechSynthesis" in window) {
    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance();

    // Set the text to be spoken
    utterance.text = text;

    // Set the language
    if (lang) {
      utterance.lang = lang;
    }

    // Start the speech synthesis
    window.speechSynthesis.speak(utterance);
  } else {
    console.error("Speech synthesis is not supported in this browser.");
  }
}
let english = true;
  

function hindiVoice(btn) {
  english = false;
  // start();
  document.getElementById("dialogue-box-parent").style.display = 'none';
  if (english) {
    type("Welcome to XRF Virtual lab . Get started by switching on the machine. ");
    textToSpeech("Welcome to XRF Virtual lab . Get started by switching on the machine.");
  } else {
    type("एक्सआरएफ वर्चुअल लैब में आपका स्वागत है। मशीन चालू करके काम शुरू करें");
    textToSpeech("एक्सआरएफ वर्चुअल लैब में आपका स्वागत है। मशीन चालू करके काम शुरू करें", "hi-IN");
  }
}

function englishVoice(btn) {
  english = true;
  // start();

  document.getElementById("dialogue-box-parent").style.display = 'none';
  if (english) {
    type("Welcome to XRF Virtual lab . Get started by switching on the machine. ");
    textToSpeech("Welcome to XRF Virtual lab . Get started by switching on the machine.");
  } else {
    type("एक्सआरएफ वर्चुअल लैब में आपका स्वागत है। मशीन चालू करके काम शुरू करें.");
    textToSpeech("एक्सआरएफ वर्चुअल लैब में आपका स्वागत है। मशीन चालू करके काम शुरू करें.", "hi-IN");
  }
}
var text;
const typeSpeed = 60;
var timerId;
var typeTarget = document.getElementById("typer"),
tWrapper = document.getElementById("toast-wrapper"),
ti = 0,
currentStep = 0,
contrast = 0,
brightness = 0,
vac = 0,
av = 0,
on = false,
dropped = false,
imgs = [],
mode = 1,
removeButtonclicked = false,
inp = 0;

function type(txt, cur = 0) {
  if (cur == txt.length) {
    timerId = -1;
    return;
  }
  if (cur === 0) {
    typeTarget.innerHTML = "";
    clearTimeout(timerId);
  }
  typeTarget.innerHTML += txt.charAt(cur);
  timerId = setTimeout(type, typeSpeed, txt, cur + 1);
}


document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const startButton = document.getElementById("start-button");
    const stopButton = document.getElementById("stop-button");
    const simulateStartButton = document.getElementById("simulate-start");
    const simulateStopButton = document.getElementById("simulate-stop");
    const doorOpenButton = document.getElementById("door-open");
    const doorCloseButton = document.getElementById("door-close");
    const statusText = document.getElementById("status");
    const sampleload = document.getElementById("sampleload");
    const voltageslider = document.getElementById("voltage-slider");
    const sampleSelect = document.getElementById("sample");
    const integrationTimeInput = document.getElementById("integration-time");
    const simulatedData = document.getElementById("simulated-data");
    const  startscanbutton = document.getElementById("start-scan-button");
   








    startButton.addEventListener("click", function () {
      if (english) {
        type("Machine started. Now please selectsample");
        textToSpeech("Machine started Now please selectsample");
      } else {
        type("मशीन चालू हो गई. अब कृपया नमूना चुनें");
        textToSpeech("मशीन चालू हो गई. अब कृपया नमूना चुनें", "hi-IN");
      }

    });

    

    sampleSelect.addEventListener("change", function () {
      const selectedSample = sampleSelect.value;
      console.log("Selected Sample: " + selectedSample)
      // if (english) {
      //   type("Sample is selected .Now please load sample");
      //   textToSpeech("Sample is selected .Now please load sample ");
      // } else {
      //   type("नमूना चयनित है। अब कृपया सिमुलेशन गति चुनें");
      //   textToSpeech("नमूना चयनित है। अब कृपया सिमुलेशन गति चुनें", "hi-IN");
      // }
    
  if (english) {
    type(`Sample "${selectedSample}" is selected. Now please load the sample.`);
    textToSpeech(`Sample "${selectedSample}" is selected. Now please load the sample.`);
  } else {
    type(`नमूना "${selectedSample}" चयनित है। अब कृपया नमूना लोड करें।`);
    textToSpeech(`नमूना "${selectedSample}" चयनित है। अब कृपया नमूना लोड करें।`, "hi-IN");
  }

      

    sampleload.addEventListener("click", function () {
     
      if (english) {
        type("Sample loading process done . Now please select voltage by  sliding voltageslider ");
        textToSpeech("Sample loading process done . Now please select voltage by  sliding voltageslider");
      } else {
        type("नमूना लोड करने की प्रक्रिया पूरी हो गई। अब कृपया स्लाइडिंग वोल्टेजस्लाइडर द्वारा वोल्टेज का चयन करें");
        textToSpeech("नमूना लोड करने की प्रक्रिया पूरी हो गई। अब कृपया स्लाइडिंग वोल्टेजस्लाइडर द्वारा वोल्टेज का चयन करें", "hi-IN");
      }

    });

// Get the slider and value elements
var voltageSlider = document.getElementById("voltage-slider");
var voltageValue = document.getElementById("voltage-value");

// Add an event listener to update the value display when the slider is moved
voltageSlider.addEventListener("input", function () {
    var value = voltageSlider.value;
    voltageValue.textContent = value + " kV";

    if (english) {
        type(`Voltage selected: ${value} kV. Now please select integration time.`);
        textToSpeech(`Voltage selected: ${value} kilovolts. Now please select integration time.`);
    } else {
        type(`वोल्टेज चयनित: ${value} किलोवोल्ट। अब कृपया एकीकरण समय चयन करें।`);
        textToSpeech(`वोल्टेज चयनित: ${value} किलोवोल्ट। अब कृपया एकीकरण समय चयन करें।`, "hi-IN");
    }

    // Additional actions related to voltage selection can be added here
});

    });



    // integrationTimeInput.addEventListener("change", function () {
    //   const integrationTime = integrationTimeInput.value;
    //   console.log("Integration Time (s): " + integrationTime);
    //   if (english) {
    //     type("Integration time selected. Now please start simulation");
    //     textToSpeech("Integration time selected Now please start simulation");
    //   } else {
    //     type("एकीकरण समय चयनित. अब कृपया सिमुलेशन प्रक्रिया शुरू करें");
    //     textToSpeech("एकीकरण समय चयनित. अब कृपया सिमुलेशन प्रक्रिया शुरू करें", "hi-IN");
    //   }
    // });

// Get the integration time input element
// var integrationTimeInput = document.getElementById("integration-time");

// Add an event listener to update the instructions when the integration time changes
integrationTimeInput.addEventListener("change", function () {
    var integrationTime = integrationTimeInput.value;

    if (english) {
        type(`Integration time selected: ${integrationTime} seconds. Now please start the simulation.`);
        textToSpeech(`Integration time selected: ${integrationTime} seconds. Now please start the simulation.`);
    } else {
        type(`एकीकरण समय चयनित: ${integrationTime} सेकंड्स। अब कृपया सिमुलेशन शुरू करें।`);
        textToSpeech(`एकीकरण समय चयनित: ${integrationTime} सेकंड्स। अब कृपया सिमुलेशन शुरू करें।`, "hi-IN");
    }

    // Additional actions related to integration time selection can be added here
});


    simulateStartButton.addEventListener("click", function () {
     
      if (english) {
        type("Simulation process started . Now please stop simulation");
        textToSpeech("Simulation process started  Now please stop simulation");
      } else {
        type("सिमुलेशन प्रक्रिया शुरू हुई. अब कृपया सिमुलेशन प्रक्रिया बंद करें");
        textToSpeech("सिमुलेशन प्रक्रिया शुरू हुई. अब कृपया सिमुलेशन प्रक्रिया बंद करें", "hi-IN");
      }
    });
    
    simulateStopButton.addEventListener("click", function () {
      if (english) {
        type("Simulation process stopped . Now please start scaning");
        textToSpeech("Simulation process stopped  Now please start scaning");
      } else {
        type("सिमुलेशन प्रक्रिया रुक गई. अब कृपया स्कैनिंग शुरू करें");
        textToSpeech("सिमुलेशन प्रक्रिया रुक गई. अब कृपया स्कैनिंग शुरू करें", "hi-IN");
      }
    });
  // Assuming you have a button element with the ID "start-scan-button" and statusText and english variables

document.getElementById("start-scan-button").addEventListener("click", function () {

  if (english) {
      type("Scanning process started. Now please stop machine");
      textToSpeech("Scanning process started Now please stop machine");
  } else {
      type("स्कैनिंग प्रक्रिया शुरू हुई. अब कृपया मशीन बंद करें");
      textToSpeech("स्कैनिंग प्रक्रिया शुरू हुई. अब कृपया मशीन बंद करें", "hi-IN");
  }
});
stopButton.addEventListener("click", function () {
  if (english) {
    type("Machine has stopped");
    textToSpeech("Machine has stopped");
} else {
    type("मशीन बंद हो गई है");
    textToSpeech("मशीन बंद हो गई है", "hi-IN");
}
});


    // Display simulated data
    simulatedData.textContent = "Simulated XRF data goes here";
  
    // You can add more JavaScript functionality as needed
  });





  document.getElementById("start-scan-button").addEventListener("click", function() {
    // Show the XRF graph image in Box 3
    document.getElementById("xrf-image-container").style.display = "block";
});
  




// Get references to the video and the Simulate Start/Stop buttons
const video = document.querySelector('video');
const simulateStartButton = document.getElementById('simulate-start');
const simulateStopButton = document.getElementById('simulate-stop');

// Hide video controls
video.controls = false;

// Add an event listener to the Simulate Start button
simulateStartButton.addEventListener('click', function() {
    video.play(); // Start playing the video
});

// Add an event listener to the Simulate Stop button
simulateStopButton.addEventListener('click', function() {
    video.pause(); // Pause the video
});




document.addEventListener('DOMContentLoaded', function () {
  // Get the element with id 'box3'
  var box3 = document.getElementById('box3');

  // Display message inside the third box
  if (box3) {
      // Create a new <p> element
      var messageElement = document.createElement('p');

      // Set the content of the element
      messageElement.textContent = "Please follow the instructions carefully. Handle with care.";

      // Append the element to the third box
      box3.appendChild(messageElement);
  }
});

function saveDiagram() {
  var imgElement = document.getElementById('xrf-image');
  
  if (imgElement && imgElement.complete) {
      // Create a temporary canvas
      var canvas = document.createElement('canvas');
      canvas.width = imgElement.width;
      canvas.height = imgElement.height;
      var ctx = canvas.getContext('2d');

      // Draw the image onto the canvas
      ctx.drawImage(imgElement, 0, 0, imgElement.width, imgElement.height);

      // Create a data URL from the canvas
      var dataURL = canvas.toDataURL('image/png');

      // Create a download link
      var downloadLink = document.createElement('a');
      downloadLink.href = dataURL;
      downloadLink.download = 'xrf_diagram.png';

      // Trigger a click on the link to start the download
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
  } else {
      console.error('Image not loaded or not found. Please wait for the image to load.');
  }
}


    // Get the slider and value elements
    var voltageSlider = document.getElementById("voltage-slider");
    var voltageValue = document.getElementById("voltage-value");

    // Add an event listener to update the value display when the slider is moved
    voltageSlider.addEventListener("input", function() {
        var value = voltageSlider.value;
        voltageValue.textContent = value + " kV";
    });
